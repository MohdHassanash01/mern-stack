'use client'

import { IconCircleCheck, IconLoader } from '@tabler/icons-react';
import axios, { Axios } from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('password is Required')
    .matches(/[a-z]/, 'Lowercase Letter Required')
    .matches(/[A-Z]/, 'Uppercase Letter Required')
    .matches(/[0-9]/, 'Number Letter Required')
    .matches(/\W/, 'Special Character Required'),

    confirmPassword: Yup.string().required('Password is  Required')
    .oneOf([Yup.ref('password'),null],'Passwords must match'),


  });



const page = () => {

    const signupForm = useFormik({
        initialValues:{
            fullName:'',
            email:'',
            password:'',
            confirmPassword:''
        },
        onSubmit:(values,{resetForm,setSubmitting}) => {

            // setTimeout(() => {
            //  console.log(value);  
            // // resetForm()
            // setSubmitting(false)
            // },3000)


            // making a request 

            axios.post('http://localhost:5000/user/add',values)
            .then((response) => {
               console.log(response.status); 
               resetForm()  
               toast.success("user registered successfully")
            }).catch((err) => {
                console.log(err);
                
                console.log(err.response?.data);
                setSubmitting(false)
                toast.error(err?.response?.data?.message)
            });

        },
        validationSchema:SignupSchema
    })

  return (
    <div>

     
<div className="bg-gray-100 flex items-center justify-center min-h-screen">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-4">
            <span className="inline-block bg-gray-200 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
            </span>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-2">Create a new account</h2>
        <p className="text-gray-600 text-center mb-4">Enter your details to register.</p>
        <form onSubmit={signupForm.handleSubmit}>

            <div className="mb-3">
                
                <label htmlFor="fullName" 
                className="block text-gray-700 text-sm font-semibold mb-2"
                >Full Name *   <span className='text-sm  text-red-500'>{signupForm.touched.fullName && signupForm.errors.fullName}</span></label>
              
                <input 
                onChange={signupForm.handleChange}
                value={signupForm.values.fullName}
                type="text" id="fullName" 
                className={"form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 " + ((signupForm.touched.fullName && signupForm.errors.fullName)?'border-red-500':'' ) }
                 placeholder="James Brown"/>

            </div>


            <div className="mb-3">
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address *  <span className='text-sm  text-red-500'>{signupForm.touched.email && signupForm.errors.email}</span></label>

                <input
                onChange={signupForm.handleChange}
                value={signupForm.values.email}
                type="email" id="email" className={"form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 " + ((signupForm.touched.email && signupForm.errors.email)?'border-red-500':'' ) } placeholder="hello@alignui.com"/>
            </div>



            <div className="mb-3">
                <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password * <span className='text-sm  text-red-500'>{signupForm.touched.password && signupForm.errors.password}</span></label>

                <input
                    onChange={signupForm.handleChange}
                    value={signupForm.values.password}
                type="password" id="password" className={"form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 " + ((signupForm.touched.password && signupForm.errors.password)?'border-red-500':'' ) }  placeholder="••••••••"/>
              
            </div>



            <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-semibold mb-2">Confirm Password * <span className='text-sm  text-red-500'>{signupForm.touched.confirmPassword && signupForm.errors.confirmPassword}</span></label>

                <input
                 onChange={signupForm.handleChange}
        value={signupForm.values.confirmPassword}
        type="password" id="confirmPassword" className={"form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 " + ((signupForm.touched.confirmPassword && signupForm.errors.confirmPassword)?'border-red-500':'' ) }  placeholder="••••••••"/>
           
            </div>


            <button type='submit' disabled={signupForm.isSubmitting}
              className='flex justify-center gap-1 items-center bg-blue-500 text-white px-3 py-2 rounded w-full mt-8 disabled:opacity-50'
            > 
            {signupForm.isSubmitting ? <IconLoader className='animate-spin' size={20}/> : <IconCircleCheck size={20} />}
            <span>{signupForm.isSubmitting?"Please Wait":"Submit"}</span></button>

            <p className="text-gray-600 text-xs text-center mt-4">
                By clicking Register, you agree to accept Apex Financial's
                <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>.
            </p>
        </form>
    </div>
</div>
    </div>
  )
}

export default page
