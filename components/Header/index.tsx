import React from 'react'
import { LogoComponent } from '../LogoComponent/LogoComponent'
import { UserComponent } from '../UserComponent'
import BurgreBtn from '../BurgreBtn'
 const Header = () => {
  return (
    <header>
      <LogoComponent/>
      <UserComponent/>
      <BurgreBtn/>
    </header>
  )
}
export default Header