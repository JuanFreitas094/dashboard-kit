import Navbar from "../src/components/layout/Navbar";
import Menu from "../src/components/layout/Menu"

import styled from "styled-components";

const StyledComponent = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
`

function HomePage () {
  return (
    <StyledComponent>
      <Menu />
      <Navbar />
    </StyledComponent>
  )
}

export default HomePage