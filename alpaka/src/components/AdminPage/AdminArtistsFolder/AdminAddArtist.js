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
  padding: 18px 24px;
`;

const TabButton = styled.button`
  padding: 12px 72px 12px 0px;
  font-size: 18px;
  border: none;
  font-weight: 600;
  background-color: ${COLORS.white};

  &:focus {
    outline: 0;
  }
`;

const Form = styled.form`
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-top: 12px;
`;

const NameInput = styled.input`
  padding: 4px 8px;
  width: 200px;
  border-radius: 4px;
  border: 1px solid ${COLORS.gray};
  margin-left: 6px;
`;

const UrlInput = styled.input`
  padding: 4px 8px;
  width: 400px;
  border-radius: 4px;
  border: 1px solid ${COLORS.gray};
  margin-left: 6px;
`;

const Submit = styled.input`
  padding: ${ADMIN.submitPadding};
  margin: ${ADMIN.submitMargin};
  width: ${ADMIN.submitWidth};
`;

export default AdminAddArtist;
