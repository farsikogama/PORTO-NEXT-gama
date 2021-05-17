import styled from 'styled-components'
import { device } from '../components/MediaQueries'

// import components
import Image from 'next/image'

// styling

const CardDiv = styled.div`
  background: #1c1f27;
  margin: 0.75rem;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 1px 1px 0px black;
  cursor: pointer;
  &:hover {
    background: #282931;
  }
  @media ${device.mobileS} {
    height: 35vh;
    flex-basis: 70%;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
    flex-basis: 30%;
  }
  @media ${device.laptop} {
  }
`

const Card = props => {
  return (
    <>
      <CardDiv>
        {/* <Image src='/img/farsiko.jpg' height='225' width='auto' /> */}
        <p>tes image</p>
      </CardDiv>
    </>
  )
}

export default Card
