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
## Menjalankan Server Pengembangan

   Untuk memulai server pengembangan, jalankan:

 
    npm run dev
   
  Perintah ini akan memulai server lokal di http://localhost:3000. Anda dapat membuka tautan tersebut di browser untuk melihat aplikasi.

## Membangun untuk Produksi </h3>

   Untuk membuat build produksi dari proyek:

    npm run build
    
   Setelah build selesai, Anda dapat melihat build tersebut secara lokal:

   
    npm run preview
    
## Menghasilkan File Statis 

   Jika Anda ingin menghasilkan HTML statis untuk semua rute (berguna untuk hosting statis):

    npm run generate
    

## Menggunakan Docker 

   Untuk menjalankan proyek di dalam kontainer Docker, ikuti langkah-langkah berikut:

1. Bangun gambar Docker:

    ```bash
    docker build -t nuxt-app 
    ```

2. Jalankan kontainer Docker:

    ```bash
    docker run -d -p 3000:3000 nuxt-app
    ```

Ini akan menjalankan aplikasi di dalam kontainer dan memetakan port kontainer 3000 ke port lokal 3000 Anda. Anda kemudian dapat mengakses aplikasi di http://localhost:3000.

## Dependensi
Berikut adalah daftar pustaka dan alat utama yang digunakan dalam proyek ini:

- **Nuxt 3**:Kerangka kerja full-stack untuk Vue.js.
- **TailwindCSS**: Kerangka CSS berbasis utilitas.
- **DaisyUI**: Pustaka komponen TailwindCSS.
- **Pinia**: Pustaka manajemen state untuk Vue 3.
- **vee-validate**: Pustaka validasi untuk Vue.js.
- **Axios**: Klien HTTP berbasis Promise untuk browser dan Node.js.
- **vue3-toastify**: Notifikasi toast untuk Vue 3.
- **PrimeVue:** Pustaka komponen UI.
- **@hennge/vue3-pagination:** Komponen paginasi untuk Vue 3.

