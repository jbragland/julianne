import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo"

const StaffTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressWpStaff.title}
      description={data.wordpressWpStaff.excerpt}
    />
    <h1>{data.wordpressWpStaff.title}</h1>
    <dl>
      <dt>Title</dt>
      <dd>{data.wordpressWpStaff.acf.position}</dd>
      <dt>Email</dt>
      <dd>
        <a href={`mailto:${data.wordpressWpStaff.acf.email}`}>
          {data.wordpressWpStaff.acf.email}
        </a>
      </dd>
    </dl>
    <div dangerouslySetInnerHTML={{ __html: data.wordpressWpStaff.content }} />
  </Layout>
)

export default StaffTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressWpStaff(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
      acf {
        position
        email
      }
    }
  }
`
