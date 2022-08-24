export const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=db6VqtFoSWkixuI0gYmzk9VHdjVLgEWa&q=${category}&limit=10`;
  const resp = await fetch( url );
  const { data, pagination } = await resp.json();
  
  const gifs = data.map( gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url
  }));

  const totalImages = pagination.count;
  console.log(gifs)

  return gifs;
}