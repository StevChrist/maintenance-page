# Homelab Dynamic Maintenance System

Sistem halaman pemeliharaan multi-tenant untuk Vercel yang otomatis menyesuaikan identitas visual (logo, warna, font, dan status pesan) dari 5 website homelab:
1. **`stevchrist.site` & `www.stevchrist.site`** (Steven Immanuel C. Girsang Portfolio)
2. **`peninemate.stevchrist.site`** (PenineMate - AI Movie Q&A)
3. **`tbh-price.stevchrist.site`** (TBH Price Tracker)
4. **`social-sentiment.stevchrist.site`** (SocialSentiment NLP Analytics)
5. **`pen-server.stevchrist.site`** (Pen Platform / Carbon Studio)

## Fitur Utama
- **Multi-Tenant Host Detection**: Mendeteksi domain yang diakses via header HTTP atau URL preview.
- **Identitas Visual Presisi**: Menggunakan font, logo asli, dan warna brand sesuai masing-masing repo.
- **Live 24-Hour Countdown**: Hitung mundur interaktif untuk estimasi server kembali menyala.
- **Pengecekan Server Interaktif**: Tombol cek status origin server langsung dari halaman maintenance.
- **Cloudflare Worker Auto-Failover**: Menangkap error Cloudflare Tunnel (1033 / 521 / 530) dan mengoper ke Vercel tanpa mengubah URL browser pengunjung.
- **SEO-Friendly**: Merespons dengan HTTP Status `503 Service Unavailable` dan header `Retry-After: 86400` untuk menjaga reputasi mesin pencari.

Untuk langkah-langkah deployment lengkap, lihat [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md).
