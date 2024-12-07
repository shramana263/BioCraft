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
import Template1 from "./components/outputTemplate/Template1";
import Template2 from "./components/outputTemplate/Template2";
import Template3 from "./components/outputTemplate/Template3";
import Template4 from "./components/outputTemplate/Template4";
import ProfileImageUpdate from "./pages/update/ProfileImageUpdate";
import AboutUs from "./pages/AbountUs";
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
            },
            {
                path:"template-1",
                element:<Template1/>
            },
            {
                path:"template-2",
                element:<Template2/>
            },
            {
                path:"template-3",
                element:<Template3/>
            },
            {
                path:"template-4",
                element:<Template4/>
            },
            {
                path:"update-profile-image",
                element:<ProfileImageUpdate/>
            },
            {
                path:"/about-us",
                element:<AboutUs/>
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
            },
            {
                path:"/about-us",
                element:<AboutUs/>
            },
            {
                path:"/guest-templates",
                element:<Templates/>
            },
            
        ],
    },
    {
        path:"*",
        element:<NotFound/>
    },
    
])

export default router