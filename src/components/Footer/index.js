import React from "react"
import {
  FooterContainer,
  FooterLinksWrapper,
  FooterDesc,
  FooterLinksItem,
  FooterLinksTitle,
  FooterLink,
  Copyright,
} from "./FooterElements"

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLinksWrapper>
          <FooterDesc>
            <h1>Exile</h1>
            <p>We strive to create the best experiences for our customers</p>
          </FooterDesc>
          <FooterLinksItem>
            <FooterLinksTitle>Contact Us</FooterLinksTitle>
            <FooterLink to="/about">Contact</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">Destinations</FooterLink>
            <FooterLink to="/">Sponsorships</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinksTitle>Videos</FooterLinksTitle>
            <FooterLink to="/">Submit Video</FooterLink>
            <FooterLink to="/">Ambassadors</FooterLink>
            <FooterLink to="/">Agency</FooterLink>
            <FooterLink to="/">Influencer</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinksTitle>Social Media</FooterLinksTitle>
            <FooterLink to="/">Instagram</FooterLink>
            <FooterLink to="/">Facebook</FooterLink>
            <FooterLink to="/">Linkedin</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
      </FooterContainer>
      <Copyright>
        <p>
          Copyright © 2020 • <span>Matt Setyadi</span>
        </p>
      </Copyright>
    </>
  )
}

export default Footer
