import React from 'react'
import AppLoadQuery from '../HOC/AppLoadQuery'

const NotFoundPage = () => (
  <AppLoadQuery>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </AppLoadQuery>
)

export default NotFoundPage
