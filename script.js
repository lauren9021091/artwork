const artworks = [

  {
    image: "01.jpg",
    title: "Tetera",
    technique: "Óleo / técnica mixta",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "02.jpg",
    title: "Figura I",
    technique: "Tinta sobre papel",
    dimensions: "29 × 21 cm",
    year: "2025"
  },

  {
    image: "03.jpg",
    title: "Tres figuras",
    technique: "Pastel sobre papel",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "04.jpg",
    title: "Retrato I",
    technique: "Técnica mixta",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "05.jpg",
    title: "Músicos",
    technique: "Tinta sobre papel",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "06.jpg",
    title: "Músico",
    technique: "Pastel sobre papel",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "07.jpg",
    title: "Arquitectura I",
    technique: "Acuarela",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "08.jpg",
    title: "Figura II",
    technique: "Acuarela y tinta",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "09.jpg",
    title: "Escena I",
    technique: "Técnica mixta",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "10.jpg",
    title: "Paisaje urbano",
    technique: "Óleo / técnica mixta",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "11.jpg",
    title: "Retrato II",
    technique: "Tinta",
    dimensions: "21 × 29 cm",
    year: "2025"
  },

  {
    image: "12.jpg",
    title: "Retrato III",
    technique: "Técnica mixta",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "13.jpg",
    title: "Dos figuras",
    technique: "Tinta sobre papel",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "14.jpg",
    title: "Corazón",
    technique: "Técnica mixta",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "15.jpg",
    title: "Gato",
    technique: "Tinta sobre papel",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "16.jpg",
    title: "Figura III",
    technique: "Óleo / técnica mixta",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "17.jpg",
    title: "Retrato IV",
    technique: "Técnica mixta",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "18.jpg",
    title: "Caballos",
    technique: "Tinta sobre papel",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "19.jpg",
    title: "Tetera II",
    technique: "Óleo / técnica mixta",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "20.jpg",
    title: "Figura IV",
    technique: "Tinta sobre papel",
    dimensions: "30 × 24 cm",
    year: "2024"
  }

];


const modal = document.getElementById("modal");

const modalImage = document.getElementById("modalImage");
const modalNumber = document.getElementById("modalNumber");
const modalTitle = document.getElementById("modalTitle");
const modalTechnique = document.getElementById("modalTechnique");
const modalDimensions = document.getElementById("modalDimensions");
const modalYear = document.getElementById("modalYear");

const closeButton = document.getElementById("close");

const artworkElements = document.querySelectorAll(".artwork");


/* =========================
   OPEN ARTWORK
========================= */

artworkElements.forEach((artwork, index) => {

  artwork.addEventListener("click", () => {

    const work = artworks[index];

    modalImage.src = "images/" + work.image;

    modalImage.alt = work.title;

    modalNumber.textContent =
      "OBRA " + String(index + 1).padStart(2, "0");

    modalTitle.textContent = work.title;

    modalTechnique.textContent = work.technique;

    modalDimensions.textContent = work.dimensions;

    modalYear.textContent = work.year;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});


/* =========================
   CLOSE
========================= */

function closeModal() {

  modal.classList.remove("active");

  document.body.style.overflow = "";

}


closeButton.addEventListener("click", closeModal);


/* CLICK OUTSIDE */

modal.addEventListener("click", (event) => {

  if (event.target === modal) {

    closeModal();

  }

});


/* ESC */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    closeModal();

  }

});
/* =========================
   PANEL DEL ARTISTA
========================= */

const artistToggle = document.getElementById("artistToggle");
const artistPanel = document.getElementById("artistPanel");
const artistClose = document.getElementById("artistClose");

function openArtistPanel() {
    artistPanel.classList.add("active");
    artistPanel.setAttribute("aria-hidden", "false");

    document.body.classList.add("artist-open");
    document.body.style.overflow = "hidden";
}

function closeArtistPanel() {
    artistPanel.classList.remove("active");
    artistPanel.setAttribute("aria-hidden", "true");

    document.body.classList.remove("artist-open");
    document.body.style.overflow = "";
}

artistToggle.addEventListener("click", openArtistPanel);

artistClose.addEventListener("click", closeArtistPanel);


/* ESC PARA CERRAR */

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeArtistPanel();
    }
});

