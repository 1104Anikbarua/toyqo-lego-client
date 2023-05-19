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
                element: <MyToy></MyToy>
            },
            {
                path: 'addtoy',
                element: <AddToy></AddToy>
            },
            {
                path: 'toy/:id',
                element: <ToyDetails></ToyDetails>
            },
            {
                path: 'update/:id',
                element: <UpdateToy></UpdateToy>,
                // loader: ({ params }) => {
                //     console.log(params)
                //     return fetch(`http://localhost:5000/update/${params?.id}`)
                // }
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>,
            }
        ]
    }
])

export default router;