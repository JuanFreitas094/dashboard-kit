import styled from "styled-components";

const StyledButtonMenu = styled.button`
    display: flex;
    height: 45px;
    align-items: center; 
    justify-items: center;
    width: 100%;
    background: transparent;
    border: none;
    
    :hover, :focus {
        background-color: ${props => props.theme.menuButtonHover};
        border-left: 2px solid white;
    }
`

const StyledContent = styled.div`
    padding: 15px;
    display: flex;
`

const StyledIcon = styled.div`
    color: ${props => props.theme.grey}; 
`

const StyledText = styled.p`
    padding: 0 10px;
    font-size: 10px;
    font-family: 'Mulish', sans-serif;
    color: ${props => props.theme.lightGrey}
`

function ButtonMenu({ name, icon }) {
    return (        
        <StyledButtonMenu>     
            <StyledContent>
                <StyledIcon>
                    {icon}
                </StyledIcon>
                <StyledText>{name}</StyledText>
            </StyledContent>
        </StyledButtonMenu> 
    )
}

export default ButtonMenu