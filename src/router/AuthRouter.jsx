import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../pages/AbountUs';
import Templates from '../components/Templates';
import FormBiodata from '../pages/FormBiodata';
import DataPreview from '../pages/DataPreview';
import Profile from '../pages/Profile';
import MakeBiodata from '../pages/MakeBiodata';
import Template1 from '../components/outputTemplate/Template1';
import Template4 from '../components/outputTemplate/Template4';
import Template3 from '../components/outputTemplate/Template3';
import Template2 from '../components/outputTemplate/Template2';
import ProfileImageUpdate from '../pages/update/ProfileImageUpdate';
import Landing from '../components/Landing';
import ContactUs from '../pages/ContactUs';


const AuthRouter = () => {
    // console.log("I am in auth Layout");
  return (
    <>
      <Routes>
            <Route index element={<Landing />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path="/templates" element={<Templates/>}/>
            <Route path="/formbiodata" element={<FormBiodata/>}/>
            <Route path="/datapreview" element={<DataPreview/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/make-biodata" element={<MakeBiodata/>}/>
            <Route path="/template-1" element={<Template1/>}/>
            <Route path="/template-2" element={<Template2/>}/>
            <Route path="/template-3" element={<Template3/>}/>
            <Route path="/template-4" element={<Template4/>}/>
            <Route path="/update-profile-image" element={<ProfileImageUpdate/>}/>
            <Route path='/contact-us' element={<ContactUs/>} />

      </Routes>
    </>
  )
}

export default AuthRouter