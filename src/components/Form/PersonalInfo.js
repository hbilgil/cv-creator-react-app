import React from 'react';
import styled from 'styled-components';

class PersonalInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }

    render() {
        return (
            <PersonalFormDiv>
                <h2>Personal Info</h2>
                <PersonalForm>
                    <DoubleInputsDiv>
                        <Input 
                            placeholder='First Name'
                            name="firstName"
                            value={this.props.personalInfo[0].value}
                            onChange={this.props.handlePersonalInfoChange}
                            type="text"
                            required>
                        </Input>
                        <Input 
                            placeholder='Last Name'
                            name="lastName"
                            value={this.props.personalInfo[1].value}
                            onChange={this.props.handlePersonalInfoChange}
                            type="text"
                            required>
                        </Input>
                    </DoubleInputsDiv>
                    <DoubleInputsDiv>
                        <Input 
                            placeholder='E-mail'
                            name="email"
                            value={this.props.personalInfo[4].value}
                            onChange={this.props.handlePersonalInfoChange}
                            type="text"
                            required>
                        </Input>
                        <Input 
                            placeholder='Phone'
                            name="phone"
                            value={this.props.personalInfo[5].value}
                            onChange={this.props.handlePersonalInfoChange}
                            type="text"
                            required>
                        </Input>
                    </DoubleInputsDiv>
                    <Input 
                        placeholder='Website'
                        name="website"
                        value={this.props.personalInfo[3].value}
                        onChange={this.props.handlePersonalInfoChange}
                        type="text"
                        required>
                    </Input>
                    <Input 
                        placeholder='Address'
                        name="address"
                        value={this.props.personalInfo[2].value}
                        onChange={this.props.handlePersonalInfoChange}
                        type="text"
                        required>
                    </Input>
                    <TextArea
                        placeholder='Personal Details'
                        name="details"
                        value={this.props.personalInfo[6].value}
                        onChange={this.props.handlePersonalInfoChange}
                        type="text"
                        required>
                    </TextArea>
                </PersonalForm>
            </PersonalFormDiv>
        )
    }
}

const PersonalFormDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3.75% 5% 4.25% 5%;
    border-radius: 10px;
`;

const PersonalForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const DoubleInputsDiv = styled.div`
    display: flex;
    gap: 10px;
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

export default PersonalInfo;