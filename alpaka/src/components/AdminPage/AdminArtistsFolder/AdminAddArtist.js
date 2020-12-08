import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../../constants";
import { ADMIN } from "../adminConstants";

const AdminAddArtist = () => {
  const [tab, setTab] = useState(false);
  const [name, setName] = useState("");
  const [picUrl, setPicUrl] = useState("");
  const [soundUrl, setSoundUrl] = useState("");
  const [id, setId] = useState("");

  console.log({ name: name, pic: picUrl, sound: soundUrl, id: id });

  const setTheTab = () => {
    setTab(!tab);
  };

  const handleSubmit = () => {
    fetch(`/api/artists/add-artist`, {
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

  const clearFields = () => {
    setName("");
    setPicUrl("");
    setSoundUrl("");
    setId("");
  };

  return (
    <Wrapper>
      {tab ? (
        <>
          <TabButton onClick={setTheTab}>Add an Artist ▼</TabButton>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              clearFields();
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
              value="Submit"
              onClick={handleSubmit}
            ></Submit>
          </Form>
        </>
      ) : (
        <>
          <TabButton onClick={setTheTab}>Add an Artist ►</TabButton>
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

export default AdminAddArtist;
