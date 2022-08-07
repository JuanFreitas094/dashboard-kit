import Navbar from "../src/components/layout/Navbar";
import Menu from "../src/components/layout/Menu";
import styled from "styled-components";
import OverviewCard from "../src/components/layout/OverviewCard";
import TrendsCard from "../src/components/layout/TrendsCard";
import {GoPlus} from "react-icons/go";
import Tag from "../src/components/inputs/Tag";

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

const StyledOverviewCards = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
`

const StyledTrends = styled.div`
    display: flex;
    background-color: white;
    margin: 20px;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.grey};
`

const StyledChart = styled.div` 
    width: 100%;
`

const StyledTrendsCards = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
`

const StyledTicketsTasks = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledTasks = styled.div`
    background-color: white;
    width: 49%;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.grey};
`

const StyledTickets = styled.div`
    background-color: white;    
    width: 49%;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.grey};
`

const StyledTrRow = styled.tr`
    border-bottom: 1px solid ${props => props.theme.menuLineColor};
`

const StyledTable = styled.table`
    border-collapse: collapse;
    border-spacing: 50px 0;
    text-align: left;
    width: 100%;
`

const StyledTd = styled.td`
    padding: 15px;    
`

const StyledTicketTable = styled.p`        
    font-weight: 600;
    font-size: 12px;
`

const StyledTicketTableDesc = styled.p`
    font-size: 12px;
    color: ${props => props.theme.lightGrey};
` 

const StyledButton = styled.button`
    border: none;
    color: ${props => props.theme.grey};
    padding: 3px;
    padding-bottom: 1px;
    border-radius: 5px;
`
const pageName = "Overview";

function OverviewPage() {
    return (
        <StyledComponent>
            <StyledMenu><Menu checkedPage={pageName}/></StyledMenu>
            <StyledContent>
                <Navbar title={pageName}/>
                <StyledOverviewCards>
                    <OverviewCard title="Unresolved" number="60" />
                    <OverviewCard title="Overdue" number="16" />
                    <OverviewCard title="Open" number="43" />
                    <OverviewCard title="On hold" number="64" />
                </StyledOverviewCards>
                <StyledTrends>
                    <StyledChart></StyledChart>
                    <StyledTrendsCards>
                        <TrendsCard title="Resolved" description="449"/>
                        <TrendsCard title="Received" description="426"/>
                        <TrendsCard title="Average first response time" description="33m"/>
                        <TrendsCard title="Average response time" description="3h 8m"/>
                        <TrendsCard title="Resolution within SLA" description="94%"/>
                    </StyledTrendsCards>
                </StyledTrends>
                <StyledTicketsTasks>
                    <StyledTasks>
                        <StyledTable>
                            <tbody>
                                <StyledTrRow>
                                    <StyledTd>
                                        <StyledTicketTable>Waiting on Feature Request</StyledTicketTable>
                                    </StyledTd>
                                    <StyledTd>
                                        <StyledTicketTableDesc>4238</StyledTicketTableDesc>
                                    </StyledTd>
                                </StyledTrRow>
                                <StyledTrRow>
                                    <StyledTd>
                                        <StyledTicketTable>Awaiting Customer Response</StyledTicketTable>
                                    </StyledTd>
                                    <StyledTd>
                                        <StyledTicketTableDesc>1005</StyledTicketTableDesc>
                                    </StyledTd>
                                </StyledTrRow>
                                <StyledTrRow>
                                    <StyledTd>
                                        <StyledTicketTable>Awaiting Developer Fix</StyledTicketTable>
                                    </StyledTd>
                                    <StyledTd>
                                        <StyledTicketTableDesc>914</StyledTicketTableDesc>
                                    </StyledTd>
                                </StyledTrRow>
                                <StyledTrRow>
                                    <StyledTd>
                                        <StyledTicketTable>Pending</StyledTicketTable>
                                    </StyledTd>
                                    <StyledTd>
                                        <StyledTicketTableDesc>281</StyledTicketTableDesc>
                                    </StyledTd>
                                </StyledTrRow>
                            </tbody>
                        </StyledTable>
                    </StyledTasks>
                    <StyledTickets>
                    <StyledTable>
                            <tbody>
                                <StyledTrRow>
                                    <StyledTd>
                                        <StyledTicketTableDesc>Create new task</StyledTicketTableDesc>
                                    </StyledTd>
                                    <StyledTd>
                                        <StyledButton><GoPlus /></StyledButton>
                                    </StyledTd>
                                </StyledTrRow>
                                <StyledTrRow>
                                    <StyledTd>
                                        <StyledTicketTable>Finish ticket update</StyledTicketTable>
                                    </StyledTd>
                                    <StyledTd>
                                        <Tag priority="High"/>
                                    </StyledTd>
                                </StyledTrRow>
                                <StyledTrRow>
                                    <StyledTd>
                                        <StyledTicketTable>Create new ticket example</StyledTicketTable>
                                    </StyledTd>
                                    <StyledTd>
                                        <Tag priority="Normal"/>
                                    </StyledTd>
                                </StyledTrRow>
                                <StyledTrRow>
                                    <StyledTd>
                                        <StyledTicketTable>Update ticket report</StyledTicketTable>
                                    </StyledTd>
                                    <StyledTd>
                                        <Tag priority="Low"/>
                                    </StyledTd>
                                </StyledTrRow>
                            </tbody>
                        </StyledTable>
                    </StyledTickets>
                </StyledTicketsTasks>
            </StyledContent>   
        </StyledComponent>
    )
}

export default OverviewPage