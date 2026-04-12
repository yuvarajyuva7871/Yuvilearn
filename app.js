(() => {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  const loginForm = document.querySelector('[data-login-form]');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const note = document.getElementById('login-note');
      if (note) {
        note.textContent = 'Login feature will be connected to backend soon.';
      }
    });
  }
})();
