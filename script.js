function toggleMode() {
      const body = document.body;
      body.classList.toggle('dark-mode');
    }
  
    // Optional: Simpan preferensi mode
    document.addEventListener("DOMContentLoaded", function () {
      const modeToggle = document.getElementById("modeToggle");
      const isDark = localStorage.getItem("dark-mode") === "true";
  
      if (isDark) {
        document.body.classList.add("dark-mode");
        modeToggle.checked = true;
      }
  
      modeToggle.addEventListener("change", () => {
        const dark = modeToggle.checked;
        document.body.classList.toggle("dark-mode", dark);
        localStorage.setItem("dark-mode", dark);
      });
    });
