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
        contentstackHeader {
          title
          color
          logo {
            url
          }
        }
      }
    `}
    render={data => {
      return (
        <Layout>
          <Helmet title={data.site.siteMetadata.title} />
          <Header
            siteTitle={data.site.siteMetadata.title}
            company={data.contentstackHeader.title}
            color={data.contentstackHeader.color}
            logo={data.contentstackHeader.logo.url}
          />
          <Content>{children}</Content>
        </Layout>
      )
    }}
  />
)

LayoutComponent.propTypes = {
  children: PropTypes.object,
}

export { LayoutComponent as Layout }
