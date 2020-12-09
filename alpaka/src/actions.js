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
