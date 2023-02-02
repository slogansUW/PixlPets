const axios = require("axios");
const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const pixlpetId = document.querySelector("#pixlpetId").value;
  console.log('pixlpetId:', pixlpetId);
  try {
    const response = await axios.get(`https://www.thepixlverse.io/pixlpets/${pixlpetId}`);
    console.log(response)
    result.innerHTML = JSON.stringify(response.data);
  } catch (error) {
    result.innerHTML = "Error: " + error.message;
  }
});