
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ApplyNow from "../../Pages/Home/JobsCard/ApplyNow";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import ViewDetailsAboutFreshersJob from "../../Pages/viewDetailsAboutFreshersJob/ViewDetailsAboutFreshersJob";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/viewdetailsaboutfreshersjob',
                element: <PrivateRoute><ViewDetailsAboutFreshersJob></ViewDetailsAboutFreshersJob></PrivateRoute>
            },
            {
                path: 'applynow',
                element: <PrivateRoute><ApplyNow></ApplyNow></PrivateRoute>
            }
        ]
    }
]);