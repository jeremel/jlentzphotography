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

const Outdoors = () => {
  
    const data = useStaticQuery(graphql`
        query JerseyImages {
            images: allFile(filter: {relativeDirectory: {eq: "JerseyOutdoors"}}) {
                nodes {
                id
                childImageSharp {
                    fluid(maxWidth: 800) {
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
            <SEO title="Jersey Outdoors" />
            <ImageGallery>
                <h1>Jersey Outdoors</h1>
                
                {data.images.nodes.map(image => (
                    <Img 
                        key={image.id} 
                        fluid={image.childImageSharp.fluid}
                    />
                ))}
            </ImageGallery>
        </Layout>
    )
  }

export default Outdoors
