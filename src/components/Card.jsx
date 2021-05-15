import styled, { css } from 'styled-components'

// import components
import Link from 'next/link'
import Image from 'next/image'

// styling

const CardDiv = styled.div`
  background: #1c1f27;
  flex-basis: 30%;
  margin: 1rem;
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 1px 1px 0px black;
  padding: 30px;
  cursor: pointer;
  &:hover {
    background: #282931;
  }
`

const Card = props => {
  return (
    <>
      <CardDiv>
        <Image src='/img/farsiko.jpg' height='225' width='auto' />
        <p>tes image</p>
      </CardDiv>
    </>
  )
}

export default Card
