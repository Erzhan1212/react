import styled from "styled-components";
import { PLANTS } from "../utils/constants";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/home-page/${id}`);
  };

  return (
    <StyledUl>
      {PLANTS.map((plant) => (
        <StyledLi key={plant.id} onClick={() => handleNavigate(plant.id)}>
          <StyledPlantImg src={plant.image[0]} alt="" />
          <StyledPriceTag>
            <p>{plant.title}</p>
            <b>${plant.price.toFixed(2)}</b>
          </StyledPriceTag>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

const StyledUl = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  margin-top: 150px;
  gap: 35px;
`;

const StyledLi = styled.li`
  display: flex;
  width: 258px;
  height: 300px;
  flex-direction: column;
  background-color: #fbfbfb;
  gap: 35px;

  
`;
const StyledPriceTag=styled.div`
display:flex;
gap: 6px;
flex-direction: column;
& > p {
    font-size: 16px;
    font-weight: 400;
    color: #3d3d3d;
  }
  & > b {
    font-size: 18px;
    font-weight: 700;
    color: #46a358;
  }
`

const StyledPlantImg = styled.img`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
