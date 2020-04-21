import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components'

const IndexDiv = styled.div`
  width: 90%;
  text-align: center;

  img {
    padding-top: .25rem;
    padding-bottom: 1rem;
  }

  a {
    text-decoration: none;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexDiv>
      <Image />
      <Link to="/about/">About Jereme</Link>
    </IndexDiv>
  </Layout>
)

export default IndexPage
