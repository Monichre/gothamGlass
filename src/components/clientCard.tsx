import * as React from 'react'
import { Card, Image, Heading } from 'rebass'

// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll'
// @ts-ignore
import 'animate.css/animate.min.css'

export interface ClientCardProps {
  client: any
  height: number
}

export const ClientCard: React.SFC<ClientCardProps> = ({ client, height }) => {
  return (
    <Card width={256} height={height}>
      <Image src={client.logo.file.url} />
      <Heading>{client.name}</Heading>
    </Card>
  )
}
