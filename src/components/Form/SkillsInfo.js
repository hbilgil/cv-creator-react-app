import React from 'react';
import styled from 'styled-components';

const exampleSkills = [" JavaScript", 
                       " React",
                       " HTML",
                       " CSS",
                       " Bootstrap",
                       " Webpack",
                       " npm",
                       " Jest"
                       ];

class SkillsInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }

    render() {
        return(
            <SkillsFormDiv>
                <Header>Skills Info</Header>
                <SkillsForm>
                {this.props.skillsInfo.map((skill, index) => (
                    <SkillListDiv key={skill.id}>
                        <Input
                            placeholder={exampleSkills[index]}
                            name="skill"
                            value={skill.skill}
                            onChange={this.props.handleSkillsInfoChange}
                            id={skill.id}
                            type="text"
                            required>
                        </Input>
                    {this.props.skillsInfo.length > 1 &&
                        <Button
                            type="button"
                            id={skill.id}
                            onClick={() => this.props.removeSkill(index)}>
                            <Image className="fa-regular fa-trash-can"></Image>
                        </Button>
                    }
                    </SkillListDiv> 
                ))}
                {this.props.skillsInfo.length < 8 &&
                    <NewButton
                        type="button"
                        onClick={this.props.addSkill}>+ New
                    </NewButton>
                }
                </SkillsForm>
            </SkillsFormDiv>
        ) 
    }
}

const SkillsFormDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3.75% 5% 4.25% 5%;
    border-radius: 6px;
    gap: 10px;
    background-color: ${({ theme }) => theme.colors.formComponentBackground};
    -webkit-box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    -moz-box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

const Header = styled.h2`
    font-family: 'Rajdhani', sans-serif;
    font-size: 20px;
    letter-spacing: 4px;
`;

const SkillsForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const SkillListDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`;

const Input = styled.input`
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
    padding: 1.5% 0;
    padding-left: 10px;
    border-radius: 10px;
    transition: all .3s,transform .2s,-webkit-transform .2s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.inputHoverBackground};
    }
    &:focus {
        background-color: ${({ theme }) => theme.colors.inputFocusBackground};
    }
    &:active {
        transform: scale(0.98);
    }
    &::placeholder {
        font-size: 12px;
    }
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.formComponentBackground};
    transition: 0.2s;
    &:active {
        transform: scale(0.9);
    }
`;

const Image = styled.i`
    &:hover {
        filter: invert(15%) sepia(92%) saturate(4156%) hue-rotate(340deg) brightness(88%) contrast(96%);
    }
`;

const NewButton = styled.button`
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember",sans-serif;
  font-size: 13px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 100px;
  &:hover {
    background: #F6F9FE;
    color: #174ea6;
  }
  &:active {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
    outline: 0;
    transform: scale(0.98);
  }
`;

export default SkillsInfo;