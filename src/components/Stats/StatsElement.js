import styled from "styled-components"

export const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`

export const Heading = styled.h1`
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

export const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`

export const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

export const Title = styled.div`
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`

export const Desc = styled.p`
  font-size: clamp(0.7rem, 2.5vw, 1rem);
`
