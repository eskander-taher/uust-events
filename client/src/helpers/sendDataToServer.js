export default async function sendDataToServer(clientData, route) {
  try {
    const response = await fetch(`http://localhost:1337/api/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    console.log("Data sent successfully:", clientData);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending data:", error);
  }
}
