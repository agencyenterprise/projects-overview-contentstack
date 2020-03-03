import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import { Header } from "./Header"
import "../styles/reset.css"
import "../styles/index.css"

const Layout = ({ children }) => (
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
      console.log("layoutdata", data)

      return (
        <div>
          <Helmet title={data.site.siteMetadata.title} />
          <Header
            siteTitle={data.site.siteMetadata.title}
            company={data.contentstackHeader.title}
            color={data.contentstackHeader.color}
            logo={data.contentstackHeader.logo.url}
          />
          <div
            style={{
              margin: "0 auto",
              maxWidth: 960,
              padding: "0px 1.0875rem 1.45rem",
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </div>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
