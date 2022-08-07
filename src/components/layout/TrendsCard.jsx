import styled from "styled-components";

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    background-color: transparent;
    width: 250px;
    height: 70px;
    border-bottom: 1px solid ${props => props.theme.grey};
    border-left: 1px solid ${props => props.theme.grey};
`

const StyledContentWithoutBorder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    background-color: transparent;
    width: 250px;
    height: 70px;
    border-left: 1px solid ${props => props.theme.grey};
`

const StyledTitle = styled.p`
    font-size: 10px;
    padding: 5px;
    color: ${props => props.theme.grey};
`

const StyledDescription = styled.p`
    font-size: 14px;
    font-weight: bold;
    padding: 5px;
    color: ${props => props.theme.black};
`

function TrendsCard( { title, description, border }) {
    if (border) {
        return (
            <StyledContent>
                <StyledTitle>
                    {title}
                </StyledTitle>
                <StyledDescription>
                    {description}
                </StyledDescription>
            </StyledContent>
        )
    } else {
        return (
            <StyledContentWithoutBorder>
                <StyledTitle>
                    {title}
                </StyledTitle>
                <StyledDescription>
                    {description}
                </StyledDescription>
            </StyledContentWithoutBorder>
        )
    }
}

export default TrendsCard