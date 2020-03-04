import styled from "styled-components"
import { Link } from "gatsby"

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Box = styled.div`
  background: #ffffff;
  box-shadow: -7px 8px 16px rgba(55, 70, 95, 0.07);
  padding: 40px;

  @media screen and (max-width: 800px) {
    padding: 15px;
  }
`

export const Name = styled.div`
  text-align: center;
  font-size: 24px;
  margin-bottom: 15px;
  color: #555;
`

export const ShortDescription = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  font-style: italic;
  margin-bottom: 55px;
  color: #555;
`

export const Banner = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 0 auto 45px;
`

export const DetailsContainer = styled.div`
  display: flex;
  margin-top: 35px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const Details = styled(Box)`
  flex: 1;

  &:first-child {
    margin-right: 8px;
  }

  &:last-child {
    margin-left: 8px;
  }

  @media screen and (max-width: 800px) {
    &:first-child {
      margin-right: 0;
    }

    &:last-child {
      margin-left: 0;
      margin-top: 35px;
    }
  }
`

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 20px;
`

export const KeyValue = styled.div`
  display: flex;
  font-size: 14px;
  margin-bottom: 7px;
  color: #222;
  letter-spacing: 0.4px;
  line-height: 16px;
`

export const Key = styled.div`
  font-weight: bold;
  margin-right: 15px;
  width: 140px;
  text-transform: uppercase;
`

export const Value = styled.div`
  flex: 1;
`

export const Role = styled.div``
export const RoleName = styled.h2`
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 15px 0;
  color: ${({ color }) => color || `#222`};
`

export const Member = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 10px;
  text-decoration: none;
  color: #222;
  margin-left: 15px;

  &:hover {
    opacity: 0.8;
  }
`

export const MemberName = styled.div``

export const MemberPhoto = styled.img`
  border-radius: 7px;
  width: 30px;
  margin-right: 10px;
`
