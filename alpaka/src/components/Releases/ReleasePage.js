import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { COLORS } from "../../constants";

const ReleasePage = () => {
  const iframeSrc =
    "https://bandcamp.com/EmbeddedPlayer/album=2028264062/size=large/bgcol=333333/linkcol=ffffff/transparent=true/";
  const href = "https://alpakamuzik.bandcamp.com/album/doppelg-nger-ep-2";
  const bandCampTitle = "Doppelgänger EP by Crescendoll";

  const producedBy = ["Ben Coda", "Crescendoll", "Someone Else"];
  const remixedBy = [];

  return (
    <Wrapper>
      <InfoDiv>
        <InfoHeader>DOPPELÄNGER EP</InfoHeader>
        {producedBy.length ? (
          <>
            {" "}
            <ProducedBy>Produced By:</ProducedBy>
            <ProducerByList>
              {producedBy.map((producer) => {
                return <ArtistName>{producer}</ArtistName>;
              })}
            </ProducerByList>
          </>
        ) : null}

        {remixedBy.length ? (
          <>
            {" "}
            <ProducedBy>Remixed By:</ProducedBy>
            <ProducerByList>
              {remixedBy.map((producer) => {
                return <ArtistName>{producer}</ArtistName>;
              })}
            </ProducerByList>
          </>
        ) : null}

        <CatNumber>
          catalog number: <span>ALPAK018</span>
        </CatNumber>
        <BuyLinkTop href="https://alpakamuzik.bandcamp.com/album/doppelg-nger-ep-2">
          Click here to buy on Bandcamp
        </BuyLinkTop>
        <BuyLink href="https://www.beatport.com/release/doppelg-nger-ep/3107464">
          Click here to buy on Beatport
        </BuyLink>
      </InfoDiv>
      <PlayerDiv>
        <iframe src={iframeSrc} seamless>
          <a href={href}>{bandCampTitle}</a>
        </iframe>
      </PlayerDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  min-height: 625px;
  padding: 123px 80px 50px 80px;
  display: flex;
`;

const InfoDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  color: ${COLORS.white};
`;

const InfoHeader = styled.h1`
  font-size: 52px;
  font-weight: 600;
`;

const ProducedBy = styled.p`
  font-size: 32px;
  font-weight: 400;
  padding-top: 42px;
`;

const ProducerByList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ArtistName = styled.li`
  font-size: 46px;
  font-weight: 800;
  padding-top: 24px;
`;

const CatNumber = styled.p`
  padding-top: 124px;
  font-size: 18px;

  span {
    font-weight: 600;
    margin-left: 12px;
  }
`;

const BuyLink = styled.a`
  font-size: 32px;
  text-decoration: none;
  color: ${COLORS.white};
  margin-top: 16px;
  &:hover {
    font-weight: 600;
  }
`;

const BuyLinkTop = styled(BuyLink)`
  margin-top: 52px;
`;

const PlayerDiv = styled.div`
  width: 50%;
  padding: 0 23px;
  padding-top: 0;
  margin-top: 0;
  display: flex;
  justify-content: center;

  iframe {
    border: 0 !important;
    width: 350px !important;
    height: 488px !important;
    position: fixed !important;
  }
`;

const IFrame = styled.iframe`
  border: 0;
  width: 350px;
  height: 488px;
  position: fixed;
`;

export default ReleasePage;
