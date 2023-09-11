document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Logika Popup Start
   */

  const popup = document.querySelector(".popup");
  const popupBox = document.querySelector(".popup-box");
  const popupBtn = document.querySelector(".popup-btn");

  if (popupBox) {
    window.addEventListener("load", () => {
      popupBox.classList.add("open");
    });

    popup.addEventListener("click", function (e) {
      if (!popupBox.contains(e.target) || e.target == popupBtn) {
        setTimeout(() => {
          popupBox.classList.remove("open");
          popup.style.opacity = 0;
        }, 100);
        setTimeout(() => {
          popup.style.display = "none";
        }, 300);
        typed();
      }
    });
  }

  /**
   * Logika Typing Text Start
   */

  function typed() {
    const typed = document.querySelector("#element");
    if (typed) {
      let typed_strings = [
        `<li><strong>Nama Lengkap</strong><p>: <span>Elgin Al-wafi Dauliyah</span></p></li><li><strong>NIT</strong><p>: <span>2223594</span></p></li><li><strong>Jenis Kelamin</strong><p>: <span>Laki-laki</span></p></li><li><strong>Tempat/Tgl Lahir</strong><p>: <span>Subang, 33 dzulkaidah 2007</span></p></li><li><strong>Alamat</strong><p>: <span>BTN. Griya Cinangsi Asri Blok B No.85</span></p></li><li class="dd"><strong>RT/RW</strong><p>: <span>024/007</span></p></li><li class="dd"><strong>Kel/Desa</strong><p>: <span>Cinangsi</span></p></li><li class="dd"><strong>Kecamatan</strong><p>: <span>Cibogo</span></p></li><li><strong>Agama</strong><p>: <span>Islam</span></p></li><li><strong>Status Perkawinan</strong><p>: <span>BELUM KAWIN</span></p></li><li><strong>Cita-cita</strong><p>: <span>Fullstack Developer</span></p></li><li><strong>Hobi</strong><p>: <span>Nonton</span></p></li>
      `,
      ];
      new Typed("#element", {
        strings: typed_strings,
        typeSpeed: 10,
        showCursor: false,
      });
    }
  }

  /**
   * Logika Typing Text End
   */

  /**
   * Logika Popup End
   */

  /**
   * Logika Menu Button Active Start
   */

  const biodataWrapper = document.querySelector(".biodata-main");
  const skillsWrapper = document.querySelector(".skills-main");

  const menuWrapper = document.querySelector(".menu-buttons");
  const biodataBtn = document.querySelector(".menu-buttons .biodata-btn");
  const skillsBtn = document.querySelector(".menu-buttons .skills-btn");

  menuWrapper.addEventListener("click", function (e) {
    const isButton = e.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    }

    if (e.target === biodataBtn) {
      skillsBtn.classList.remove("active");
      biodataBtn.classList.add("active");

      biodataWrapper.style.opacity = 1;
      skillsWrapper.classList.remove("active");
    } else if (e.target === skillsBtn) {
      skillsBtn.classList.add("active");
      biodataBtn.classList.remove("active");

      biodataWrapper.style.opacity = 0;
      skillsWrapper.classList.add("active");
      typedSkills();
    }
  });

  /**
   * Logika Menu Button Active End
   */
});
