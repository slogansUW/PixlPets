const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const pixlpetId = document.querySelector("#pixlpetId").value;
  try {
    const response = await fetch(`https://www.thepixlverse.io/pixlpets/${pixlpetId}`);
    const data = await response.json()
    result.innerHTML = JSON.stringify(data);
  } catch (error) {
    result.innerHTML = "Error: " + error.message;
  }
});