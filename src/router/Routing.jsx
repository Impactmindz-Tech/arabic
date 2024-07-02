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
import AddProduct from "../page/dashboard/addproduct/AddProduct";
import FormLayoutProvider from "../layout/FormLayoutProvider";
import EditProduct from "../page/dashboard/EditProduct/EditProduct";
import ContactUs from "../page/dashboard/contact us/ContactUs";
import EditProfile from "../page/dashboard/editProfile/EditProfile";
import MyProduct from "../page/dashboard/my product/MyProduct";
import DetailsMyProduct from "../page/dashboard/details my product/DetailsMyProduct";
import Favorite from "../page/dashboard/Favourite/Favorite";
import Profile from "../page/dashboard/Profile/Profile";
import CoinPage from "../page/dashboard/coins/CoinPage";
import WalletPage from "../page/dashboard/wallet/WalletPage";
import AddressPage from "../page/dashboard/address/AddressPage";

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
            {
                path: "add_product",
                element:<FormLayoutProvider><AddProduct /></FormLayoutProvider>,
            },
            {
                path: "edit_product",
                element:<FormLayoutProvider><EditProduct /></FormLayoutProvider>,
            },
            {
                path: "contact_us",
                element:<FormLayoutProvider><ContactUs /></FormLayoutProvider>,
            },
            {
                path: "edit_profile",
                element:<FormLayoutProvider><EditProfile /></FormLayoutProvider>,
            },
            {
                path: "my_product",
                element:<FormLayoutProvider><MyProduct /></FormLayoutProvider>,
            },
            {
                path: "detail_my_product",
                element:<FormLayoutProvider><DetailsMyProduct /></FormLayoutProvider>,
            },
            {
                path: "favorite",
                element:<FormLayoutProvider><Favorite /></FormLayoutProvider>,
            },
            {
                path: "profile",
                element:<FormLayoutProvider><Profile /></FormLayoutProvider>,
            },
            {
                path: "coins",
                element:<FormLayoutProvider><CoinPage /></FormLayoutProvider>,
            },
            {
                path: "wallet",
                element:<FormLayoutProvider><WalletPage /></FormLayoutProvider>,
            },
            {
                path: "address",
                element:<FormLayoutProvider><AddressPage /></FormLayoutProvider>,
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