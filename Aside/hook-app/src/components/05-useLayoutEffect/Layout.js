import { useLayoutEffect, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

const Layout = () => {
  const { state, increment, decrement } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${state}`;
  const data = useFetch(url);
  const { text } = Boolean(data) && data;

  const boxRef = useRef();
  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect());
    console.log("Layout");
  }, []);

  return (
    <div className="bg-light p-3">
      <article>
        <h4>{text.series}</h4>
        <blockquote ref={boxRef} className="blockquote">
          <strong>{text.quote}</strong>

          <footer className="blockquote-footer mt-2">
            Author: {text.author}
          </footer>
          <cite></cite>
        </blockquote>

        <button
          className="btn btn-secondary"
          onClick={() => {
            decrement();
          }}
        >
          Prev quote
        </button>

        <button
          className="btn btn-primary"
          onClick={() => {
            increment();
          }}
        >
          Next quote
        </button>
      </article>
    </div>
  );
};

export default Layout;
