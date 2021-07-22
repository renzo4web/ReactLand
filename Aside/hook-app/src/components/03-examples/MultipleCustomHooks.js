import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

const MultipleCustomHooks = () => {
  const { state, increment, decrement } = useCounter(1);

  const url = `https://www.breakingbadapi.com/api/quotes/${state}`;

  const data = useFetch(url);
  const { loading, text } = data;

  return (
    <div className="bg-light p-3">
      {loading ? (
        <h4 className="alert alert-info">Loading</h4>
      ) : (
        <article>
          <h4>{text.series}</h4>
          <blockquote className="blockquote">
            <strong>{text.quote}</strong>

            <footer className="blockquote-footer mt-2">
              Author: {text.author}
            </footer>
            <cite></cite>
          </blockquote>

          <button
            disabled={loading || state <= 1}
            className="btn btn-secondary"
            onClick={() => {
              decrement();
            }}
          >
            Prev quote
          </button>

          <button
            disabled={loading}
            className="btn btn-primary"
            onClick={() => {
              increment();
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
