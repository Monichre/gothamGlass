import React from 'react'
import { CmsContext } from './layout'
import { Arrow } from './arrow'
import { Gallery } from './gallery'

export interface IntroProps {
  featuredImage: any
  content: any
}

const Intro: React.SFC<IntroProps> = ({
  featuredImage: {
    file: { url }
  },
  content
}) => {
  return (
    <section
      id='intro'
      className='main style1 dark fullscreen'
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='content container 75%'>
        <header id='logo-header'>
          <img id='logo' src='/icons/logo_white.png' alt='' />
        </header>
        <p>
          Gotham delivers the highest quality glass systems with the fastest
          speed to market in the industry
        </p>
        <footer>
          <a href='#one' className='button style2 down'>
            <Arrow />
          </a>
        </footer>
      </div>
    </section>
  )
}

export interface AboutGothamProps {
  featuredImage: any
  content: any
}

const AboutGotham: React.SFC<AboutGothamProps> = ({
  featuredImage: {
    file: { url }
  },
  content
}) => {
  return (
    <section
      id='one'
      className='main style2 right dark fullscreen'
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='content box style2'>
        <header>
          <h2>About Gotham</h2>
        </header>
        <p>
          Located in the heart of New York City, Gotham Glass leverages it's
          location, talent and industry experience to provide ultimate client
          satisfaction.
        </p>
      </div>
      <a href='#two' className='button style2 down anchored'>
        <Arrow />
      </a>
    </section>
  )
}

export interface WhyGothamProps {
  featuredImage: any
  content: any
}

const WhyGotham: React.SFC<WhyGothamProps> = ({
  featuredImage: {
    file: { url }
  },
  content
}) => {
  return (
    <section
      id='two'
      className='main style2 left dark fullscreen'
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='content box style2'>
        <header>
          <h2>Why Gotham</h2>
        </header>
        <p>
          Gotham's field team leverages their 40 years of experience to ensure
          the highest quality installation in the industry. Local production
          control allows Gotham to guarantee material onsite 3-4 weeks after
          field measurements. Local fabrication also allows Gotham to
          significantly reduce material shipping costs. These cost savings are
          passed directly to the client. Gotham prides itself on constantly
          pushing the design envelope with custom and complex projects,
          ultimately resulting in client satisfaction.
        </p>
      </div>
      <a href='#work' className='button style2 down anchored'>
        <Arrow />
      </a>
    </section>
  )
}

export interface ProductLinesProps {
  featuredImage: any
  content: any
}

const ProductLines: React.SFC<ProductLinesProps> = ({
  featuredImage: {
    file: { url }
  },
  content
}) => {
  return (
    <section
      id='two'
      className='main style2 left dark fullscreen'
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='content box style2'>
        <header>
          <h2>Why Gotham</h2>
        </header>
        <p>
          {' '}
          Gotham's field team leverages their 40 years of experience to ensure
          the highest quality installation in the industry. Local production
          control allows Gotham to guarantee material onsite 3-4 weeks after
          field measurements. Local fabrication also allows Gotham to
          significantly reduce material shipping costs. These cost savings are
          passed directly to the client. Gotham prides itself on constantly
          pushing the design envelope with custom and complex projects,
          ultimately resulting in client satisfaction.
        </p>
      </div>
      <a href='#work' className='button style2 down anchored'>
        <Arrow />
      </a>
    </section>
  )
}

export interface ContactProps {}

const Contact: React.SFC<ContactProps> = () => {
  return (
    <section id='contact' className='main style3 secondary'>
      <div className='content container'>
        <header>
          <h2>Contact</h2>
        </header>
        <div className='box container 75%'>
          <form
            method='post'
            action='https://formspree.io/travis@gothamglasscorp.com'
          >
            <div className='row 50%'>
              <div className='6u 12u(mobile)'>
                <input type='text' name='name' placeholder='Name' />
              </div>
              <div className='6u 12u(mobile)'>
                <input type='email' name='email' placeholder='Email' />
              </div>
            </div>
            <div className='row 50%'>
              <div className='12u'>
                <textarea name='message' placeholder='Message' />
              </div>
            </div>
            <div className='row'>
              <div className='12u'>
                <ul className='actions'>
                  <li>
                    <input type='submit' value='Send Message' />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

const pageSectionMarkupMap = {
  'Gotham Glass': (props: any) => {
    console.log(`TCL: props`, props)

    return <Intro {...props} />
  },
  'About Gotham': (props: any) => {
    return <AboutGotham {...props} />
  },
  'Why Gotham': (props: any) => {
    return <WhyGotham {...props} />
  },
  'Product Lines': (props: any) => {
    return <ProductLines {...props} />
  }
}

export interface PageProps {}

const Home: React.SFC<PageProps> = props => {
  const { pageSections, gallery } = React.useContext(CmsContext)

  pageSections.push({ header: 'Gallery' })
  const { images } = gallery

  return (
    <div>
      {pageSections.map((section: any, index: number) => {
        const Component = pageSectionMarkupMap[section.header]

        return Component ? <Component key={index} {...section} /> : null
      })}
      <Gallery items={images} />
      <Contact />
    </div>
  )
}

export default Home
