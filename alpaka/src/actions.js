///////////////// CONTENT ////////////////

export const populateAboutContent = (data) => ({
  type: "POPULATE_ABOUT_CONTENT",
  payload: data,
});

export const populateArtistsContent = (data) => ({
  type: "POPULATE_ARTISTS_CONTENT",
  payload: data,
});

export const populateReleasesContent = (data) => ({
  type: "POPULATE_RELEASES_CONTENT",
  payload: data,
});

//////////////// CONTENT ////////////////

//////////////// USER ////////////////

export const loginUser = (data) => ({
  type: "LOGIN_USER",
  payload: data,
});

export const logoutUser = () => ({
  type: "LOGOUT_USER",
});

//////////////// USER ////////////////
