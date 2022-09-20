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
                <Utilities />
                <PersonalInfoForm />
                <EducationInfoForm />
                <ExperienceInfoForm />
                <SkillsInfoForm />
            </FormContainer>
        )
    }
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: flex-start;
    max-width: 35%;
    min-width: 30%;
    max-height: 100%;
    padding: 0% 2.5%;
    gap: 35px;

    @media (max-width: 1000px) {
        min-width: 60%;
        max-width: 65%;
    }
    @media (max-width: 800px) {
        min-width: 70%;
        max-width: 75%;
    }
    @media (max-width: 600px) {
        min-width: 77.5%;
        max-width: 80%;
    }
    @media (max-width: 450px) {
        min-width: 82.5%;
        max-width: 85%;
    }
    @media (max-width: 375px) {
        min-width: 87.5%;
        max-width: 90%;
    }
`;

export default Form;