import { graphql } from "gatsby"
import React from "react"
import { Card } from "../components/Card"
import { Layout } from "../components/Layout"
import { Cards, Welcome } from "./_index.styled"
import { Link } from "gatsby"

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
          <Link to={edge.node.url}>
            <Card color={data.contentstackHeader.color} data={edge.node} />
          </Link>
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
          url
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
