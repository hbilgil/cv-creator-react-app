import React from 'react';
import styled from 'styled-components';

class EducationInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }

    render() {
        return (
            <EducationFormDiv>
                <BigHeader>Education Info</BigHeader>
                <EducationForm>
                    <DegreesDiv>
                        <SmallHeader>Bachelor of Science</SmallHeader>
                        <Input
                            placeholder="University Name"
                            name="universityName1"
                            value={this.props.educationInfo[0].value}
                            onChange={this.props.handleEducationInfoChange}
                            type="text"
                            required>
                        </Input>
                        <Input
                            placeholder="Degree"
                            name="universityDegree1"
                            value={this.props.educationInfo[1].value}
                            onChange={this.props.handleEducationInfoChange}
                            type="text"
                            required>
                        </Input>
                        <Input
                            placeholder="Dates From - To"
                            name="universityDate1"
                            value={this.props.educationInfo[2].value}
                            onChange={this.props.handleEducationInfoChange}
                            type="text"
                            required>
                        </Input>
                    </DegreesDiv>
                    <DegreesDiv>
                        <SmallHeader>Master of Science</SmallHeader>
                        <Input
                            placeholder="University Name"
                            name="universityName2"
                            value={this.props.educationInfo[3].value}
                            onChange={this.props.handleEducationInfoChange}
                            type="text"
                            required>
                        </Input>
                        <Input
                            placeholder="Degree"
                            name="universityDegree2"
                            value={this.props.educationInfo[4].value}
                            onChange={this.props.handleEducationInfoChange}
                            type="text"
                            required>
                        </Input>
                        <Input
                            placeholder="Dates From - To"
                            name="universityDate2"
                            value={this.props.educationInfo[5].value}
                            onChange={this.props.handleEducationInfoChange}
                            type="text"
                            required>
                        </Input>
                    </DegreesDiv>
                </EducationForm>
            </EducationFormDiv>
        )
    }
}

const EducationFormDiv = styled.div`
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

const EducationForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const DegreesDiv = styled.div`
    display: flex;
    flex-direction: column;
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

export default EducationInfo;