import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../../../constants";
import { ADMIN } from "../adminConstants";

const AdminEditArtist = () => {
  const artists = useSelector((state) => state?.content?.artists);

  const [tab, setTab] = useState(false);
  const [name, setName] = useState("");
  const [picUrl, setPicUrl] = useState("");
  const [soundUrl, setSoundUrl] = useState("");
  const [id, setId] = useState("");
  const [select, setSelect] = useState(null);
  const [item, setItem] = useState(null);

  const handleSubmit = () => {
    fetch(`/api/artists/edit-artist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        name: name,
        picUrl: picUrl,
        soundUrl: soundUrl,
      }),
    });
  };

  const setTheTab = () => {
    setTab(!tab);
  };

  useEffect(() => {
    if (select) setItem(artists.find((artist) => artist.name === select));
  }, [select]);

  useEffect(() => {
    if (item) {
      setName(item.name);
      setPicUrl(item.picUrl);
      setSoundUrl(item.soundUrl);
      setId(item._id);
    }
  }, [item]);

  useEffect(() => {
    if (name)
      setId(
        name
          .split(" ")
          .map((word, index) => {
            if (index === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          })
          .join("")
      );
    if (name === "") setId("");
  }, [name]);

  return (
    <Wrapper>
      {tab ? (
        <>
          <TabButton onClick={setTheTab}>Edit an Artist ▼</TabButton>
          <select onChange={(e) => setSelect(e.target.value)}>
            <option value={null}>Select</option>
            {artists.map((artist) => {
              return <option value={artist.name}>{artist.name}</option>;
            })}
          </select>
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
                  Name:
                  <NameInput
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></NameInput>
                </Label>
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
                  Soundcloud URL:
                  <UrlInput
                    type="text"
                    value={soundUrl}
                    onChange={(e) => {
                      setSoundUrl(e.target.value);
                    }}
                  ></UrlInput>
                </Label>
                <Label>
                  Id:
                  <NameInput
                    type="text"
                    value={id}
                    onChange={(e) => {
                      setId(e.target.value);
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

const Submit = styled.input`
  padding: ${ADMIN.submitPadding};
  margin: ${ADMIN.submitMargin};
  width: ${ADMIN.submitWidth};
`;

export default AdminEditArtist;
