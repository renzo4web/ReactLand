import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  if (loading) return <h4>Loading</h4>;
  return (
    <ul className="grid relative animate-pulse  rounded-md border-4 bg-purple-100 border-4 border-purple-600 shadow-xl p-2">
      <h4 className="absolute -top-10 rounded-tl-lg rounded-tr-lg left-0 bg-purple-600 text-white px-3 p-2 text-xl ">
        {category}
      </h4>
      {data.map((gif) => (
        <GifGridItem key={gif.id} {...gif} />
      ))}
    </ul>
  );
};

export default GifGrid;
