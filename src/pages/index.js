import { graphql } from "gatsby"
import React from "react"
import { Card } from "../components/Card"
import { Layout } from "../components/layout"
import { Cards, Welcome } from "./index.styled"

export default ({ data }) => {
  const cardsMultiplied = [
    ...data.allContentstackProjects.edges,
    ...data.allContentstackProjects.edges,
    ...data.allContentstackProjects.edges,
  ]

  return (
    <Layout>
      <Welcome>{data.contentstackHomePage.message}</Welcome>
      <Cards>
        {cardsMultiplied.map(edge => (
          <Card color={data.contentstackHeader.color} data={edge.node} />
        ))}
      </Cards>
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
    contentstackHeader {
      color
    }
  }
`
