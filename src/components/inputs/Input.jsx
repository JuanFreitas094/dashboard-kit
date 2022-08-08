import styled from "styled-components";
import InputWithIcon from "./InputWithIcon";
import H5 from "../typography/H5";

const InputContainer = styled.div`
    width: 100%;
    position: relative;
`

const StyledLabel = styled.p`
    font-size: 12px;
    text-align: left;
    color: ${props => props.theme.grey};
    font-weight: bold;
    margin-bottom: 10px;
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

const StyledTitle = styled.div`
    display:flex;
`

function Input ({ label, placeholder, showPass, ...props }) {
    return (
        <InputContainer>
            <StyledTitle>
                <StyledLabel>{label}</StyledLabel>
                {showPass? <a href="#"><H5>Forgot password?</H5></a> : null}
            </StyledTitle>
            {showPass? <InputWithIcon placeholder={placeholder}/> 
            : <StyledInput placeholder={placeholder}/>}
        </InputContainer>
    )
}

export default Input