import React from 'react'
import styled from 'styled-components'

class Header extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <HeaderWrapper>
                    <HeaderText>CV<Span>CREATOR</Span></HeaderText>
                </HeaderWrapper>
            </HeaderContainer>
        )
    }
}

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1800px;
  padding: 3rem 8rem;
  margin: 0 auto;
  @media (max-width: 1600px) {
    justify-content: center;
  }
`

const HeaderText = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 7rem;
  color: ${({ theme }) => theme.colors.cvColor};
`

const Span = styled.span`
  font-family: 'Alata', sans-serif;
  font-size: 4.5rem;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.spanColor};
`

export default Header;