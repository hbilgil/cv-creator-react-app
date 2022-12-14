import React from 'react';
import styled from 'styled-components';
import PersonalInfoForm from './PersonalInfo';
import EducationInfoForm from './EducationInfo';
import ExperienceInfoForm from './ExperienceInfo';
import SkillsInfoForm from './SkillsInfo';
import Utilities from './Utilities';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }

    render() {
        return (
            <FormContainer>
                <Utilities
                    state={this.props.state}
                    autoFill={this.props.autoFill}
                    printDocument={this.props.printDocument} />
                <PersonalInfoForm 
                    personalInfo={this.props.personalInfo} 
                    handlePersonalInfoChange={this.props.handlePersonalInfoChange} />
                <EducationInfoForm 
                    educationInfo={this.props.educationInfo} 
                    handleEducationInfoChange={this.props.handleEducationInfoChange} />
                <ExperienceInfoForm 
                    experienceInfo={this.props.experienceInfo} 
                    handleExperienceInfoChange={this.props.handleExperienceInfoChange} 
                    removeWork={this.props.removeWork}
                    addWork={this.props.addWork} />
                <SkillsInfoForm 
                    skillsInfo={this.props.skillsInfo}
                    handleSkillsInfoChange={this.props.handleSkillsInfoChange}
                    removeSkill={this.props.removeSkill}
                    addSkill={this.props.addSkill} />
            </FormContainer>
        )
    }
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: flex-start;
    width: 40%;
    min-width: 40%;
    max-height: 100%;
    padding: 0% 2.5%;
    gap: 2.75rem;
    @media (max-width: 1000px) {
        width: 70%;
        min-width: 350px;
        max-width: 90%;
    }
`;

export default Form;