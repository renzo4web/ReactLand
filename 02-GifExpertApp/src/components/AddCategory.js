import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputVal, setInputVal] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    setInputVal(value.trim());

    console.log("calling handleChange");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputVal.trim().length) return;
    setCategories((prevCats) => [inputVal, ...prevCats]);
    setInputVal("");
    console.log("calling handleSubmit");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-4 flex items-center flex-wrap md:flex-row "
    >
      <input
        type="text"
        value={inputVal}
        onChange={handleChange}
        className="
        w-full
        md:w-60
        transition transform duration-500 ease-in-out 
        rounded
        p-3 focus:outline-none focus:ring-2 focus:ring-purple-600
        focus:scale-110"
      />

      <button
        type="submit"
        aria-label="add category"
        className="w-full rounded p-2 md:w-20 md:h-full md:ml-4 uppercase bg-purple-600 text-white
      transition hover:bg-purple-500 hover:scale-110"
      >
        search
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
