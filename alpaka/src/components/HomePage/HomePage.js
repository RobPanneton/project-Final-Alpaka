import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theHerdBanner from "../../assets/TheHerdBannerV2.jpg";
import { COLORS } from "../../constants";
import Loader from "../../Loader";

const HomePage = () => {
  const newReleases = useSelector((state) => {
    let newArr = [];
    for (let i = 0; i < 8; i++) newArr.push(state?.content?.releases[i]);
    return newArr;
  });

  const aboutInfo = useSelector((state) => state?.content?.about);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Banner src={theHerdBanner}></Banner>
      <h1>Latest Releases</h1>

      {newReleases ? (
        <>
          <LatestReleasesDiv>
            <ReleasesGrid>
              {newReleases.map((release, index) => {
                return (
                  <ReleaseDiv
                    key={index}
                    onHover={(e) => e.stopPropagation()}
                    to={`/releases/${release.id}`}
                  >
                    <ReleasePhoto
                      src={release.picUrl}
                      alt={`Picture of ${release.name}`}
                    ></ReleasePhoto>
                    <p>{release.albumName}</p>
                  </ReleaseDiv>
                );
              })}
            </ReleasesGrid>
          </LatestReleasesDiv>
        </>
      ) : (
        <Loader />
      )}
      <InfoAndMix>
        <Info>
          <p>{aboutInfo}</p>
        </Info>
        <Mix>
          <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/934584763&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <div>
            <a
              href="https://soundcloud.com/alpakamuzik"
              title="AlpaKa MuziK"
              target="_blank"
            >
              AlpaKa MuziK
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/alpakamuzik/kozy-plug-play-studio"
              title="KOZY @ Plug &amp; Play Studio [AlpaKa MuziK]"
              target="_blank"
            >
              KOZY @ Plug &amp; Play Studio [AlpaKa MuziK]
            </a>
          </div>
        </Mix>
      </InfoAndMix>
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

const ReleasesGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ReleaseDiv = styled(NavLink)`
  width: calc(100% / 4);
  height: 275px;
  position: relative;
  /* border: 1px solid ${COLORS.white}; */
  cursor: pointer;
  overflow: hidden;

  p {
    display: none;
    color: ${COLORS.white};
    position: absolute;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    top: calc(50% - (18px / 2));
    width: 100%;
    z-index: 2;
    text-shadow: 1px 1px slategray;
    pointer-events: none;
  }

  @keyframes slideIn {
    from {
      transform: translateY(-1000%);
    }
    to {
      transform: translateY(0);
    }
  }

  &:hover p {
    display: block;
    animation: slideIn 300ms ease-in-out;
  }
`;

const ReleasePhoto = styled.img`
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: all ease 500ms;

  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

const Alpaka = styled.h1`
  font-size: 100px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const InfoAndMix = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 23px 48px;
`;

const Info = styled.div`
  width: 48%;
  height: auto;

  p {
    color: #eaeaee;
    font-size: 32px;
    line-height: 1.5;
    text-align: left;
  }
`;

const Mix = styled.div`
  width: 52%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  iframe {
    width: 100%;
    height: 166px;
  }

  div {
    font-size: 10px;
    color: #cccccc;
    line-break: anywhere;
    word-break: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans,
      Garuda, Verdana, Tahoma, sans-serif;
    font-weight: 100;
  }

  a {
    color: #cccccc;
    text-decoration: none;
  }
`;

export default HomePage;
