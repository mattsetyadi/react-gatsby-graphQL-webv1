import styled from "styled-components"
import { Link } from "gatsby"

export const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`

export const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

export const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

export const FooterLinksTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

export const FooterLinksItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

export const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
export const Copyright = styled.div`
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
  margin-top: -20px;

  p {
    color: #000;
    text-align: center;
    font-size: 14px;
  }

  span {
    font-family: "Permanent Marker", sans-serif;
  }
`
