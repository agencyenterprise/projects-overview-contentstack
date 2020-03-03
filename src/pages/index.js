import React from "react"
import { graphql } from "gatsby"
import { Card } from "../components/Card"

import Layout from "../components/layout"

export default ({ data }) => {
  console.log("data", data)
  return (
    <Layout>
      <div
        style={{
          "text-align": "center",
          "font-size": "24px",
          margin: "35px 0",
        }}
      >
        {data.contentstackHomePage.message}
      </div>
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
          short_description
          banner {
            url
          }
        }
      }
    }
    contentstackHomePage {
      message
    }
  }
`
