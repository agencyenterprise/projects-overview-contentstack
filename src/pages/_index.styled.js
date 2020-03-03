import styled from "styled-components"

export const Welcome = styled.div`
  text-align: center;
  font-size: 24px;
  margin: 35px 0;
  color: #555;
`

export const Cards = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1090px) {
    justify-content: center;
  }
`
