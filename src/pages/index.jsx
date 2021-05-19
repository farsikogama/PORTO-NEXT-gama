import Head from 'next/head'

// import components
import CardPorto from '../components/CardPorto'
import CardList from '../components/CardList'
import Img from 'next/image'

// styling
import {
  Section,
  CardWrapper,
  ContainerColumn,
  RoundedDiv,
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
            <RoundedDiv />
          </ContainerColumn>

          <ContainerColumn>
            <Heading>Farsiko Gama</Heading>
            <Heading3>
              Web Developer | Story Teller | Illustrator based in Yogyakarta
            </Heading3>
          </ContainerColumn>
        </Section>
        {/* Jumbotron */}

        {/* Skills */}
        <Section id='skills' dark={true}>
          <Heading2>Proficiencies</Heading2>
          <ContainerColumn>
            <Heading3 style={{ fontWeight: 'bolder' }}>
              Full Stack Development
            </Heading3>
            <CardWrapper>
              <CardList
                image='/img/icon/logo-postgres.png'
                text='PostgreSQL'
              ></CardList>
              <CardList
                image='/img/icon/logo-express.png'
                text='Express Js'
              ></CardList>
              <CardList
                image='/img/icon/logo-react.png'
                text='React Js'
              ></CardList>
              <CardList
                image='/img/icon/logo-node.png'
                text='Node Js'
              ></CardList>
            </CardWrapper>
          </ContainerColumn>
          <ContainerColumn>
            <Heading3 style={{ fontWeight: 'bolder' }}>Other Skills</Heading3>
            <CardWrapper>
              <CardList
                image='/img/icon/logo-ts.png'
                text='Typescript'
              ></CardList>
              <CardList
                image='/img/icon/logo-styled.png'
                text='Styled Components'
              ></CardList>
              <CardList
                image='/img/icon/logo-next.png'
                text='Next Js'
              ></CardList>
              <CardList
                image='/img/icon/logo-adobe.png'
                text='Adobe ( Ai & Ps )'
              ></CardList>
            </CardWrapper>
          </ContainerColumn>
        </Section>
        {/* Skills */}

        {/* Portofolio */}
        <Section id='portos' className='text-center'>
          <ContainerColumn>
            <Heading2 className='text-center'>Portofolio</Heading2>
            <CardWrapper porto={true}>
              <CardPorto
                title='Game Center'
                href='https://binar-gamecenter-next.herokuapp.com/'
                bg='/img/porto/gamecenter.JPG'
                line1='Team Project'
                line2='Build with Next Js, Redux, Express, JWT, Media Handling, Bootstrap'
                line3='Role - Frontend Lead & Authentication'
                line4='see more'
              />
              <CardPorto
                title='Pokedex'
                href='https://gama-pokedex.herokuapp.com/'
                bg='/img/porto/pokemon.png'
                line1='Personal Project'
                line2='Build with Next Js, Typescript, Pokemon API, Styled Components, Pure CSS'
                line3='Role - Frontend'
                line4='see more'
              />

              <CardPorto
                title='Instagram UI Clone'
                href='https://gama-pokedex.herokuapp.com/'
                // bg='/img/porto/pokemon.png'
                line1='On progress'
                line2=''
                line3=''
                line4='see more'
              />
            </CardWrapper>
          </ContainerColumn>
        </Section>
        {/* Portofolio */}

        {/* About */}
        <Section id='about' dark={true}>
          <Heading2 className='mt-5'>About</Heading2>
          <ContainerColumn className='mt-5'>
            <Heading3 style={{ fontWeight: 'bolder' }}>Education</Heading3>
            <CardWrapper>
              <CardList
                image='/img/icon/logo-ui.png'
                text='Operation Management, Universitas Indonesia'
              ></CardList>
              <CardList
                image='/img/icon/logo-binar.png'
                text='Full Stack Web Development, Binar Academy'
              ></CardList>
            </CardWrapper>
          </ContainerColumn>
          <ContainerColumn className='mt-5'>
            <Heading3 style={{ fontWeight: 'bolder' }}>Experiences</Heading3>
            <CardWrapper>
              <CardList
                image='/img/icon/logo-prof.png'
                text='Front End Tutor, Superprof'
              ></CardList>
              <CardList
                image='/img/icon/logo-gojek.png'
                text='Marketing-Analyst, Gojek'
              ></CardList>
              <CardList
                image='/img/icon/logo-maersk.png'
                text='Care Business Partner, Maersk'
              ></CardList>
            </CardWrapper>
          </ContainerColumn>
        </Section>
        {/* About */}

        {/* Contact */}
        <Section id='contact' align={true}>
          <ContainerColumn>
            <Heading2>Reach Me on</Heading2>
            <CardWrapper>
              <CardList
                image='/img/icon/logo-linked.png'
                text='Farsiko Gama'
              ></CardList>
              <CardList
                image='/img/icon/logo-email.png'
                text='farsikogama@gmail.com'
              ></CardList>
              <CardList
                image='/img/icon/logo-prof.png'
                text='Farsiko Gama'
              ></CardList>
            </CardWrapper>
          </ContainerColumn>
        </Section>
        {/* Contact */}
      </main>
    </div>
  )
}
