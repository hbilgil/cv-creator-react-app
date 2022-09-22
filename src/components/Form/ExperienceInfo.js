import React from 'react';
import styled from 'styled-components';

class ExperienceInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }

    render() {
        return (
            <ExperienceFormDiv>
                <BigHeader>Experience Info</BigHeader>
                <ExperienceForm>
                {this.props.experienceInfo.map((work, index) => (
                    <WorkListDiv key={work.id}>
                        <HeadLine>
                            <SmallHeader>Experience {index + 1}</SmallHeader>
                            {this.props.experienceInfo.length > 1 &&
                            <Button
                                type="button"
                                id={work.id}
                                onClick={() => this.props.removeWork(index)}>
                                <Image className="fa-regular fa-trash-can"></Image>
                            </Button>
                            }
                        </HeadLine>
                        <Input
                            placeholder='Company'
                            name="company"
                            id={work.id}
                            value={work.company}
                            onChange={this.props.handleExperienceInfoChange}
                            type="text"
                            required>
                        </Input>
                        <Input
                            placeholder='Title'
                            name="position"
                            id={work.id}
                            value={work.position}
                            onChange={this.props.handleExperienceInfoChange}
                            type="text"
                            required>
                        </Input>
                        <Input
                            placeholder='Start Date'
                            name="start"
                            id={work.id}
                            value={work.start}
                            onChange={this.props.handleExperienceInfoChange}
                            type="text"
                            required>
                        </Input>
                        <Input
                            placeholder='End Date'
                            name="end"
                            id={work.id}
                            value={work.end}
                            onChange={this.props.handleExperienceInfoChange}
                            type="text"
                            required>
                        </Input>
                        <TextArea
                            placeholder='Your duties'
                            name="task"
                            id={work.id}
                            value={work.task}
                            onChange={this.props.handleExperienceInfoChange}
                            type="text"
                            required>
                        </TextArea>
                    </WorkListDiv>
                ))}
                {this.props.experienceInfo.length < 3 &&
                    <NewButton
                        type="button"
                        onClick={this.props.addWork}>+ New
                    </NewButton>
                }
                </ExperienceForm>
            </ExperienceFormDiv>
        )
    }
}

const ExperienceFormDiv = styled.div`
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

const BigHeader = styled.h2`
    font-family: 'Rajdhani', sans-serif;
    font-size: 22px;
    letter-spacing: 4px;
`;

const SmallHeader = styled.h3`
    font-family: 'Rajdhani', sans-serif;
    font-size: 16px;
    letter-spacing: 2px;
`;

const ExperienceForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const WorkListDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const HeadLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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

const TextArea = styled.textarea`
    font-size: 14px;
    width: 100%;
    height: 100px;
    resize: none;
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
  }
`;

export default ExperienceInfo;