import { useState } from "react"
import styled from "styled-components"

const StyledComponent = styled.div `
  position: relative;
  width: 100%;
`

const StyledButton = styled.button`
  position:absolute;
  top:0; right:0;
  z-index:10;
  border:none;
  background:transparent;
  outline:none;
  padding-top: 4px;
  color: ${props => props.theme.grey};
  padding: 15px 20px;   
  cursor: pointer;    
`

const StyledInput = styled.input`
    width: 100%;
    border: 1px solid ${props => props.theme.inputBorder};
    background-color: ${props => props.theme.inputBackground};
    
    ::placeholder { 
        opacity: 0.4;
        font-family: 'Mulish', sans-serif;
    }
    padding: 15px 20px; 
    border-radius: 8px;
    box-sizing: border-box;
`

function InputWithIcon ({placeholder}) {
  const [eyeSlashed, setEye] = useState(true);

  const handleClick = () => {
    setEye(!eyeSlashed);
  }

  return (
    <StyledComponent>
      {eyeSlashed? <StyledInput type="password" placeholder={placeholder}/> : 
      <StyledInput type="text" placeholder={placeholder}/>}      
      <StyledButton onClick={handleClick}>
        {eyeSlashed? <i class="far fa-eye-slash" id="togglePassword" ></i> : 
        <i class="far fa-eye" id="togglePassword" ></i>}
      </StyledButton>
    </StyledComponent>
  )
}

export default InputWithIcon