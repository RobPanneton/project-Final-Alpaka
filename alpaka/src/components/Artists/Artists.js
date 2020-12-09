import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../../constants";

const Artists = () => {
  const artists = useSelector((state) => state?.content?.artists);

  const [orderedArtists, setOrderedArtists] = useState(null);

  useEffect(() => {
    if (artists)
      setOrderedArtists(
        artists.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
      );
  }, [artists]);

  useEffect(() => {
    console.log(orderedArtists);
  }, [orderedArtists]);

  return (
    <Wrapper>
      <Header>Label Producers</Header>
      {orderedArtists ? (
        <>
          {" "}
          <ArtistGrid>
            {orderedArtists.map((artist, index) => {
              return (
                <ArtistDiv
                  onHover={(e) => e.stopPropagation()}
                  key={index}
                  onClick={() => window.open(artist.soundUrl, "_blank")}
                >
                  <ArtistPhoto
                    src={artist.picUrl}
                    alt={`Picture of ${artist.name}`}
                  ></ArtistPhoto>
                  <p>{artist.name}</p>
                </ArtistDiv>
              );
            })}
          </ArtistGrid>
        </>
      ) : (
        <>
          <h1>loading...</h1>
        </>
      )}
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

const Header = styled.h1`
  padding-bottom: 52px;
  font-size: 52px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ArtistGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid #eaeaee; */
`;

const ArtistDiv = styled.div`
  width: calc(100% / 4);
  height: 189px;
  position: relative;
  /* border: 1px solid ${COLORS.white}; */
  cursor: pointer;
  overflow: hidden;
  padding-right: 1px;

  p {
    display: none;
    color: ${COLORS.white};
    position: absolute;
    text-align: center;
    font-size: 24px;
    top: calc(50% - (18px / 2));
    width: 100%;
    z-index: 2;
    text-shadow: 1px 2px slategray;
    pointer-events: none;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  &:hover p {
    display: block;
    animation: slideIn 300ms ease-in-out;
  }
`;

const ArtistPhoto = styled.img`
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: all ease 500ms;

  &:hover {
    transform: scale(1.15);
    opacity: 0.6;
  }
`;

export default Artists;
