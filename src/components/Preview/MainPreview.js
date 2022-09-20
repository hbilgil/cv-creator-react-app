import React from 'react';
import styled from 'styled-components';

class MainPreview extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
  
      }
    }

    render() {
        return (
            <MainPreviewContainer>
                <InfoDiv>
                    <h3>PROFILE</h3>
                    <p>{this.props.personalInfo[6].value}</p>
                </InfoDiv>
                <InfoDiv>
                    <h3>EXPERIENCE</h3>
                    {this.props.experienceInfo.map((experience) => {
                        return (
                            <ExperienceDiv key={experience.id}>
                                <h4>{experience.position}</h4>
                                <h5>{experience.company} | {experience.start} - {experience.end}</h5>
                                <p>{experience.task}</p>
                            </ExperienceDiv>
                        )
                    })}
                </InfoDiv>
            </MainPreviewContainer>
        )
    }
}

const MainPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 35px 35px 35px 28px;
    text-align: start;
    width: 69%;
`;

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const ExperienceDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export default MainPreview;