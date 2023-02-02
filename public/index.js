const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const pixlpetId = document.querySelector("#pixlpetId").value;
  try {
    const response = await fetch(`https://www.thepixlverse.io/pixlpets/${pixlpetId}`);
    const data = await response.json()
    const isHatched = data.attributes.some(
      (attribute) => attribute.trait_type === "Egg" && attribute.value === "Hatched"
    );
    if (isHatched) {
      result.innerHTML = "Don't get bamboozled. The eggs been hatched anon, refresh the meta data.<br>ARF";
    } else {
      result.innerHTML = "Anon, its not hatched. Don't be a coward, scoop it before they hatch.<br>ARF";
    }
    
  } catch (error) {
    result.innerHTML = "Error: " + error.message;
  }
});