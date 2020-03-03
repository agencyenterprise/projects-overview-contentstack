import React from "react"
import { Markdown } from "./markdown.styled"

const MarkdownComponent = ({ content }) => <Markdown source={content} />

export { MarkdownComponent as Markdown }
