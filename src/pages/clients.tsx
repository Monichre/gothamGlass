import * as React from 'react'
import AppLoadQuery from '../HOC/AppLoadQuery'
import ClientPage from '../components/clientPage'
import { StaticQuery, graphql } from 'gatsby'

const Clients = () => (
  <StaticQuery
    query={graphql`
      query ClientPageQuery {
        contentfulPage(name: { eq: "Clients" }) {
          name
          pageSections {
            title
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
          # gallery {
          #   ... on ContentfulGallery {
          #     galleryItems {
          #       name
          #       logo {
          #         file {
          #           url
          #         }
          #       }
          #     }
          #   }
          # }
        }
      }
    `}
    render={({ contentfulPage }) => {
      console.log('contentfulPage: ', contentfulPage)
      // tslint:disable-next-line:no-console
      const { pageSections } = contentfulPage
      console.log('pageSections: ', pageSections)

      return (
        <AppLoadQuery>
          <ClientPage pageSections={pageSections} />
        </AppLoadQuery>
      )
    }}
  />
)

export default Clients
