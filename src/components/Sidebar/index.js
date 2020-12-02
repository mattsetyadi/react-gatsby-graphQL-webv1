import React from "react"
import { menuData } from "../../data/MenuData"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtn,
} from "./SidebarElements"
import { Button } from "../Button"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {menuData.map((item, index) => (
            <SidebarLink to={item.link} key={index} onClick={toggle}>
              {item.title}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SideBtn>
          <Button to="/trips" primary round>
            Book a Flight
          </Button>
        </SideBtn>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
