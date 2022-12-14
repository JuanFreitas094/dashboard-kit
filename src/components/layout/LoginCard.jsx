import styled from "styled-components"

const WIDHT_BREAK = '700px';

const StyledFlex = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.backgroundGrey};
    width: 100%;
    height: 100vh;
    align-items: center;
`

const StyledContainer = styled.div`
    background-color: ${props => props.theme.white};
    padding: 30px 50px;
    
    max-width: 270px;
    max-height: auto;
    border-radius: 8px;

    @media (min-width: ${WIDHT_BREAK}) {
        width: calc( ${WIDHT_BREAK} - 100px);
    }

    @media (max-width: ${WIDHT_BREAK}) {
        width: 100%;
    }    

    display: flex;
    flex-direction: column;
    justify-content: center;
`

export default function LoginCard ({ children }) {
    return (
       <StyledFlex>
            <StyledContainer>
                {children}
            </StyledContainer>
       </StyledFlex>
    )
}