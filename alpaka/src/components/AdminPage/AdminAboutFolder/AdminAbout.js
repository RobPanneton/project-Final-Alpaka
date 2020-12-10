import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../../constants";
import AdminAboutEdit from "./AdminAboutEdit";

const AdminAbout = () => {
  const [inputValue, setInputValue] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Wrapper>
      <Header>
        <h1>Admin: About</h1>
      </Header>

      <Divider></Divider>
      <AdminAboutEdit />
      <Divider></Divider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.white};
  color: ${COLORS.gray};
`;

const Header = styled.div`
  padding: 18px 24px;

  h1 {
    text-align: left !important;
    font-size: 32px;
  }
`;

const Divider = styled.div`
  width: 100%;
  background-color: ${COLORS.gray};
  height: 4px;
`;

export default AdminAbout;
