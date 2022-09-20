import React from 'react';
import styled from 'styled-components';

class Utilities extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }

    render() {
        return (
            <UtilitiesContainer>
                <h2>Utilities</h2>
                <ButtonsDiv>
                    <Button>
                        <i className="fa-regular fa-pen-to-square"></i>
                        <ButtonText>Example CV</ButtonText>
                    </Button>
                    <Button>
                        <i className="fa-regular fa-circle-down"></i>
                        <ButtonText>Download</ButtonText>
                    </Button>
                </ButtonsDiv>
            </UtilitiesContainer>
        )
    }
}

const UtilitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const ButtonsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 7px;
    justify-content: center;
    font-size: 16px;
    transition: 0.2s;
    &:active {
        transform: scale(0.9);
    }
`;

const ButtonText = styled.span`
    font-size: 16px;
    @media (max-width: 620px) {
        display: none;
}
`;

export default Utilities;