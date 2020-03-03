import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import { Header } from "../Header"
import { Content, Layout } from "./layout.styled"

// reset should come before index, be careful with auto-organization
import "../../styles/reset.css"
import "../../styles/index.css"

const LayoutComponent = ({ children }) => (
  <StaticQuery
    query={graphql`
      query headerQueryAndLayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
        contentstackMeta {
          color
          company_name
          small_logo {
            url
          }
        }
      }
    `}
    render={data => {
      const staticMeta = data.site.siteMetadata
      const meta = data.contentstackMeta

      return (
        <Layout>
          <Helmet title={staticMeta.title} />
          <Header
            siteTitle={staticMeta.title}
            company={meta.company_name}
            color={meta.color}
            logo={meta.small_logo.url}
          />
          <Content>{children}</Content>
        </Layout>
      )
    }}
  />
)

LayoutComponent.propTypes = {
  children: PropTypes.any,
}

export { LayoutComponent as Layout }
