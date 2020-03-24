import React from "react"
import { Grid, Sponsor, Sponsors, Title } from "./sponsors.styled"

const SponsorsComponent = ({ sponsors }) => (
  <Sponsors>
    <Title>Sponsors</Title>
    <Grid>
      {sponsors.map(sponsor => (
        <Sponsor
          src={sponsor.image_url.href}
          alt={sponsor.name}
          title={sponsor.name}
        />
      ))}
    </Grid>
  </Sponsors>
)

export { SponsorsComponent as Sponsors }
