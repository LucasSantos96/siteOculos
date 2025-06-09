'use client'

import { useState } from "react";


//Logo
import Logo from "../Logo/Logo";


/*itens do menu de navegação */
import Navlinks from "../navlinks/Navlinks";


//Ícones Menu
import { Menu, X } from "lucide-react"; 


const Header = () => {

  const [open, setOpen] = useState(false)

//  const toggleMenu = () => setOpen(!open)


  return (
    <header className="flex py-1 px-6 mx-2 justify-between items-center lg:mx-32 lg:p-[4px_16px] border rounded-full my-5 border-[#F26B1D30] shadow-[2px_4px_24px_0_#F26B1D30]">
      <div>
       <Logo/>
      </div>

      {/*Menu mobile*/}
      <button className="lg:hidden z-20"
      onClick={()=> setOpen(!open)}
      aria-label="Abrir Menu"
      >
      {open ? <X/> : <Menu/>}
      </button>

      {/*Menu mobile dropdown */}
      <nav
      className={`${open ? "flex" : "hidden"} flex-col gap-8 font-medium text-sm cursor-pointer items-center absolute top-[76px] left-0 w-full bg-[#da734ee0] py-6 shadow-lg lg:hidden rounded-2xl mx-auto text-white `}
      >
        <Navlinks name="Óculos de sol"/>
        <Navlinks name="Óculos de Gráu"/>
        <Navlinks name="Novidades"/>
        <Navlinks name="Acessórios"/>
      </nav>

      {/*Menu desktop*/}
      <div className="lg:flex gap-4 font-medium text-sm cursor-pointer items-center hidden">
        <Navlinks name="Óculos de sol"/>
        <Navlinks name="Óculos de Gráu"/>
        <Navlinks name="Novidades"/>
        <Navlinks name="Acessórios"/>
      </div>
    </header>



  );
};

export default Header;
