import React, { Component } from 'react'
import Home from '../components/home'
import AppLoadQuery from '../HOC/AppLoadQuery'

class IndexPage extends Component {
  render() {
    return (
      <AppLoadQuery>
        <Home />
      </AppLoadQuery>
    )
  }
}
export default IndexPage
