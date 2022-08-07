import styled from "styled-components";
import MOCK_DATA from '../../../../public/MOCK_DATA.json';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { useTable, usePagination } from 'react-table';
import {COLUMNS} from './Columns';
import { useMemo } from "react";

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
`

const StyledTable = styled.table`
    border-collapse: collapse;
    border-spacing: 50px 0;
    text-align: left;
    width: 100%;
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
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
`

const StyledText = styled.p `
    color: ${props => props.theme.tableSubText};
    font-size: 10px;
`

const StyledHeader = styled.th`   
    padding: 0 20px;
    font-size: 12px;
    color: ${props => props.theme.grey};
    border-bottom: 1px solid ${props => props.theme.menuLineColor};
`

const StyledTHead = styled.thead`
    line-height: 60px;
`

const StyledTrRow = styled.tr`
    border-bottom: 1px solid ${props => props.theme.menuLineColor};
    padding: 0 20px;
`

const StyledButton = styled.button`
    background: transparent;
    border: none;
    padding 0 5px;
    color: ${props => props.theme.grey}; 
`
const StyledPaginationButtons = styled.div`
    margin-left: auto;
    padding: 15px;
`

const StyledTBody = styled.tbody`
    padding: 0 20px;
`

function PaginationTable() {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        prepareRow
    } = useTable(
        {
            columns,
            data
        },
        usePagination
    )


    return (
        <StyledContent>
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
            <StyledTBody {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row)
                    const cells = row.cells
                    const ticketDetails = cells[0].value;
                    const customerName = cells[1].value;
                    const ticketDate = cells[2].value;
                    const priority = cells[3].value;
                    return (
                        <StyledTrRow>
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
                        
                        </StyledTrRow>
                    )
                })}
            </StyledTBody>
        </StyledTable>
        <StyledPaginationButtons>
            <StyledButton onClick={() => previousPage()}> <AiOutlineLeft/> </StyledButton>
            <StyledButton onClick={() => nextPage()}> <AiOutlineRight /> </StyledButton> 
        </StyledPaginationButtons>
        </StyledContent>
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

export default PaginationTable