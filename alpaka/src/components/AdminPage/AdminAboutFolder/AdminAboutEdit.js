import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../../../constants";
import { ADMIN } from "../adminConstants";

const AdminAboutEdit = () => {
  const [tab, setTab] = useState(false);
  const [text, setText] = useState("");
  const aboutText = useSelector((state) => state?.content?.about);

  useEffect(() => {
    if (aboutText) setText(aboutText);
  }, [aboutText]);

  const setTheTab = () => {
    setTab(!tab);
  };

  const handleSubmit = () => {
    fetch(`/api/about/edit-text`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "text1",
        content: text,
      }),
    });
  };
  return (
    <Wrapper>
      {tab ? (
        <>
          <TabButton onClick={setTheTab}>Edit About Text ▼</TabButton>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Label>
              Text:
              <TextField
                type="text"
                value={text}
                rows={4}
                cols={72}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              ></TextField>
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
          <TabButton onClick={setTheTab}>Edit About Text ►</TabButton>
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

const TextField = styled.textarea`
  margin-left: ${ADMIN.inputMarginLeft};
  padding: ${ADMIN.inputPadding};
`;

const Submit = styled.input`
  padding: ${ADMIN.submitPadding};
  margin: ${ADMIN.submitMargin};
  width: ${ADMIN.submitWidth};
`;

export default AdminAboutEdit;
