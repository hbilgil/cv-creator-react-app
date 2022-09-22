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
                <h2>Skills Info</h2>
                <SkillsForm>
                {this.props.skillsInfo.map((skill, index) => (
                    <SkillListDiv key={skill.id}>
                        <Input
                            placeholder={exampleSkills[index]}
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
                            onClick={this.props.removeSkill(index)}>
                            <i className="fa-regular fa-trash-can"></i>
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
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.formComponentBackground};
    -webkit-box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    -moz-box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

const SkillsForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const SkillListDiv = styled.div`
    display: flex;
    gap: 8px;
`;

const Input = styled.input`
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
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    &:hover {
        filter: invert(35%) sepia(97%) saturate(7313%) hue-rotate(340deg) brightness(88%) contrast(97%);
    }
    &:active {
        transform: scale(0.9);
    }
`;

const NewButton = styled.button`
    display: flex;
    align-items: center;
    gap: 7px;
    justify-content: center;
    font-size: 16px;
    transition: 0.2s;
    &:active {
        transform: scale(0.9);
    } 
`;

export default SkillsInfo;