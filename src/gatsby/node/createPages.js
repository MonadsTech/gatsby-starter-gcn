// const config = require('../../../gatsby-config')
const query = require('../data/query')
const path = require(`path`)

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  // const basePath = config.siteMetadata.basePath || '/'

  // Create a page for each "page"
  const pagesQuery = await graphql(query.data.pages)
  const pages = pagesQuery.data.allContentfulPage.edges
  pages.forEach((page, i) => {
    createPage({
      path: `/${page.node.slug}/`,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        slug: page.node.slug,
      },
    })
  })
}
