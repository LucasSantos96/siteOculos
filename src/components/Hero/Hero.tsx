
import React from 'react'
import Image from 'next/image'

import MulherOculos from '../../app/assets/Leonardo_Phoenix_10_A_young_laidback_female_character_with_a_r_1.jpg'
import Button from '../Button/Button'


const Hero = () => {
  return (
    <main className='flex :justify-between items-center flex-col-reverse lg:flex-row lg:mx-32 lg:mt-12 '>

        <div className='flex flex-col mt-4 text-center items-center'>
            <h1 className=' text-3xl text-[#0d0d0de1] lg:text-[72px] lg:leading-20 font-semibold'>Um sol pra cada um</h1>

            <p className='text-[#F26B1D] lg:text-[20px] font-normal italic mt-2 mb-4 lg:mb-[60px]'>Conheça nossa coleção 2025</p>
  
            <Button name='Ver coleção'/>
        </div>
        <div>
            <Image
            src={MulherOculos}
            alt='Mulher de óculos'
            className='lg:rounded-2xl '
            />
        </div>
    </main>
  )
}

export default Hero