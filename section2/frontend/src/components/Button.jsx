import React from 'react'

const Button = ({children}) => {
  return (
    <div>
      <button className='border border-gray-500 bg-pink-200 text-black font-bold rounded px-4 py-2 mt-8'>
        {children}
      </button>
    </div>
  )
}

export default Button
