import React from 'react'
type btnProps = {
    name:string;
}

const Button = ({name}:btnProps) => {
  return (
    <button 
            className='flex gap-2 bg-[#F26B1D] w-fit py-4 px-8 rounded-2xl text-white shadow-[1px_1px_24px_0_rgba(242,68,5,0.6)] cursor-pointer hover:bg-[#f26b1dda]' 
            >{name} </button>
  )
}

export default Button