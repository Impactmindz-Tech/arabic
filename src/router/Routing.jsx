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
import CompleteOrder from "../page/dashboard/complete_order/CompleteOrder";
import CategoryPage from "../page/dashboard/category/CategoryPage";
import ProductPage from "../page/dashboard/product/ProductPage";
import OrderPage from "../page/dashboard/orders/OrderPage";
import ForesterPage from "../page/dashboard/forester/ForesterPage";
import VendorsPage from "../page/dashboard/Vendors/VendorsPage";
import DetailsCompleteOrder from "../page/dashboard/Details complete Order/DetailsCompleteOrder";
import DetailsPreviousOrder from "../page/dashboard/Details Previous Order/DetailsPreviousOrder";
import DetailsProduct from "../page/dashboard/Details Product/DetailsProductPage";
import VendorProfilePage from "../page/dashboard/Vendor Profile/VendorProfilePage";
import AdsPage from "../page/dashboard/ads/AdsPage";

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
            {
                path: "complete_order",
                element:<FormLayoutProvider><CompleteOrder /></FormLayoutProvider>,
            },
            {
                path: "category",
                element:<FormLayoutProvider><CategoryPage /></FormLayoutProvider>,
            },
            {
                path: "product",
                element:<FormLayoutProvider><ProductPage /></FormLayoutProvider>,
            },
            {
                path: "orders",
                element:<FormLayoutProvider><OrderPage /></FormLayoutProvider>,
            },
            {
                path: "forester",
                element:<FormLayoutProvider><ForesterPage /></FormLayoutProvider>,
            },
            {
                path: "vendors",
                element:<FormLayoutProvider><VendorsPage /></FormLayoutProvider>,
            },
            {
                path: "details_complete_order",
                element:<FormLayoutProvider><DetailsCompleteOrder /></FormLayoutProvider>,
            },
            {
                path: "details_previous_order",
                element:<FormLayoutProvider><DetailsPreviousOrder /></FormLayoutProvider>,
            }
            ,
            {
                path: "details_product",
                element:<FormLayoutProvider><DetailsProduct /></FormLayoutProvider>,
            }
            ,{
                path: "vendor_profile",
                element:<FormLayoutProvider><VendorProfilePage /></FormLayoutProvider>,
            }
            ,{
                path: "ads",
                element:<FormLayoutProvider><AdsPage /></FormLayoutProvider>,
            }
        ],
    },

    
]);

export default router;