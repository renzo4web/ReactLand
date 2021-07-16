import React from "react";

const GifGridItem = ({ category, id, url, title }) => {
  return (
    <li className="hover:z-10">
      <img
        src={url}
        alt={title}
        className="transform transition-transform ease-in rounded-md hover:scale-125 "
      />
    </li>
  );
};

export default GifGridItem;
