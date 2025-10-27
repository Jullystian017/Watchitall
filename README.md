# 🎬 WATCHITALL — Premium Movie Streaming Platform

**WATCHITALL** adalah web streaming film premium seperti Netflix, dibangun menggunakan sistem pembayaran **Midtrans** serta integrasi API film dari **TMDB**.  
Hanya pengguna yang sudah **membayar** yang dapat menonton film.

---

## 🚀 Fitur Utama

### 🔐 Autentikasi & Akun
- Login & register menggunakan **email dan password**
- Sistem **client-side authentication** (Supabase)
- Hanya pengguna **premium (sudah bayar)** yang bisa menonton film

### 💳 Sistem Pembayaran
- Terintegrasi dengan **Midtrans** (sandbox mode)
- Mendukung status transaksi: pending, success, failed
- Data langganan disimpan di **Firebase**

### 🎞️ Streaming Film
- Nonton film langsung dari API eksternal (TMDB)
- Hanya pengguna premium yang bisa menonton video

### 🧭 Dashboard Pengguna
- Riwayat tontonan
- Daftar film terakhir ditonton
- Rekomendasi film berdasarkan genre

### 🏠 Halaman Beranda
- Slider film seperti Netflix
- Film populer/trending (Top 10)
- Kategori produksi (Disney+, Marvel, dll)
- Rekomendasi film untuk kamu

---