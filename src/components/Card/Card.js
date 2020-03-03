import React from "react"
import { Card, CardContent, CardHeader, CardImage } from "./card.styled"

const CardComponent = ({ data }) => {
  console.log(data)

  return (
    <Card>
      <CardHeader>{data.name}</CardHeader>
      <CardContent>
        <CardImage image={data.banner.url} />
      </CardContent>
    </Card>
  )
}

export { CardComponent as Card }
