// ─── PATH DETECTION ───
const isSubPage = window.location.pathname.includes('/pages/');
const rootPath = isSubPage ? '../' : '';

// ─── NAVBAR COMPONENT ───
function renderNavbar() {
  const html = `
  <nav class="navbar">
    <div class="nav-inner">
      <a href="${rootPath}index.html" class="nav-logo">
        <img src="https://res.cloudinary.com/dcfy7xqli/image/upload/v1781400129/ChatGPT_Image_Jun_14_2026_08_21_38_AM_j1kyep.png" alt="Ruko 8 Cemerlang">
      </a>
      <ul class="nav-links">
        <li><a href="${rootPath}index.html">Beranda</a></li>
        <li><a href="${rootPath}pages/tentang.html">Tentang Kami</a></li>
        <li><a href="${rootPath}pages/layanan.html">Layanan</a></li>
        <li><a href="${rootPath}pages/faq.html">FAQ</a></li>
        <li><a href="${rootPath}pages/kontak.html">Kontak</a></li>
      </ul>
      <div class="nav-cta">
        <a href="https://wa.me/6281234567890?text=Halo%20Ruko%208%20Cemerlang,%20saya%20ingin%20konsultasi" class="btn btn-primary btn-sm" target="_blank">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          WhatsApp
        </a>
      </div>
      <button class="hamburger" aria-label="Buka Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-menu">
    <a href="${rootPath}index.html">🏠 Beranda</a>
    <a href="${rootPath}pages/tentang.html">🏢 Tentang Kami</a>
    <a href="${rootPath}pages/layanan.html">📋 Layanan</a>
    <a href="${rootPath}pages/faq.html">❓ FAQ</a>
    <a href="${rootPath}pages/kontak.html">📞 Kontak</a>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', html);
}

// ─── FOOTER COMPONENT ───
function renderFooter() {
  const html = `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="https://res.cloudinary.com/dcfy7xqli/image/upload/v1781400129/ChatGPT_Image_Jun_14_2026_08_21_38_AM_j1kyep.png" alt="Ruko 8 Cemerlang">
          <p>Mitra terpercaya dalam pengurusan legalitas usaha dan pertanahan di Indonesia. Profesional, Cepat, dan Transparan.</p>
          <div class="footer-socials">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 class="footer-heading">Navigasi</h4>
          <ul class="footer-links">
            <li><a href="${rootPath}index.html">Beranda</a></li>
            <li><a href="${rootPath}pages/tentang.html">Tentang Kami</a></li>
            <li><a href="${rootPath}pages/layanan.html">Layanan</a></li>
            <li><a href="${rootPath}pages/faq.html">FAQ</a></li>
            <li><a href="${rootPath}pages/kontak.html">Kontak</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Layanan Utama</h4>
          <ul class="footer-links">
            <li><a href="${rootPath}pages/layanan.html#legalitas">Pendirian PT</a></li>
            <li><a href="${rootPath}pages/layanan.html#legalitas">Pendirian CV</a></li>
            <li><a href="${rootPath}pages/layanan.html#legalitas">NIB & OSS RBA</a></li>
            <li><a href="${rootPath}pages/layanan.html#pertanahan">Balik Nama</a></li>
            <li><a href="${rootPath}pages/layanan.html#pertanahan">Turun Waris</a></li>
            <li><a href="${rootPath}pages/layanan.html#pertanahan">SHM & HGB</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Hubungi Kami</h4>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>Jl. Brahma No.2b, Mengwitani,<br>Kec. Mengwi, Kabupaten Badung,<br>Bali 80351</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
            <span>+62 812-3456-7890</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <span>info@ruko8cemerlang.com</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 15H11v-6h1.5v6zm0-8H11V7h1.5v2z"/></svg>
            <span>Sen–Jum: 08.00–17.00 WIB<br>Sabtu: 09.00–13.00 WIB</span>
          </div>
          <a href="https://maps.app.goo.gl/Dkszjb71rpVKHzg58" target="_blank" style="margin-top:8px;display:inline-flex;align-items:center;gap:6px;font-size:0.8rem;color:var(--gold);font-weight:600;transition:var(--transition)">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
            Lihat Google Maps
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;width:100%;padding:0 24px">
        <p>© ${new Date().getFullYear()} <span>Ruko 8 Cemerlang</span>. Seluruh hak cipta dilindungi.</p>
        <p style="font-size:0.75rem;color:rgba(255,255,255,0.35)">Legalitas Usaha & Pertanahan Terpercaya di Indonesia</p>
      </div>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

// ─── WA FLOAT BUTTON ───
function renderWAFloat() {
  const html = `
  <a href="https://wa.me/6281234567890?text=Halo%20Ruko%208%20Cemerlang,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda"
     class="whatsapp-float"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="Chat WhatsApp Ruko 8 Cemerlang">
    <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
  </a>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

// ─── INIT ON DOM READY ───
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  renderWAFloat();

  // Highlight active nav link
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkFile = href.split('/').pop();
    if (linkFile === currentFile || (currentFile === '' && linkFile === 'index.html')) {
      link.classList.add('active');
    }
  });
});
