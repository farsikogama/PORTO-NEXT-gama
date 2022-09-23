import { useEffect, useState } from 'react'
import Head from 'next/head'

// import components
import CardPorto from '../components/CardPorto'
import CardPorto2 from '../components/CardPorto2'
import CardList from '../components/CardList'
import Navigation from '../components/Navigation'

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
  const appearNavigation = () => {
    const opacity = document.querySelector('.opacity')
    const section = document.querySelector('main')
    let section_height = section.offsetHeight

    let scroll = window.pageYOffset
    let sectionY = section.getBoundingClientRect()

    opacity.style.opacity = (scroll * 4) / (sectionY.top + section_height)
  }

  useEffect(() => {
    window.addEventListener('scroll', appearNavigation)
  }, [])

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
              Analyst | Marketer | Full Stack Web Developer <br /> <br />
              Based in Yogyakarta
            </Heading3>
          </ContainerColumn>
        </Section>
        {/* Jumbotron */}

        {/* Skills */}
        <Section id='skills' dark={true}>
          <Heading2>Proficiencies</Heading2>
          <ContainerColumn>
            <Heading3 style={{ fontWeight: 'bolder' }}>Front End</Heading3>
            <CardWrapper>
              <CardList image='/img/icon/logo-ts.png' text='Typescript' />
              <CardList image='/img/icon/logo-react.png' text='React Js' />
              <CardList image='/img/icon/logo-next.png' text='Next Js' />
              <CardList
                image='/img/icon/logo-styled.png'
                text='Styled Components'
              />
            </CardWrapper>
          </ContainerColumn>
          <ContainerColumn>
            <Heading3 style={{ fontWeight: 'bolder' }}>Back End</Heading3>
            <CardWrapper>
              <CardList image='/img/icon/logo-postgres.png' text='PostgreSQL' />
              <CardList image='/img/icon/logo-node.png' text='Node Js' />
              <CardList image='/img/icon/logo-express.png' text='Express Js' />
              <CardList image='/img/icon/logo-sequelize.png' text='Sequelize' />
            </CardWrapper>
          </ContainerColumn>
          <ContainerColumn>
            <Heading3 style={{ fontWeight: 'bolder' }}>Other</Heading3>
            <CardWrapper>
              <CardList image='/img/icon/logo-git.png' text='Git' />
              <CardList
                image='/img/icon/logo-adobe.png'
                text='Adobe ( Ai & Ps )'
              />
            </CardWrapper>
          </ContainerColumn>
        </Section>
        {/* Skills */}

        {/* Portofolio */}
        <Section id='portos' className='text-center'>
          <ContainerColumn>
            <Heading2 className='text-center'>Portfolio</Heading2>
            <Heading3 className='text-center'>Analytics</Heading3>
            <CardWrapper porto={true}>
              <CardPorto2
                title='MAF Data Studio'
                bg='/img/porto/MAF.jpg'
                body='MAF is a new feature that change the GoFood order process from driver ordered by customer to driver ordered by merchant. This feature signifcantly reduce the delivery time of GoFood. However, at the launching period, problems occured. Only a few merchants are aware of this feature. Therefore, MAF Data Studio was launched to monitor which merchant has the highest order lost in daily basis. This dashboard generate daily data and directly notifies the account owner so that the account owner can give immediate treatment to the merchant to improve their performance.'
              />
              <CardPorto2
                title='POI Performance Dashboard'
                bg='/img/porto/POI.JPG'
                body='There are indeed several point of interest that generate the highest order for Gojek. In 2019-2020, Gojek aim a very ambitious target to acquire top 5 POIs in Bandung, Semarang, and Yogyakarta. However, its performance (Complete Order, GMV, BCR, and waiting time) need to be closely monitored. Those are the main reason this dashboard was launched. The result form this monitoring activity are we managed to spend the amount of partnership investment wisely and we managed to allocate supply and demand level more accurate based on the seasonality of this top POI.'
              />
            </CardWrapper>

            <Heading3 className='text-center'>Web Site</Heading3>
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
                title='Instagram UI Clone - On Progress'
                href='https://forum-pages.herokuapp.com/'
                bg='/img/porto/sosmed.JPG'
                line1='Personal Project'
                line2='Build with React Js, Dummy API, CSS, '
                line3='Role - Frontend'
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
              />
              <CardList
                image='/img/icon/logo-binar.png'
                text='Full Stack Web Development, Binar Academy'
              />
            </CardWrapper>
          </ContainerColumn>
          <ContainerColumn className='mt-5'>
            <Heading3 style={{ fontWeight: 'bolder' }}>Experiences</Heading3>
            <CardWrapper>
              <CardList
                image='/img/icon/logo-gojek.png'
                text='Marketing-Analyst, Gojek'
              />
              <CardList
                image='/img/icon/logo-prof.png'
                text='Front End Tutor, Superprof'
              />
              <CardList
                image='/img/icon/logo-maersk.png'
                text='Care Business Partner, Maersk'
              />
            </CardWrapper>
          </ContainerColumn>
        </Section>
        {/* About */}

        {/* Contact */}
        <Section id='contact' align={true}>
          <ContainerColumn>
            <Heading2>Reach Me on</Heading2>
            <CardWrapper>
              <a href='https://github.com/farsikogama' target='blank'>
                <CardList
                  image='/img/icon/logo-github.png'
                  text='@farsikogama'
                />
              </a>
              <a
                href='https://www.linkedin.com/in/farsiko-gama-3b819464'
                target='blank'
              >
                <CardList
                  image='/img/icon/logo-linked.png'
                  text='Farsiko Gama'
                />
              </a>
              <CardList
                image='/img/icon/logo-email.png'
                text='farsikogama@gmail.com'
              />
            </CardWrapper>
          </ContainerColumn>
        </Section>
        {/* Contact */}

        {/* navigation */}
        <div className='opacity'>
          <Navigation />
        </div>

        {/* navigation */}
      </main>
    </div>
  )
}
