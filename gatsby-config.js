/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `code-styled`,
        path: `${__dirname}/code-styled`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `default`,
        path: `${__dirname}/default`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dynamic-realtime`,
        path: `${__dirname}/dynamic-realtime`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `elaborate`,
        path: `${__dirname}/elaborate`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `multimedia`,
        path: `${__dirname}/multimedia`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `short-and-sweet`,
        path: `${__dirname}/short-and-sweet`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tabular`,
        path: `${__dirname}/tabular`,
      },
    },
  ]
}