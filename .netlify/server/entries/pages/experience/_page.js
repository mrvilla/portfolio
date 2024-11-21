async function load({ fetch }) {
  const response = await fetch("/experience");
  if (!response.ok) {
    throw new Error("Failed to fetch companies data");
  }
  const companies = await response.json();
  return { companies };
}
export {
  load
};
