import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../../components/Layout"
import { Markdown } from "../../components/Markdown"
import {
  Banner,
  Box,
  Details,
  DetailsContainer,
  Name,
  Project,
  ShortDescription,
  Title,
  KeyValue,
  Key,
  Value,
} from "./project.styled"

export default ({ data }) => {
  const project = data.contentstackProjects

  console.log(project)

  const keys = ["title", "client", "acceptance_url", "production_url", "notes"]

  const keyValues = keys.map(key => ({
    key,
    title: key.replace("_", " "),
    value: project[key],
  }))

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
        <DetailsContainer>
          <Details>
            <Title>Details</Title>
            {keyValues.map(keyValue => (
              <KeyValue>
                <Key>{keyValue.title}:</Key>
                <Value>{keyValue.value}</Value>
              </KeyValue>
            ))}
          </Details>
          <Details>
            <Title>Team</Title>
          </Details>
        </DetailsContainer>
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
      client
      acceptance_url
      production_url
      description
      banner {
        url
      }
    }
  }
`
