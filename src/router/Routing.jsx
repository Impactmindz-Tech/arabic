import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../page/auth/Login";
import AuthLayout from "../layout/AuthLayout";
import SignUp from "../page/auth/SignUp";
import ForgetPassword from "../page/auth/ForgetPassword";
import VerifyOtp from "../page/auth/VerifyOtp";
import Dashboard from "../page/dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";

// const Root = () => {
//     const navigate = useNavigate();
//     const isAuthenticated = getLocalStorage("token");
//     useEffect(() => {
//         if (isAuthenticated) {
//             navigate("/admin/dashboard");
//         } else {
//             navigate("/auth/login");
//         }
//     }, [isAuthenticated, navigate]);
// };

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout><Login /></AuthLayout>,
    },
    {
        path: "/signup",
        element: <AuthLayout><SignUp /></AuthLayout>,
    },
    {
        path: "/forgetpassword",
        element: <AuthLayout><ForgetPassword /></AuthLayout>,
    },
    {
        path: "/verify_otp",
        element: <AuthLayout><VerifyOtp /></AuthLayout>,
    },
    {
        path: "/dashboard",
        // element: <AuthLayout><VerifyOtp /></AuthLayout>,
        children: [
            {
                path: "home",
                element:<DashboardLayout><Dashboard /></DashboardLayout>,
            },
        ],
    },

    // {
    //     path: "/auth",
    //     element: <AuthProteced />,
    //     children: [
    //         {
    //             path: "login",
    //             element: (
    //                 <AuthLayout>
    //                     <Login />
    //                 </AuthLayout>
    //             ),
    //         },
    //     ],
    // },
    // {
    //     path: "/admin",
    //     element: <DashboardProtected />,
    //     children: [
    //         {
    //             path: "dashboard",
    //             element: (
    //                 <DashboardLayout>
    //                     <Dashboard />
    //                 </DashboardLayout>
    //             ),
    //         },
    //         {
    //             path: "adminmanagement",
    //             element: (
    //                 <DashboardLayout>
    //                     <AdminManagement />
    //                 </DashboardLayout>
    //             ),
    //         },
    //         {
    //             path: "groupmanagement",
    //             element: (
    //                 <DashboardLayout>
    //                     <GroupManagement />
    //                 </DashboardLayout>
    //             ),
    //         },
    //         {
    //             path: "calendar",
    //             element: (
    //                 <DashboardLayout>
    //                     <Calendar />
    //                 </DashboardLayout>
    //             ),
    //         },
    //         {
    //             path: "settings",
    //             element: (
    //                 <DashboardLayout>
    //                     <SystemSetting />
    //                 </DashboardLayout>
    //             ),
    //         },
    //     ],
    // },
]);

export default router;