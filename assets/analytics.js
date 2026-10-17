/* El Shams: contact click tracking for Google Analytics 4.
   The GA4 tag itself (gtag.js, ID G-XXXXXXXXXX) is in the <head> of every public page.
   This file only sends a contact_click event when someone taps a phone, email or WhatsApp link. */
(function () {
  function contactType(href) {
    if (/^tel:/i.test(href)) return 'phone';
    if (/^mailto:/i.test(href)) return 'email';
    if (/(wa\.me|whatsapp\.com)/i.test(href)) return 'whatsapp';
    return null;
  }
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var type = contactType(href);
    if (type && typeof window.gtag === 'function') {
      window.gtag('event', 'contact_click', {
        contact_type: type,
        link_url: href,
        page_path: location.pathname,
        page_language: document.documentElement.lang || 'en'
      });
    }
  }, true);
})();
