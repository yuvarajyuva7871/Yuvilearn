(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const login = document.querySelector('[data-login-form]');
  if (login) {
    login.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Login backend is not connected yet.');
    });
  }
})();
