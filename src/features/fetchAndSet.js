import { fetchAmiibo } from "./fetchAmiibo";

export const fetchAndSet = async (path, setFunction) => {
  fetchAmiibo(path)
    .then((data) => {
      setFunction(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
