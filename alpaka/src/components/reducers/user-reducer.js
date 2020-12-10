const initialState = {
  isLogged: false,
  isAdmin: false,
  id: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      console.log(action.payload);

      return action.payload === "robert.panneton@gmail.com"
        ? { isLogged: true, isAdmin: true, id: action.payload }
        : { isLogged: true, isAdmin: false, id: action.payload };
    case "LOGOUT_USER":
      return { ...initialState };
    default:
      return state;
  }
};
