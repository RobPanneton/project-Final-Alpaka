import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../../constants";

import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { loginUser, logoutUser } from "../../actions";

const Footer = () => {
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj.email);
    dispatch(loginUser(response.profileObj.email));
  };

  const logout = () => {
    dispatch(logoutUser());
  };

  const blackoutLog = {
    background: "black",
    border: "none",
    height: "100%",
    textAlign: "right",
    width: "74px",
    marginLeft: "12px",
  };

  return (
    <Wrapper>
      <div></div>
      <div>
        <GoogleLogin
          clientId="100955367280-fd988kfre41tuploslufrh8ik7eg1at0.apps.googleusercontent.com"
          render={(renderProps) => (
            <button onClick={renderProps.onClick} style={blackoutLog}>
              Login
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <GoogleLogout
          clientId="100955367280-fd988kfre41tuploslufrh8ik7eg1at0.apps.googleusercontent.com"
          render={(renderProps) => (
            <button onClick={renderProps.onClick} style={blackoutLog}>
              Logout
            </button>
          )}
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 50px;
  width: 100%;
  height: 50px;
  background-color: black;
  color: ${COLORS.white};
  display: flex;
  justify-content: space-between;
`;

export default Footer;
