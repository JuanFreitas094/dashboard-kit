import styled from "styled-components";
import MOCK_DATA from '../../../../public/MOCK_DATA.json';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { useTable, usePagination, useSortBy } from 'react-table';
import {COLUMNS} from './Columns';
import { useMemo, useState } from "react";
import Tag from "../../inputs/Tag";
import {BiSortUp} from 'react-icons/bi';
import {FaFilter} from 'react-icons/fa'
import Dropdown from 'react-dropdown';

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
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
const StyledNavbar = styled.div`
    display: flex;
    background-color: transparent;
    height: 80px;
    align-items: center; 
    justify-content: space-between;  
    overflow: hidden;
    margin: 0 20px;
`

const StyledTitle = styled.span `
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: ${props => props.theme.black};
`

const StyledButtons = styled.div `
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledButtonNavBar = styled.button `
    color: ${props => props.theme.grey};
    font-size: 11px;
    font-weight: 600;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 10px;
`

const StyledDropDown = styled.div`
    color: ${props => props.theme.grey};
`

const StyledFilter = styled.div`
    display: flex;
    flex-direction: row;
    color: ${props => props.theme.grey};
    font-size: 12px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-weight: 600;
    padding: 10px;
`

function PaginationTable() {
    
    const [mockData, setData] = useState([].concat(MOCK_DATA))
    const [sorted, setSort] = useState(false)

    const SortTable = () => {
        let data = null;
        if (sorted) {
            data = [].concat(MOCK_DATA);
        } else {
            data = [].concat(mockData.sort((a, b) => a['Ticket details']['Text'] > b['Ticket details']['Text'] ? 1 : -1));
        }
        
        console.log(MOCK_DATA)
        setData(data);
        setSort(!sorted);
    }

    const FilterTable = (event) => {
        const priority = event.value;
        let data = [].concat(MOCK_DATA);
        console.log(data);
        if (priority && priority !== "All") {
            data = [].concat(data.filter(a => a['Priority'] === priority? a['Priority'] : null));
        } 
        setData(data);
    }

    const options = [
        'All', 'High', 'Low', 'Normal'
    ];
    const defaultOption = options[0];

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => mockData, [mockData])

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
        <StyledNavbar>
            <StyledTitle>All tickets</StyledTitle>
            <StyledButtons>
                <StyledButtonNavBar onClick={() => SortTable()}>
                    <BiSortUp />
                    Sort
                </StyledButtonNavBar>
                <StyledFilter>                 
                    <FaFilter />
                    <StyledDropDown>
                        <Dropdown options={options} onChange={FilterTable}  placeholder="Filter" />
                    </StyledDropDown>
                </StyledFilter>
            </StyledButtons> 
        </StyledNavbar>
        <StyledTable {...getTableProps()}>
            <StyledTHead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => {                   
                            return (
                                <StyledHeader {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </StyledHeader>
                            )
                        })}
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