export const fetchAmiibo = async (path) => {
  const response = await fetch(`https://www.amiiboapi.com/api/${path}`);
  const data = await response.json();
  return data.amiibo;
};
