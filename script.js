const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// EDITE A DATA DO ANIVERSÁRIO NESTE FORMATO: "2026-10-10T19:30:00"
const birthdayDate = new Date("2026-11-18T19:00:00");

function updateCountdown() {
  const difference = birthdayDate - new Date();
  const values = {
    days: Math.max(0, Math.floor(difference / 86400000)),
    hours: Math.max(0, Math.floor(difference / 3600000) % 24),
    minutes: Math.max(0, Math.floor(difference / 60000) % 60),
    seconds: Math.max(0, Math.floor(difference / 1000) % 60)
  };

  Object.entries(values).forEach(([key, value]) => {
    const element = document.getElementById(key);
    if (element) element.textContent = String(value).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

// EDITE OS LINKS ABAIXO


// Animações ao entrar na tela
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

// Galeria: os arquivos reais serão carregados quando você substituir os placeholders.
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = "Foto da galeria";
    lightbox.hidden = false;
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
}

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLightbox();
});

/* =========================================
   PIX — ANOTHER WAY TO GIFT
========================================= */

const pixLevels = {

  1: {
    stars: "⭐",
    crime: "PEQUENO CRIME",
    amount: "R$ 50,00",
    description:
      "Uma infração leve. A polícia ainda não considera você uma ameaça."
  },

  2: {
    stars: "⭐⭐",
    crime: "CRIME EM ANDAMENTO",
    amount: "R$ 100,00",
    description:
      "A movimentação foi detectada. Você já entrou no radar."
  },

  3: {
    stars: "⭐⭐⭐",
    crime: "FUGITIVO PROCURADO",
    amount: "R$ 150,00",
    description:
      "Agora ficou sério. A polícia já está atrás de você."
  },

  4: {
    stars: "⭐⭐⭐⭐",
    crime: "ALTA PERICULOSIDADE",
    amount: "R$ 200,00",
    description:
      "Seu presente causou uma grande movimentação na cidade."
  },

  5: {
    stars: "⭐⭐⭐⭐⭐",
    crime: "AMEAÇA MÁXIMA",
    amount: "R$ 250,00",
    description:
      "Você entrou para a lista dos mais procurados."
  },

  6: {
    stars: "⭐⭐⭐⭐⭐⭐",
    crime: "LENDA DE VICE CITY",
    amount: "R$ 300,00",
    description:
      "Seu nome será lembrado por toda a cidade."
  }

};


const pixStars =
  document.querySelectorAll(".pix-star");

const selectedStars =
  document.getElementById("selectedStars");

const pixCrime =
  document.getElementById("pixCrime");

const pixAmount =
  document.getElementById("pixAmount");

const pixDescription =
  document.getElementById("pixDescription");


pixStars.forEach(button => {

  button.addEventListener("click", () => {

    const level =
      button.dataset.level;

    const data =
      pixLevels[level];


    /* Remove seleção */

    pixStars.forEach(item => {

      item.classList.remove("active");

    });


    /* Ativa selecionado */

    button.classList.add("active");


    /* Atualiza conteúdo */

    selectedStars.textContent =
      data.stars;

    pixCrime.textContent =
      data.crime;

    pixAmount.textContent =
      data.amount;

    pixDescription.textContent =
      data.description;

  });

});



/* =========================================
   CPF / PIX
========================================= */


/*
   COLOQUE O CPF DA ALANA AQUI.

   Exemplo:

   const cpfPix = "12345678900";
*/

const cpfPix =
  "70457316209";

const pixHolder = "Alana Ferreira Printes";


const copyCpf =
  document.getElementById("copyCpf");

const cpfDisplay =
  document.getElementById("cpfDisplay");

const copyFeedback =
  document.getElementById("copyFeedback");


copyCpf.addEventListener("click", async () => {

  try {

    await navigator.clipboard.writeText(cpfPix);


    cpfDisplay.textContent =
      "CPF COPIADO";


    copyFeedback.classList.add("show");


    setTimeout(() => {

      cpfDisplay.textContent =
        "XXX.XXX.XXX-XX";

      copyFeedback.classList.remove("show");

    }, 2500);


  } catch (error) {

    alert(
      "Não foi possível copiar automaticamente."
    );

  }

});