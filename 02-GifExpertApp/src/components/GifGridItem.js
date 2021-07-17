import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ url, title }) => {
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
GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default GifGridItem;
