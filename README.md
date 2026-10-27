# Diary App — React Native Expo CLI

## Identitas Mahasiswa

- **Nama:** Muhammad Hafizh Akbar Solehudin 
- **NIM:** 2430511012
- **Program Studi:** Teknik Informatika
- **Universitas:** Universitas Muhammadiyah Sukabumi
- **Mata Kuliah:** Pemrograman Mobile Multiplatform
- **Praktikum:** Pertemuan 4 — Struktur Project & Komponen Dasar



## Tools dan Teknologi

- React Native
- Expo CLI
- JavaScript
- Visual Studio Code
- Expo Go
- Node.js dan npm

## Cara Menjalankan Aplikasi

1. Pastikan Node.js dan npm sudah terinstal.
2. Buka folder project `diary-app` menggunakan Visual Studio Code.
3. Buka terminal pada folder project.
4. Instal dependency dengan perintah:

   `npm install`

5. Jalankan aplikasi menggunakan:

   `npx expo start`

6. Buka Expo Go pada smartphone.
7. Scan QR Code yang muncul di terminal.
8. Tunggu sampai aplikasi Diary App tampil.

Jika koneksi lokal bermasalah, aplikasi dapat dicoba menggunakan perintah `npx expo start --tunnel`.

Penjelasan Props dan State

Props
Props digunakan untuk mengirim data dan fungsi dari komponen induk ke komponen anak.
- DiaryCard menerima data entri seperti title, date, preview, moodImage, dan liked.
- DiaryCard juga menerima callback onPress untuk membuka detail dan onToggleLike untuk mengubah status like.
- SearchBar menerima callback onChange untuk mengirim teks pencarian ke komponen induk.
- EntryForm menerima callback onSubmit untuk mengirim entri baru ke DiaryListScreen.

State
State menyimpan data yang dapat berubah saat aplikasi berjalan.
- SearchBar menggunakan state lokal untuk menyimpan teks yang diketik pada kolom pencarian.
- EntryForm menggunakan state untuk nilai judul, tanggal, dan ringkasan.
- DiaryListScreen mengelola entries (daftar diary), query (kata kunci pencarian), likedIds (ID entri yang disukai), dan selected (entri yang sedang dibuka pada modal detail).
Perubahan state membuat antarmuka diperbarui tanpa perlu me-reload aplikasi secara manual.

Fitur yang Diuji
- Pencarian entri berdasarkan judul, ringkasan, atau tanggal.
- Penambahan entri melalui form.
- Perubahan status like melalui ikon hati.
- Pembukaan dan penutupan modal detail diary.
- Penggunaan gambar lokal dari folder assets/moods.