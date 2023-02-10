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

    let earthImage = "images/earth.webp";
    let fireImage = "images/fire.webp";
    let airImage = "images/air.webp";
    let waterImage = "images/water.webp";
    let imageHTML = "";
    
    if (isHatched) {
      result.innerHTML = "Query for Pixl Pet #" + pixlpetId + 
                          "<br><br>Don't get bamboozled. The eggs been hatched anon, refresh the meta data.<br>ARF" +
                          "<br><br><img src='" + data.image + "' alt='Pixl Pet Image'>";
    } else {
        result.innerHTML = "Query for Pixl Pet #" + pixlpetId + "<br><br>Anon, its not hatched. Don't be a coward, scoop it before they hatch.<br>ARF<br><br>";
        data.attributes.forEach((attribute) => {
          if (attribute.trait_type === "Element") {
            switch (attribute.value) {
              case "Earth":
                imageHTML = "<img src='" + earthImage + "' alt='Earth Element'>";
                break;
              case "Fire":
                imageHTML = "<img src='" + fireImage + "' alt='Fire Element'>";
                break;
              case "Air":
                imageHTML = "<img src='" + airImage + "' alt='Air Element'>";
                break;
              case "Water":
                imageHTML = "<img src='" + waterImage + "' alt='Water Element'>";
                break;
            }
          }
        });
        result.innerHTML += imageHTML;
    }
    
  } catch (error) {
    result.innerHTML = "Error: " + error.message;
  }
});