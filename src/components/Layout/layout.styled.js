import styled from "styled-components"

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f9fafc;
`

export const Content = styled.div`
  max-width: 1090px;
  width: calc(100% - 32px);
  flex: 1;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 35px 16px;
`
