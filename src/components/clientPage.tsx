import * as React from 'react'
import { Box } from 'rebass'
import { ClientCard } from './clientCard'
import styled from 'styled-components'
// @ts-ignore
import { Slide } from 'react-reveal'

export const Header: any = styled.header`
  margin: 40px auto;
  h2 {
    text-align: center;
  }
`

const rand = (items: any) => items[Math.floor(Math.random() * items.length)]
const heights = [256, 128, 320, 256, 96, 96, 192, 128, 160]
type Client = {
  logo: {
    file: {
      url: string
    }
  }
  name: string
}
export interface ClientPageProps {
  clients: Client[]
}

const ClientPage: React.SFC<ClientPageProps> = ({ clients }) => {
  console.log('clients: ', clients)

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
          gridTemplateColumns: 'repeat(auto-fill, minmax(256px, 1fr))'
          // gridAutoRows: 32,
        }}
      >
        {clients.map((client: Client, index: number) =>
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
        )}
      </Box>
    </div>
  )
}

export default ClientPage
