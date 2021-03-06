import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin:0;
  padding:0;
  font-size: 1.5rem;

  h1 {
    padding-top: 1rem;
    letter-spacing: .075rem;
  }

  a {
    color: #ff521f;
    margin:0;
    padding:0;
    text-decoration: none;
    font-family: Helvetica, sans-serif;
  }

  a:hover {
    opacity: 60%;
  }

  ul {
    width: 90%;
    max-width: 700px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0;
    padding: 0 0 1.75rem 0;
  }

  ul li {
    list-style: none;
    font-size: 1.25rem
  }

  ul li a {
    text-decoration: none;
    font-family: Georgia, serif;
  }

  ul li a:hover {
    text-decoration: underline dotted;
    color: #fff;
    font-size: 1.5rem;
  }

  @media(max-width: 600px) {
    ul {
      width: 90%;
      max-width: 700px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin: 0;
      padding: 0 0 1.75rem 0;
    }
  
    ul li {
      list-style: none;
      font-size: 1.25rem
    }
  
    ul li a {
      text-decoration: none;
      font-family: Georgia, serif;
    }
  
    ul li a:hover {
      text-decoration: underline dotted;
      background-color: white;
      padding: .1rem;
      border-radius: 2.5px;
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderDiv>
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <ul>
      <li><Link to="/croatia">Croatia</Link></li>
      <li><Link to="/outdoors">Jersey Outdoors</Link></li>
      <li><Link to="/oystercreek">Oyster Creek</Link></li>
      <li><Link to="/pioneertown">Pioneertown</Link></li>
      <li><Link to="/rocky">Rocky</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </HeaderDiv>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
