import { useContext } from "react"
import { DataProvider } from "../../context/Data"
import NavbarLoggedIn from "./NavBarLoggedIn"
import NavBarLoggedOut from "./NavBarLoggedOut"



function NavBarStatus() {

  const context = useContext(DataProvider)

  const { logged } = context;


  return(
    <>
      { logged ? <NavbarLoggedIn/> : <NavBarLoggedOut/> }
    </>
  )
}

export default NavBarStatus