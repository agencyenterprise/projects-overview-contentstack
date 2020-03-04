import React from "react"
import { Divide, Header, HeaderContent, Logo, MenuItem } from "./header.styled"

const HeaderComponent = ({ siteTitle, company, logo, color }) => (
  <Header>
    <HeaderContent>
      <div>
        <Logo src={logo} />
        <p>{company}</p> <Divide color={color}>\</Divide> <p>{siteTitle}</p>
      </div>
      <div>
        <MenuItem to="/">Projects</MenuItem>
        <MenuItem to="/">About</MenuItem>
      </div>
    </HeaderContent>
  </Header>
)

export { HeaderComponent as Header }
