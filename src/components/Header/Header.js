import React from "react"
import { Divide, Header, Logo } from "./header.styled"

const HeaderComponent = ({ siteTitle, company, logo, color }) => (
  <Header>
    <Logo src={logo} />
    <p>{company}</p> <Divide color={color}>\</Divide> <p>{siteTitle}</p>
  </Header>
)

export { HeaderComponent as Header }
