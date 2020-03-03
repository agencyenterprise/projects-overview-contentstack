import React from "react"
import { graphql } from "gatsby"
import { Markdown } from "../../components/Markdown"

import { Layout } from "../../components/Layout"
import { Project, Box } from "./project.styled"

export default ({ data }) => {
  const project = data.contentstackProjects

  return (
    <Layout>
      <Project>
        <Box>
          <h2>{project.name}</h2>
          <Markdown content={project.description} />
        </Box>
      </Project>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectByID($id: String!) {
    contentstackProjects(id: { eq: $id }) {
      name
      id
      url
      title
      short_description
      team_member {
        role_in_project
      }
      notes
      description
      banner {
        url
      }
    }
  }
`
