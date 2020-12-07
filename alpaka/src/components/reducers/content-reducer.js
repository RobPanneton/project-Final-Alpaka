const initialState = {
  home: null,
  events: null,
  artists: null,
  releases: null,
  about: null,
};

export const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POPULATE_ABOUT_CONTENT":
      return {
        ...state,
        about: action.payload,
      };

    default:
      return state;
  }
};
