import styled from "styled-components";
import LoginPage from "./login";

const StyledComponent = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
`

function HomePage () {
  return (
    <StyledComponent>
      <LoginPage />
    </StyledComponent>
  )
}

export default HomePage