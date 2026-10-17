/* Shared floating WhatsApp button for all pages */
(function () {
  "use strict";

  function addWhatsAppButton() {
    if (document.querySelector(".whatsapp-float")) return;

    var link = document.createElement("a");
    link.className = "whatsapp-float";
    link.href = "https://wa.me/919785848405?text=Hello%20Mukesh%2C%20I%27m%20interested%20in%20your%20online%20yoga%20classes.";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", "Chat with Mukesh on WhatsApp");
    link.setAttribute("title", "Chat with Mukesh on WhatsApp");

    link.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16.02 3.2A12.55 12.55 0 0 0 5.25 22.2L3.5 28.6l6.56-1.72A12.55 12.55 0 1 0 16.02 3.2Zm0 22.9a10.3 10.3 0 0 1-5.25-1.44l-.38-.23-3.89 1.02 1.04-3.79-.25-.39a10.31 10.31 0 1 1 8.73 4.83Zm5.66-7.72c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.2-.18.21-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56s1.11 2.97 1.26 3.18c.15.21 2.18 3.33 5.28 4.67.74.32 1.31.51 1.76.65.74.24 1.41.2 1.94.12.59-.09 1.83-.75 2.09-1.48.26-.73.26-1.36.18-1.49-.08-.13-.28-.21-.59-.36Z"/></svg>';

    var style = document.createElement("style");
    style.textContent = ".whatsapp-float{position:fixed;right:20px;bottom:20px;width:58px;height:58px;border-radius:50%;background:#25D366;color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 25px rgba(0,0,0,.20);z-index:9999;text-decoration:none;transition:transform .2s ease,box-shadow .2s ease}.whatsapp-float:hover{transform:translateY(-3px);box-shadow:0 10px 28px rgba(0,0,0,.25)}.whatsapp-float svg{width:32px;height:32px;display:block}@media(max-width:600px){.whatsapp-float{width:54px;height:54px;right:15px;bottom:15px}}";
    document.head.appendChild(style);
    document.body.appendChild(link);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addWhatsAppButton, { once: true });
  } else {
    addWhatsAppButton();
  }
})();