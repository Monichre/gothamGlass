import React from 'react'
import styled from 'styled-components'

export const Banner: any = styled.div`
  background-color: #303639;
  color: #ffffff;
  padding: 10.5em 0 4em 0;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  background-image: ${(props: any) => `url(${props.backgroundImage})`};
  /* background-image: -webkit-linear-gradient(
      to top,
      rgba(48, 54, 57, 0.2),
      rgba(48, 54, 57, 0.2)
    ),
    url('../../images/banner.jpg');
  background-image: -ms-linear-gradient(
      to top,
      rgba(48, 54, 57, 0.2),
      rgba(48, 54, 57, 0.2)
    ),
    url('../../images/banner.jpg');
  background-image: linear-gradient(
      to top,
      rgba(48, 54, 57, 0.2),
      rgba(48, 54, 57, 0.2)
    ),
    url('../../images/banner.jpg'); */
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 75vh;
  min-height: 30em;
  position: relative;

  &::after {
    pointer-events: none;
    -moz-transition: opacity 2s ease, visibility 2s;
    -webkit-transition: opacity 2s ease, visibility 2s;
    -ms-transition: opacity 2s ease, visibility 2s;
    transition: opacity 2s ease, visibility 2s;
    background-color: #303639;
    content: '';
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    visibility: hidden;
    width: 100%;
    z-index: 10001;
  }
  .inner {
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-align-items: center;
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;
    max-width: 75em;
    .content {
      -moz-transition: -moz-transform 1s ease-out, opacity 1s ease-out;
      -webkit-transition: -webkit-transform 1s ease-out, opacity 1s ease-out;
      -ms-transition: -ms-transform 1s ease-out, opacity 1s ease-out;
      transition: transform 1s ease-out, opacity 1s ease-out;
      -moz-transform: translateY(0);
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
      :last-child {
        margin-bottom: 0;
      }
    }
  }
`
export const HeaderTwo = styled.h2`
  font-size: 2.75em;
  margin-bottom: 0;
  margin-top: -0.25em;
  line-height: 1.3;
`
export const Paragraph = styled.p`
  font-size: 1.2em;
  margin: 0.7em 0 0 0;
`
export const ActionsMenuItem = styled.li``
export const ActionsMenu = styled.div`
  -moz-transition: -moz-transform 1s ease-out, opacity 1s ease-out;
  -webkit-transition: -webkit-transform 1s ease-out, opacity 1s ease-out;
  -ms-transition: -ms-transform 1s ease-out, opacity 1s ease-out;
  transition: transform 1s ease-out, opacity 1s ease-out;
  -moz-transform: translateY(0);
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
  border-left: solid 1px #ffffff;
  margin: 0 0 0 4em;
  min-width: 20em;
  padding: 1em 0 1em 1.5em;
`

export interface HeroBannerProps {
  backgroundImage: string
  children: any
}

export const HeroBanner: React.SFC<HeroBannerProps> = ({
  backgroundImage,
  children
}) => {
  return (
    <Banner backgroundImage={backgroundImage}>
      <div className='inner'>{children}</div>
    </Banner>
  )
}
