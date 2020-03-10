import React from "react"
import { Video } from "./video.styled"

const EmbeddedVideo = ({ videoId }) => (
  <Video>
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </Video>
)
export { EmbeddedVideo as Video }
