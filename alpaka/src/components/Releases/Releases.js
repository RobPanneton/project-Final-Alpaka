import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { COLORS } from "../../constants";

const Releases = () => {
  const releases = useSelector((state) => state?.content?.releases);

  return (
    <Wrapper>
      <ReleasesHeader>Our Releases</ReleasesHeader>
      {releases ? (
        <>
          <ReleasesGrid>
            {releases.map((release, index) => {
              return (
                <ReleaseDiv
                  key={index}
                  onHover={(e) => e.stopPropagation()}
                  to={`/releases/${release._id}`}
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
        </>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  padding: 152px 120px 50px 120px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ReleasesHeader = styled.h1`
  padding-bottom: 52px;
  font-size: 52px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ReleasesGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid #eaeaee; */
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

export default Releases;
