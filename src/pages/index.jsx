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
        `
      : css`
          min-height: 600px;
        `}
  ${props =>
    props.dark
      ? css`
          background-color: #16181e;
        `
      : css`
          background-color: #212229;
        `}
  color: white;
  ${props =>
    props.align &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
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
          <img src='img/farsiko.jpg' className='rounded-circle mt-5' />
          <h1>Farsiko Gama</h1>
          <p>Story Teller | FullStack Web Developer | Illustrator</p>
        </Section>
        {/* Jumbotron */}

        {/* Skills */}
        <Section id='skills' className='text-center' dark={true} align={true}>
          <h1 className='text-center'>Skill</h1>
          <h3>Full Stack Development</h3>
          <h4>React Js, Javascript, HTML, CSS</h4>
          <h4>Express, postgreSQL, Node Js, ORM,</h4>
          <h3>Project Management</h3>
        </Section>
        {/* Skills */}

        {/* Portofolio */}
        <Section id='portos' className='text-center'>
          Portofolio
          <CardWrapper>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </CardWrapper>
        </Section>
        {/* Portofolio */}

        {/* About */}
        <Section id='about' className='text-center' dark={true} align={true}>
          About
          <h3>Education</h3>
          <h4>Operation Management, Universitas Indonesia</h4>
          <h4>Full Stack Web Development, Binar Academy </h4>
          <h3>Past Job</h3>
          <h4>Marketing Analytics, Gojek</h4>
        </Section>
        {/* About */}

        {/* Contact */}
        <Section id='contact' className='text-center' align={true}>
          Reach Me on
          <h3>Linked In</h3>
          <h3>Email</h3>
          <h3>Whats App</h3>
        </Section>
        {/* Contact */}
      </main>
    </div>
  )
}
