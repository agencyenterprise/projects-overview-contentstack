import styled from "styled-components"
import Markdown from "react-markdown"

export const Featured = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  text-align: center;
  font-size: 24px;
  margin: 24px 0 12px;
  color: #555;
`

export const Description = styled(Markdown)`
  text-align: center;
  font-size: 14px;
  margin: 12px 0 24px;
  color: #555;
`
