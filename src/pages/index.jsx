import Head from 'next/head'
import styled, { css } from 'styled-components'

// import components
import Card from '../components/Card'

// styling
const Section = styled.section`
  ${props =>
    props.jumbotron
      ? css`
          min-height: 450px;
          margin-top: -60px;
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : css`
          min-height: 600px;
          display: flex;
          justify-content: center;
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
const CardWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80vw;
  height: 550px;
`
const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 25vw;
  text-align: left;
`
const ContainerRow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  min-width: 25vw;
`
const Heading = styled.h1`
  font-size: calc(1rem + 4vw);
  margin-bottom: 30px;
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  line-height: 65px;
`
const Heading2 = styled.h1`
  font-size: calc(0.5rem + 2vw);
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  min-width: 30vw;
  margin-bottom: 15px;
`
const Heading3 = styled.h1`
  font-size: calc(0.5rem + 1vw);
  font-family: 'Lexend', sans-serif;
  font-weight: 400;
  width: 30vw;
  margin-bottom: 20px;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Farsiko Gama</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {/* Jumbotron */}
        <Section id='home' className='text-center' jumbotron={true}>
          <ContainerColumn>
            <img src='img/farsiko.jpg' className='rounded-circle my-5 mx-5' />
          </ContainerColumn>

          <ContainerColumn>
            <Heading>Farsiko Gama</Heading>
            <Heading3>
              Story Teller, Full Stack Web Developer, and Illustrator based in
              Yogyakarta
            </Heading3>
          </ContainerColumn>
        </Section>
        {/* Jumbotron */}

        {/* Skills */}
        <Section id='skills' dark={true}>
          <Heading2 className='mt-5'>Skills</Heading2>
          <ContainerColumn className='mt-5'>
            <Heading3 style={{ fontWeight: 'bolder' }}>
              Full Stack Development
            </Heading3>
            <p>PostgreSQL</p>
            <p>Express Js</p>
            <p>React Js</p>
            <p>Node Js</p>
          </ContainerColumn>
          <ContainerColumn className='mt-5'>
            <Heading3 style={{ fontWeight: 'bolder' }}>Other</Heading3>
            <p>TypeScript</p>
            <p>Styled Components</p>
            <p>Next Js</p>
            <p>Adobe Ilustrator & Photoshop</p>
          </ContainerColumn>
        </Section>
        {/* Skills */}

        {/* Portofolio */}
        <Section id='portos' className='text-center'>
          <ContainerColumn className='text-center mt-5' alignCenter={true}>
            <Heading2>Portofolio</Heading2>
            <CardWrapper>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </CardWrapper>
          </ContainerColumn>
        </Section>
        {/* Portofolio */}

        {/* About */}
        <Section id='about' dark={true}>
          <Heading2 className='mt-5'>About</Heading2>
          <ContainerColumn className='mt-5'>
            <Heading3>Education</Heading3>
            <p>Operation Management, Universitas Indonesia</p>
            <p>Full Stack Web Development, Binar Academy </p>
          </ContainerColumn>
          <ContainerColumn className='mt-5'>
            <Heading3>Past Job</Heading3>
            <p>Marketing Analytics, Gojek</p>
          </ContainerColumn>
        </Section>
        {/* About */}

        {/* Contact */}
        <Section id='contact' align={true}>
          <ContainerColumn>
            <Heading2>Reach Me on</Heading2>
            <Heading3>Linked In</Heading3>
            <Heading3>Email</Heading3>
            <Heading3>Whats App</Heading3>
          </ContainerColumn>
        </Section>
        {/* Contact */}
      </main>
    </div>
  )
}
