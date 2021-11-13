import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { device } from './MediaQueries'
import Link from 'next/link'

import Image from 'next/image'

const Navigate = styled.div`
  position: fixed;
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 5px;
  color: black;
  opacity: 0.3;
  &:hover {
    cursor: pointer;
  }
  @media ${device.mobileS} {
    bottom: 5px;
    right: 5px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
    bottom: 25px;
    right: 25px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
  }
`

const Navigation = () => {
  return (
    <>
      <Navigate>
        <Link href='#home'>
          <Image src='/img/icon/backTop.png' height='50' width='50' />
        </Link>
      </Navigate>
    </>
  )
}

export default Navigation

// function Navigation() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     document.title = `You clicked ${count} times`
//   })

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   )
// }

// export default Navigation
