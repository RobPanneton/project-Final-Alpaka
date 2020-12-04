import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Material from "./material-ui-imports";

const AdminAbout = () => {
  const [inputValue, setInputValue] = useState(null);

  console.log(inputValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Wrapper>
      <h1>admin: about</h1>
      <NewButton>hello</NewButton>
      <Material.Input onChange={(e) => handleChange(e)}></Material.Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.white};
  color: ${COLORS.gray};
`;

const NewButton = styled(Material.Button)`
  background-color: black !important;
  color: white;

  &:hover {
    background-color: black;
    color: black;
  }
`;

export default AdminAbout;
