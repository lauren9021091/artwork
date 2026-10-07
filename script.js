/* ==================================================
   DATOS DE LAS OBRAS
================================================== */

const artworks = [

  {
    image: "01.jpg",
    title: "Mongol con águila",
    technique: "Esmalte al agua sobre pandereta",
    dimensions: "2,0 × 2,0 m",
    year: "2025"
  },

  {
    image: "02.jpg",
    title: "Retrato niño 6",
    technique: "Pastel al óleo sobre madera",
    dimensions: "25 × 25 cm",
    year: "2025"
  },

  {
    image: "03.jpg",
    title: "Gato",
    technique: "Tinta sobre papel",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "04.jpg",
    title: "Jam 1",
    technique: "Acuarelas",
    dimensions: "30 × 24 cm",
    year: "2026"
  },

  {
    image: "05.jpg",
    title: "Saxofonista 1",
    technique: "Acuarelas",
    dimensions: "30 × 24 cm",
    year: "2026"
  },

  {
    image: "06.jpg",
    title: "Mujer comiendo",
    technique: "Acrílicos sobre papel canson mixed media 300 gr/cm2",
    dimensions: "30 × 24 cm",
    year: "2025"
  },

  {
    image: "07.jpg",
    title: "Tetera 2",
    technique: "Esmalte al agua sobre pandereta",
    dimensions: "2,0 × 2,0 m",
    year: "2025"
  },

  {
    image: "08.jpg",
    title: "Niño 9",
    technique: "Esmalte al agua sobre pandereta",
    dimensions: "2,0 × 2,0 m",
    year: "2025"
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

const prevArtworkButton =
  document.getElementById("prevArtwork");

const nextArtworkButton =
  document.getElementById("nextArtwork");

const artworkElements =
  document.querySelectorAll(".artwork");

const artworkLabels =
  document.querySelectorAll(
    ".artwork-name"
  );

let currentArtworkIndex = 0;

artworkLabels.forEach(
  (label, index) => {

    const work = artworks[index];

    if (!work) {
      return;
    }

    label.textContent = work.title;

    const image =
      artworkElements[index]
        .querySelector("img");

    if (image) {
      image.alt = work.title;
    }

  }
);


/* ==================================================
   CARGAR UNA OBRA
================================================== */

function showArtwork(index) {

  currentArtworkIndex = index;

  const work = artworks[index];

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

}


/* ==================================================
   ABRIR UNA OBRA
================================================== */

artworkElements.forEach(
  (artwork, index) => {

    artwork.addEventListener(
      "click",
      () => {

        showArtwork(index);

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
   NAVEGAR ENTRE OBRAS
================================================== */

prevArtworkButton.addEventListener(
  "click",
  () => {

    const previousIndex =
      (currentArtworkIndex - 1 +
        artworks.length) %
      artworks.length;

    showArtwork(previousIndex);

  }
);

nextArtworkButton.addEventListener(
  "click",
  () => {

    const nextIndex =
      (currentArtworkIndex + 1) %
      artworks.length;

    showArtwork(nextIndex);

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
    "hidden";

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
    "hidden";

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
