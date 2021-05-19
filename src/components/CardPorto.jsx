import styled from 'styled-components'
import { device } from './MediaQueries'

// import components
import Image from 'next/image'

// styling

const CardDiv = styled.div`
  background-image: url('/img/download.png');
  background-size: cover;
  margin: 0.75rem;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 1px 1px 0px black;
  cursor: pointer;
  &:hover {
    background-image: radial-gradient(
        189.96% 61.18% at 50% 38.82%,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0.7) 73.22%,
        #08090a 99.74%
      ),
      url('/img/download.png');
  }
  @media ${device.mobileS} {
    height: 25vh;
    flex-basis: 70%;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
    flex-basis: 40%;
  }
  @media ${device.laptop} {
    height: 30vh;
    flex-basis: 30%;
  }
  @media ${device.laptopL} {
  }
`
const Heading3 = styled.p`
  font-family: 'Lexend', sans-serif;
  @media ${device.mobileS} {
    margin: 10px 0 0 0;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
    margin: 0 0 0 15px;
  }
  @media ${device.laptop} {
  }
`
const LinkExt = styled.a`
  &:hover {
    text-decoration: none;
  }
  @media ${device.mobileS} {
    flex-basis: 70%;
    margin: 0;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
    flex-basis: 40%;
  }
  @media ${device.laptop} {
    flex-basis: 30%;
  }
`

const Card = props => {
  return (
    <>
      <LinkExt href='https://gama-pokedex.herokuapp.com/' target='blank'>
        <CardDiv data-aos='fade-up'>
          <Heading3>tes image</Heading3>
        </CardDiv>
      </LinkExt>
    </>
  )
}

export default Card
