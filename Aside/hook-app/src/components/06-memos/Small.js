import { memo } from "react";
const Small = memo(({ value }) => {
  console.log("small");
  return <small>{value}</small>;
});
export default Small;
