import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const IndexDiv = styled.div`
  width: 90%;
  text-align: center;
  font-size: 2rem;

  img {
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #ff521f;
  }

  a:hover {
    opacity: 0.75;
  }
`

const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "EaglesSBParade.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <IndexDiv>
        <Img fluid={data.indexImage.childImageSharp.fluid} />
        <Link to="/about/">About Jereme</Link>
      </IndexDiv>
    </Layout>
  )
}

export default IndexPage
