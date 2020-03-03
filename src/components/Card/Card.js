import { faCode, faPalette, faTasks } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardImage,
  Head,
  Heads,
  Role,
  ShortDescription,
} from "./card.styled"

const roleIcon = {
  "Product Manager": faTasks,
  Designer: faPalette,
  Developer: faCode,
}

const CardComponent = ({ color, data }) => {
  const roles = ["Product Manager", "Designer", "Developer"]

  const byRole = {}

  roles.forEach(role => {
    byRole[role] = []
  })

  data.team_member.forEach(member => {
    const currentMember = member.employee[0]

    member.role_in_project.forEach(role => {
      byRole[role].push(currentMember)
    })
  })

  const banner = data.banner && data.banner.url

  return (
    <Card>
      <CardHeader>{data.name}</CardHeader>
      <CardContent>
        <Heads>
          {roles.map(role => {
            if (!byRole[role].length) return <React.Fragment key={role} />

            return (
              <Role key={role} color={color}>
                <FontAwesomeIcon icon={roleIcon[role]} />
                {byRole[role].map(member => (
                  <Head
                    key={member.photo.url}
                    color={color}
                    image={member.photo.url}
                  />
                ))}
              </Role>
            )
          })}
        </Heads>
        {banner && <CardImage className="card-image" image={banner} />}
        <ShortDescription>{data.short_description}</ShortDescription>
      </CardContent>
    </Card>
  )
}

export { CardComponent as Card }
