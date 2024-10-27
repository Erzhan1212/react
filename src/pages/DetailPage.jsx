import { useParams } from "react-router-dom";
import { PLANTS } from "../utils/constants";
import styled from "styled-components";
import { useEffect, useState } from "react";

export const DetailPage = () => {
  const [state, setState] = useState('');
  const { plantId } = useParams();



  const handlerImageClick = (image) => {
    setState(image);
  };


  const currentFind = PLANTS.find((item) => item.id === plantId);
  console.log(currentFind);

  useEffect(()=>{
    setState(currentFind.image[0])
  },[])


  return (
    <StyledDitailDiv>
      <StyledSectionImg>
        <StyledCurrentimgDiv>
          {currentFind.image.map((item) => (
            <StyledCurrentImg
              key={item}
              src={item}
              onClick={() => handlerImageClick(item)}
            />
          ))}
        </StyledCurrentimgDiv>
        <StyledDivImage>
          <StyledImage src={state} alt="image" />
        </StyledDivImage>
      </StyledSectionImg>
      <StyledSectionPrice>
        <h1>{currentFind.title}</h1>
        <b>${currentFind.price}</b>
        <p>{currentFind.description}</p>
      </StyledSectionPrice>
    </StyledDitailDiv>
  );
};

const StyledDitailDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 20px;
`;

const StyledSectionImg = styled.section`
  display: flex;
  flex-direction: row;
  gap: 45px;
  width: 570px;
  height: 540px;
`;
const StyledCurrentimgDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 90px;
`;
const StyledCurrentImg = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
const StyledDivImage = styled.div`
  width: 444px;
  height: 444px;
  margin-top: 90px;
  background: #fbfbfb;
  border-radius: 8px;
`;
const StyledImage = styled.img`
  width: 404px;
  height: 404px;
`;
const StyledSectionPrice = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  & > h1 {
    font-size: 28px;
    font-weight: 700;
    color: #3d3d3d;
  }
  & > b {
    font-size: 22px;
    font-weight: 700;
    color: #46a358;
    border-bottom: 0.1px solid #46a35982;
  }
  & > p {
    font-size: 14px;
    font-weight: 400;
    color: #3d3d3d;
  }
`;
