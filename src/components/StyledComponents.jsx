import styled, { css } from 'styled-components'
import { device } from '../components/MediaQueries'

export const Section = styled.section`
  ${props =>
    props.jumbotron
      ? css`
          margin-top: -60px;
          display: flex;
          @media ${device.mobileS} {
            align-items: center;
            flex-wrap: wrap;
          }
          @media ${device.mobileM} {
          }
          @media ${device.mobileL} {
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            min-height: 90vh;
          }
        `
      : css`
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          @media ${device.mobileS} {
            // align-items: center;
            flex-wrap: wrap;
          }
          @media ${device.mobileM} {
          }
          @media ${device.mobileL} {
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            min-height: 100vh;
          }
        `}
  ${props =>
    props.dark
      ? css`
          background-color: #16181e;
        `
      : css`
          background-color: #212229;
        `}
  ${props =>
    props.align
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : css`
          display: flex;
          justify-content: center;
        `}
    color: white;
`
export const CardWrapper = styled.div`
  ${props =>
    props.porto
      ? css`
          margin-bottom: 5vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;

          @media ${device.mobileS} {
            margin-top: 10px;
            width: 90vw;
            text-align: center;
          }
          @media ${device.mobileM} {
            width: 80vw;
          }
          @media ${device.mobileL} {
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
          }
        `
      : css`
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          @media ${device.mobileS} {
            justify-content: center;
          }
          @media ${device.mobileM} {
          }
          @media ${device.mobileL} {
          }
          @media ${device.tablet} {
          }
          @media ${device.laptop} {
            justify-content: left;
            width: 30vw;
          }
        `}
`
export const ContainerColumn = styled.div`
  display: flex;
  margin-bottom: 5vh;
  @media ${device.mobileS} {
    margin-top: 10px;
    flex-basis: 90%;
    text-align: center;
    flex-direction: column;
  }
  @media ${device.mobileM} {
    flex-basis: 60%;
  }
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    text-align: left;
    flex-basis: 25%;
  }
`
export const Heading = styled.h1`
  margin-bottom: 30px;
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  @media ${device.mobileS} {
    margin: 2vh unset 2vh unset;
    font-size: calc(2rem + 4.5vw);
    flex-basis: 90%;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
    font-size: calc(1rem + 2vw);
  }
  @media ${device.laptop} {
  }
`
export const Heading2 = styled.p`
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  @media ${device.mobileS} {
    margin-top: 2vh;
    font-size: calc(1.5rem + 2vw);
    flex-basis: 55%;
    text-align: center;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
    flex-basis: 60%;
  }
  @media ${device.laptop} {
    text-align: left;
    font-size: calc(0.5rem + 2vw);
    flex-basis: 30%;
  }
`
export const Heading3 = styled.p`
  font-family: 'Lexend', sans-serif;
  font-weight: 400;
  margin-bottom: 20px;
  @media ${device.mobileS} {
    font-size: calc(0.75rem + 1vw);
    text-align: center;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
    margin-top: 2vh;
    font-size: calc(0.75rem + 1vw);
  }
  @media ${device.tablet} {
    font-size: calc(0.5rem + 1vw);
  }
  @media ${device.laptop} {
    text-align: left;
  }
`
