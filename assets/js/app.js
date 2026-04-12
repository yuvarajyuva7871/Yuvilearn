(() => {
  const yearNode = document.getElementById('year');
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  const loginForm = document.querySelector('[data-login-form]');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const helper = document.getElementById('login-note');
      if (helper) {
        helper.textContent = 'Login will be enabled after backend integration.';
      }
    });
  }
})();
