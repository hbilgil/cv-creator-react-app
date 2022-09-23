import React from 'react';
import styled from 'styled-components';
import HeaderPreview from './HeaderPreview';
import SidebarPreview from './SidebarPreview';
import MainPreview from './MainPreview';

class Preview extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }

    render() {
        return (
            <PreviewContainer id="preview">
                <HeaderPreview 
                    personalInfo={this.props.personalInfo}
                    experienceInfo={this.props.experienceInfo} />
                <MainContainer>
                    <SidebarPreview
                        personalInfo={this.props.personalInfo}
                        educationInfo={this.props.educationInfo}
                        skillsInfo={this.props.skillsInfo} />
                    <MainPreview 
                        personalInfo={this.props.personalInfo}
                        experienceInfo={this.props.experienceInfo} />
                </MainContainer>
            </PreviewContainer>
        )
    }
}

const PreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    text-align: center;
    width: 700px;
    height: 100vh;
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

const MainContainer = styled.div`
    display: flex;
`;

export default Preview;