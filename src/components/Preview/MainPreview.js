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
    padding: 5.5vh 5.5vh 5.5vh 2vw;
    font-size: 0.9vw;
    text-align: justify;
    width: 100%;
    height: 109vh;
    gap: 6vh;
    @media (max-width: 1000px) {
        font-size: 1.4vw;
    }
`;

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.6vh;
`;

const InfoDivHeader = styled.h3`
    font-family: 'Teko', sans-serif;
    font-size: 1.3vw;
    letter-spacing: 0.4vw;
    margin-bottom: 1.5vh;
    @media (max-width: 1000px) {
        font-size: 2.2vw;
    }
`;

const ExperienceDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9vw;
`;

export default MainPreview;