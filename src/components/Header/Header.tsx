import Logo from "../Logo/Logo";

import Navlinks from "../navlinks/Navlinks";


const Header = () => {
  return (
    <header className="flex justify-between mx-32 p-[4px_16px] border rounded-full my-5 border-[#F26B1D30] shadow-[2px_4px_24px_0_#F26B1D30] bg-[#FFFFFF17]">
      <div>
       <Logo/>
      </div>

      <div className="flex gap-4 font-medium text-sm cursor-pointer items-center">
        <Navlinks name="Óculos de sol"/>
        <Navlinks name="Óculos de Gráu"/>
        <Navlinks name="Novidades"/>
        <Navlinks name="Acessórios"/>
      </div>
    </header>
  );
};

export default Header;
