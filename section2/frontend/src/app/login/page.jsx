import React from 'react'
import Link from 'next/link'
import classes from './login.module.css'
import Input from '@/components/Input'
import Button from '@/components/Button'
const page = () => {
  return (
   
    <div class="min-h-screen border-2 border-gray-500 w-full dark:bg-gray-950 items-center">
   

      <Input id={'name'} label={'full Name'} type={'text'}/>
      <br />
      <Input id={'email'} label={'email'} type={'email'}/>
      <br />
      <Input id={'password'} label={'password'} type={'password'}/>
      <br />
<Button>submit</Button>
    </div>
  )
}

export default page
