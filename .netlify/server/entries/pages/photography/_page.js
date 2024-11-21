async function load({ fetch }) {
  const response = await fetch("/photography");
  if (!response.ok) {
    throw new Error("Failed to fetch companies data");
  }
  const photos = await response.json();
  return { photos };
}
export {
  load
};
