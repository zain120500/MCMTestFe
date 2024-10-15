# Aplikasi Nuxt 3

Ini adalah aplikasi Nuxt 3 yang menggunakan TailwindCSS, Pinia, dan beberapa pustaka lainnya untuk berbagai fungsionalitas seperti paginasi, validasi formulir, dan notifikasi toast.

## Prasyarat

Sebelum Anda memulai, pastikan Anda telah memenuhi persyaratan berikut:

- **Node.js**: Anda harus memiliki Node.js terinstal. Unduh dan instal versi terbaru dari Node.js di [nodejs.org](https://nodejs.org/en/).
- **npm** atau **yarn**: Anda dapat menggunakan npm (datang bersama Node.js) atau Yarn (jika Anda lebih suka).

## Instalasi

1. Klon repositori:

   ```bash
   git clone https://github.com/zain120500/MCMTestFe.git
   cd nuxt-app
   ```

2. Instal dependensi:

    ```bash
    npm install
    ```
    atau, jika Anda menggunakan Yarn:

    ```bash
    yarn install
    ```

<h3>Menjalankan Server Pengembangan</h3>

    Untuk memulai server pengembangan, jalankan:

    ```bash
    npm run dev
    ```
    
    Perintah ini akan memulai server lokal di http://localhost:3000. Anda dapat membuka tautan tersebut di browser untuk melihat aplikasi.

<h3> Membangun untuk Produksi </h3>

    Untuk membuat build produksi dari proyek:

    ```bash
    npm run build
    ```

    Setelah build selesai, Anda dapat melihat build tersebut secara lokal:

    ```bash
    npm run preview
    ```
<h3> Menghasilkan File Statis </h3>

    Jika Anda ingin menghasilkan HTML statis untuk semua rute (berguna untuk hosting statis):

    ```bash
    npm run generate
    ```

<h3> Menggunakan Docker </h3>

    Untuk menjalankan proyek di dalam kontainer Docker, ikuti langkah-langkah berikut:

1. Bangun gambar Docker:

    ```bash
    docker build -t nuxt-app .
    ```

2. Jalankan kontainer Docker:

    ```bash
    docker run -d -p 3000:3000 nuxt-app
    ```

Ini akan menjalankan aplikasi di dalam kontainer dan memetakan port kontainer 3000 ke port lokal 3000 Anda. Anda kemudian dapat mengakses aplikasi di http://localhost:3000.

Dependensi
Berikut adalah daftar pustaka dan alat utama yang digunakan dalam proyek ini:

Nuxt 3: Kerangka kerja full-stack untuk Vue.js.
TailwindCSS: Kerangka CSS berbasis utilitas.
DaisyUI: Pustaka komponen TailwindCSS.
Pinia: Pustaka manajemen state untuk Vue 3.
vee-validate: Pustaka validasi untuk Vue.js.
Axios: Klien HTTP berbasis Promise untuk browser dan Node.js.
vue3-toastify: Notifikasi toast untuk Vue 3.
PrimeVue: Pustaka komponen UI.
@hennge/vue3-pagination: Komponen paginasi untuk Vue 3.
Pengaturan Docker
Proyek ini dapat dijalankan di dalam kontainer Docker. Berikut adalah pengaturan Docker.

Kontribusi
Jika Anda ingin berkontribusi pada proyek ini:

Fork proyek
Buat cabang fitur Anda: git checkout -b feature/cabang-fitur-saya
Komit perubahan Anda: git commit -m 'Tambahkan beberapa fitur'
Dorong ke cabang: git push origin feature/cabang-fitur-saya
Kirim permintaan tarik
