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
                    <InfoDivHeader>PROFILE</InfoDivHeader>
                    <p>{this.props.personalInfo[6].value}</p>
                </InfoDiv>
                <InfoDiv>
                    <InfoDivHeader>EXPERIENCE</InfoDivHeader>
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
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 35px 35px 35px 28px;
    text-align: justify;
    font-size: 14px;
    width: 100%;
    height: 109vh;
    gap: 55px;
`;

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const InfoDivHeader = styled.h3`
    font-family: 'Teko', sans-serif;
    font-size: 24px;
    letter-spacing: 4px;
    margin-bottom: 10px;
`;

const ExperienceDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export default MainPreview;