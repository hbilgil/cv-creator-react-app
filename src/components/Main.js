import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import Form from './Form/Form';
import Preview from './Preview/Preview';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      personalInfo: [
        {
          name: "firstName",
          value: "",
          id: uniqid()
        },
        {
          name: "lastName",
          value: "",
          id: uniqid()
        },
        {
          name: "address",
          value: "",
          id: uniqid()
        },
        {
          name: "website",
          value: "",
          id: uniqid()
        },
        {
          name: "email",
          value: "",
          id: uniqid()
        },
        {
          name: "phone",
          value: "",
          id: uniqid()
        },
        {
          name: "details",
          value: "",
          id: uniqid()
        },
      ],

      educationInfo: [
        {
          name: "universityName1",
          value: "",
          id: uniqid()
        },
        {
          name: "universityDegree1",
          value: "",
          id: uniqid()
        },
        {
          name: "universityDate1",
          value: "",
          id: uniqid()
        },
        {
          name: "universityName2",
          value: "",
          id: uniqid()
        },
        {
          name: "universityDegree2",
          value: "",
          id: uniqid()
        },
        {
          name: "universityDate2",
          value: "",
          id: uniqid()
        },
      ],

      experienceInfo: [
        { 
          company: "",
          position: "",
          task: "",
          start: "",
          end: "",
          id: uniqid(),
        },
      ],

      skillsInfo: [
        { 
          skill: "",
          id: uniqid()
        },
      ],
      
      newExperience: 
        {  
          company: "",
          position: "",
          task: "",
          start: "",
          end: "",
          id: uniqid(),
        },

      newSkill: 
        {
          skill: "",
          id: uniqid()
        },
    }
  }

  render() {
    return (
      <MainWrapper>
        <Form 
          state={this.state}
          personalInfo={this.state.personalInfo}
          educationInfo={this.state.educationInfo}
          experienceInfo={this.state.experienceInfo}
          skillsInfo={this.state.skillsInfo}
          autoFill={this.autoFill}
          printDocument={this.printDocument} 
          handlePersonalInfoChange={this.handlePersonalInfoChange}
          handleEducationInfoChange={this.handleEducationInfoChange}
          handleExperienceInfoChange={this.handleExperienceInfoChange}
          handleSkillsInfoChange={this.handleSkillsInfoChange}
          removeWork={this.removeWork}
          addWork={this.addWork}
          removeSkill={this.removeSkill}
          addSkill={this.addSkill} />
        <Preview 
          personalInfo={this.state.personalInfo}
          educationInfo={this.state.educationInfo}
          experienceInfo={this.state.experienceInfo}
          skillsInfo={this.state.skillsInfo}
        />
      </MainWrapper>
    )
  }
}

const MainWrapper = styled.main`
display: flex;
align-items: flex-start;
justify-content: space-between;
gap: 4rem;
max-width: 1800px;
padding: 4rem 8rem;
margin: 0 auto;
margin-bottom: 4rem;
@media (max-width: 1600px) {
  flex-direction: column;
  align-items: center;
}
`

export default Main;