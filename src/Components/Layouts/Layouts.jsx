import { createBrowserRouter } from "react-router-dom";
import Main from "../Main.jsx/Main";
import Common from "../Pages/Common/Common";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Common></Common>
            }
        ]
    }
])

export default router;