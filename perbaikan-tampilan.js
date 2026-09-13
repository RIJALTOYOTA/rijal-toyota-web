/* RIJAL KALLA TOYOTA - PERBAIKAN TAMPILAN 1-4 */
(function () {
  function applyFix() {

    /* 1. PROMO */
    document.querySelectorAll("p,div,span").forEach(function (el) {
      var t = (el.textContent || "").trim();
      if (t.includes("Lihat foto promo terbaru") ||
          t.includes("Foto dapat diperbarui melalui Panel Edit")) {
        el.textContent = "Promo & Penawaran Spesial Toyota";
      }
    });

    /* 2. OTR / HARGA */
    var style = document.getElementById("rijal-fix-style");
    if (!style) {
      style = document.createElement("style");
      style.id = "rijal-fix-style";
      style.textContent = `
        #cars .price {
          display:block !important;
          width:100% !important;
          box-sizing:border-box !important;
          padding:6px 8px !important;
          margin:4px 0 6px !important;
          line-height:1.2 !important;
          white-space:nowrap !important;
          overflow:hidden !important;
          text-overflow:ellipsis !important;
          font-weight:800 !important;
        }

        #penyerahanGallery {
          display:grid !important;
          grid-template-columns:repeat(3,minmax(0,1fr)) !important;
          gap:10px !important;
        }

        #penyerahanGallery img {
          width:100% !important;
          height:180px !important;
          object-fit:cover !important;
          display:block !important;
        }

        @media(max-width:700px) {
          #penyerahanGallery {
            grid-template-columns:repeat(3,minmax(0,1fr)) !important;
            gap:6px !important;
          }

          #penyerahanGallery img {
            height:110px !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    /* 3. CAPTION PENYERAHAN */
    document.querySelectorAll("#penyerahanGallery img").forEach(function (img) {
      var parent = img.parentElement;
      if (!parent) return;

      if (!parent.querySelector(".rijal-penyerahan-caption")) {
        var caption = document.createElement("div");
        caption.className = "rijal-penyerahan-caption";
        caption.textContent = "🤝 Penyerahan Unit • Rijal Kalla Toyota";
        caption.style.cssText =
          "text-align:center;padding:7px 4px;font-size:11px;color:#667085;";
        parent.appendChild(caption);
      }
    });

    /* 4. WHATSAPP PROMO */
    document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp.com"]').forEach(function (a) {
      if (a.dataset.rijalWA) return;
      a.dataset.rijalWA = "1";

      a.addEventListener("click", function (e) {
        var url = a.getAttribute("href");
        if (!url) return;

        e.preventDefault();
        window.location.href = url;
      }, true);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyFix);
  } else {
    applyFix();
  }
})();
