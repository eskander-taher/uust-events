export default async function deleteDataFromServer(route) {
  try {
    const response = await fetch(`http://localhost:1337/api/${route}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    console.log("Data deleted successfully:");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending data:", error);
  }
}
