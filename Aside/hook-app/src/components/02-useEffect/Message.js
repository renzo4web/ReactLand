import React, { useEffect, useState } from "react";

export const Message = () => {
  const [crono, setCrono] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCrono((count) => count + 1);
    }, 500);
    return () => {
      console.log("clean");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h3>Look at this crono {crono}</h3>
    </div>
  );
};
