import React from 'react'
import Image from 'next/image'
import HomenOculos from '@/app/assets/Leonardo_Phoenix_10_A_relaxed_and_casual_character_showcasing_1.jpg'
const Sobre = () => {
  return (
    <section className='flex flex-col lg:flex-row lg:mt-[150px] lg:mx-32 lg:gap-[130px]' >
        <div >
        <Image
        src={HomenOculos}
        alt='homem de oculos'
        className='lg:rounded-2xl lg:max-w-[480px] lg:h-[480px]'

        />
        </div>
        <div className='flex flex-col justify-center  gap-2 mx-8'>
            <h3 className='text-2xl mt-4 lg:text-[50px] text-[#0D0D0D] font-medium'>Nossos Óculos</h3>
            <p className='text-[#1e1e1e] mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, accusantium amet? Sint libero nam rerum consequatur quis dolorum ratione? Quidem reprehenderit quisquam iusto sit! Asperiores error laudantium corrupti quam qui.</p>
        </div>
    </section>
  )
}

export default Sobre