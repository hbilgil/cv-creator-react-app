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
      <>
        <HeaderTop>
            <HeaderTopText>
            {capitalizedFirstName}
            {capitalizedLastName}
            </HeaderTopText>
        </HeaderTop>
        <HeaderBottom>
            <HeaderBottomText>
            {this.props.experienceInfo[0].position}
            </HeaderBottomText>
        </HeaderBottom>
      </>
    )
  }
}

const HeaderTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 100%;
    height: 10.4vh;
    padding: 2.5% 0;
`;

const HeaderTopText = styled.h1`
    color: ${({ theme }) => theme.colors.headerColor};
    letter-spacing: 8px;
    font-family: 'Secular One', sans-serif;
    font-weight: 300;
`;

const HeaderBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.positionBackgroundColor};
    width: 100%;
    height: 2.3em;
`;

const HeaderBottomText = styled.h2`
    color: ${({ theme }) => theme.colors.positionColor};
    font-family: 'Reem Kufi Ink', sans-serif;
    font-size: 14px;
    letter-spacing: 3px;
    font-weight: 300;
`;

export default HeaderPreview;