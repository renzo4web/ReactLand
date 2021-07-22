import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);

  const [data, setData] = useState({
    text: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setData({ ...data, loading: true });
    fetch(url)
      .then((data) => data.json())
      .then((quote) => {
        if (isMounted.current) {
          setData({ ...data, text: quote[0], loading: false });
        } else {
          console.log("El State no se monto");
        }
      })
      .catch((err) => setData({ ...data, loading: false, error: err }));
  }, [url]);

  return data;
};
