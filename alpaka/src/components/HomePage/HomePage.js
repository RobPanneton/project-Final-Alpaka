import React, { useEffect } from "react";
import styled from "styled-components";
import theHerdBanner from "../../assets/TheHerdBannerV2.jpg";
import { COLORS } from "../../constants";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Banner src={theHerdBanner}></Banner>
      <h1>Latest Releases</h1>
      <LatestReleasesDiv></LatestReleasesDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 100px 0 50px 0;

  h1 {
    padding: 48px 0 24px 0;
    font-size: 24px;
    font-weight: 200;
    color: ${COLORS.white};
  }
`;

const Banner = styled.img`
  width: 100%;
  height: 100%;
`;

const LatestReleasesDiv = styled.div`
  padding: 52px 120px 50px 120px;
  width: 100%;
  height: auto;
`;

const Alpaka = styled.h1`
  font-size: 100px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default HomePage;
