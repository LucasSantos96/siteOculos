type Props = {
    name: string
}
const Navlinks = ({name}:Props) => {
  return (
   <nav>
          <ul className=" hover:text-orange-500">
            <li>{name}</li>
          </ul>
        </nav>
  )
}

export default Navlinks