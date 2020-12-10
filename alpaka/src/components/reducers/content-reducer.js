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
      const sortedArr = action.payload.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      return {
        ...state,
        artists: [...sortedArr],
      };

    case "POPULATE_RELEASES_CONTENT":
      let reversedArr = [];
      for (let i = action.payload.length - 1; i >= 0; i--)
        reversedArr.push(action.payload[i]);
      return {
        ...state,
        releases: [...reversedArr],
      };

    default:
      return state;
  }
};
