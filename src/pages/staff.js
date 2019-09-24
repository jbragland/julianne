import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StaffPage = ({ data }) => (
  <Layout>
    <SEO title="Staff" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Staff</h1>
    <ul>
      {data.allWordpressWpStaff.edges.map(post => (
        <li key={post.node.id}>
          <Link to={`/staff/${post.node.slug}`}>{post.node.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default StaffPage

export const query = graphql`
  query {
    allWordpressWpStaff {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
  }
`
