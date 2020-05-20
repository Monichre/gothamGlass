import * as React from 'react'

// import { ClientCard } from './clientCard'
import { Card, Image, Heading, Box } from 'rebass'
import styled from 'styled-components'
// @ts-ignoreimport { Card, Image, Heading } from 'rebass'
import { Slide } from 'react-reveal'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
console.log('BLOCKS: ', BLOCKS)

const Text = ({ children }: any) => <Heading>{children}</Heading>
const ImageRenderer = ({ url }: any) => <Image src={url} />

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,

    [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
      console.log('node: ', node)
      // const {
      //   data: {
      //     target: {
      //       fields: { file },
      //     },
      //   },
      // } = node
      // const { url } = file['en-US']

      return <div /> // <ImageRenderer url={url} />
    },
  },
}

export const Header: any = styled.header`
  margin: 40px auto;
  h2 {
    text-align: center;
  }
`

const rand = (items: any) => items[Math.floor(Math.random() * items.length)]
const heights = [256, 128, 320, 256, 96, 96, 192, 128, 160]

export interface ClientPageProps {
  pageSections: any
}

const ClientPage: React.SFC<ClientPageProps> = ({ pageSections }) => {
  console.log('pageSections: ', pageSections)
  const content: any = documentToReactComponents(
    pageSections[0].content.json,
    options
  )
  console.log('content: ', content)

  return (
    <div>
      <Header>
        <h2>Our Clients</h2>
      </Header>
      <Box
        p={100}
        sx={{
          display: 'grid',
          gridGap: '30px',
          gridTemplateColumns: 'repeat(auto-fill, minmax(256px, 1fr))',
          // gridAutoRows: 32,
        }}
      >
        {content.map((pageSection: any) => (
          <Slide left>
            <Card width={256} height={rand(heights)}>
              {pageSection}
            </Card>
          </Slide>
        ))}
        {/* {clients.map((client: Client, index: number) =>
          index % 2 === 0 ? (
            <Slide left>
              <ClientCard
                index={index}
                client={client}
                height={rand(heights)}
              />
            </Slide>
          ) : (
            <Slide right>
              <ClientCard
                index={index}
                client={client}
                height={rand(heights)}
              />
            </Slide>
          )
        )} */}
      </Box>
    </div>
  )
}

export default ClientPage
