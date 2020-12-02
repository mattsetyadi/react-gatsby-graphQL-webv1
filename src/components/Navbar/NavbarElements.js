import { Link } from "gatsby"
import styled from "styled-components"

export const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "linear-gradient(to bottom, rgba(225,225,225, 1) 30%, rgba(225,225,225, 0) 100%)"
      : "linear-gradient(to bottom, rgba(225,225,225, 0.5) 0%, rgba(225,225,225, 0) 100%)"};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 999;
  position: sticky;
  top: 0;
`

export const NavLogo = styled(Link)`
  color: ${({ active }) => (active ? "#000" : "#fff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: "Permanent Marker", sans-serif;
  font-size: 26px;
`

export const NavLink = styled(Link)`
  color: ${({ active }) => (active ? "#000" : "#fff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    color: #f26a2e;
    font-style: bold;
  }
`

export const MobileIcon = styled.div`
  color: ${({ active }) => (active ? "#000" : "#fff")};
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
