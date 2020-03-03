import styled from "styled-components"

export const Card = styled.div`
  position: relative;
  border: 1px solid #222;
  border-radius: 3px;
  width: 280px;
  margin: 16px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  span {
    transition: opacity 0.3s ease;
  }

  &:hover {
    transition: box-shadow 0.3s ease-in-out;
    box-shadow: 5px 5px 10px 0px rgba(112, 112, 112, 0.5);

    span {
      transition: opacity 0.3s ease;
      opacity: 1;
    }
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

export const ShortDescription = styled.span`
  opacity: 0;
  position: absolute;
  bottom: 0;
  height: 40px;
  background-color: #2222229c;
  width: calc(100% - 20px);
  left: 0;
  color: white;
  padding: 10px;
`

export const Heads = styled.span`
  position: absolute;
  opacity: 0;
`

export const Head = styled.div`
  width: 30px;
  height: 30px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50px;
  margin-left: 5px;
  border: 1px solid ${({ color }) => (color ? color : "#222")};

  ${({ image }) => image && `background-image: url('${image}');`}
`

export const Role = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 5px;

  svg {
    border-radius: 50%;
    background-color: #222;
    height: 15px;
    width: 15px !important;
    padding: 7px;
    background-color: ${({ color }) => (color ? color : "#222")};
    color: white;
  }
`
