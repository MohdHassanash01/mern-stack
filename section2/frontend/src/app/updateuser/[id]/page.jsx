'use client'

import axios from 'axios'
import { Formik } from 'formik'
import { useParams, useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'

const page = () => {
    const {id} = useParams()

    const [userData, setUserData] = useState(null)

  const router = useRouter()

    const getUserData = async () => {
        const res = await axios.get("http://localhost:5000/user/getbyid/"+ id)
        console.log(res.data);
        setUserData(res.data)
    }

    useEffect(()=>{
        getUserData()
    },[])

    const submitForm = (values) => {
        console.log(values);
        axios.put('http://localhost:5000/user/update' + id,values)
        .then((result ) => {
            toast.success("User Updated Successfully")
            router.push('manageuser')
        })
        .catch((err) => {
            console.log(err);
            toast.error("Failed to  update user")
        })       
    }

    return (
    <div>
        <div className='max-w-xl mx-auto border p-5 mt-5 shadow'>

             <h1 className='text-2xl text-center font-bold'>Update Users detail</h1>

             {
                userData !== null ?(

<Formik initialValues={userData} onSubmit={submitForm}>

    {
    (updateForm) => {
        return (
            
            <form onSubmit={updateForm.handleSubmit} action="">
            <input type="text"
            id='name'
            onChange={updateForm.handleSubmit}
            value={updateForm.values.name}
            placeholder='Enter your name'
            className='w-full  p-3 border  rounded-lg mt-5 bg-gray-100' />
         
         <input type="text"
            id='email'
            onChange={updateForm.handleSubmit}
            value={updateForm.values.email}
            placeholder='Enter your email'
            className='w-full  p-3 border  rounded-lg mt-5 bg-gray-100' />
         
         <input type="text"
            id='password'
            onChange={updateForm.handleSubmit}
            value={updateForm.values.password}
            placeholder='Enter your password'
            className='w-full  p-3 border  rounded-lg mt-5 bg-gray-100' />     


<input 
type="text"
            id='city'
            onChange={updateForm.handleSubmit}
            value={updateForm.values.city}
            placeholder='Enter your city'
            className='w-full  p-3 border  rounded-lg mt-5 bg-gray-100' />

<button className='bolok ml-auto p-3 bg-blue-500 text-white mt-6 rounded'>Update</button>

         </form>
        )
    }
    }

</Formik>

    ):<h3 className='text-3xl text-gray-400 text-center font-bold mt-5'>Loading.....</h3>
    }

   
             
    </div>
     
    </div>
    )
}

export default page
