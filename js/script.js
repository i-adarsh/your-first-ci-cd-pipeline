// Set deployment date
document.addEventListener("DOMContentLoaded", function () {
  // Simulate dynamic build version and deploy date
  const deployDate = new Date().toLocaleString();
  document.getElementById("deploy-date").textContent = deployDate;

  // Simulate build version from environment or random
  const buildVersion = `1.0.${Math.floor(Math.random() * 100)}`;
  document.getElementById("build-version").textContent = buildVersion;

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Add scroll effect to navbar
  let lastScroll = 0;
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    } else {
      navbar.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    }

    lastScroll = currentScroll;
  });

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe service cards
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

  // Console Easter Egg
  console.log(
    "%c🚀 Welcome to DevOps HQ!",
    "font-size: 20px; color: #00a86b; font-weight: bold;"
  );
  console.log(
    "%cWhere Code Meets The Real World",
    "font-size: 14px; color: #0066cc;"
  );
  console.log(
    "%cCheck out our GitHub: https://github.com/devops-hq",
    "font-size: 12px; color: #666;"
  );
});

// Simulate CI/CD pipeline status (for demo purposes)
function checkPipelineStatus() {
  const statuses = ["passed", "running", "failed"];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  console.log(`Pipeline Status: ${randomStatus}`);

  // You could update UI elements here based on pipeline status
  // For example, show a notification or update a status indicator
}

// Check pipeline status every 30 seconds (for demo)
setInterval(checkPipelineStatus, 30000);
