import React from "react"
import { graphql } from "gatsby"
import { Markdown } from "../../components/Markdown"

import { Layout } from "../../components/Layout"

export default ({ data }) => {
  const project = data.contentstackProjects

  return (
    <Layout>
      <div className="container">
        <div>
          <section>
            <div className="blog-title">
              <h2>{project.name}</h2>
            </div>
            <div className="blog-description">
              <Markdown content={project.description} />
            </div>
          </section>
        </div>
      </div>
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
