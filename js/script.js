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
