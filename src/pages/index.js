import { graphql, Link } from "gatsby"
import React from "react"
import { Card } from "../components/Card"
import { Featured } from '../components/Featured'
import { Layout } from "../components/Layout"
import { Cards } from "./_index.styled"

export default ({ data }) => {
  const {
    allContentstackProjects,
    contentstackMeta,
    contentstackHomePage,
  } = data
  const { edges } = allContentstackProjects

  return (
    <Layout>
      <Featured featured={contentstackHomePage.featured} />
      {/* <Welcome>{contentstackHomePage.message}</Welcome> */}
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
      featured {
        description {
          rich_text_editor
        }
        logo {
          sponsors {
            name
            image_url {
              href
              title
            }
          }
        }
        tags {
          tag
        }
        title {
          title_text
        }
      }
      message
    }
    contentstackMeta {
      color
    }
  }
`
