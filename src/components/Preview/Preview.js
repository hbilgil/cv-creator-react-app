import React from 'react';
import styled from 'styled-components';

class Preview extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }

    render() {
        return (
            <PreviewContainer>

            </PreviewContainer>
        )
    }
}

const PreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 0%;
    text-align: center;
    width: 670px;
    height: 100vh !important;
    
    @media (max-width: 800px) {
        transform: scale(0.9);
    }
    @media (max-width: 600px) {
        transform: scale(0.675);
        flex-shrink: 0;
    }
    @media (max-width: 450px) {
        transform: scale(0.525);
        flex-shrink: 0;
    }
    @media (max-width: 375px) {
        transform: scale(0.45);
        flex-shrink: 0;
    }
`;

export default Preview;