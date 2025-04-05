import React from 'react'

const FormikInputBox = ({fieldName, type,label, formik}) => {
    return (
        <>
        <div>

            <label>{label}</label>
            <input
                id={fieldName}
                name={fieldName}
                type={type}
                className='border-2'
                onChange={formik.handleChange}
                value={formik.values.fieldName}
            />
        </div>
        </>
    )
}

export default FormikInputBox
