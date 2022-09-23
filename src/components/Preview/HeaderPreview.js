import React from 'react';
import styled from 'styled-components';

class HeaderPreview extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
  
      }
    }

  render() {
    const firstName = this.props.personalInfo[0].value;
    const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

    const lastName = this.props.personalInfo[1].value;
    const capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    return (
      <HeaderPreviewContainer>
        <HeaderTop>
            <HeaderTopText>
            {capitalizedFirstName}
              <Span>{capitalizedLastName}</Span>
            </HeaderTopText>
        </HeaderTop>
        <HeaderBottom>
            <HeaderBottomText>
            {this.props.experienceInfo[0].position}
            </HeaderBottomText>
        </HeaderBottom>
      </HeaderPreviewContainer>
    )
  }
}

const HeaderPreviewContainer = styled.div`
    grid-row: 1 / 2;
`;

const HeaderTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 100%;
    height: 12vh;
    padding: 2.5% 0;
`;

const HeaderTopText = styled.h1`
    color: ${({ theme }) => theme.colors.headerColor};
    font-size: 2.2vw;
    letter-spacing: 0.58vw;
    font-family: 'Secular One', sans-serif;
    font-weight: 300;
    @media (max-width: 1000px) {
      font-size: 3.4vw;
    }
`;

const Span = styled.span`
    margin-left: 1.3vw;
`;


const HeaderBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.positionBackgroundColor};
    width: 100%;
    height: 5vh;
`;

const HeaderBottomText = styled.h2`
    color: ${({ theme }) => theme.colors.positionColor};
    font-family: 'Reem Kufi Ink', sans-serif;
    font-size: 1.1vw;
    letter-spacing: 0.2vw;
    font-weight: 300;
    @media (max-width: 1000px) {
        font-size: 1.8vw;
    }
`;

export default HeaderPreview;