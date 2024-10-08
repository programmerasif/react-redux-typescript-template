import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../components/layouts/MainLayout'
import Home from "../page/Home/Home";

const routs = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
        ]
    },
    // // Universal 404 Route
    // {
    //     path: '*',
    //     element: <NotFoundPage /> 
    // }
]);

export default routs;