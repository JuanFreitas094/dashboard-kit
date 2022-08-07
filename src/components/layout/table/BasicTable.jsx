import styled from "styled-components";
import MOCK_DATA from '../../../../public/MOCK_DATA.json';
import { BiDotsVerticalRounded } from 'react-icons/bi'

const StyledTable = styled.table`
    padding: 10px;
    border-collapse: collapse;
    border-spacing: 50px 0;
    text-align: left;
    width: 100%;
    margin: 2.5rem;
`

const StyledImg = styled.img`
    border-radius: 50%;
    padding: 0 10px;
    width: 32px;
    height: 32px;
`

const StyledTicketInfo = styled.div `
    display: flex;
    align-items: center;
`

const StyledInfo = styled.div`
    display: block;
`

const StyledTicketTextBlock = styled.div `
    display: block;    
    text-align: left;
    padding: 10px;
`

const StyledTextMain = styled.p `
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
`

const StyledText = styled.p `
    color: ${props => props.theme.tableSubText};
    font-size: 12px;
`

const StyledHeader = styled.th`
    font-size: 14px;
    color: ${props => props.theme.grey};
    border-bottom: 1px solid ${props => props.theme.menuLineColor};
`

const StyledTHead = styled.thead`
    line-height: 60px;
`

const StyledTrRow = styled.tr`
    border-bottom: 1px solid ${props => props.theme.menuLineColor};
`

const StyledButton = styled.button`
    background: transparent;
    font-size: 14px;
    border: none;
    padding 0 5px;
    color: ${props => props.theme.grey}; 
`

import { useTable } from 'react-table';
import {COLUMNS} from './Columns';
import { useMemo } from "react";

function BasicTable() {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance

    return (
        <StyledTable {...getTableProps()}>
            <StyledTHead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <StyledHeader {...column.getHeaderProps()}>{column.render('Header')}</StyledHeader>
                        ))}
                    </tr>
                ))}
            </StyledTHead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    const cells = row.cells
                    const ticketDetails = cells[0].value;
                    const customerName = cells[1].value;
                    const ticketDate = cells[2].value;
                    const priority = cells[3].value;
                    return (
                        <StyledTrRow>
                            <>
                                <td>
                                    <StyledTicketInfo>
                                        <StyledImg src={ticketDetails['Image']} />
                                        <StyledTicketTextBlock>
                                            <StyledTextMain>{ticketDetails['Text']}</StyledTextMain>
                                            <StyledText>{ticketDetails['Last updated']}</StyledText>
                                        </StyledTicketTextBlock>
                                    </StyledTicketInfo>
                                </td>
                                <td>
                                    <StyledInfo>
                                        <StyledTextMain>{customerName['Name']}</StyledTextMain>
                                        <StyledText>{customerName['Last updated']}</StyledText>
                                    </StyledInfo>
                                </td>
                                <td>
                                    <StyledInfo>
                                        <StyledTextMain>{ticketDate['Date']}</StyledTextMain>
                                        <StyledText>{ticketDate['Time']}</StyledText>
                                    </StyledInfo>
                                </td>
                                <td>{priority}</td>
                                <td><StyledButton> <BiDotsVerticalRounded /> </StyledButton></td>
                            </>
                        </StyledTrRow>
                    )
                })};
            </tbody>
        </StyledTable>
    )
    // return (
    //     <StyledTable>
    //         <StyledTHead>
    //             <tr>
    //                 <StyledHeader>Ticket details</StyledHeader>  
    //                 <StyledHeader>Customer name</StyledHeader> 
    //                 <StyledHeader>Date</StyledHeader> 
    //                 <StyledHeader>Priority</StyledHeader> 
    //                 <StyledHeader></StyledHeader>
    //             </tr> 
    //         </StyledTHead>
    //         <tbody>
    //             {MOCK_DATA.map((item) => {      
    //                 const ticketDetails = item['Ticket details'];
    //                 const customerName = item['Customer name'];
    //                 const ticketDate = item['Date'];
    //                 const priority = item['Priority'];
    //                 return (
    //                     <StyledTrRow>
    //                         <>
    //                             <td>
    //                                 <StyledTicketInfo>
    //                                     <StyledImg src={ticketDetails['Image']} />
    //                                     <StyledTicketTextBlock>
    //                                         <StyledTextMain>{ticketDetails['Text']}</StyledTextMain>
    //                                         <StyledText>{ticketDetails['Last updated']}</StyledText>
    //                                     </StyledTicketTextBlock>
    //                                 </StyledTicketInfo>
    //                             </td>
    //                             <td>
    //                                 <StyledInfo>
    //                                     <StyledTextMain>{customerName['Name']}</StyledTextMain>
    //                                     <StyledText>{customerName['Last updated']}</StyledText>
    //                                 </StyledInfo>
    //                             </td>
    //                             <td>
    //                                 <StyledInfo>
    //                                     <StyledTextMain>{ticketDate['Date']}</StyledTextMain>
    //                                     <StyledText>{ticketDate['Time']}</StyledText>
    //                                 </StyledInfo>
    //                             </td>
    //                             <td>{priority}</td>
    //                         </>
    //                     </StyledTrRow>
    //                 );
    //             })}
    //         </tbody>
    //     </StyledTable>
    // )
}

export default BasicTable