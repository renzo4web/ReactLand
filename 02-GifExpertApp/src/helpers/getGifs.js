const getGifs = async (category) => {
  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=7VTabg7EEU5DQwX5XDjZyudouHZTDImf&q=${category}&limit=10`
    );
    const { data } = await res.json();
    return data.map((gif) => {
      const { id, title } = gif;
      const { original, downsized_medium } = gif.images;
      return {
        id,
        title,
        url: downsized_medium.url,
        category,
      };
    });
  } catch (error) {
    console.warn(error);
  }
};
export default getGifs;
