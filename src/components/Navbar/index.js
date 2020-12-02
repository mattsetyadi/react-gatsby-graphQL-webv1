import React, { useState, useEffect } from "react"
import {
  Nav,
  NavLink,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavBtn,
} from "./NavbarElements"
import { menuData } from "../../data/MenuData"
import { Button } from "../Button"
import { FaBars } from "react-icons/fa"
import { DiScala } from "react-icons/di"

const Navbar = ({ toggle }) => {
  const [scroll, setScroll] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <Nav active={scroll}>
      <NavLogo to="/" active={scroll}>
        <DiScala />
        EXILE
      </NavLogo>
      <MobileIcon onClick={toggle} active={scroll}>
        <FaBars />
      </MobileIcon>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index} active={scroll}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary round to="/trips">
          Book a Flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar
