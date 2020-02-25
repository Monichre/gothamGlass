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
            ... on ContentfulClientGallery {
              id
              galleryItems {
                logo {
                  file {
                    url
                  }
                }
                name
              }
            }
          }
        }
      }
    `}
    render={({ contentfulPage }) => {
      // tslint:disable-next-line:no-console
      const {
        gallery: { galleryItems },
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
