import PaginationTable from "../src/components/layout/table/PaginationTable";
import Navbar from "../src/components/layout/Navbar";
import Menu from "../src/components/layout/Menu";
import styled from "styled-components";

import {BiSortUp} from 'react-icons/bi';
import {FaFilter} from 'react-icons/fa'

const StyledComponent = styled.div `
    display: flex;
    justify-content: flex-start;
    width: 100%;
    
    background-color: ${props => props.theme.backgroundMain};
`
const StyledContent = styled.div`
    display: block; 
    width: 80%;
`

const StyledMenu = styled.div`
    width: 20%;
`

const WIDHT_BREAK = '700px';
const StyledPaginationTable = styled.div`
    background-color: white;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.menuLineColor};
    margin: 30px;

    @media (max-width: ${WIDHT_BREAK}) {
        width: 100%;
        padding:0px;
        margin:0px;
    }    

`
const StyledNavbar = styled.div`
    display: flex;
    background-color: transparent;
    height: 80px;
    align-items: center; 
    margin-left: auto;  
    overflow: hidden;
    margin: 0 20px;
`

const StyledTitle = styled.span `
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: ${props => props.theme.black};
`

const StyledButton = styled.button `
    background: transparent;
    border: none;
    padding 0 5px;
    color: ${props => props.theme.grey}; 
`

const StyledButtons = styled.div `
    padding: 20px;
    display: flex;
    align-items: center;
    margin-left: auto;
`

const StyledText = styled.p `
    color: ${props => props.theme.black};
    font-size: 10px;
    font-weight: 600;
`

function TicketsPage() {
    return (
        <StyledComponent>
            <StyledMenu><Menu /></StyledMenu>
            <StyledContent>
                <Navbar />
                <StyledPaginationTable>
                    <StyledNavbar>
                        <StyledTitle>All tickets</StyledTitle>
                        <StyledButtons>
                            <StyledButton><BiSortUp /></StyledButton>
                            <StyledText>Sort</StyledText> 
                            <StyledButton><FaFilter /></StyledButton>
                            <StyledText>Filter</StyledText>  
                        </StyledButtons> 
                    </StyledNavbar>
                    <PaginationTable/>
                </StyledPaginationTable>
            </StyledContent>   
        </StyledComponent>
    )
}

export default TicketsPage