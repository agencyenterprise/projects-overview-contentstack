import { graphql } from "gatsby"
import React from "react"
import { Card } from "../components/Card"
import { Layout } from "../components/Layout"
import { Cards, Welcome } from "./_index.styled"
import { Link } from "gatsby"

export default ({ data }) => {
  const {
    allContentstackProjects,
    contentstackMeta,
    contentstackHomePage,
  } = data
  const { edges } = allContentstackProjects

  return (
    <Layout>
      <Welcome>{contentstackHomePage.message}</Welcome>
      <Cards>
        {edges.map(edge => {
          const card = edge.node

          return (
            <Link key={card.id} to={card.url}>
              <Card color={contentstackMeta.color} data={card} />
            </Link>
          )
        })}
      </Cards>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allContentstackProjects {
      edges {
        node {
          id
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
    contentstackMeta {
      color
    }
  }
`
