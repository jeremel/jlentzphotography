import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const AboutDiv = styled.div`
  max-width: 600px;
  text-align: center;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }

  a {
    color: #ff521f;
    text-decoration: none;
    font-size: 2rem;
  }

  a:hover {
    opacity: 0.7;
  }
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutDiv>
      <h1>Jereme Lentz is a guy from southern New Jersey who likes taking pictures sometimes</h1>
      <p>This is just for fun</p>
      <p>Contact me at jerlentz (@) gmail.com if you feel like it</p>
      <Link to="/">Go back home</Link>
    </AboutDiv>
  </Layout>
)

export default About
