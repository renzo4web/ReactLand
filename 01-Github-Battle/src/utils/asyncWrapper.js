export default async function asyncWrapper(promise) {
  const [result] = await Promise.allSettled(promise);

  const { value, status, reason } = result;

  if (status === "rejected") {
    throw new Error(`Not posible to fetch data ${reason}`);
  }

  return await value.json();
}
