import PaginationTable from "../src/components/layout/table/PaginationTable";
import Navbar from "../src/components/layout/Navbar";
import Menu from "../src/components/layout/Menu";
import styled from "styled-components";

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

const pageName = "Tickets";


function TicketsPage() {
    return (
        <StyledComponent>
            <StyledMenu><Menu checkedPage={pageName}/></StyledMenu>
            <StyledContent>
                <Navbar title={pageName} />
                <StyledPaginationTable>
                    <PaginationTable/>
                </StyledPaginationTable>
            </StyledContent>   
        </StyledComponent>
    )
}

export default TicketsPage