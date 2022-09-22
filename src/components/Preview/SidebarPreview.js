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
                    </DegreeDetailsDiv>
                    <DegreeDetailsDiv>
                        <h4>{this.props.educationInfo[4].value}</h4>
                        <h5>{this.props.educationInfo[3].value}</h5>
                        <p>{this.props.educationInfo[5].value}</p>
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
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.headerColor};
    color: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
    width: 30%;
    height: 87vh;
    text-align: left;
    padding: 35px 28px;
    gap: 35px;
`;

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const InfoDivHeader = styled.h3`
    font-family: 'Teko', sans-serif;
    font-size: 18px;
    letter-spacing: 4px;
    margin-bottom: 10px;
`;

const ContactDetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const DetailDiv = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    gap: 10px;
`;

const DegreeDetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
`;

const SkillList = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 16px;
`;

const SkillListItem = styled.li`
    font-weight: 400;
    font-size: 12px;
    &::marker {
    font-size: 1.55em;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default SidebarPreview;