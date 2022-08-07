import styled from "styled-components";

const StyledContent = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    background-color: white;
    width: 130px;
    height: 70px;
    border: 1px solid ${props => props.theme.grey};
    color: ${props => props.theme.grey};

    :hover {
        border: 1px solid blue;
        color: blue;
    }
`

const StyledTitle = styled.p`
    font-size: 10px;
    padding: 5px;
`

const StyledNumber = styled.p`
    font-size: 20px;
    font-weight: bold;
    padding: 5px;
    color: black;
`

function OverviewCard({ title, number }) {
    return (
        <StyledContent>
            <StyledTitle>
                {title}
            </StyledTitle>
            <StyledNumber>
                {number}
            </StyledNumber>
        </StyledContent>
    )
}

export default OverviewCard