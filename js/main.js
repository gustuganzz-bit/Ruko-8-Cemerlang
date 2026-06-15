// ─── NAVBAR SCROLL EFFECT ───
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// BUNGKUS KE DALAM DOMContentLoaded AGAR MENUNGGU NAVBAR SELESAI DI-RENDER
document.addEventListener('DOMContentLoaded', () => {

  // ─── HAMBURGER MENU ───
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      hamburger.classList.toggle('active');
      if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }

  // ─── LANGUAGE TOGGLE ───
  const langBtns = document.querySelectorAll('.lang-btn');
  const langMap = {};

  // Collect all translatable elements
  document.querySelectorAll('[data-id]').forEach(el => {
    const id = el.getAttribute('data-id');
    const en = el.getAttribute('data-en');
    const id_text = el.getAttribute('data-id-text') || el.innerHTML;
    if (!langMap[id]) langMap[id] = { el, id: id_text, en };
  });

  let currentLang = 'id';

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.getAttribute('data-lang');
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('[data-id-text]').forEach(el => {
        if (currentLang === 'en' && el.getAttribute('data-en')) {
          el.innerHTML = el.getAttribute('data-en');
        } else if (currentLang === 'id' && el.getAttribute('data-id-text')) {
          el.innerHTML = el.getAttribute('data-id-text');
        }
      });
    });
  });

});

// ─── SCROLL FADE IN ───
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

// ─── ACCORDION ───
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.accordion-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ─── TABS ───
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabGroup = btn.closest('[data-tabs]') || document.body;
    const targetId = btn.getAttribute('data-tab');

    btn.closest('.tab-list').querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById(targetId);
    if (panel) panel.classList.add('active');
  });
});

// ─── COUNTER ANIMATION ───
function animateCounter(el, target, duration = 1800) {
  const suffix = el.getAttribute('data-suffix') || '';
  const prefix = el.getAttribute('data-prefix') || '';
  const isDecimal = target % 1 !== 0;
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = isDecimal ? (ease * target).toFixed(1) : Math.round(ease * target);
    el.textContent = prefix + val + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const counters = document.querySelectorAll('.counter');
if (counters.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));
}

// ─── ACTIVE NAV LINK ───
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ─── TESTIMONIAL SLIDER ───
const slider = document.querySelector('.testimonial-track');
if (slider) {
  let index = 0;
  const slides = slider.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const total = slides.length;

  function goTo(n) {
    index = (n + total) % total;
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  document.querySelector('.slider-prev')?.addEventListener('click', () => goTo(index - 1));
  document.querySelector('.slider-next')?.addEventListener('click', () => goTo(index + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

  let autoplay = setInterval(() => goTo(index + 1), 5000);
  slider.closest('.testimonial-slider')?.addEventListener('mouseenter', () => clearInterval(autoplay));
  slider.closest('.testimonial-slider')?.addEventListener('mouseleave', () => {
    autoplay = setInterval(() => goTo(index + 1), 5000);
  });
}

// ─── FORM SUBMIT FEEDBACK ───
document.querySelectorAll('form[action*="formspree"]').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation:spin 0.8s linear infinite"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/></svg> Mengirim...';
    btn.disabled = true;

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.innerHTML = `<div style="text-align:center;padding:40px 20px">
          <div style="width:60px;height:60px;background:#D4AF37;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#071A46" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3 style="font-family:'Playfair Display',serif;color:#071A46;margin-bottom:8px">Pesan Terkirim!</h3>
          <p style="color:#4A5568;font-size:0.9rem">Tim kami akan menghubungi Anda dalam 1×24 jam kerja.</p>
        </div>`;
      } else {
        btn.innerHTML = originalText;
        btn.disabled = false;
        alert('Terjadi kesalahan. Silakan coba lagi atau hubungi via WhatsApp.');
      }
    } catch {
      btn.innerHTML = originalText;
      btn.disabled = false;
      alert('Koneksi bermasalah. Silakan coba lagi.');
    }
  });
});

// spin keyframes
const style = document.createElement('style');
style.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
document.head.appendChild(style);
