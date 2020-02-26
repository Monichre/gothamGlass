import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import Layout from '../components/layout'
import Home from '../components/home'

const {
  Provider,
  Link,
  withNavigationContext,
  withNavigationHandlers
} = require('react-awesome-slider/dist/navigation')

class IndexPage extends Component {
  render() {
    const slug = '/'
    return (
      <Provider slug={slug}>

      </Provider>
      <Layout>
        <Home />
      </Layout>
    )
  }
}
export default IndexPage
