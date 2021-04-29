import React from "react"
import { Link, graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <div style={{ maxWidth: '1000px', margin: 'auto' }}>
      <h1
      >
        Awesome-Profile-README-templates ❤&nbsp;
        <a href={'https://github.com/kautukkundan/Awesome-Profile-README-templates'}>
          GitHub
        </a>
      </h1>

      <h4>Contributions from {data.allMarkdownRemark.totalCount} Awesome Developers ✨</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3
          >
            <Link
              to={node.fields.slug}
            >
              {node.fields.slug}{" "}
            </Link>
          </h3>

        </div>
      ))}
    </div>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark{
      totalCount
      edges {
        node {
          id
          fields {
            slug
            type
          }
        }
      }
    }
  }
`