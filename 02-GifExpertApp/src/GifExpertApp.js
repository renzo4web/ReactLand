import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAdd = () => setCategories((cat) => [...cat, "hunter"]);

  return (
    <div className="font-display bg-gray-200 container-lg flex flex-col items-center	min-h-screen">
      <h1 className="text-center text-5xl font-bold my-4">Gift Experts</h1>
      <AddCategory setCategories={setCategories} />
      <ul className="w-full">
        {categories.map((cats) => (
          <GifGrid key={cats} category={cats} />
        ))}
      </ul>
      <hr />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default GifExpertApp;
