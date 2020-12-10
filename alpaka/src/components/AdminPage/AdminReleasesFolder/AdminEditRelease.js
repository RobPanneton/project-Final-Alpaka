import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../../../constants";
import { ADMIN } from "../adminConstants";

const AdminEditRelease = () => {
  const releases = useSelector((state) => state?.content?.releases);

  const [tab, setTab] = useState(false);

  const [id, setId] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [picUrl, setPicUrl] = useState("");
  const [bandcampUrl, setBandcampUrl] = useState("");
  const [beatportUrl, setBeatportUrl] = useState("");
  const [bandcampiFrameUrl, setBandcampiFrameUrl] = useState("");
  const [bandcampHref, setBandcampHref] = useState("");
  const [bandcampName, setBandcampName] = useState("");
  const [bandcampNumber, setBandcampNumber] = useState("");
  const [producedBy, setProducedBy] = useState([]);
  const [remixedBy, setRemixedBy] = useState([]);

  const [select, setSelect] = useState(null);
  const [item, setItem] = useState(null);

  const handleSubmit = () => {
    fetch(`/api/releases/edit-release`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        albumName: albumName,
        producedBy: producedBy,
        remixedBy: remixedBy,
        picUrl: picUrl,
        bandcampUrl: bandcampUrl,
        beatportUrl: beatportUrl,
        bandcampiFrameUrl: bandcampiFrameUrl,
        bandcampHref: bandcampHref,
        bandcampName: bandcampName,
        bandcampNumber: bandcampNumber,
      }),
    });
  };

  const setTheTab = () => {
    setTab(!tab);
  };

  useEffect(() => {
    if (select) setItem(releases.find((release) => release.id === select));
  }, [select]);

  useEffect(() => {
    if (item) {
      setId(item.id);
      setAlbumName(item.albumName);
      setProducedBy(item.producedBy);
      setPicUrl(item.picUrl);
      setBandcampUrl(item.bandcampUrl);
      setBeatportUrl(item.beatportUrl);
      setBandcampiFrameUrl(item.bandcampiFrameUrl);
      setBandcampHref(item.bandcampHref);
      setBandcampName(item.bandcampName);
      setBandcampNumber(item.bandcampNumber);
    }
  }, [item]);

  return (
    <Wrapper>
      {tab ? (
        <>
          <TabButton onClick={setTheTab}>Edit a Release ▼</TabButton>
          <Select onChange={(e) => setSelect(e.target.value)}>
            <option value={null}>Select</option>
            {releases.map((release) => {
              return (
                <option value={release.id}>
                  {release.id} - {release.albumName}
                </option>
              );
            })}
          </Select>
          {item ? (
            <>
              {" "}
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  setItem(null);
                }}
              >
                <Label>
                  Id:
                  <NameInput
                    type="text"
                    value={id}
                    onChange={(e) => {
                      setId(e.target.value.toUpperCase());
                    }}
                  ></NameInput>
                </Label>
                <Label>
                  Album Name:
                  <NameInput
                    type="text"
                    value={albumName}
                    onChange={(e) => {
                      setAlbumName(e.target.value);
                    }}
                  ></NameInput>
                </Label>
                <MultiLabel>
                  Produced By:
                  {producedBy.length ? (
                    <>
                      {producedBy.map((producer, index) => {
                        return (
                          <MultiNameInput
                            key={index}
                            value={producedBy[index]}
                            type="text"
                            onChange={(e) => {
                              let newArr = [...producedBy];
                              newArr[index] = e.target.value;
                              setProducedBy(newArr);
                            }}
                          ></MultiNameInput>
                        );
                      })}
                    </>
                  ) : null}
                  <IncDecDiv>
                    <ArrayButton
                      onClick={(e) => {
                        e.preventDefault();
                        setProducedBy(producedBy.concat(""));
                      }}
                    >
                      +
                    </ArrayButton>
                    <ArrayButton
                      onClick={(e) => {
                        e.preventDefault();
                        setProducedBy(producedBy.slice(0, -1));
                      }}
                    >
                      -
                    </ArrayButton>
                  </IncDecDiv>
                </MultiLabel>
                <MultiLabel>
                  Remixed By:
                  {remixedBy.length ? (
                    <>
                      {remixedBy.map((producer, index) => {
                        return (
                          <MultiNameInput
                            key={index}
                            value={remixedBy[index]}
                            type="text"
                            // value={producedBy[index]}
                            onChange={(e) => {
                              let newArr = [...remixedBy];
                              newArr[index] = e.target.value;
                              setProducedBy(newArr);
                            }}
                          ></MultiNameInput>
                        );
                      })}
                    </>
                  ) : null}
                  <IncDecDiv>
                    <ArrayButton
                      onClick={(e) => {
                        e.preventDefault();
                        setRemixedBy(remixedBy.concat(""));
                      }}
                    >
                      +
                    </ArrayButton>
                    <ArrayButton
                      onClick={(e) => {
                        e.preventDefault();
                        setRemixedBy(remixedBy.slice(0, -1));
                      }}
                    >
                      -
                    </ArrayButton>
                  </IncDecDiv>
                </MultiLabel>

                <Label>
                  Picture URL:
                  <UrlInput
                    type="text"
                    value={picUrl}
                    onChange={(e) => {
                      setPicUrl(e.target.value);
                    }}
                  ></UrlInput>
                </Label>

                <Label>
                  Bandcamp Purchase URL:
                  <UrlInput
                    type="text"
                    value={bandcampUrl}
                    onChange={(e) => {
                      setBandcampUrl(e.target.value);
                    }}
                  ></UrlInput>
                </Label>

                <Label>
                  Beatport Purchase URL:
                  <UrlInput
                    type="text"
                    value={beatportUrl}
                    onChange={(e) => {
                      setBeatportUrl(e.target.value);
                    }}
                  ></UrlInput>
                </Label>
                <Label>
                  iFrame URL:
                  <UrlInput
                    type="text"
                    value={bandcampiFrameUrl}
                    onChange={(e) => {
                      setBandcampiFrameUrl(e.target.value);
                    }}
                  ></UrlInput>
                </Label>
                <Label>
                  Href:
                  <UrlInput
                    type="text"
                    value={bandcampHref}
                    onChange={(e) => {
                      setBandcampHref(e.target.value);
                    }}
                  ></UrlInput>
                </Label>
                <Label>
                  Bandcamp Release Name:
                  <NameInput
                    type="text"
                    value={bandcampName}
                    onChange={(e) => {
                      setBandcampName(e.target.value);
                    }}
                  ></NameInput>
                </Label>
                <Label>
                  Bandcamp Number:
                  <NameInput
                    type="text"
                    value={bandcampNumber}
                    onChange={(e) => {
                      setBandcampNumber(e.target.value);
                    }}
                  ></NameInput>
                </Label>
                <Submit
                  type="submit"
                  value="Edit"
                  onClick={handleSubmit}
                ></Submit>
              </Form>
            </>
          ) : null}
        </>
      ) : (
        <>
          <TabButton onClick={setTheTab}>Edit an Artist ►</TabButton>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.white};
  color: ${COLORS.gray};
  padding: ${ADMIN.wrapperPadding};
