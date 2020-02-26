import React, { Component } from 'react'

import 'react-awesome-slider/dist/styles.css'
import Layout from '../components/layout'
import Home from '../components/home'
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import {
  withNavigationHandlers,
  withNavigationContext
} from "react-awesome-slider/dist/navigation";



const Slider = withNavigationHandlers(AwesomeSlider);

export interface HomePageProps {


  
}
 
const HomePage: React.SFC<HomePageProps> = () => {
  return (  );
}
 
export default HomePage;