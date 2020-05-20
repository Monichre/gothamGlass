import * as React from 'react'
import { Card, Image, Heading } from 'rebass'
// @ts-ignore
import Slide from 'react-reveal/Slide'
import { PageQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { GothamGlobalStyles } from './globalStyle'
import Header from './header'
import { CmsContext } from 'HOC/AppLoadQuery'
// @ts-ignore

// @ts-ignore

export interface ClientCardProps {
  url: any
  height: number
  name: number
}

export const ClientCard: React.SFC<ClientCardProps> = ({
  name,
  height,
  url,
}) => {
  return (
    <Card width={256} height={height}>
      <Image src={url} />
      <Heading>{name}</Heading>
    </Card>
  )
}
