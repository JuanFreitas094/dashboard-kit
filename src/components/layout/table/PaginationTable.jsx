import styled from "styled-components";
import MOCK_DATA from '../../../../public/MOCK_DATA.json';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { useTable, usePagination } from 'react-table';
import {COLUMNS} from './Columns';
import { useMemo } from "react";
import Tag from "../../inputs/Tag";

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
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 5px;
`

const StyledText = styled.p `
    color: ${props => props.theme.tableSubText};
    font-size: 10px;
`

const StyledHeader = styled.th`   
    padding: 0 20px;
    font-size: 10px;
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
    display: flex;
    align-items:center;
`

const StyledTBody = styled.tbody`
    padding: 0 20px;
`

const StyledTd = styled.td`
    padding: 0 20px;    
`

const StyledSpan = styled.span`
    color: ${props => props.theme.tableSubText};
    font-size: 10px;
`

const StyledSelection = styled.select`
    color: ${props => props.theme.tableSubText};
    font-size: 10px;
    border: none;
    font-family: Mulish;
`

const StyledPageSize = styled.div`
    padding-right: 80px;
    padding-bottom: 5px;
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
        pageOptions,
        state,
        setPageSize,
        prepareRow
    } = useTable(
        {
            columns,
            data
        },
        usePagination
    )

    const { pageIndex, pageSize } = state

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
                            <StyledTd>
                                <StyledTicketInfo>
                                    <StyledImg src={ticketDetails['Image']} />
                                    <StyledTicketTextBlock>
                                        <StyledTextMain>{ticketDetails['Text']}</StyledTextMain>
                                        <StyledText>{ticketDetails['Last updated']}</StyledText>
                                    </StyledTicketTextBlock>
                                </StyledTicketInfo>
                            </StyledTd>
                            <StyledTd>
                                <StyledInfo>
                                    <StyledTextMain>{customerName['Name']}</StyledTextMain>
                                    <StyledText>{customerName['Last updated']}</StyledText>
                                </StyledInfo>
                            </StyledTd>
                            <StyledTd>
                                <StyledInfo>
                                    <StyledTextMain>{ticketDate['Date']}</StyledTextMain>
                                    <StyledText>{ticketDate['Time']}</StyledText>
                                </StyledInfo>
                            </StyledTd>
                            <StyledTd><Tag priority={priority}/></StyledTd>
                            <StyledTd><StyledButton> <BiDotsVerticalRounded /> </StyledButton></StyledTd>
                        
                        </StyledTrRow>
                    )
                })}
            </StyledTBody>
        </StyledTable>
        <StyledPaginationButtons>  
            <StyledPageSize>
                <StyledSpan>
                    Rows per page: 
                </StyledSpan>          
                <StyledSelection value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [5, 8, 10, 20].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))
                    }
                </StyledSelection>
            </StyledPageSize>
            <StyledSpan>
                Page{' '}
                    {(pageIndex + 1)}-{pageOptions.length} with {MOCK_DATA.length} tickets
                {' '}
            </StyledSpan>
            <StyledButton onClick={() => previousPage()}> <AiOutlineLeft/> </StyledButton>
            <StyledButton onClick={() => nextPage()}> <AiOutlineRight /> </StyledButton> 
        </StyledPaginationButtons>
        </StyledContent>
    )
}

export default PaginationTable