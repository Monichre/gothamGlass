import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

import { CmsContext } from '../HOC/AppLoadQuery'
import { Arrow } from './arrow'
import { Gallery } from './gallery'

const Text = ({ children }: any) => <p>{children}</p>
const DownloadLink = ({ url, children }: any) => (
  <a style={{ color: '#98c593' }} href={url}>
    {children}
  </a>
)

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      const {
        data: { uri },
      } = node

      return <a href='/'>{children}</a>
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
      const {
        data: {
          target: {
            fields: { file },
          },
        },
      } = node
      const { url, fileName } = file['en-US']

      return <DownloadLink url={url}>{fileName}</DownloadLink>
    },
  },
}

// documentToReactComponents(document, options);
// -> <
export interface IntroProps {
  featuredImage: any
  content: any
  header: any
}

const Intro: React.SFC<IntroProps> = ({
  featuredImage: {
    file: { url },
  },
  content,
  header,
}) => {
  console.log('header: ', header)
  const sectionContent = documentToReactComponents(content.json, options)

  return (
    <section
      id='intro'
      className='main style1 dark fullscreen'
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='content container 75%'>
        <header id='logo-header'>
          <img id='logo' src='/icons/logo_white.png' alt='' />
        </header>
        {sectionContent}
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
  header: any
  index: any
}

const AboutSection: React.SFC<AboutGothamProps> = ({
  featuredImage: {
    file: { url },
  },
  header,
  content,
  index,
}) => {
  const sectionContent = documentToReactComponents(content.json, options)

  return (
    <section
      id='one'
      className={`main style2 ${
        index % 2 === 0 ? 'right' : 'left'
      } dark fullscreen`}
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='content box style2'>
        <header>
          <h2>{header}</h2>
        </header>
        {sectionContent}
      </div>
      <a href='#two' className='button style2 down anchored'>
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
    return <Intro {...props} />
  },
  'About Gotham': (props: any) => {
    return <AboutSection {...props} />
  },
  'Why Gotham': (props: any) => {
    return <AboutSection {...props} />
  },
  'Product Lines': (props: any) => {
    return <AboutSection {...props} />
  },
}

export interface PageProps {}

const Home: React.SFC<PageProps> = (props) => {
  const { pageSections, gallery } = React.useContext(CmsContext)
  console.log('pageSections: ', pageSections)
  const { images } = gallery

  return (
    <div>
      {pageSections.map((section: any, index: number) => {
        const Component = pageSectionMarkupMap[section.header]

        return Component ? (
          <Component key={index} index={index} {...section} />
        ) : null
      })}
      <Gallery items={images} />
      <Contact />
    </div>
  )
}

export default Home
