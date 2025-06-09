import React from 'react'
import Button from '../Button/Button'
import { Facebook, Instagram, Linkedin, X } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='lg:mt-[150px] bg-[#1E1E1E] flex items-center w-lvw text-white p-10'>
        <div className=' lg:mx-32 flex items-center gap-12 lg:justify-between lg:gap-80 flex-wrap'>
            <div>
                <h3 className='text-[50px] '>Contatos</h3>
                <form className='flex flex-col gap-3 mt-6 '>
                    <label htmlFor="name">
                        Seu Nome:
                        <input type="text"  name='name' placeholder='  _______________' required className='outline-none'/>
                    </label>

                    <label htmlFor="email">
                        Seu E-mail:
                        <input type="email"  name='email' placeholder='  _______________' required
                        className='outline-none'/>
                    </label>

                      <label htmlFor="whatsapp">
                        Whatsapp:
                        <input type="number"  name='whatsapp' placeholder='  _______________' required
                        className='outline-none'/>
                    </label>

                    <label htmlFor="mensagem" className='flex flex-col w-fit gap-2'>
                        Mensagem: 
                        <textarea name="mensagem" id="mensagemForm" className='border rounded-md'>
                            
                        </textarea>
                    </label>
                    <Button name='Enviar'/>
                </form>
            </div>

            <div>
                <h3>E-mail</h3>
                <p className='mt-2'>email@email.com.br</p>
                <h3 className='mt-4'>Localização</h3>
                <p className='mt-2'>Endereço da loja avenida-123, Rio de Janeiro - Brasil</p>
                <div className='mt-4'>
                    <ul className='flex gap-3'>
                        <li><Instagram/></li>
                        <li><Facebook/></li>
                        <li><X/></li>
                        <li><Linkedin/></li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer