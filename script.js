const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded','false');
}));

const intro = document.getElementById('cinematicIntro');
if (intro) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const alreadySeen = sessionStorage.getItem('foxflareIntroSeen') === '1';

  if (reduceMotion || alreadySeen) {
    intro.remove();
    document.body.classList.remove('intro-pending');
  } else {
    sessionStorage.setItem('foxflareIntroSeen', '1');
    window.setTimeout(() => {
      intro.classList.add('is-exiting');
      document.body.classList.remove('intro-pending');
      window.setTimeout(() => intro.remove(), 900);
    }, 3300);
  }
}
