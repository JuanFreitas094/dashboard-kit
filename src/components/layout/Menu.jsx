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
    font-size: 14px;
    padding-left: 5px;
    color: ${props => props.theme.lightGrey};
`

const StyledLogo = styled.img`
    width: 28px;
    heigth: 28px;
`

function Menu() {
    return (
        <StyledMenu>
            <StyledTitle>
                <StyledLogo src="/icon.png" alt="image" />
                <StyledText>Dashboard Kit</StyledText>
            </StyledTitle>

            <ButtonMenu name="Overview" icon={<FaChartPie/>} />
            <ButtonMenu name="Tickets" icon={<FaTicketAlt/>} />
            <ButtonMenu name="Ideas" icon={<FaLightbulb/>} />
            <ButtonMenu name="Contacts" icon={<BsFillPeopleFill/>} />
            <ButtonMenu name="Agents" icon={<FaUserTie/>} />
            <ButtonMenu name="Articles" icon={<FaBook/>} />
            
            <StyledLine></StyledLine>

            <ButtonMenu name="Settings" icon={<IoMdSettings/>} />
            <ButtonMenu name="Subscription" icon={<FaAward/>} />
        </StyledMenu>
    )
}

export default Menu;