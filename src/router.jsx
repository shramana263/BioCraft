import { Navigate, createBrowserRouter } from "react-router-dom";
// import App from "./App";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import Templates from "./components/Templates";
import Landing from "./components/Landing";
import Signin from "./components/Signin";
import NotFound from "./pages/NotFound";
import FormBiodata from "./pages/FormBiodata";
import Signup from "./components/Signup";
import BctIot from "./pages/BctIot";

const router= createBrowserRouter([
    {
        path:"/",
        element:<AuthLayout/>,
        children:[
            {
                path:"",
                element:<Landing/>
            },
            // {
            //     path:"home",
            //     element:<Landing/>
            // },
            {
                path:"templates",
                element:<Templates/>
            },
            {
                path:"formbiodata",
                element:<FormBiodata/>
            },
        ]
    },
    {
        path:"/",
        element:<GuestLayout/>,
        children:[
            {
                path:"landing",
                element:<Landing/>
            },
            {
                path:"signin",
                element:<Signin/>
            },
            {
                path:"signup",
                element:<Signup/>
            }
            
        ],
    },
    {
        path:"*",
        element:<NotFound/>
    },
    {
        path:"/bctdashboard",
        element:<BctIot/>
    }
])

export default router