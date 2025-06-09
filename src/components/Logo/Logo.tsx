
import Image from "next/image";

import ImgLogo from "../../app/assets/logo.png"

const Logo = () => {
  return (
    <Image
    src={ImgLogo}
    alt='Logo sol com óculos'
    className="w-12"
    />
  )
}

export default Logo