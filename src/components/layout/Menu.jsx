import styled from "styled-components";

import {FaChartPie} from 'react-icons/fa';
import {FaTicketAlt} from 'react-icons/fa';
import {FaLightbulb} from 'react-icons/fa';
import {BsFillPeopleFill} from 'react-icons/bs';
import {FaUserTie} from 'react-icons/fa';
import {FaBook} from 'react-icons/fa';
import {IoMdSettings} from 'react-icons/io';
import {FaAward} from 'react-icons/fa';

import ButtonMenu from "../inputs/ButtonMenu";

const StyledMenu = styled.div `
    background-color: ${props => props.theme.backgroundGrey};
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
`

const StyledLine = styled.div `
    background-color: ${props => props.theme.menuButtonHover};
    height: 1px;
    margin: 10px;
`

const StyledTitle = styled.div `
    display: flex;
    flex-flow: row;
    align-items: center;    
    overflow: hidden;
    padding: 0 10px;
    display: flex;
    height: 80px;
`

const StyledText = styled.p`
    font-size: 12px;
    padding-left: 5px;
    color: ${props => props.theme.lightGrey};
`

const StyledLogo = styled.img`
    width: 28px;
    heigth: 28px;
`
const pages = {
    "Overview": <FaChartPie/>,
    "Tickets": <FaTicketAlt/>,
    "Ideas": <FaLightbulb/>,
    "Contacts": <BsFillPeopleFill/>,
    "Agents": <FaUserTie/>,
    "Articles": <FaBook/>,
}

const settingsPages = {
    "Settings": <IoMdSettings/>,
    "Subscription": <FaAward/>
}

function Menu({ checkedPage }) {
    return (
        <StyledMenu>
            <StyledTitle>
                <StyledLogo src="/icon.png" alt="image" />
                <StyledText>Dashboard Kit</StyledText>
            </StyledTitle>
            
            {Object.entries(pages).map(([key, value]) => (
                <a href={"/" + key.toLowerCase()}><ButtonMenu name={key} icon={value} checked={key===checkedPage}></ButtonMenu></a>                    
            ))}

            <StyledLine></StyledLine>

            {Object.entries(settingsPages).map(([key, value]) => ( 
                <a href={"/" + key.toLowerCase()}><ButtonMenu name={key} icon={value} checked={key===checkedPage}></ButtonMenu></a>                    
            ))}

        </StyledMenu>
    )
}

export default Menu;