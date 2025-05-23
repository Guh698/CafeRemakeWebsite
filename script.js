gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

document.addEventListener("DOMContentLoaded", function () {
  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    smoothTouch: 0.1,
  });

  gsap.utils.toArray(".fade-up").forEach((text) => {
    gsap.fromTo(
      text,
      { y: 50 }, // Começa invisível e deslocado para baixo
      {
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

  gsap.to("#interactiveMenu", {
    scrollTrigger: {
      trigger: ".mainContent",
      start: "top 10vh",
      scrub: true,
      onEnter: () => {
        document.querySelector(".interactiveMenu").classList.add("Show");
      },
      onLeaveBack: () => {
        document.querySelector(".interactiveMenu").classList.remove("Show");
      },
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

  btn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      btn.textContent = "Pause";
    } else {
      video.pause();
      btn.textContent = "Play";
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.5 }
  ); // só roda quando pelo menos 50% visível

  observer.observe(video);

  ScrollTrigger.create({
    trigger: ".FirstCategory",
    start: "top 20%",
    end: "+=1500", // quanto maior, mais tempo "preso"
    scrub: 1,
    pin: true,
    onUpdate: (self) => {
      gsap.to(".FirstCategory", {
        x: `${-1800 * self.progress}px`,
        duration: 1,
        ease: "power3.out",
      });
    },
  });

  // Second Category
  ScrollTrigger.create({
    trigger: ".SecondCategory",
    start: "top 20%",
    end: "+=1500",
    scrub: 1,
    pin: true,
    onUpdate: (self) => {
      gsap.to(".SecondCategory", {
        x: `${-1700 * self.progress}px`,
        duration: 1,
        ease: "power3.out",
      });
    },
  });

  // Third Category
  ScrollTrigger.create({
    trigger: ".ThirdCategory",
    start: "top 20%",
    end: "+=1500",
    scrub: 1,
    pin: true,
    onUpdate: (self) => {
      gsap.to(".ThirdCategory", {
        x: `${-1700 * self.progress}px`,
        duration: 1,
        ease: "power3.out",
      });
    },
  });

  const CloseMenuIcon = document.getElementById("close-menu-icon");
  const sideBar = document.getElementById("sidebarContainer");
  const interactiveMenu = document.getElementById("interactiveMenu");

  function ShowSide() {
    sideBar.classList.add("Show");
    interactiveMenu.classList.remove("Show");
  }

  function closeSide() {
    sideBar.classList.remove("Show");
    interactiveMenu.classList.add("Show");
  }

  function pauseScroll() {
    smoother.paused(true);
  }

  function resumeScroll() {
    smoother.paused(false);
  }

  if (interactiveMenu) {
    interactiveMenu.addEventListener("click", function () {
      pauseScroll();
      ShowSide();
    });
  }

  if (CloseMenuIcon) {
    CloseMenuIcon.addEventListener("click", function () {
      resumeScroll();
      closeSide();
    });
  }

  function scrollToId(id) {
    const element = document.querySelector(`#${id}`);
    if (element) {
      smoother.scrollTo(element, true, "start");
    }
  }

  document.querySelectorAll(".scroll-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Evita o comportamento padrão do link
      const id = link.getAttribute("data-scroll"); // Pega o ID do atributo data-scroll
      closeSide();
      resumeScroll();
      scrollToId(id); // Chama a função com o ID
    });
  });

  function isMobile() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  }

  // Seleciona o link de download
  const downloadLink = document.getElementById("menuDownload");

  // Verifica o dispositivo e define o link correspondente
  if (isMobile()) {
    downloadLink.href = "Menu-mobile.pdf"; // Arquivo específico para mobile
  } else {
    downloadLink.href = "Menu-Desktop.pdf"; // Arquivo específico para desktop
  }
});
