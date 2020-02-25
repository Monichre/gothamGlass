import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

import {
  Provider,
  Link,
  withNavigationContext,
  withNavigationHandlers
} from 'react-awesome-slider/dist/navigation'
import Layout from '../components/layout'
import Home from '../components/home'

class IndexPage extends Component {
  render() {
    const slug = '/'
    return (
      <Layout>
        <Home />
      </Layout>
    )
  }
}
export default IndexPage
