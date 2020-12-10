import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../../../constants";
import { ADMIN } from "../adminConstants";

const AdminDeleteArtist = () => {
  const artists = useSelector((state) => state?.content?.artists);

  const [tab, setTab] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [select, setSelect] = useState(null);
  const [item, setItem] = useState(null);

  const handleSubmit = () => {
    fetch(`/api/artists/delete-artist`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    setItem(null);
    setSelect(null);
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
      setId(item.id);
    }
  }, [item]);

  return (
    <Wrapper>
      {tab ? (
        <>
          <TabButton onClick={setTheTab}>Delete an Artist ▼</TabButton>
          <Select onChange={(e) => setSelect(e.target.value)}>
            <option value={null}>Select</option>
            {artists.map((artist) => {
              return <option value={artist.name}>{artist.name}</option>;
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
                  Name:
                  <span>{name}</span>
                </Label>
                <Label>
                  Id:
                  <span>{id}</span>
                </Label>
                <Submit
                  type="submit"
                  value="Delete"
                  onClick={handleSubmit}
                ></Submit>
              </Form>
            </>
          ) : null}
        </>
      ) : (
        <>
          <TabButton onClick={setTheTab}>Delete an Artist ►</TabButton>
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

const Select = styled.select`
  padding: 2px;
`;

const Label = styled.label`
  margin-top: ${ADMIN.labelMarginTop};

  span {
    font-size: ${ADMIN.tabFontSize};
    font-weight: ${ADMIN.tabFontWeight};
    margin-left: 12px;
  }
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

export default AdminDeleteArtist;
