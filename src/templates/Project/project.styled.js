import styled from "styled-components"

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Box = styled.div`
  background: #ffffff;
  box-shadow: -7px 8px 16px rgba(55, 70, 95, 0.07);
  padding: 40px;
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
  font-style: italic;
  margin-bottom: 35px;
  color: #555;
`

export const Banner = styled.img`
  max-width: 600px;
  max-height: 450px;
  margin: 0 auto 25px;
`

export const DetailsContainer = styled.div`
  display: flex;
  margin-top: 35px;
`

export const Details = styled(Box)`
  flex: 1;

  &:first-child {
    margin-right: 16px;
  }

  &:last-child {
    margin-left: 16px;
  }
`

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 18px;
`

export const KeyValue = styled.div`
  display: flex;
  font-size: 14px;
  margin-bottom: 7px;
  color: #222;
  letter-spacing: 0.2px;
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
