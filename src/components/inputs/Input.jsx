import styled from "styled-components";

const InputContainer = styled.div`
    width: 100%
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

function Input ({ label, placeholder, ...props }) {
    return (
        <InputContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput placeholder={placeholder} {...props}/>
        </InputContainer>
    )
}

export default Input