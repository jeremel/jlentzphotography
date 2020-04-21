import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const ImageGallery = styled.div`
    width: 90%;
    text-align: center;

    img {
        padding-bottom: 1rem;
    }
`

const Pioneertown = () => {
  
    const data = useStaticQuery(graphql`
        query Pioneertown {
            images: allFile(filter: {relativeDirectory: {eq: "PioneertownJTree"}}) {
                nodes {
                id
                childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
            }
        }
    `)

  console.log(data);

  return (
        <Layout>
            <SEO title="Pioneertown and Joshua Tree, CA" />
            <ImageGallery>
                <h1>Pioneertown & Joshua Tree, CA</h1>
                
                {data.images.nodes.map(image => (
                    <Img key={image.id} fluid={image.childImageSharp.fluid} />
                ))}
            </ImageGallery>
        </Layout>
    )
  }

export default Pioneertown
