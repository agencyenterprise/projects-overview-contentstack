import React from "react"
import { Tags, Tag } from "./tags.styled"

const TagsComponent = ({ tags }) => (
  <Tags>
    {tags.tag.map(tag => (
      <Tag>{tag}</Tag>
    ))}
  </Tags>
)

export { TagsComponent as Tags }
