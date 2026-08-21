// Mobile navigation toggle — shared across all pages
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }
});

// Gallery lightbox — click any gallery photo to see it enlarged, with download option
document.addEventListener('DOMContentLoaded', function () {
  var galleryImgs = document.querySelectorAll('.gallery-grid img');
  if (galleryImgs.length === 0) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Close">&times;</button>' +
    '<a class="lightbox-download" download>Download</a>' +
    '<img src="" alt="">' +
    '<div class="lightbox-caption"></div>';
  document.body.appendChild(overlay);

  var overlayImg = overlay.querySelector('img');
  var overlayCaption = overlay.querySelector('.lightbox-caption');
  var closeBtn = overlay.querySelector('.lightbox-close');
  var downloadLink = overlay.querySelector('.lightbox-download');

  galleryImgs.forEach(function (img) {
    img.addEventListener('click', function () {
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;
      var figcaption = img.closest('figure').querySelector('figcaption');
      overlayCaption.textContent = figcaption ? figcaption.textContent : '';

      downloadLink.href = img.src;
      var filename = img.src.split('/').pop();
      downloadLink.setAttribute('download', filename);

      overlay.classList.add('active');
    });
  });

  function closeLightbox() { overlay.classList.remove('active'); }
  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});

// Header gets a drop shadow once the page has scrolled a little
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});

// Back-to-top button — appears after scrolling down a page
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '&uarr;';
  document.body.appendChild(btn);

  function onScroll() {
    btn.classList.toggle('visible', window.scrollY > 500);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Scroll-reveal — fades cards/timeline items/etc. in as they enter view.
// The .reveal class is only ever added here, so if JS doesn't run,
// everything just displays normally with no animation.
document.addEventListener('DOMContentLoaded', function () {
  if (!('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll(
    '.card, .timeline-item, .passport, .quick-link, .testimonial, .faq-item'
  );
  if (targets.length === 0) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function (el, i) {
    el.classList.add('reveal');
    // small stagger within each row/group for a nicer cascade
    el.style.transitionDelay = (Math.min(i % 6, 5) * 60) + 'ms';
    io.observe(el);
  });
});

// Animate skill bars from 0 to their target width when scrolled into view
document.addEventListener('DOMContentLoaded', function () {
  var bars = document.querySelectorAll('.skill-bar-fill');
  if (bars.length === 0) return;

  bars.forEach(function (bar) {
    bar.dataset.target = bar.style.width || getComputedStyle(bar).width;
    bar.style.width = '0';
  });

  if (!('IntersectionObserver' in window)) {
    bars.forEach(function (bar) { bar.style.width = bar.dataset.target; });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.target;
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(function (bar) { io.observe(bar); });
});
