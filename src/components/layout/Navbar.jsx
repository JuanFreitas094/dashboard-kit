import styled from "styled-components";

import {BiSearch} from 'react-icons/bi';
import {IoMdNotifications} from 'react-icons/io'

const StyledNavbar = styled.div`
    display: flex;
    background-color: transparent;
    height: 80px;
    align-items: center;
    overflow: hidden;
    width: 100%;
`

const StyledTitle = styled.span `
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    padding: 0 20px; 
    color: ${props => props.theme.black};
`

const StyledButton = styled.button `
    background: transparent;
    border: none;
    padding 0 5px;
    color: ${props => props.theme.grey}; 
`

const StyledImage = styled.img `
    border-radius: 50%;
    padding: 0 10px;
    width: 32px;
    height: 32px;
`

const StyledButtons = styled.div `
    padding: 20px;
`

const StyledDivider = styled.p`
    font-size: 20px;
    padding-right: 20px;
    text-align: center;
    color: ${props => props.theme.grey};
`

const StyledText = styled.p `
    color: ${props => props.theme.black};
    font-size: 10px;
    font-weight: 600;
`

function Navbar({ title }) {
    return (
        <StyledNavbar>
            <StyledTitle>{ title }</StyledTitle>
            <StyledButtons>
                <StyledButton><BiSearch /></StyledButton>
                <StyledButton><IoMdNotifications /></StyledButton>
            </StyledButtons>
            <StyledDivider>|</StyledDivider>
            <StyledText>Nome Sobrenome</StyledText>  
            <StyledImage src="avatar.png"></StyledImage>     
        </StyledNavbar>
    )
}

export default Navbar