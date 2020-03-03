import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../../components/Layout"
import { Markdown } from "../../components/Markdown"
import { Banner, Box, Name, Project, ShortDescription } from "./project.styled"

export default ({ data }) => {
  const project = data.contentstackProjects

  console.log(project)

  return (
    <Layout>
      <Project>
        {project.banner && (
          <Banner src={project.banner.url} alt={project.name} />
        )}
        <Name>{project.name}</Name>
        <ShortDescription>{project.short_description}</ShortDescription>
        <Box>
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
