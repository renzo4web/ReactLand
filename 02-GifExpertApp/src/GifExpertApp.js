import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div className="font-display bg-gray-200 container-lg flex flex-col items-center	min-h-screen">
      <h1 className="text-center text-5xl font-bold my-4">Gift Experts</h1>
      <AddCategory setCategories={setCategories} />
      <ul className="w-full">
        {categories.map((cats) => (
          <GifGrid key={cats} category={cats} />
        ))}
      </ul>
    </div>
  );
};

export default GifExpertApp;
