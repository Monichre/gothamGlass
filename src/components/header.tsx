import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderDiv = styled.header`
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
  background: rgba(255, 255, 255, 0.95);
  height: 3em;
  line-height: 3em;
  box-shadow: 0 0 0.15em 0 rgba(0, 0, 0, 0.1);
`

const Logo = styled.div`
  position: absolute;
  left: 1em;
  top: 0;
  height: 3em;
  line-height: 3em;
  letter-spacing: -1px;

  a {
    font-size: 1.25em;
  }
`

const Nav = styled.nav`
  position: absolute;
  right: 0.5em;
  top: 0;
  height: 3em;
  line-height: 3em;

  ul {
    margin: 0;

    li {
      display: inline-block;
      margin-left: 0.5em;
      font-size: 0.9em;

      a {
        display: block;
        color: inherit;
        text-decoration: none;
        height: 3em;
        line-height: 3em;
        padding: 0 0.5em 0 0.5em;
        outline: 0;
      }
    }
  }
`

type Props = {
  siteTitle: string
  logo: {
    url: string
  }
}

const Header = ({ siteTitle, logo }: Props) => (
  <header id='header'>
    <img id='nav-logo' src={logo.url} alt='' />

    <nav id='nav'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/#one'>About</Link>
        </li>
        <li>
          <Link to='/#two'>Why Gotham</Link>
        </li>
        <li>
          <Link to='/clients'>Clients</Link>
        </li>
        <li>
          <Link to='/#work'>Gallery</Link>
        </li>
        {/* <li>
          <Link to='/glassRepair'>Glass Repair</Link>
        </li> */}
        <li>
          <Link to='/#contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
