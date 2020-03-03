import { graphql, Link } from "gatsby"
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
  Role,
  Member,
  MemberPhoto,
  MemberName,
} from "./project.styled"

export default ({ data }) => {
  const project = data.contentstackProjects

  const keys = ["title", "client", "acceptance_url", "production_url", "notes"]

  const keyValues = keys.map(key => ({
    key,
    title: key.replace("_", " "),
    value: project[key],
  }))

  const roles = ["Product Manager", "Designer", "Developer"]

  const byRole = {}

  roles.forEach(role => {
    byRole[role] = []
  })

  project.team_member.forEach(member => {
    const currentMember = member.employee[0]

    member.role_in_project.forEach(role => {
      byRole[role].push(currentMember)
    })
  })

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
            {roles
              .filter(role => byRole[role].length)
              .map(role => (
                <Role>
                  <h2>{role}</h2>
                  {byRole[role].map(member => (
                    <Member to={member.url}>
                      <MemberPhoto src={member.photo.url} />
                      <MemberName>{member.name}</MemberName>
                    </Member>
                  ))}
                </Role>
              ))}
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
        employee {
          name
          photo {
            url
          }
          role
          title
          url
        }
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
