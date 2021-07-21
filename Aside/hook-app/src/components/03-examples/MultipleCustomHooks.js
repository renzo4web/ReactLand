import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const MultipleCustomHooks = () => {
  const [id, setId] = useState(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${id}`;
  const [data, setEndpoint] = useFetch(url);
  const { loading, text, error } = data;
  console.log(data);
  return (
    <div>
      {loading ? (
        <h4>Loading</h4>
      ) : (
        <article>
          <h4>{text.series}</h4>
          <p>{text.quote}</p>
          <button
            onClick={() => {
              setId((prev) => prev + 1);
              console.log(id);
              console.log(url);
              setEndpoint(url);
            }}
          >
            Next quote
          </button>
        </article>
      )}
    </div>
  );
};

export default MultipleCustomHooks;
