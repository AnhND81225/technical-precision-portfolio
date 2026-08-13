const revealItems = document.querySelectorAll(".reveal");
const themeToggle = document.querySelector("[data-theme-toggle]");

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);

  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "Light" : "Dark";
    themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
  }
}

setTheme(document.documentElement.dataset.theme || "dark");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const form = document.querySelector("[data-contact-form]");
const status = document.querySelector("[data-form-status]");

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      status.textContent = "Transmission blocked: complete all fields.";
      status.style.color = "#e7be5f";
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ducanh.nguyenkl@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    status.textContent = "Gmail compose opened. Message payload prepared.";
    status.style.color = "#63d297";
  });
}
