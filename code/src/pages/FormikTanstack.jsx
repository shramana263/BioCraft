import React from 'react';
import { useFormik } from 'formik';
import FormikInputBox from '../components/FormikInputBox';

const FormikTanstack = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const fields = ['email', 'name', 'username', 'contact_no', 'password']
    const labels = ['Email', 'Name', 'Username', 'Contact no', 'Password']
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            username: '',
            contact_no: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <div className='h-[100vh] w-full flex justify-center items-center'>

                <form onSubmit={formik.handleSubmit} className='border rounded p-3 border-black gap-3 flex flex-col'>
                    <div className='flex flex-col gap-3'>
                        {
                            fields && fields.map((item, index) => (
                                <div key={index}>
                                    <FormikInputBox formik={formik} fieldName={item} label={labels[index]} />
                                </div>
                            ))
                        }

                    </div>

                    <button type="submit" className='bg-orange-950 text-white rounded p-3'>Submit</button>
                </form>
            </div>
        </>
    );
};

export default FormikTanstack