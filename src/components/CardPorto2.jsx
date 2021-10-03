import styled, { css } from 'styled-components'
import { device } from './MediaQueries'
import Modal from './Modal/Modal'
import { useState } from 'react'

// styling

const BodyText = styled.p`
  opacity: 0;
  font-size: x-small;
  font-family: 'Lexend', sans-serif;
  text-align: left;
`
const CardDiv = styled.div`
  ${props =>
    props.bg
      ? css`
          background-image: radial-gradient(
              189.96% 351.18% at 10% 70%,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.1) 8%,
              #08090a 99.74%
            ),
            url(${props.bg});
          background-position: center;
          &:hover {
            background-image: radial-gradient(
                189.96% 61.18% at 50% 38.82%,
                rgba(0, 0, 0, 0.7) 0%,
                rgba(0, 0, 0, 0.7) 73.22%,
                #08090a 99.74%
              ),
              url(${props.bg});
          }
        `
      : css`
          background-image: url('/img/download.jpg');
          background-position: center;
          &:hover {
            background-image: radial-gradient(
                189.96% 61.18% at 50% 38.82%,
                rgba(0, 0, 0, 0.7) 0%,
                rgba(0, 0, 0, 0.9) 73.22%,
                #08090a 99.74%
              ),
              url(${props.bg});
          }
        `}
  padding: 20px;
  background-size: cover;
  margin: 0.75rem;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 1px 1px 0px black;
  cursor: pointer;
  &:hover ${BodyText} {
    // hover to effect chiled element. but the element must be put before the parent element
    opacity: 1;
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
  text-align: left;
  font-weight: bolder;
`

const Card = props => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CardDiv data-aos='fade-up' bg={props.bg} onClick={() => setShow(true)}>
        <Heading3>{props.title}</Heading3>
      </CardDiv>
      <Modal
        title={props.title}
        body={props.body}
        onClose={() => setShow(false)}
        show={show}
      >
        <p>This is modal body</p>
      </Modal>
    </>
  )
}

export default Card
