# 🏛️ TI Unmuh Jember & Forkafest 2023 — Web Native Portal

[![Deploy static content to Pages](https://github.com/VictoryVicy/native-frontend-unmuh-jember/actions/workflows/static.yml/badge.svg)](https://github.com/VictoryVicy/native-frontend-unmuh-jember/actions/workflows/static.yml)
[![Website](https://img.shields.io/badge/Demo-Live%20Website-brightgreen?style=for-the-badge&logo=googlechrome&logoColor=white)](https://victoryvicy.github.io/native-frontend-unmuh-jember/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge)](LICENSE)

> **Proyek Web Design Competition (2023)**  
> Portal informasi prodi Teknik Informatika Universitas Muhammadiyah Jember dan perhelatan event **Forkafest 2023**, dibangun secara murni (*pure vanilla / native front-end*) tanpa bantuan framework maupun dependensi backend eksternal.

🔗 **Live Demo:** [https://victoryvicy.github.io/native-frontend-unmuh-jember/](https://victoryvicy.github.io/native-frontend-unmuh-jember/)

---

## 📌 Ringkasan Proyek

Proyek ini dirancang dan dikembangkan pada pertengahan tahun **2023** untuk kebutuhan kompetisi web design tingkat mahasiswa. Website ini mengangkat identitas program studi Teknik Informatika Universitas Muhammadiyah Jember sekaligus mempromosikan kegiatan **Forkafest 2023** dengan tema:

> *"Meningkatkan kreativitas generasi muda dengan teknologi digital dalam menghadapi era society 5.0"*

Situs ini mengedepankan performa ringan, interaktivitas DOM secara native, serta pengalaman visual yang responsif di berbagai resolusi layar.

---

## ✨ Fitur Utama

- ⚡ **Pure Native Front-End**: Dibangun dari nol menggunakan HTML5 semantik, CSS3 modern, dan Vanilla JavaScript tanpa framework (React/Vue) atau bundler, menjadikannya sangat cepat dan ringan saat dimuat.
- 🎓 **Profil Akademik & Akreditasi**: Informasi terstruktur seputar profil prodi Teknik Informatika, visi-misi, sejarah, hingga akreditasi resmi.
- 🏆 **Showcase Prestasi Mahasiswa**: Galeri prestasi mahasiswa di bidang akademik maupun non-akademik.
- 🎪 **Hub Event Forkafest 2023**: 
  - Hitung mundur (*live countdown timer*) menuju puncak acara.
  - Detail cabang lomba (*Web Development, Cyber Security, Computer Network, UI/UX Design, E-Sports*).
  - Alur registrasi peserta.
- 🧠 **Mini Interactive Quiz**: Kuis pengetahuan dasar seputar teknologi dan bahasa pemrograman dengan sistem pengacakan soal (*randomizer*) dan kalkulasi skor otomatis di sisi browser (*client-side*).
- 🎨 **Visual & Interaksi Dinamis**:
  - Hero slider carousel otomatis dengan transisi halus.
  - Navbar adaptif saat scroll (*scrolled state* & *hamburger menu* responsif).
  - Modal dialog interaktif untuk melihat detail informasi.
  - Pembatas section artistik berbasis gelombang SVG.

---

## 📂 Struktur Halaman & Navigasi

| Halaman | File | Deskripsi |
| :--- | :--- | :--- |
| **Beranda** | `index.html` | Landing page utama pengenalan Prodi TI Unmuh Jember, fasilitas, dan sorotan kegiatan. |
| **Tentang Kami** | `profil.html` | Sejarah berdirinya jurusan, visi & misi, serta informasi akreditasi prodi. |
| **Prestasi** | `prestasi.html` | Rekapitulasi capaian dan pencapaian mahasiswa Teknik Informatika. |
| **Forkafest** | `forkafest.html` | Informasi lengkap perhelatan festival dan rangkaian kompetisi Forkafest 2023. |
| **Materi Bahasa** | `bahasa.html` | Edukasi dasar pengenalan bahasa pemrograman (HTML, CSS, JS, Python, PHP, dll.). |
| **Kuis Online** | `quiz.html` | Mini game kuis pilihan ganda berbasis JavaScript murni. |

---

## 🛠️ Tech Stack & Library

- **Core**: 
  - HTML5 (Semantic elements)
  - CSS3 (Flexbox, CSS Grid, Custom Animations, Media Queries)
  - Vanilla JavaScript (ES6+ DOM Manipulation)
- **External Assets & CDN**:
  - [Font Awesome 6](https://fontawesome.com/) untuk ikon antarmuka.
  - [Google Fonts](https://fonts.google.com/) (*Mukta, Lilita One, Secular One, Tinos, Noto Sans Osage*).
- **Deployment**:
  - GitHub Pages dengan automasi GitHub Actions (`.github/workflows/static.yml`).

---

## 📁 Struktur Direktori

```plaintext
native-frontend-unmuh-jember/
├── .github/
│   └── workflows/
│       └── static.yml          # Konfigurasi deployment GitHub Pages
├── assets/
│   ├── img/                    # Aset grafis, foto kegiatan, banner, dan SVG
│   └── js/
│       ├── aos.js              # Efek animasi on-scroll sederhana
│       ├── countdown.js        # Logika hitung mundur waktu acara
│       ├── parallax.js         # Efek parallax
│       └── quiz.js             # Data soal dan logika permainan kuis
├── bahasa.html                 # Halaman edukasi bahasa pemrograman
├── forkafest.html              # Halaman event Forkafest 2023
├── index.html                  # Halaman landing page utama
├── model.js                    # Handler logika modal dialog
├── prestasi.html               # Halaman galeri prestasi mahasiswa
├── profil.html                 # Halaman profil prodi dan akreditasi
├── quiz.html                   # Halaman kuis interaktif
├── responsif.css               # Media query layout responsif perangkat mobile
├── script.js                   # Navigasi burger menu & efek navbar scroll
├── slider.css                  # Styling komponen slider carousel
├── slider.js                   # Logika navigasi dan auto-slide carousel
├── style.css                   # Styling global website
└── LICENSE                     # Lisensi GPL v3
```

---

## 🚀 Cara Menjalankan Secara Lokal

Karena proyek ini merupakan **website statis (*Zero Dependency*)**, Anda tidak perlu menginstall database, server backend, atau runtime Node.js:

1. **Clone repository ini**:
   ```bash
   git clone https://github.com/VictoryVicy/native-frontend-unmuh-jember.git
   cd native-frontend-unmuh-jember
   ```

2. **Jalankan website**:
   - **Opsi 1 (Langsung)**: Cukup klik ganda file `index.html` untuk langsung membukanya di browser.
   - **Opsi 2 (Live Server)**: Buka folder proyek di **VS Code**, klik kanan pada `index.html`, lalu pilih **"Open with Live Server"**.
   - **Opsi 3 (Python)**:
     ```bash
     python -m http.server 8000
     # Lalu buka http://localhost:8000 di browser
     ```

---

## 📄 Lisensi

Didistribusikan di bawah lisensi **GNU General Public License v3.0 (GPL-3.0)**. Silakan baca file [LICENSE](LICENSE) untuk informasi selengkapnya.

---

<p align="center">
  Dibuat dengan ❤️ untuk Lomba Web Design 2023 • Teknik Informatika Universitas Muhammadiyah Jember
</p>
