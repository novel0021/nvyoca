// Load header.html ke div header-container
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;

    // Setelah header dimuat, setup toggle dark mode
    const modeToggle = document.getElementById('modeToggle');
    const isDark = localStorage.getItem('dark-mode') === 'true';

    if (isDark) {
      document.body.classList.add('dark-mode');
      modeToggle.checked = true;
    }

    modeToggle.addEventListener('change', () => {
      const dark = modeToggle.checked;
      document.body.classList.toggle('dark-mode', dark);
      localStorage.setItem('dark-mode', dark);
    });
  })
  .catch(err => console.error('Gagal load header:', err));
