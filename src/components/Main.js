import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import Form from './Form/Form';
import Preview from './Preview/Preview';
import ExampleCV from './ExampleCV';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

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
          name: "universityMajor1",
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
          name: "universityMajor2",
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

    this.autoFill = this.autoFill.bind(this);
    this.printDocument = this.printDocument.bind(this);
    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    this.handleEducationInfoChange = this.handleEducationInfoChange.bind(this);
    this.handleExperienceInfoChange = this.handleExperienceInfoChange.bind(this);
    this.handleSkillsInfoChange = this.handleSkillsInfoChange.bind(this);
    this.removeWork = this.removeWork.bind(this);
    this.addWork = this.addWork.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.addSkill = this.addSkill.bind(this);
  }

  // Handling edits for input fields in Personal Info
  handlePersonalInfoChange(e) {
    const newPersonalInfo = this.state.personalInfo.map((information) => {
      if (information.name === e.target.name) {
        information.value = e.target.value;
        return information;
      } else {
        return information;
      }
    });

    this.setState({
      ...this.state, personalInfo: newPersonalInfo
    });
  }

  // Handling edits for input fields in Education Info
  handleEducationInfoChange(e) {
    const newEducationInfo = this.state.educationInfo.map((information) => {
      if (information.name === e.target.name) {
        information.value = e.target.value;
        return information;
      } else {
        return information;
      }
    });

    this.setState({
      ...this.state, educationInfo: newEducationInfo
    });
  }

  // Handling edits for input fields in Experience Info
  handleExperienceInfoChange(e) {
    const index = this.state.experienceInfo.findIndex(work => work.id === e.target.id);
    const experienceInfo = this.state.experienceInfo.map((work, i) => {
      if (i === index) {
        work[e.target.name] = e.target.value;
        return work
      } else {
        return work;
      }
    });

    this.setState({
      ...this.state, experienceInfo: experienceInfo
    });
  }

  // Handling edits for input fields in Skills Info
  handleSkillsInfoChange(e) {
    const index = this.state.skillsInfo.findIndex(skill => skill.id === e.target.id);
    const skillsInfo = this.state.skillsInfo.map((skill, i) => {
      if (i === index) {
        skill[e.target.name] = e.target.value;
        return skill;
      } else {
        return skill;
      }
    });

    this.setState({
      ...this.state, skillsInfo: skillsInfo
    });
  }

  // Removing an experience object from the experienceInfo array
  removeWork(index) {
    const list = [...this.state.experienceInfo];
    list.splice(index, 1);
    
    this.setState({
      ...this.state, experienceInfo: list
    });
  }

  // Adding an experience object to the experienceInfo array
  addWork(e) {
    e.preventDefault();

    this.setState({
      experienceInfo: [
        ...this.state.experienceInfo, this.state.newExperience
      ],
      newExperience: {
        ...this.state.newExperience, id: uniqid()
      }
    });
  }

  // Removing a skill object from the skillsInfo array
  removeSkill(index) {
    const list = [...this.state.skillsInfo];
    list.splice(index, 1);
    
    this.setState({
      ...this.state, skillsInfo: list
    });
  }

  // Adding a skill object to the skillsInfo array
  addSkill(e) {
    e.preventDefault();

    this.setState({
      skillsInfo: [
        ...this.state.skillsInfo, this.state.newSkill
      ],
      newSkill: {
        ...this.state.newSkill, id: uniqid()
      }
    });
  }

  // Changing values of all keys by taking key-value pairs from the CV example as values.
  autoFill() {
    this.setState({
      ...this.state, 
      personalInfo: ExampleCV.personalInfo,
      educationInfo: ExampleCV.educationInfo,
      experienceInfo: ExampleCV.experienceInfo,
      skillsInfo: ExampleCV.skillsInfo
    });
  }

  // Saving CV-Preview in a PDF file
  printDocument() {
    const capture = document.getElementById('preview');
    html2canvas(capture)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const doc = new jsPDF();

        // Make img fit to PDF proportions
        const imgProps= doc.getImageProperties(imgData);
        const docWidth = doc.internal.pageSize.getWidth();
        const docHeight = (imgProps.height * docWidth) / imgProps.width;
        doc.addImage(imgData, 'PNG', 0, 0, docWidth, docHeight);

        // Download PDF
        doc.save("resume.pdf");
      })
    ;
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
          handlePersonalInfoChange={this.handlePersonalInfoChange}
          handleEducationInfoChange={this.handleEducationInfoChange}
          handleExperienceInfoChange={this.handleExperienceInfoChange}
          handleSkillsInfoChange={this.handleSkillsInfoChange}
          removeWork={this.removeWork}
          addWork={this.addWork}
          removeSkill={this.removeSkill}
          addSkill={this.addSkill} 
          autoFill={this.autoFill}
          printDocument={this.printDocument} />
        <Preview 
          personalInfo={this.state.personalInfo}
          educationInfo={this.state.educationInfo}
          experienceInfo={this.state.experienceInfo}
          skillsInfo={this.state.skillsInfo} />
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
@media (max-width: 850px) {
  flex-direction: column;
  align-items: center;
}
`;

export default Main;