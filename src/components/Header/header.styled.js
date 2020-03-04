import styled from "styled-components"
import { Link } from "gatsby"

export const Header = styled.div`
  display: flex;
  background-color: #fff;
  color: #222;

  p {
    font-size: 14px;
    margin: 0 10px;

    @media screen and (max-width: 480px) {
      display: none;
    }
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 10px;
  max-width: 1090px;
  width: calc(100% - 32px);
  margin: 0 auto;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    margin: 0 16px;
  }
`

export const Logo = styled.img`
  max-height: 35px;
  max-width: 80px;
  margin-right: 10px;
`

export const Divide = styled.span`
  font-weight: bold;
  ${({ color }) => color && `color: ${color};`}

  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const MenuItem = styled(Link)`
  text-decoration: none;
  color: #222;
  margin-left: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 14px;
  padding: 4px 0;
  border-bottom: 1px solid transparent;

  &:hover {
    opacity: 0.8;
  }

  &.active {
    font-weight: 900;
    border-color: ${({ color }) => color};
    color: ${({ color }) => color};
  }
`
