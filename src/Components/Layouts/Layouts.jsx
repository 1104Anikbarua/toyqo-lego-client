import { createBrowserRouter } from "react-router-dom";
import Main from "../Main.jsx/Main";
import Common from "../Pages/Common/Common";
import Register from "../Shared/Authentication/Register/Register";
import Login from "../Shared/Authentication/Login/Login";
import NotFound from "../NotFound/NotFound";

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