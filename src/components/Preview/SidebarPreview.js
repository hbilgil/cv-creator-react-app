import React from 'react';
import styled from 'styled-components';

class SidebarPreview extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
  
      }
    }

    render() {
        return (
            <SidebarContainer>
                <InfoDiv>
                    <InfoDivHeader>
                    CONTACT
                    </InfoDivHeader>
                    <ContactDetailsDiv>
                        <DetailDiv>
                            <i className="fa-brands fa-internet-explorer"></i>
                            <p>{this.props.personalInfo[3].value}</p>
                        </DetailDiv>
                        <DetailDiv>
                            <i className="fa-solid fa-at"></i>
                            <p>{this.props.personalInfo[4].value}</p>
                        </DetailDiv>
                        <DetailDiv>
                            <i className="fa-solid fa-location-dot"></i>
                            <p>{this.props.personalInfo[2].value}</p>
                        </DetailDiv>
                        <DetailDiv>
                            <i className="fa-solid fa-phone"></i>
                            <p>{this.props.personalInfo[5].value}</p>
                        </DetailDiv>
                    </ContactDetailsDiv>
                </InfoDiv>
                <InfoDiv>
                    <InfoDivHeader>
                    EDUCATION
                    </InfoDivHeader>
                    <DegreeDetailsDiv>
                        <h4>{this.props.educationInfo[1].value}</h4>
                        <h5>{this.props.educationInfo[0].value}</h5>
                        <p>{this.props.educationInfo[2].value}</p>
                        <p>{this.props.educationInfo[3].value}</p>
                    </DegreeDetailsDiv>
                    <DegreeDetailsDiv>
                        <h4>{this.props.educationInfo[5].value}</h4>
                        <h5>{this.props.educationInfo[4].value}</h5>
                        <p>{this.props.educationInfo[6].value}</p>
                        <p>{this.props.educationInfo[7].value}</p>
                    </DegreeDetailsDiv>
                </InfoDiv>
                <InfoDiv>
                    <InfoDivHeader>
                    SKILLS
                    </InfoDivHeader>
                    <SkillList>
                    {this.props.skillsInfo.map((skill) => {
                        return <SkillListItem key={skill.id}>{skill.skill}</SkillListItem>
                    })}
                    </SkillList>
                </InfoDiv>
            </SidebarContainer>
        )
    }
}

const SidebarContainer = styled.div`
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.headerColor};
    color: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
    width: 100%;
    height: 109vh;
    text-align: left;
    padding: 5.5vh 2vw;
    gap: 6vh;
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
        font-size: 1.7vw;
    }
`;

const ContactDetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.9vh;
`;

const DetailDiv = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.82vw;
    gap: 0.9vw;
    @media (max-width: 1000px) {
        font-size: 1.2vw;
    }
`;

const DegreeDetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.82vw;
    gap: 0.6vh;
    @media (max-width: 1000px) {
        font-size: 1.3vw;
        gap: 0.3vh;
    }
`;

const SkillList = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    gap: 1vh;
    @media (max-width: 1000px) {
        padding-left: 8px;
        gap: 1.2vh;
    }
`;

const SkillListItem = styled.li`
    font-weight: 400;
    font-size: 0.82vw;
    @media (max-width: 1000px) {
        font-size: 1.3vw;
    }
`;

export default SidebarPreview;