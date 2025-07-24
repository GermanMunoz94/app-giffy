const apiKey = 'T6bVJHJ2atmZhxCj0yeFrNV9SIaANRcv'; 

export default async function getGifs({ keyword } = {}) {
  
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=r&lang=en`
  
  const res = await fetch(apiURL);
  const response = await res.json();
  const { data } = response;
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  }
  return [];
}