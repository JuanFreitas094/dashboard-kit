import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.theme.primary};
    padding: 15px 20px;
    font-family: inherit;
    border: none;
    color: ${props => props.theme.white};
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s;

    :hover {
        background-color: ${props => props.theme.primaryHover};
    }
`

export default Button