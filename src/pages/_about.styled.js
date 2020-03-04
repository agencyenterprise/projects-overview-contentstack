import styled from "styled-components"

export const About = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Logo = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 45px;
`

export const Name = styled.div`
  color: ${({ color }) => color || "#222"};

  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin-bottom: 50px;
`
