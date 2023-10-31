export async function loader() {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/4687b055-e25e-4660-9758-cc18afcfafc7"
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
