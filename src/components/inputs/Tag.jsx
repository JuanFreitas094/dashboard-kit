import styled from "styled-components";

const StyledTagNormal = styled.div`
    width: 50px;
    height: 20px;
    border-radius: 30px;
    background-color: ${props => props.theme.backgroundTagNormal};
`

const StyledTagHigh = styled.div`
    width: 50px;
    height: 20px;
    border-radius: 30px;
    background-color: ${props => props.theme.backgroundTagHigh};
` 

const StyledTagLow = styled.div`
    width: 50px;
    height: 20px;
    border-radius: 30px;
    background-color: ${props => props.theme.backgroundTagLow};
`

const StyledText = styled.p`    
    text-align: center;
    font-size: 10px;    
    color: white;
    padding-top: 2px;
`

function Tag(priority) {
    const priorityText = priority['priority']
    if (priorityText === "High") {
        return (
            <StyledTagHigh>
                <StyledText>{priorityText}</StyledText>
            </StyledTagHigh>
        )
    } else if (priorityText === "Low") {
        return (
            <StyledTagLow>
                <StyledText>{priorityText}</StyledText>
            </StyledTagLow>
        )
    } else if (priorityText === "Normal"){
        return (
            <StyledTagNormal>
                <StyledText>{priorityText}</StyledText>
            </StyledTagNormal>
        )
    } else {
        return null
    }
}

export default Tag