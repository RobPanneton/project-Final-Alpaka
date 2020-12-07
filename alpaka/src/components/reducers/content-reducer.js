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

    case "POPULATE_ARTISTS_CONTENT":
      console.log(action.payload);
      return {
        ...state,
        artists: [...action.payload],
      };

    default:
      return state;
  }
};
