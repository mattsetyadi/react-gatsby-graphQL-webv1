import React from "react"
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
} from "./HeroElements"
import { Button } from "../Button"
import Video from "../../assets/video/video-3.mp4"

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Unreal Destination</HeroH1>
          <HeroP>Out of this world</HeroP>
          <Button primary big round to="/trips">
            Travel Now
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
