import styled from "styled-components";
import LogoIcon from "../assets/icons/logo-icon.svg?react";
import SearchIcon from "../assets/icons/search-icon.svg?react";
import CartIcon from "../assets/icons/cart-icon.svg?react";
import LogOutIcon from "../assets/icons/logout-icon.svg?react";

import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate=useNavigate();
  return (
    <StyledHeader>
      <LogoIcon />
      <NavigationHeader>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "unActive")}
          to={"home-page"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "unActive")}
          to={"shop"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "unActive")}
          to={"plant-care"}
        >
          Plant Care
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "unActive")}
          to={"blog"}
        >
          Blogs
        </NavLink>
      </NavigationHeader>

      <ContainerActions>
        <SearchIcon />
        <CartIcon />
        <StyledHeaderButton onClick={()=>navigate("sing-in")}>
          <LogOutIcon />
          Login
        </StyledHeaderButton>
      </ContainerActions>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 53px;
  justify-content: space-between;
  border-bottom: 0.3px solid #46a358;
`;

const NavigationHeader = styled.nav`
  display: flex;
  align-content: center;
  gap: 50px;

  a.active {
    border-bottom: 3px solid #46a358;
  }

  a.unActive {
    border-bottom: none;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    color: #3D3D3D;
  }
`;

const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const StyledHeaderButton=styled.button`
  width: 100px;
  height: 35px;
  background-color:#46a358 ;
  font-size: 16px;
  font-weight: 500;
  color: #FFF;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:4px;
  cursor: pointer;
`
