import * as React from 'react'
import Layout from '../components/layout'
import ClientPage from '../components/clientPage'
import { StaticQuery, graphql } from 'gatsby'

const Clients = () => (
  <StaticQuery
    query={graphql`
      query ClientPageQuery {
        contentfulPage(name: { eq: "Clients" }) {
          name
          gallery {
            ... on ContentfulGallery {
              galleryItems {
                name
                logo {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ contentfulPage }) => {
      // tslint:disable-next-line:no-console
      const {
        gallery: { galleryItems }
      } = contentfulPage

      return (
        <Layout>
          <ClientPage clients={galleryItems} />
        </Layout>
      )
    }}
  />
)

export default Clients
