import React from 'react'

import Image from 'next/image'

type CardOculosProps = {
    imageUrl:string;
    name:string;
    price:number
}

const CardOculos = ({imageUrl, name, price}:CardOculosProps) => {
  return (
    <div className='flex flex-col gap-2 w-[260px] h-[320px] cursor-pointer'>
        <div>
            <Image
            src={imageUrl}
            alt={name}
            width={260}
            height={320}
            className='rounded-2xl hover:opacity-70  '
            />
        </div>
            <div className='flex justify-between items-center'>
                <h3 className='text-[#0D0D0D] font-medium'>{name}</h3>
                <p className='text-[#F26B1D] font-medium'>R${price.toFixed(2)}</p>
            </div>
    </div>
  )
}

export default CardOculos