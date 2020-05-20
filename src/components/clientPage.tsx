import * as React from 'react'

import styled from 'styled-components'
// @ts-ignore
import { Slide } from 'react-reveal'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { ClientCard } from './clientCard'
import { Box } from 'rebass'
export const Text = ({ children }: any) => <p>{children}</p>
const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,

    [BLOCKS.EMBEDDED_ENTRY]: (node: any, ...rest: any) => {
      console.log('rest: ', rest)
      console.log('node: ', node)
      const {
        data: {
          target: {
            fields: { logo, name },
          },
        },
      } = node
      const {
        fields: { file },
      } = logo['en-US']
      const { url }: any = file['en-US']

      return (
        <Slide>
          <ClientCard height={rand(heights)} url={url} name={name['en-US']} />
        </Slide>
      )
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
  const content: any = documentToReactComponents(
    pageSections[0].content.json,
    options
  )

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
        {content}
      </Box>
    </div>
  )
}

export default ClientPage
