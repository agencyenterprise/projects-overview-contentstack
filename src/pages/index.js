import React from "react"
import { graphql } from "gatsby"
import renderHTML from "react-render-html"
import { Card } from "../components/Card"

import Layout from "../components/layout"

export default ({ data }) => {
  console.log("data", data)
  return (
    <Layout>
      {data.allContentstackProjects.edges.map(edge => (
        <Card data={edge.node} />
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allContentstackProjects {
      edges {
        node {
          name
          notes
          title
          team_member {
            role_in_project
            employee {
              name
              photo {
                url
              }
              role
            }
          }
          description
          banner {
            url
          }
        }
      }
    }
  }
`
