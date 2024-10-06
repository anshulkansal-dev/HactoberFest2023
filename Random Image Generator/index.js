const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");
const galleryEl = document.getElementById("gallery");
const inputEl = document.getElementById("input");
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const container = document.querySelector(".container");

async function fetchImage() {
  const inputValue = parseInt(inputEl.value, 10);

  if (isNaN(inputValue) || inputValue < 1 || inputValue > 10) {
    displayError("Number should be between 1 and 10");
    return;
  }

  btnEl.style.display = "none";
  galleryEl.innerHTML = '<img src="spinner.svg" alt="Loading..." />';

  try {
    const response = await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.floor(Math.random() * 1000)}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc`);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    displayImages(data);
  } catch (error) {
    displayError("An error occurred, try again later");
  } finally {
    btnEl.style.display = "block";
  }
}

function displayImages(images) {
  if (!images || images.length === 0) {
    displayError("No images found");
    return;
  }

  const imgs = images.map(pic => `<img src="${pic.urls.small}" alt="image" />`).join("");
  galleryEl.innerHTML = imgs;
  galleryEl.style.display = "block";
  errorMessageEl.style.display = "none";
}

function displayError(message) {
  errorMessageEl.style.display = "block";
  errorMessageEl.innerText = message;
  galleryEl.style.display = "none";
}

btnEl.addEventListener("click", fetchImage);

darkModeToggle.addEventListener("click", () => {
  container.classList.toggle("dark-mode");
});
