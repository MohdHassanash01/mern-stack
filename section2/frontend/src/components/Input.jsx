import React from 'react'

const Input = ({label,type,id,disabled = false}) => {
  return (
   <>
   <div className="inline-block">
    <label htmlFor={id}>{label} :</label>
    <input id={id} type={type} disabled ={disabled} className='block w-full border-2 border-gray-600 py-1 px-3 rounded' />
   </div>
   </>
  )
}

export default Input
