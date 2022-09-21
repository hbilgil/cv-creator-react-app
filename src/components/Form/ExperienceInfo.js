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
                <h2>Experience Info</h2>
                <ExperienceForm>
                {this.props.experienceInfo.map((work, index) => (
                    <WorkListDiv key={work.id}>
                        <HeadLine>
                            <h3>Experience {index + 1}</h3>
                            {this.props.experienceInfo.length > 1 &&
                            <Button
                                type="button"
                                id={work.id}
                                onClick={() => this.props.removeWork(index)}>
                                <i className="fa-regular fa-trash-can"></i>
                            </Button>
                            }
                            <Input
                                placeholder='Company'
                                name="company"
                                value={work.company}
                                onChange={this.props.handleWorkChange}
                                type="text"
                                required>
                            </Input>
                            <Input
                                placeholder='Title'
                                name="positionTitle"
                                value={work.position}
                                onChange={this.props.handleWorkChange}
                                type="text"
                                required>
                            </Input>
                            <Input
                                placeholder='Start Date'
                                name="startDate"
                                value={work.start}
                                onChange={this.props.handleWorkChange}
                                type="text"
                                required>
                            </Input>
                            <Input
                                placeholder='End Date'
                                name="endDate"
                                value={work.end}
                                onChange={this.props.handleWorkChange}
                                type="text"
                                required>
                            </Input>
                            <TextArea
                                placeholder='Your duties'
                                name="duties"
                                value={work.task}
                                onChange={this.props.handleWorkChange}
                                type="text"
                                required>
                            </TextArea>
                        </HeadLine>
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
    border-radius: 10px;
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
    margin-bottom: 1%
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

const TextArea = styled.textarea`
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

export default ExperienceInfo;