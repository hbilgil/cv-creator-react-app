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
    display: grid;
    grid-template-rows: 1fr 7fr;
    position: sticky;
    top: 0;
    text-align: center;
    width: 50vw;
    @media (max-width: 1000px) {
        width: 90%;
        min-width: 70vw;
        max-width: 100%;
    }
`;

const MainContainer = styled.div`
    grid-row: 2 / 3;
    display: grid;
    grid-template-columns: 1fr 3fr;
`;

export default Preview;