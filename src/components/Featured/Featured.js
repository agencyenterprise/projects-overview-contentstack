import React from "react"
import { Featured, Description, Title } from "./featured.styled"
import { Sponsors } from "./Sponsors"
import { Tags } from "./Tags"

const FeaturedComponent = ({ featured }) => (
  <Featured>
    {featured.map(item => {
      if (item.logo) {
        return <Sponsors sponsors={item.logo.sponsors} />
      }

      if (item.description) {
        return (
          <Description
            source={item.description.rich_text_editor}
            escapeHtml={false}
          />
        )
      }

      if (item.tags) {
        return <Tags tags={item.tags} />
      }

      if (item.title) {
        return <Title>{item.title.title_text}</Title>
      }

      return <React.Fragment />
    })}
  </Featured>
)

export { FeaturedComponent as Featured }