`;

const TabButton = styled.button`
  padding: ${ADMIN.tabPadding};
  font-size: ${ADMIN.tabFontSize};
  border: ${ADMIN.tabBorder};
  font-weight: ${ADMIN.tabFontWeight};
  background-color: ${COLORS.white};

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Select = styled.select`
  padding: 2px;
`;

const Form = styled.form`
  padding: ${ADMIN.formPadding};
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-top: ${ADMIN.labelMarginTop};
`;

const NameInput = styled.input`
  padding: ${ADMIN.inputPadding};
  width: ${ADMIN.nameWidth};
  border-radius: ${ADMIN.inputRadius};

  margin-left: ${ADMIN.inputMarginLeft};
  border: 1px solid ${COLORS.gray};
`;

const UrlInput = styled.input`
  padding: ${ADMIN.inputPadding};
  width: ${ADMIN.urlWidth};
  border-radius: ${ADMIN.inputRadius};

  margin-left: ${ADMIN.inputMarginLeft};
  border: 1px solid ${COLORS.gray};
`;

const ArrayButton = styled.button`
  padding: 2px 8px;
  margin-left: 23px;
  font-weight: 600;
  font-size: 18px;
`;

const MultiLabel = styled(Label)`
  display: flex;
  flex-direction: column;
`;

const MultiNameInput = styled(NameInput)`
  margin: 9px 0 0 0;
`;

const IncDecDiv = styled.div`
  padding-top: 11px;
`;

const Submit = styled.input`
  padding: ${ADMIN.submitPadding};
  margin: ${ADMIN.submitMargin};
  width: ${ADMIN.submitWidth};
`;

export default AdminEditRelease;
