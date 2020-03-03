import React from "react"
import { Card } from "./card.styled"

const CardComponent = ({ data }) => {
  console.log("data", data)
  return <Card>{data.name}</Card>
}

export { CardComponent as Card }
