import styled from "styled-components"

export const Header = styled.div`
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  color: #222;
  padding: 10px;

  p {
    font-size: 17px;
    margin: 0 15px;
  }
`

export const Logo = styled.img`
  max-height: 35px;
  max-width: 80px;
  margin-right: 15px;
`

export const Divide = styled.span`
  font-weight: bold;
  ${({ color }) => color && `color: ${color};`}
`
