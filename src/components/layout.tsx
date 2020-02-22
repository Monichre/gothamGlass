import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import './layout.css'
import { GothamGlobalStyles } from './globalStyle'
type T_CmsContext = {
  pages?: object[]
  logo?: {
    url: string
  }
}
export const CmsContext: React.Context<
  T_CmsContext | any
> = React.createContext({
  logo: {},
  pages: [],
})

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query AppLoad {
        contentfulPage(name: { eq: "Home" }) {
          pageSections {
            header
            content {
              content
              json
            }
            featuredImage {
              file {
                url
              }
            }
          }
          name
          gallery {
            ... on ContentfulHomeGallery {
              id
              images {
                file {
                  url
                }
              }
            }
          }
        }
        allContentfulSiteLogo(limit: 1) {
          nodes {
            logoImage {
              file {
                url
              }
            }
          }
        }
      }
    `}
    render={data => {
      // tslint:disable-next-line:no-console
      console.log(`TCL: data`, data)
      const {
        contentfulPage: { pageSections, gallery },
        allContentfulSiteLogo: { nodes: logoNodes },
      } = data

      const { file: logo } = logoNodes[0].logoImage

      return (
        <>
          <Helmet
            title={'Gotham Glass'}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <GothamGlobalStyles />
          <Header siteTitle={'Gotham Glass'} logo={logo} />
          <div
            style={{
              margin: '0 auto',
              // maxWidth: 960,
              // padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            <CmsContext.Provider value={{ pageSections, gallery }}>
              {children}
            </CmsContext.Provider>
          </div>
        </>
      )
    }}
  />
)

export default Layout
