import styled from "styled-components"

export const Header = styled.div`
  display: flex;
  background-color: #222;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 15px;

  p {
    font-size: 20px;
    margin: 0 15px;
  }
`

export const Logo = styled.img`
  max-height: 50px;
  max-width: 100px;
  margin-right: 30px;
`

export const Divide = styled.span`
  font-weight: bold;
  ${({ color }) => color && `color: ${color};`}
`
