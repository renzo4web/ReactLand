export default async function asyncWrapper(promise) {
  const results = await Promise.allSettled(promise);
  console.log(results);
  const hasError = results.some((res) => res.status !== "fulfilled");
  if (hasError) {
    throw new Error(`Not posible to fetch data`);
  }

  return results;
}
