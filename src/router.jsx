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
import FormikTanstack from "./pages/FormikTanstack";
import DataPreview from "./pages/DataPreview";
import Profile from "./pages/Profile";
import MakeBiodata from "./pages/MakeBiodata";
// import BctIot from "./pages/BctIot";

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
            {
                path:"formiktanstack",
                element:<FormikTanstack/>
            },
            {
                path:"datapreview",
                element:<DataPreview/>
            },
            {
                path:"profile",
                element:<Profile/>
            },
            {
                path:"make-biodata",
                element:<MakeBiodata/>
            }
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
])

export default router