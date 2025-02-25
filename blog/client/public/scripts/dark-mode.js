document.addEventListener("DOMContentLoaded", () => {
    const darkModeButton = document.getElementById("dark-mode-button");
    const themeAnnounce = document.getElementById("theme-announce");
    const body = document.body;
  
    // Ambil tema dari localStorage jika ada
    const savedTheme = localStorage.getItem("theme") || "light";
    body.setAttribute("data-theme", savedTheme);
    darkModeButton.classList.toggle("dark-button", savedTheme === "dark");
    darkModeButton.classList.toggle("light-button", savedTheme === "light");
    themeAnnounce.textContent = savedTheme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode";
  
    // Event listener untuk toggle dark mode
    darkModeButton.addEventListener("click", () => {
      const currentTheme = body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
  
      body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
  
      darkModeButton.classList.toggle("dark-button", newTheme === "dark");
      darkModeButton.classList.toggle("light-button", newTheme === "light");
      themeAnnounce.textContent = newTheme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode";
    });
  });
  