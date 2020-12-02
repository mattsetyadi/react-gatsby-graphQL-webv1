import React from "react"
import {
  StatsContainer,
  Heading,
  Wrapper,
  StatsBox,
  Icon,
  Title,
  Desc,
} from "./StatsElement"
import { StatsData } from "../../data/StatsData"

const Stats = () => {
  return (
    <StatsContainer>
      <Heading>Why Choose Us?</Heading>
      <Wrapper>
        {StatsData.map((item, index) => {
          return (
            <StatsBox key={index}>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </StatsBox>
          )
        })}
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats
