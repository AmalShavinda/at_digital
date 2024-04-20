import React from 'react'

const Button = ({label}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 text-lg leading-none bg-secondary text-white uppercase rounded'>
      {label}
    </button>
  )
}

export default Button
