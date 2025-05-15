gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-up").forEach((text) => {
  gsap.fromTo(
    text,
    { opacity: 0, y: 50 }, // Começa invisível e deslocado para baixo
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: text,
        start: "top 80%", // Inicia quando o texto está 80% visível
        end: "top 40%", // Termina quando está 40% visível
        scrub: true, // Efeito suave ao scrollar
      },
    }
  );
});

// Animação Parallax
gsap.to("#titleMain", {
  y: -150, // Sobe enquanto rola
  scrollTrigger: {
    trigger: ".Welcome-container",
    start: "top top",
    scrub: true, // Acompanha a rolagem
  },
});

gsap.to("#discoverBtn", {
  y: -190, // Sobe enquanto rola
  scrollTrigger: {
    trigger: ".Welcome-container",
    start: "top top",
    scrub: true, // Acompanha a rolagem
  },
});

gsap.to("#videoControlBtn", {
  y: -150, // Sobe enquanto rola
  scale: 0.5,
  scrollTrigger: {
    trigger: ".Welcome-container",
    start: "top top",
    scrub: true, // Acompanha a rolagem
  },
});

gsap.set("#CoffeeBean1", {
  rotation: 55, // ou qualquer valor que quiser
});

gsap.to("#CoffeeBean1", {
  y: -350, // Sobe enquanto rola
  rotation: 100,
  scrollTrigger: {
    trigger: ".VisitUs-container",
    start: "top 40%",
    scrub: true, // Acompanha a rolagem
  },
});

gsap.set("#CoffeeBean2", {
  rotation: 45, // ou qualquer valor que quiser
});

gsap.to("#CoffeeBean2", {
  y: 200, // Desce enquanto rola
  rotation: 100,
  scrollTrigger: {
    trigger: ".VisitUs-container",
    start: "top 40%",
    scrub: true,
  },
});

gsap.to("#logo3dImg", {
  y: -75, // Desce enquanto rola
  scrollTrigger: {
    trigger: ".aboutUs",
    start: "top 40%",
    scrub: true,
  },
});

gsap.to("#tableScheduling", {
  y: -150, // Desce enquanto rola
  scrollTrigger: {
    trigger: ".tableScheduling-container",
    start: "top 50%",
    scrub: true,
  },
});

gsap.to("#linha1", {
  scrollTrigger: {
    trigger: ".MenuTitle",
    start: "top 70%",
    onEnter: () => {
      document.querySelector("#linha1").classList.add("animate");
    },
  },
});

gsap.to("#TitleTextMenu", {
  scrollTrigger: {
    trigger: ".MenuTitle",
    start: "top 70%",
    onEnter: () => {
      document.querySelector("#TitleTextMenu").classList.add("animateTitle");
    },
  },
});

gsap.to("#linha2", {
  scrollTrigger: {
    trigger: ".MenuTitle",
    start: "top 70%",
    onEnter: () => {
      document.querySelector("#linha2").classList.add("animate");
    },
  },
});

const video = document.getElementById("introVideo");
const btn = document.getElementById("videoControlBtn");
video.play();

btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    btn.textContent = "Pause";
  } else {
    video.pause();
    btn.textContent = "Play";
  }
});
