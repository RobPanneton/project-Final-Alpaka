import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import deskLogo from "../../assets/alpaka_logo.png";
import { COLORS } from "../../constants";

const Navbar = () => {
  return (
    <Wrapper>
      <LogoAndNameWrapper>
        <LogoWrapper exact to="/">
          <Logo src={deskLogo} alt="alpaka logo" />
        </LogoWrapper>
        <AlpakaText exact to="/">
          ALPAKA
        </AlpakaText>
      </LogoAndNameWrapper>

      <NavOptionsWrapper>
        <NavList>
          <NavOption exact to="/">
            Home
          </NavOption>
          <NavOption to="/events">Events</NavOption>
          <NavOption to="/artists">Artists</NavOption>
          <NavOption to="/releases">Releases</NavOption>
          <NavOption to="/merch">Merch</NavOption>
          <NavOption to="/about">About Us</NavOption>
        </NavList>
      </NavOptionsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  border-bottom: solid 4px ${COLORS.white};
  padding: 10px 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: black;
  color: ${COLORS.white};
  z-index: 999999999;
`;

const LogoAndNameWrapper = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled(NavLink)`
  height: 80px;
  width: 80px;
`;

const Logo = styled.img`
  height: 80px;
  width: 80px;
`;

const AlpakaText = styled(Link)`
  margin-left: 12px;
  font-size: 32px;
  font-weight: 800;
  text-decoration: none;
  text-align: center;
  color: ${COLORS.white};

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const NavOptionsWrapper = styled.div``;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const NavOption = styled(NavLink)`
  margin-left: 42px;
  font-weight: 600;
  text-decoration: none;
  color: ${COLORS.white};

  &.active {
    text-decoration: underline;
  }
`;

export default Navbar;
