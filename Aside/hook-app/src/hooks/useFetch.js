import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [endpoint, setEndpoint] = useState(url);
  const [data, setData] = useState({
    text: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch(endpoint)
      .then((data) => data.json())
      .then((quote) => {
        console.log(quote);
        setData({ ...data, text: quote[0], loading: false });
      })
      .catch((err) => setData({ ...data, loading: false, error: err }));
    return () => {
      setData({ ...data, loading: true });
    };
  }, [endpoint]);
  return [data, setEndpoint];
};
