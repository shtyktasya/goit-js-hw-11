import axios from 'axios';
const pixabayInstance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '54667939-2958d96aa870b71b0c19ccb5c',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export async function getImagesByQuery(query) {
  const response = await pixabayInstance.get('', {
    params: { q: query },
  });
  return response.data;
}
