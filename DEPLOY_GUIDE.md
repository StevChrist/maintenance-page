# Panduan Deployment: 1 Page Maintenance untuk Setiap Website

Project ini telah disederhanakan menjadi **1 Halaman Bersih & Minimalis per Website** (hanya berisi icon/logo website, nama website, dan tulisan *"Website under maintenance..."* dengan gaya desain, font, dan warna yang persis mengikuti masing-masing website).

---

## 1. Daftar Halaman Khusus yang Tersedia

Setiap website memiliki rute halamannya masing-masing:

| No | Website | Halaman Khusus di Vercel | Karakteristik Desain |
|---|---|---|---|
| 1 | **`stevchrist.site`** | `/stevchrist` | Dark Obsidian + Emerald Glow (`#408A71`), Font Roboto, Logo PEN White |
| 2 | **`peninemate.stevchrist.site`** | `/peninemate` | Warm Taupe (`#463F3A`) + Peach Blush (`#E0AFA0`), Font Oswald & Inter, Logo PenineMate |
| 3 | **`tbh-price.stevchrist.site`** | `/tbh-price` | Dark Slate (`#09090b`) + Cyan/Teal (`#257e8c`), Font Oswald & Inter, Logo TBH-P |
| 4 | **`social-sentiment.stevchrist.site`** | `/social-sentiment` | Deep Navy (`#0B1628`) + Electric Blue (`#0474C4`), Font Oswald & Inter, Logo Social Sentiment |
| 5 | **`pen-server.stevchrist.site`** | `/pen-server` | Void Black (`#020617`) + Cyber Cyan (`#06b6d4`), Font Outfit & Inter, Logo Pen Platform |

---

## 2. Cara Deploy ke Vercel

### Opsi A: Via GitHub (Paling Mudah)
1. Push folder `/home/pen/maintenance-page` ke repo GitHub Anda (misal `homelab-maintenance-page`):
   ```bash
   cd /home/pen/maintenance-page
   git init
   git add .
   git commit -m "feat: clean minimal maintenance pages"
   git branch -M main
   git remote add origin https://github.com/StevChrist/homelab-maintenance-page.git
   git push -u origin main
   ```
2. Buka [Vercel Dashboard](https://vercel.com) dan klik **Add New...** -> **Project** -> pilih repo tersebut -> klik **Deploy**.
3. Dapatkan URL Vercel (misal: `https://homelab-maintenance.vercel.app`).

### Opsi B: Via Vercel CLI
```bash
cd /home/pen/maintenance-page
npx vercel --prod
```

---

## 3. Setup Cloudflare Worker Auto-Failover (Saat VPS Dimatikan)

1. Buka [Cloudflare Dashboard](https://dash.cloudflare.com/) -> **Workers & Pages** -> **Create Worker**.
2. Beri nama: `homelab-maintenance-failover` -> klik **Deploy**.
3. Klik **Quick Edit** / **Edit Code**:
   - Ganti baris teratas:
     ```javascript
     const VERCEL_FALLBACK_ORIGIN = "https://homelab-maintenance.vercel.app";
     ```
     dengan URL Vercel Anda.
   - Copy seluruh isi file [`cloudflare-worker/worker.js`](file:///home/pen/maintenance-page/cloudflare-worker/worker.js) dan paste di Cloudflare.
   - Klik **Save and Deploy**.
4. Pasang Route di Cloudflare:
   - Di Worker tersebut, buka tab **Settings** -> **Triggers** / **Routes** -> **Add Route**:
     - `stevchrist.site/*`
     - `*.stevchrist.site/*`
   - Selesai!

### Apa yang Terjadi Saat VPS Dimatikan?
- Ketika VPS dimatikan sebelum Anda naik pesawat, Cloudflare Worker otomatis mendeteksi tunnel offline dan mengarahkan pengunjung ke halaman minimalis masing-masing website:
  - Pengunjung `peninemate.stevchrist.site` otomatis disajikan halaman `/peninemate`
  - Pengunjung `tbh-price.stevchrist.site` otomatis disajikan halaman `/tbh-price`
  - Pengunjung `stevchrist.site` otomatis disajikan halaman `/stevchrist`
  - Begitu seterusnya.
- URL di browser pengunjung **tetap asli** (tidak redirect ke domain lain) dan bersih dari detail dashboard yang rumit.
