import React from 'react'
import image from './next.svg'

function page() {

  let cartItem = 10
  let dispalyMeassage = (message) => {
    return( <div><span>{message}</span></div>)
  }
  return (
    <div>
<h1 className='text-center mt-7'>home page</h1>
  <h1>cart Item : {cartItem}</h1>

  <h3 className="border border-red-500 bg-red-300 rounded-md w-1/2 mx-auto my-2 pl-5 py-3">{dispalyMeassage("Alert! message login first")}</h3>


  <button className='btn'>My button</button>
<img src="/next.svg" alt="" />
  <img src={image.src} alt="" />
    </div>
  )
}

export default page
