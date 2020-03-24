import styled from "styled-components"

export const Sponsors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
`

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Sponsor = styled.img`
  max-width: 80px;
  max-height: 30px;
  margin: 0 8px;
`

export const Title = styled.div`
  margin-bottom: 12px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #b2b3b5;

  &:before,
  &:after {
    content: "";
    display: inline-block;
    width: 80px;
    height: 1px;
    background-color: #ebebeb;
    vertical-align: middle;
  }

  &:before {
    margin-right: 16px;
  }

  &:after {
    margin-left: 16px;
  }
`
