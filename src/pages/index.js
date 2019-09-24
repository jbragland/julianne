import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Blog</h1>
    <ul style={{ listStyle: "none", margin: 0 }}>
      {data.allWordpressPost.edges.map(post => (
        <li
          key={post.node.id}
          style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}
        >
          <Link
            to={`/post/${post.node.slug}`}
            style={{ display: "flex", color: "black", textDecoration: "none" }}
          >
            <Img
              fixed={post.node.featured_media.localFile.childImageSharp.fixed}
              alt={post.node.title}
              style={{ width: "25%", marginRight: 20 }}
            />
            <div style={{ width: "75%" }}>
              <h3
                dangerouslySetInnerHTML={{ __html: post.node.title }}
                style={{ marginBottom: 0 }}
              />
              <p style={{ margin: 0, color: "grey" }}>
                Written by {post.node.author.name} on {post.node.date}
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          slug
          author {
            name
          }
          date(formatString: "MMMM DD, YYYY")
          featured_media {
            localFile {
              childImageSharp {
                fixed(width: 300, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
