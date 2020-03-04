import React from "react"
import {
  Divide,
  Header,
  HeaderContent,
  Logo,
  MenuItem,
  BlankLink,
} from "./header.styled"

const HeaderComponent = ({ siteTitle, company, logo, color }) => (
  <Header>
    <HeaderContent>
      <div>
        <BlankLink to="/">
          <Logo src={logo} />
          <p>{company}</p> <Divide color={color}>\</Divide> <p>{siteTitle}</p>
        </BlankLink>
      </div>
      <div>
        <MenuItem to="/" activeClassName="active" color={color}>
          Projects
        </MenuItem>
        <MenuItem to="/about" activeClassName="active" color={color}>
          About
        </MenuItem>
      </div>
    </HeaderContent>
  </Header>
)

export { HeaderComponent as Header }
