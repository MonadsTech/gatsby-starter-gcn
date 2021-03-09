import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

const PageTemplate = ({ data }) => {
  const { title, metaDescription, body } = data.contentfulPage
  return (
    <div>
      <SEO
        title={title}
        description={
          metaDescription
            ? metaDescription.internal.content
            : body.childMarkdownRemark.excerpt
        }
      />
      <div>
        <p>{title}</p>
        <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}  />
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PageTemplate
