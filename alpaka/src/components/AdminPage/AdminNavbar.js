import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import deskLogo from "../../assets/alpaka_logo.png";
import { COLORS } from "../../constants";

const AdminNavbar = () => {
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
  height: 100%;
  width: 200px;
  border-right: solid 4px ${COLORS.gray};
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: left; */

  margin: 0 auto;
  background-color: ${COLORS.white};
  color: ${COLORS.gray};
  z-index: 999999999;
`;

const LogoAndNameWrapper = styled.div`
  font-weight: 600;
  /* display: flex;
  align-items: center; */
`;

const LogoWrapper = styled(NavLink)`
  height: 80px;
  width: 80px;
`;

const Logo = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

const AlpakaText = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  text-decoration: none;
  text-align: center;
  color: black;
  padding-top: 11px;
`;

const NavOptionsWrapper = styled.div``;

const NavList = styled.ul`
  padding-top: 52px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const NavOption = styled(NavLink)`
  padding: 18px 24px;
  font-weight: 600;
  text-decoration: none;
  color: ${COLORS.gray};
  width: 100%;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

export default AdminNavbar;
