import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import styled from "styled-components";

export const MainLayout = () => {
  return (
    <StyledDiv>
      <Header />
      <Outlet />
    </StyledDiv>
  );
};


const StyledDiv=styled("div")`
  margin:0 120px 0 120px ;
`