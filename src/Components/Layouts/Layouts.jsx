import { createBrowserRouter } from "react-router-dom";
import Main from "../Main.jsx/Main";
import Common from "../Pages/Common/Common";
import Register from "../Shared/Authentication/Register/Register";
import Login from "../Shared/Authentication/Login/Login";
import NotFound from "../NotFound/NotFound";
import MyToy from "../Pages/MyToy/MyToy";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToy/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import RequireAuth from "../Shared/Authentication/RequireAuth/RequireAuth";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/AboutUs/AboutUs";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
import PaymentMethod from "../Pages/PaymentMethod/PaymentMethod";
import UpdateProfile from "../Shared/Authentication/UpdateProfile/UpdateProfile";
import DashBoard from "../Dashboard/DashBoard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Common></Common>
            },
            {
                path: 'alltoy',
                element: <AllToys></AllToys>,
            },
            {
                path: 'mytoy',
                element: <RequireAuth>
                    <MyToy></MyToy>
                </RequireAuth>
            },
            {
                path: 'addtoy',
                element: <RequireAuth>
                    <AddToy></AddToy>
                </RequireAuth>

            },
            {
                path: 'toy/:id',
                element: <RequireAuth>
                    <ToyDetails></ToyDetails>,
                </RequireAuth>,
                loader: ({ params }) => {
                    // console.log(params)
                    return fetch(`https://batch-7-assignment-11-server.vercel.app/legos/${params?.id}`)

                }
            },
            {
                path: 'update/:id',
                element: <UpdateToy></UpdateToy>,
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: 'about',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: 'payment',
                element: <PaymentMethod></PaymentMethod>
            }

        ]
    },
    {
        path: 'cart',
        element: <DashBoard></DashBoard>
    }
])

export default router;