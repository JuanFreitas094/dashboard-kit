import styled from "styled-components";

const StyledNavbar = styled.div`
    display: flex;
    background-color: transparent;
    height: 80px;
    align-items: center;
    width: 100%;
`

const StyledTitle = styled.span `    
    font-size: 14px;
    text-align: left;
    padding: 0 20px; 
    width: 100%;
    color: ${props => props.theme.black};
`

const StyledTitleDesc = styled.div `
    margin-bottom: 5px;
    display:flex;
    font-weight: bold;
    align-items: center;
    justify-content: start;
`

const StyledDesc = styled.p`
    color: ${props => props.theme.grey};
    font-size: 10px;
`

const StyledLink = styled.p`
    padding-right: 20px;
    text-align: end;
    font-size: 10px;
    
`

function CardsTitle({title, description, link}) {
    return(
        <StyledNavbar>
            <StyledTitle>                
                <StyledTitleDesc>{ title }</StyledTitleDesc>
                <StyledDesc>{ description }</StyledDesc>
            </StyledTitle>
            <a href="#"><StyledLink>{ link }</StyledLink></a>
        </StyledNavbar>
    )
}

export default CardsTitle