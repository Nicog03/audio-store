export async function loader() {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/98c0df65-f546-4682-92bb-fb631ee4aa9f"
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
