import styled from "styled-components"

export const Card = styled.div`
  position: relative;
  width: 240.5px;
  margin: 16px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: -2px 2px 6px rgba(58, 70, 93, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 262px;

  span {
    transition: opacity 0.3s ease;
  }

  &:hover {
    transition: box-shadow 0.3s ease-in-out;
    box-shadow: -2px 2px 6px rgba(58, 70, 93, 0.4);

    span {
      transition: opacity 0.3s ease;
      opacity: 1;
    }

    .card-image {
      opacity: 0.6;
    }
  }
`

export const CardHeader = styled.div`
  background-color: #fafbfb;
  font-weight: bold;
  color: #222;
  padding: 15px 5px;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`

export const CardContent = styled.div`
  padding: 10px;
  background-color: white;
  flex: 1;
`

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;

  ${({ image }) => image && `background-image: url('${image}');`}
`

export const ShortDescription = styled.span`
  opacity: 0;
  position: absolute;
  bottom: 0;
  height: 30px;
  background-color: #fafbfb;
  width: calc(100% - 20px);
  left: 0;
  color: #828d99;
  padding: 10px;
  font-size: 12px;
`

export const Heads = styled.span`
  position: absolute;
  opacity: 0;
  z-index: 10;
`

export const Head = styled.div`
  width: 30px;
  height: 30px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50px;
  margin-left: 5px;
  border: 2px solid ${({ color }) => (color ? color : "#222")};

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
