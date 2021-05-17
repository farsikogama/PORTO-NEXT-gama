import Head from 'next/head'
import Link from 'next/link'

// import components
import Card from '../components/Card'

// styling
import {
  Section,
  CardWrapper,
  ContainerColumn,
  Heading,
  Heading2,
  Heading3,
} from '../components/StyledComponents'

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
          <Heading2>Skills</Heading2>
          <ContainerColumn>
            <Heading3 style={{ fontWeight: 'bolder' }}>
              Full Stack Development
            </Heading3>
            <p>PostgreSQL</p>
            <p>Express Js</p>
            <p>React Js</p>
            <p>Node Js</p>
          </ContainerColumn>
          <ContainerColumn>
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
          <ContainerColumn>
            <Heading2 className='text-center'>Portofolio</Heading2>
            <CardWrapper>
              <Card></Card>
              <Card></Card>
              <Card></Card>
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
            <Heading3 style={{ fontWeight: 'bolder' }}>Education</Heading3>
            <p>Operation Management, Universitas Indonesia</p>
            <p>Full Stack Web Development, Binar Academy </p>
          </ContainerColumn>
          <ContainerColumn className='mt-5'>
            <Heading3 style={{ fontWeight: 'bolder' }}>Recent Job</Heading3>
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
