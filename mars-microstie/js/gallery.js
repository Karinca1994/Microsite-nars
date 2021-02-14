const resultsContainer = document.querySelector(".nasa-gallery");

const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=yhpg6UVUDpTIpCWu5Ix46bOxApaWG5eBtXi5eE7Q";

async function fetchImages() {

  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    resultsContainer.innerHTML = "";

    const images = json.photos;

    images.forEach(function(picture) {
      resultsContainer.innerHTML += `
            <div class="picture-container">
            <h4 class="information-title">${picture.camera.full_name}</h4>
            <a href="${picture.img_src}"><img class="mars-image" src="${picture.img_src}"></a>
            <h4 class="information">Status: ${picture.rover.status}</h4>
            <h4 class="information">date: ${picture.earth_date}</h4>
            </div>`;
    });

  } catch (error) {
    console.log(error);
  }

}

fetchImages();
