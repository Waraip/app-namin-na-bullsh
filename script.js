const nav = document.getElementById('nav');
const toast = document.getElementById('toast');
const demoBtn = document.getElementById('demoBtn');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach((el) => io.observe(el));

let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

document.querySelectorAll('.route-card').forEach((card) => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.route-card').forEach((c) => c.classList.remove('selected'));
    card.classList.add('selected');
  });
});

document.querySelector('.cta:not(.cta-outline)')?.addEventListener('click', function () {
  if (this.closest('.screen-ruta')) {
    showToast('✓ Ruta A na nagsimula. Mananatili kang updated sa live alerts.');
  }
});

document.querySelector('.cta-outline')?.addEventListener('click', () => {
  showToast('✓ Salamat sa report! Nakapila na ito para sa pag-verify.');
});

document.querySelector('.share-btn')?.addEventListener('click', () => {
  showToast('✓ Na-share ang iyong lokasyon sa pamilya.');
});

document.querySelectorAll('.tile').forEach((tile) => {
  tile.addEventListener('click', () => {
    showToast('✓ Binuksan ang ' + tile.querySelector('strong').textContent);
  });
});

if (demoBtn) {
  demoBtn.addEventListener('click', () => {
    document.getElementById('screens').scrollIntoView({ behavior: 'smooth' });
  });
}

nav.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('expanded');
  });
});