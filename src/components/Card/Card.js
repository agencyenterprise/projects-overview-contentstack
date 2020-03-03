import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardImage,
  ShortDescription,
} from "./card.styled"

const CardComponent = ({ data }) => {
  console.log(data)

  return (
    <Card>
      <CardHeader>{data.name}</CardHeader>
      <CardContent>
        <CardImage image={data.banner.url} />
        <ShortDescription>{data.short_description}</ShortDescription>
      </CardContent>
    </Card>
  )
}

export { CardComponent as Card }
