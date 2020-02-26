import React, { Component } from 'react'
import Layout from '../components/layout'
import Home from '../components/home'

export interface HomePageProps {}

export const HomePage: React.SFC<HomePageProps> = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
