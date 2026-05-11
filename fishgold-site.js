const FISHGOLD_SUPPORT_EMAIL = 'alinka.gunich9@gmail.com';

document.getElementById('year').textContent = String(new Date().getFullYear());
document.querySelectorAll('[data-support-email]').forEach((link) => {
  link.href = 'mailto:' + FISHGOLD_SUPPORT_EMAIL;
  link.textContent = FISHGOLD_SUPPORT_EMAIL;
});
