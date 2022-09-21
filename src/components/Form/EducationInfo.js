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
                <h2>Education Info</h2>
                <EducationForm>
                    <DegreesDiv>
                        <h3>Bachelor of Science</h3>
                        <Input
                            placeholder="university Name"
                            name="UniversityName1"
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
                        <h3>Master of Science</h3>
                        <Input
                            placeholder="university Name"
                            name="UniversityName2"
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
    border-radius: 10px;
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

export default EducationInfo;