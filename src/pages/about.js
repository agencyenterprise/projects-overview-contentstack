import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { Markdown } from "../components/Markdown"
import { Box } from "../templates/Project/project.styled"
import { About, Logo, Name } from "./_about.styled"

export default ({ data }) => {
  const { logo, color, company_name, description } = data.contentstackMeta

  return (
    <Layout>
      <About>
        <Logo src={logo.url} />
        <Name color={color}>{company_name}</Name>
        <Box>
          <Markdown content={description} />
        </Box>
      </About>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutQuery {
    contentstackMeta {
      color
      company_name
      description
      logo {
        url
      }
    }
  }
`
