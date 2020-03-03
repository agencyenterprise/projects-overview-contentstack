import styled from "styled-components"

export const Card = styled.div`
  border: 1px solid #222;
  border-radius: 3px;
  width: 280px;
  margin: 16px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    transition: box-shadow 0.3s ease-in-out;
    box-shadow: 5px 5px 10px 0px rgba(112, 112, 112, 0.5);
  }
`

export const CardHeader = styled.div`
  background-color: #222;
  color: white;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
`

export const CardContent = styled.div`
  padding: 10px;
`

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  ${({ image }) => image && `background-image: url('${image}');`}
`
