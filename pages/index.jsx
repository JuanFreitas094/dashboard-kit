import styled from "styled-components";

const StyledComponent = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
`

function HomePage () {
  return (
    <StyledComponent>
      Dashboard Kit
    </StyledComponent>
  )
}

export default HomePage