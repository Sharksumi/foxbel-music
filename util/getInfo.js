import axios from "axios";

const artistChosenURL = "http://localhost:4000/artist";
const albumChosenURL = "http://localhost:4000/album";
const searchChosenURL = "http://localhost:4000/search";

export const getInfoArtist = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(artistChosenURL)
      .then((response) => resolve(response.data))
      .catch((error) => error);
  });
};

export const getInfoAlbum = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(albumChosenURL)
      .then((response) => resolve(response.data))
      .catch((error) => error);
  });
};

export const getSearch = (search) => {
  return new Promise((resolve, reject) => {
    axios
      .get(searchChosenURL, {params: {search}})
      .then((response) => resolve(response.data))
      .catch((error) => error);
  });
}