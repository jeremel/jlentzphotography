import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const ImageGallery = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        padding-bottom: 1rem;
    }
`

const Croatia = () => {
  
    const data = useStaticQuery(graphql`
        query Images {
            images: allFile(filter: {relativeDirectory: {eq: "Croatia"}}) {
                nodes {
                id
                childImageSharp {
                    fixed(width: 600) {
                      ...GatsbyImageSharpFixed
                    }
                }
            }
            }
        }
    `)

  console.log(data);

  return (
        <Layout>
            <SEO title="Croatia" />
            <ImageGallery>
                <h1>Zadar & Dubrovnik</h1>
                
                {data.images.nodes.map(image => (
                    <Img key={image.id} fixed={image.childImageSharp.fixed} />
                ))}
            </ImageGallery>
        </Layout>
    )
  }

export default Croatia
