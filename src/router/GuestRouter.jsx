import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Landing from '../components/Landing'
import Signup from "../components/Signup";
import Signin from '../components/Signin';
import Templates from '../components/Templates';
import AboutUs from '../pages/AbountUs';
import ContactUs from '../pages/ContactUs';
import MakeBiodata from '../pages/MakeBiodata';
import Review from '../pages/Review';
import Faq from '../pages/Faq';

const GuestRouter = () => {
    // console.log("I am in guest layout")
    return (
    <>
     
        <Routes>
            <Route index element={<Landing />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/landing' element={<Landing/>} />
            <Route path='/guest-templates' element={<Templates/>} />
            <Route path='/contact-us' element={<ContactUs/>} />
            <Route path="/make-biodata" element={<MakeBiodata/>}/>
            <Route path="/formbiodata" element={<Signin/>}/>
            <Route path="/template-1" element={<Signin/>}/>
            <Route path="/template-2" element={<Signin/>}/>
            <Route path="/template-3" element={<Signin/>}/>
            <Route path="/template-4" element={<Signin/>}/>
            <Route path='/review' element={<Review/>}/>
            <Route path='/frequently-asked-question' element={<Faq/>}/>
            
        </Routes> 
    </>
  )
}

export default GuestRouter
