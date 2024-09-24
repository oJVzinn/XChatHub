import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import NotFound from "./pages/NotFound";
import Login from "./pages/login";
import LoginBody from "./pages/login/components/LoginBody";
import Register from "./pages/register";

function AppRouters() {
    return (
        <RouterProvider router={createBrowserRouter([
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/chat/:id",
                element: <Chat/>,
                loader: ({params}) => {
                    return "teste + " + params.id;
                },
            },
            {
                path: "*",
                element: <NotFound/>,
            },

            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/register",
                element: <Register/>,
            }
        ])}/>
    );
}

export default AppRouters