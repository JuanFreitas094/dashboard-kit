import Navbar from "../src/components/layout/Navbar";
import Menu from "../src/components/layout/Menu";
import styled from "styled-components";
import OverviewCard from "../src/components/layout/OverviewCard";
import TrendsCard from "../src/components/layout/TrendsCard";
import {GoPlus} from "react-icons/go";
import Tag from "../src/components/inputs/Tag";
import CardsTitle from "../src/components/layout/CardsTitle";
import Chart from "../src/components/layout/Chart";

const StyledComponent = styled.div `
    display: flex;
    width: 100%;
    
    background-color: ${props => props.theme.backgroundMain};
`
const StyledContent = styled.div`
    width: 80%;
`

const StyledMenu = styled.div`
    width: 20%;
`

const StyledOverviewCards = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
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
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
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
    padding-left: 20px; 
`

const StyledTd2 = styled.td`
    text-align: end;   
    padding-right: 20px;
    justify-content: flex-end; 
`

const StyledDiv = styled.div`
    display: flex;  
    justify-content: end;
    width: 100%;
`

const StyledTicketTable = styled.p`        
    font-weight: 600;
    font-size: 12px;
`

const StyledCheckboxText = styled.p`
    font-weight: 600;
    font-size: 12px;
    padding: 0 15px;
`

const StyledTicketTableDesc = styled.p`
    font-size: 12px;
    color: ${props => props.theme.lightGrey};
` 

const StyledButton = styled.button`
    border: none;
    color: ${props => props.theme.grey};
    background-color: ${props => props.theme.menuLineColor};
    padding: 3px;
    padding-bottom: 1px;
    border-radius: 5px;
`

const StyledDivTrendsCard = styled.div`
    display: flex;
    align-items: stretch;
    height: 100%;
`

const StyledCheckbox = styled.div`
    display: flex;
    flex-direction: row;
`

const pageName = "Overview";

function OverviewPage() {
    return (
        <StyledComponent>
            <StyledMenu><Menu checkedPage={pageName}/></StyledMenu>
            <StyledContent>
                <Navbar title={pageName}/>
                <StyledOverviewCards>
                    <div><OverviewCard title="Unresolved" number="60" /></div>
                    <div><OverviewCard title="Overdue" number="16" /></div>
                    <div><OverviewCard title="Open" number="43" /></div>
                    <div><OverviewCard title="On hold" number="64" /></div>
                </StyledOverviewCards>
                <StyledTrends>
                    <StyledChart>
                        <CardsTitle title="Today's trends" description="as of 25 May 2019, 09:41 PM" link="" />
                        <Chart/>
                    </StyledChart>
                    <StyledTrendsCards>
                        <StyledDivTrendsCard><TrendsCard title="Resolved" description="449" border={true}/></StyledDivTrendsCard>
                        <StyledDivTrendsCard><TrendsCard title="Received" description="426" border={true}/></StyledDivTrendsCard>
                        <StyledDivTrendsCard><TrendsCard title="Average first response time" description="33m" border={true}/></StyledDivTrendsCard>
                        <StyledDivTrendsCard><TrendsCard title="Average response time" description="3h 8m" border={true}/></StyledDivTrendsCard>
                        <StyledDivTrendsCard><TrendsCard title="Resolution within SLA" description="94%" border={false}/></StyledDivTrendsCard>
                    </StyledTrendsCards>
                </StyledTrends>
                <StyledTicketsTasks>
                    <StyledTasks>
                        <CardsTitle title="Unresolved tickets" description="Group: Support" link="View details" />
                        <StyledTable>
                            <tbody>
                                <StyledTrRow>
                                    <StyledTd>
                                        <StyledTicketTable>Waiting on Feature Request</StyledTicketTable>
                                    </StyledTd>
                                    <StyledTd2>
                                        <StyledTicketTableDesc>4238</StyledTicketTableDesc>
                                    </StyledTd2>
                                </StyledTrRow>
                                <StyledTrRow>
                                    <StyledTd>
                                        <StyledTicketTable>Awaiting Customer Response</StyledTicketTable>
                                    </StyledTd>
                                    <StyledTd2>
                                        <StyledTicketTableDesc>1005</StyledTicketTableDesc>
                                    </StyledTd2>
                                </StyledTrRow>
                                <StyledTrRow>
                                    <StyledTd>
                                        <StyledTicketTable>Awaiting Developer Fix</StyledTicketTable>
                                    </StyledTd>
                                    <StyledTd2>
                                        <StyledTicketTableDesc>914</StyledTicketTableDesc>
                                    </StyledTd2>
                                </StyledTrRow>
                                <StyledTrRow>
                                    <StyledTd>
                                        <StyledTicketTable>Pending</StyledTicketTable>
                                    </StyledTd>
                                    <StyledTd2>
                                        <StyledTicketTableDesc>281</StyledTicketTableDesc>
                                    </StyledTd2>
                                </StyledTrRow>
                            </tbody>
                        </StyledTable>
                    </StyledTasks>
                    <StyledTickets>
                    <CardsTitle title="Tasks" description="Today" link="View all" />
                    <StyledTable>
                            <tbody>
                                <StyledTrRow>
                                    <StyledTd>
                                        <StyledCheckbox>
                                            <input type="checkbox"/>
                                            <StyledCheckboxText>Create new task</StyledCheckboxText>
                                        </StyledCheckbox>
                                    </StyledTd>
                                    <StyledTd2>
                                        <StyledButton><GoPlus /></StyledButton>
                                    </StyledTd2>
                                </StyledTrRow>
                                <StyledTrRow>
                                    <StyledTd>
                                        <StyledCheckbox>
                                            <input type="checkbox"/>
                                            <StyledCheckboxText>Finish ticket update</StyledCheckboxText>
                                        </StyledCheckbox>
                                    </StyledTd>
                                    <StyledTd2>
                                        <StyledDiv><Tag priority="High"/></StyledDiv>
                                    </StyledTd2>
                                </StyledTrRow>
                                <StyledTrRow>
                                    <StyledTd>                                        
                                        <StyledCheckbox> 
                                            <input type="checkbox"/>
                                            <StyledCheckboxText>Create new ticket example</StyledCheckboxText>
                                        </StyledCheckbox> 
                                    </StyledTd>
                                    <StyledTd2>
                                        <StyledDiv><Tag priority="Normal"/></StyledDiv>
                                    </StyledTd2>
                                </StyledTrRow>
                                <StyledTrRow>
                                    <StyledTd> 
                                        <StyledCheckbox>  
                                            <input type="checkbox"/>                                     
                                            <StyledCheckboxText>Update ticket report</StyledCheckboxText>
                                        </StyledCheckbox>
                                    </StyledTd>
                                    <StyledTd2>
                                    <StyledDiv><Tag priority="Low"/></StyledDiv>
                                    </StyledTd2>
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