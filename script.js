/* ==================================================
   DATOS DE LAS OBRAS
================================================== */

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


/* ==================================================
   ELEMENTOS DEL MODAL
================================================== */

const modal =
  document.getElementById("modal");

const modalImage =
  document.getElementById("modalImage");

const modalNumber =
  document.getElementById("modalNumber");

const modalTitle =
  document.getElementById("modalTitle");

const modalTechnique =
  document.getElementById("modalTechnique");

const modalDimensions =
  document.getElementById("modalDimensions");

const modalYear =
  document.getElementById("modalYear");

const closeButton =
  document.getElementById("close");

const artworkElements =
  document.querySelectorAll(".artwork");


/* ==================================================
   ABRIR UNA OBRA
================================================== */

artworkElements.forEach(
  (artwork, index) => {

    artwork.addEventListener(
      "click",
      () => {

        const work =
          artworks[index];

        if (!work) {
          return;
        }

        modalImage.src =
          "images/" + work.image;

        modalImage.alt =
          work.title;

        modalNumber.textContent =
          "OBRA " +
          String(index + 1)
            .padStart(2, "0");

        modalTitle.textContent =
          work.title;

        modalTechnique.textContent =
          work.technique;

        modalDimensions.textContent =
          work.dimensions;

        modalYear.textContent =
          work.year;

        modal.classList.add(
          "active"
        );

        modal.setAttribute(
          "aria-hidden",
          "false"
        );

        document.body.style.overflow =
          "hidden";

      }
    );

  }
);


/* ==================================================
   CERRAR OBRA
================================================== */

function closeModal() {

  modal.classList.remove(
    "active"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";

}


closeButton.addEventListener(
  "click",
  closeModal
);


/* ==================================================
   CERRAR OBRA AL PULSAR FUERA
================================================== */

modal.addEventListener(
  "click",
  (event) => {

    if (
      event.target === modal
    ) {

      closeModal();

    }

  }
);


/* ==================================================
   PANEL DEL ARTISTA
================================================== */

const artistToggle =
  document.getElementById(
    "artistToggle"
  );

const artistPanel =
  document.getElementById(
    "artistPanel"
  );

const artistCircle =
  document.getElementById(
    "artistCircle"
  );


/* ==================================================
   ABRIR INFORMACIÓN
================================================== */

function openArtistPanel() {

  /*
    Si hay una obra abierta,
    la cerramos primero.
  */

  closeModal();

  artistPanel.classList.add(
    "active"
  );

  artistPanel.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "artist-open"
  );

  document.body.style.overflow =
    "hidden";

}


/* ==================================================
   CERRAR INFORMACIÓN
================================================== */

function closeArtistPanel() {

  artistPanel.classList.remove(
    "active"
  );

  artistPanel.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "artist-open"
  );

  document.body.style.overflow =
    "";

}


/* ==================================================
   TRIÁNGULO → ABRIR
================================================== */

artistToggle.addEventListener(
  "click",
  () => {

    /*
      Si ya está abierto no hacemos
      nada con el triángulo.
      El círculo es el que vuelve.
    */

    if (
      artistPanel.classList.contains(
        "active"
      )
    ) {
      return;
    }

    openArtistPanel();

  }
);


/* ==================================================
   CÍRCULO → VOLVER
================================================== */

artistCircle.addEventListener(
  "click",
  () => {

    if (
      artistPanel.classList.contains(
        "active"
      )
    ) {

      closeArtistPanel();

    }

  }
);


/* ==================================================
   TECLA ESC
================================================== */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key !== "Escape"
    ) {
      return;
    }


    if (
      artistPanel.classList.contains(
        "active"
      )
    ) {

      closeArtistPanel();

      return;
    }


    if (
      modal.classList.contains(
        "active"
      )
    ) {

      closeModal();

    }

  }
);
