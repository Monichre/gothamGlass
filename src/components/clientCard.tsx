import * as React from 'react'
import { Card, Image, Heading } from 'rebass'
// @ts-ignore
import Slide from 'react-reveal/Slide'
// @ts-ignore

// @ts-ignore

export interface ClientCardProps {
  client: any
  height: number
  index: number
}

export const ClientCard: React.SFC<ClientCardProps> = ({
  client,
  height,
  index
}) => {
  return (
    <Card width={256} height={height}>
      <Image src={client.logo.file.url} />
      <Heading>{client.name}</Heading>
    </Card>
  )
}
