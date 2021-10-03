import styled from 'styled-components'
import { device } from './MediaQueries'

// import components
import Image from 'next/image'

// styling
const CardDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  @media ${device.mobileS} {
    margin: 0.75rem;
    flex-direction: column;
    width: 45vw;
    padding: 15px;
    border-radius: 10px;
    // border: 1px solid white;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
    border: 0px solid white;
    justify-content: left;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-basis: 40%;
  }
  @media ${device.laptop} {
    padding: 3px;
    flex-basis: 70%;
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

const Card = props => {
  return (
    <>
      <CardDiv data-aos='fade-up'>
        <Image src={props.image} height='50' width='50' />
        <Heading3>{props.text}</Heading3>
      </CardDiv>
    </>
  )
}

export default Card
