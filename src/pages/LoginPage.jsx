import { Input } from "../components/Ui/Input";
import styled from "styled-components";
import { Button } from "../components/Ui/Button";
import PhotoIcon from "../assets/icons/photo-icon.svg?react";

export const LoginPage = () => {
  return (
    <StyledContainer>
      <StyledText>
        <StyledText>Personal Information</StyledText>
      </StyledText>
      <StyledDiv>
        <StyleSection>
          <StyledDivtag>
            <StyledPtag>
              {" "}
              First Name <span>*</span>
            </StyledPtag>
            <StyledInput type="text" id="firstName" />
          </StyledDivtag>

          <StyledDivtag>
            <StyledPtag>
              Email address <span>*</span>
            </StyledPtag>
            <StyledInput type="email" id="Email" />
          </StyledDivtag>

          <StyledDivtag>
            <StyledPtag>
              {" "}
              Username <span>*</span>
            </StyledPtag>
            <StyledInput type="text" id="Username" />
          </StyledDivtag>
        </StyleSection>

        <StyleSection>
          <StyledDivtag>
            <StyledPtag>
              {" "}
              Last Name <span>*</span>
            </StyledPtag>
            <StyledInput type="text" id="lastName" />
          </StyledDivtag>
          <StyledDivtag>
            <StyledPtag>
              {" "}
              Phone Number <span>*</span>
            </StyledPtag>
            <StyledDivSelector>
              <StyledOption id="phoneNumberCountry">
                <option value="KGZ">+996</option>
              </StyledOption>
              <StyledInput type="number" id="phoneNumber" />
            </StyledDivSelector>
          </StyledDivtag>
          <StyledDivtag>
            <StyledPtag>Photo</StyledPtag>
            <StyledDivSelector>
              <PhotoIcon className="icon" />
              <StyledDivTag>
                <StyledButtonGreen>Change</StyledButtonGreen>
                < StyledButtonGrey>Remove</ StyledButtonGrey>
              </StyledDivTag>
            </StyledDivSelector>
          </StyledDivtag>
        </StyleSection>
      </StyledDiv>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0 0 170px;
  gap: 30px;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
const StyleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledText = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  color: #3d3d3d;
`;
const StyledPtag = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #3d3d3d;
`;
const StyledInput = styled.input`
  width: 420px;
  padding: 10px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
`;
const StyledDivtag = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
const StyledOption = styled.select`
  width: 70px;
  height: 40px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3d3d3d;
`;
const StyledDivSelector = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  & > .icon {
    width: 40px;
    height: 40px;
  }
`;
const StyledButtonGreen = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 3px;
  border: none;
  background-color: #46a358;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
const StyledButtonGrey=styled.button`
    width: 100px;
  height: 40px;
  border-radius: 3px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  color: #3D3D3D;
  background-color:#fff ;
  cursor: pointer;
`
const StyledDivTag=styled.div`
  display: flex;
  flex-direction: row;
`
