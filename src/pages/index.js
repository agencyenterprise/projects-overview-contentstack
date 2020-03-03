import React from "react"
import { graphql } from "gatsby"
import { Card } from "../components/Card"

import Layout from "../components/layout"

export default ({ data }) => {
  console.log("data", data)
  return (
    <Layout>
      <div style={{ margin: "20px -16px", display: "flex" }}>
        {data.allContentstackProjects.edges.map(edge => (
          <Card data={edge.node} />
        ))}
      </div>
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
