import styled from "styled-components"

export const Welcome = styled.div`
  text-align: center;
  font-size: 24px;
  margin-bottom: 35px;
  color: #555;
`

export const Cards = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 1090px) {
    justify-content: center;
  }
`
