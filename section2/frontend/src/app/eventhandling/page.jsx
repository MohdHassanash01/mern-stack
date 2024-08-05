'use client'
import React from 'react'

const Eventhandling = () => {

  function previewImage(e) {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = (data) => {
      const img = new Image()
      img.src = data.target.result
      document.body.appendChild(img)
    }

    reader.readAsDataURL(file)
  }

  function click() {
    alert("hello hassan")
  }
  return (
    <div className='max-w-3xl mx-auto my-10 border'  
    // onMouseMove={(e) => {console.log('X :' + e.clientX + "Y :" + e.clientY);}}

    onMouseMove={e => {
      document.getElementById("circle").style.left = e.clientX - 20 + 'px';
      document.getElementById("circle").style.top = e.clientY - 20 + 'px';
    }}
    >


<div
onMouseDown={(e) => {
  e.target.style.height = '30px'
  e.target.style.width = '30px'}}

  onMouseUp={(e) => {
    e.target.style.height = '46px'
    e.target.style.width = '46px'}}

    // onClick={e => {
    //   document.style.backgroundColor = e.style.backgroundColor = red
    // }}

 id='circle' className='absolute duration-100 rounded-full size-11 border shadow-lg border-black'></div>

      <button onClick={() => { alert("button was clicked") }}
        className='border rounded bg-gray-200 hover:bg-white px-3 py-1'>Click</button>

      <button onClick={click}
        className='border rounded bg-green-200 hover:bg-white px-3 py-1'>Click</button>


      <input className='mt-5 border border-black px-3 py-1 rounded w-full'
        onChange={(event) => { console.log(event.target.value); }}
        type="text" />

      <input
        // onChange={(event) => {console.log(event.target.value);}}
        onChange={(e) => { document.body.style.backgroundColor = e.target.value }}
        type="color" className='mt-5 block' />

      <input
        onChange={(e) => { console.log(e.target.files); }}
        type="file" className='mt-5 block'
        multiple />

      <br />

      <label
        className='mt-5 block' htmlFor="">Upload Image</label>
      <input type="file" accept='image/*'  onChange={previewImage} />


      <input
      onKeyDown={(e) => {console.log(e.code);}}
      type="text" className='border w-full mt-5' />

    </div>
  )
}

export default Eventhandling
