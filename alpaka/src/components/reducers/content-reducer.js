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
      return {
        ...state,
        artists: [...action.payload],
      };

    case "POPULATE_RELEASES_CONTENT":
      return {
        ...state,
        releases: [...action.payload],
      };

    default:
      return state;
  }
};
