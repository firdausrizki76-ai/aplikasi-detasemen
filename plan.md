# 📋 PLAN.MD — Sistem Absensi Digital Pasukan Detasemen Perintis
> **Nama Sistem:** SIHADAP — Sistem Informasi Kehadiran Detasemen Perintis
> **Stack:** Next.js 14 (App Router) · Vercel Serverless API · Supabase · face-api.js

---

## 🗂️ DAFTAR ISI
1. [Overview Aplikasi](#1-overview-aplikasi)
2. [Konteks Organisasi Detasemen Perintis](#2-konteks-organisasi-detasemen-perintis)
3. [Tech Stack Detail](#3-tech-stack-detail)
4. [Struktur Database Supabase](#4-struktur-database-supabase)
5. [Struktur Folder Project](#5-struktur-folder-project)
6. [Role & Hak Akses](#6-role--hak-akses)
7. [Modul & Fitur per Role](#7-modul--fitur-per-role)
8. [API Routes (Vercel Serverless)](#8-api-routes-vercel-serverless)
9. [Alur Face Recognition](#9-alur-face-recognition)
10. [Metode SAW (Simple Additive Weighting)](#10-metode-saw-simple-additive-weighting)
11. [Desain UI & Branding](#11-desain-ui--branding)
12. [Rencana Pengerjaan (Fase)](#12-rencana-pengerjaan-fase)
13. [Deployment Checklist](#13-deployment-checklist)
14. [Error Handling & Edge Cases](#14-error-handling--edge-cases)

---

## 1. Overview Aplikasi

**SIHADAP** adalah sistem absensi digital berbasis **Face Recognition** yang dirancang khusus untuk mengelola kehadiran anggota **Pasukan Detasemen Perintis**. Sistem ini menggantikan absensi manual dengan teknologi pengenalan wajah dan secara otomatis menghitung **nilai kedisiplinan** setiap anggota menggunakan **Metode Simple Additive Weighting (SAW)**.

### Tujuan Sistem
- Mencatat kehadiran anggota secara akurat dan real-time melalui scan wajah
- Mengeliminasi kecurangan absensi (titip absen, manipulasi data)
- Menghasilkan penilaian kedisiplinan yang objektif dan terukur secara otomatis
- Menyediakan laporan kehadiran dan kedisiplinan untuk keperluan administrasi satuan

### Tiga Peran Pengguna
- **Admin** → kelola data anggota, registrasi wajah, jadwal apel/piket, dan bobot kriteria SAW
- **Anggota** → absensi masuk/pulang via scan wajah, lihat riwayat dan nilai kedisiplinan
- **Pimpinan** → dashboard statistik satuan, ranking kedisiplinan anggota, cetak laporan resmi

---

## 2. Konteks Organisasi Detasemen Perintis

### 2.1 Terminologi Khusus
| Istilah Umum | Istilah Detasemen Perintis |
|---|---|
| Anggota / Karyawan | Personel / Anggota |
| Divisi / Departemen | Regu / Peleton / Kompi |
| ID Karyawan | NRP (Nomor Registrasi Pokok) / NTA |
| Jabatan | Pangkat & Jabatan |
| Absen Masuk | Apel Masuk / Check-in |
| Absen Pulang | Apel Pulang / Check-out |
| Izin | Izin / Dinas Luar / Cuti |

### 2.2 Struktur Organisasi (Hierarki)
```
Komandan Detasemen (Pimpinan)
├── Kepala Administrasi (Admin)
└── Peleton 1
│   ├── Regu Alpha  → Anggota (6–8 personel)
│   ├── Regu Bravo  → Anggota (6–8 personel)
│   └── Regu Charlie → Anggota (6–8 personel)
└── Peleton 2
    ├── Regu Delta  → Anggota
    └── dst...
```

### 2.3 Jenis Kehadiran Khusus
| Status | Kode | Keterangan |
|---|---|---|
| Hadir Tepat Waktu | `hadir` | Absen dalam batas toleransi |
| Terlambat | `terlambat` | Melewati batas waktu toleransi |
| Tidak Hadir (Alpha) | `alpha` | Tidak absen tanpa keterangan |
| Izin Resmi | `izin` | Ada surat izin yang disetujui |
| Sakit | `sakit` | Ada surat keterangan sakit |
| Dinas Luar | `dinas_luar` | Tugas lapangan/luar kantor |
| Cuti | `cuti` | Cuti resmi disetujui |

### 2.4 Jenis Kegiatan / Jadwal
- **Apel Pagi** (rutin harian) — jam mulai bisa bervariasi per satuan
- **Piket Jaga** (rotasi) — jadwal berbeda, bisa malam hari
- **Latihan Rutin** — jadwal periodik
- **Upacara / Apel Khusus** — jadwal insidental

---

## 3. Tech Stack Detail

| Layer | Teknologi | Keterangan |
|---|---|---|
| Frontend | Next.js 14 (App Router) | React Server & Client Components |
| Styling | Tailwind CSS + shadcn/ui | UI component library |
| Face Recognition | face-api.js | Berjalan di browser (client-side) |
| Backend API | Vercel Serverless Functions | `/app/api/**/route.ts` |
| Database | Supabase (PostgreSQL) | Auth + DB + Storage |
| File Storage | Supabase Storage | Foto wajah referensi & foto absensi |
| PDF Export | @react-pdf/renderer | Generate laporan PDF format resmi |
| Auth | Supabase Auth | JWT + Row Level Security (RLS) |
| ORM | supabase-js v2 | Query builder resmi |
| State Management | @tanstack/react-query | Caching & sinkronisasi data server |
| Deployment | Vercel | Auto-deploy dari GitHub |

### Library yang Dibutuhkan
```bash
npm install @supabase/supabase-js @supabase/ssr
npm install face-api.js
npm install @react-pdf/renderer
npm install @tanstack/react-query
npm install react-webcam
npm install recharts
npm install date-fns
npm install zod
npm install react-hook-form @hookform/resolvers
npm install lucide-react
npm install clsx tailwind-merge
```

---

## 4. Struktur Database Supabase

### 4.1 Tabel: `profiles` (Data Personel)
```sql
CREATE TABLE profiles (
  id            UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name          TEXT NOT NULL,                        -- Nama lengkap
  nrp           TEXT UNIQUE NOT NULL,                 -- NRP / Nomor Registrasi Pokok
  role          TEXT NOT NULL CHECK (role IN ('admin', 'anggota', 'pimpinan')),
  pangkat       TEXT,                                 -- Pangkat: Brigadir, Ipda, dst
  jabatan       TEXT,                                 -- Jabatan: Ka Regu, Anggota, dst
  peleton       TEXT,                                 -- Peleton 1 / Peleton 2 / dst
  regu          TEXT,                                 -- Regu Alpha / Bravo / Charlie / dst
  phone         TEXT,
  avatar_url    TEXT,
  is_active     BOOLEAN DEFAULT TRUE,
  tanggal_bergabung DATE,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
```

### 4.2 Tabel: `face_descriptors` (Data Wajah)
```sql
CREATE TABLE face_descriptors (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  descriptor  FLOAT8[] NOT NULL,        -- Array 128 float dari face-api.js
  photo_url   TEXT,                     -- Foto referensi di Supabase Storage
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Index untuk performa query
CREATE INDEX idx_face_descriptors_user ON face_descriptors(user_id);
```

### 4.3 Tabel: `schedules` (Jadwal Kegiatan)
```sql
CREATE TABLE schedules (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,             -- e.g. "Apel Pagi", "Piket Malam"
  type            TEXT NOT NULL CHECK (type IN (
                    'apel_pagi', 'piket_jaga', 'latihan', 'upacara', 'custom'
                  )),
  check_in_start  TIME NOT NULL,             -- Jam absen masuk dibuka
  check_in_end    TIME NOT NULL,             -- Batas tepat waktu masuk
  check_out_start TIME NOT NULL,             -- Jam absen pulang dibuka
  check_out_end   TIME NOT NULL,             -- Batas absen pulang
  late_threshold  INTEGER DEFAULT 10,        -- Menit toleransi keterlambatan
  is_active       BOOLEAN DEFAULT TRUE,
  applies_to_regu TEXT[],                    -- Null = semua regu, atau ['Alpha','Bravo']
  created_by      UUID REFERENCES profiles(id),
  created_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### 4.4 Tabel: `attendance` (Data Absensi)
```sql
CREATE TABLE attendance (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  schedule_id         UUID REFERENCES schedules(id),
  date                DATE NOT NULL,
  check_in_time       TIMESTAMPTZ,
  check_out_time      TIMESTAMPTZ,
  check_in_photo      TEXT,              -- URL foto saat absen masuk
  check_out_photo     TEXT,              -- URL foto saat absen pulang
  status              TEXT NOT NULL CHECK (status IN (
                        'hadir', 'terlambat', 'alpha', 'izin',
                        'sakit', 'dinas_luar', 'cuti'
                      )),
  late_minutes        INTEGER DEFAULT 0,
  early_out_minutes   INTEGER DEFAULT 0,
  keterangan          TEXT,              -- Catatan izin/sakit/dll
  diinput_oleh        UUID REFERENCES profiles(id),  -- Jika admin input manual
  created_at          TIMESTAMPTZ DEFAULT NOW(),
  updated_at          TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, date, schedule_id)
);

-- Index untuk query performa
CREATE INDEX idx_attendance_user_date ON attendance(user_id, date);
CREATE INDEX idx_attendance_date ON attendance(date);
CREATE INDEX idx_attendance_status ON attendance(status);
```

### 4.5 Tabel: `leave_requests` (Pengajuan Izin)
```sql
CREATE TABLE leave_requests (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  type            TEXT NOT NULL CHECK (type IN ('izin', 'sakit', 'dinas_luar', 'cuti')),
  start_date      DATE NOT NULL,
  end_date        DATE NOT NULL,
  reason          TEXT NOT NULL,
  document_url    TEXT,                  -- Surat izin / surat sakit
  status          TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  reviewed_by     UUID REFERENCES profiles(id),
  reviewed_at     TIMESTAMPTZ,
  review_notes    TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### 4.6 Tabel: `saw_criteria` (Bobot Penilaian SAW)
```sql
CREATE TABLE saw_criteria (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code        TEXT UNIQUE NOT NULL,          -- C1, C2, C3, C4
  name        TEXT NOT NULL,
  weight      NUMERIC(5,2) NOT NULL,         -- Harus total = 1.00
  type        TEXT NOT NULL CHECK (type IN ('benefit', 'cost')),
  description TEXT,
  updated_by  UUID REFERENCES profiles(id),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Seed data default
INSERT INTO saw_criteria (code, name, weight, type, description) VALUES
  ('C1', 'Persentase Hadir',      0.40, 'benefit', 'Persentase kehadiran anggota dalam periode penilaian'),
  ('C2', 'Tepat Waktu Datang',    0.30, 'benefit', 'Persentase absen masuk tepat waktu dari total hadir'),
  ('C3', 'Tepat Waktu Pulang',    0.20, 'benefit', 'Persentase absen pulang tepat waktu dari total hadir'),
  ('C4', 'Jumlah Pelanggaran',    0.10, 'cost',    'Jumlah total alpha + terlambat > 30 menit');
```

### 4.7 Tabel: `discipline_scores` (Hasil Penilaian SAW)
```sql
CREATE TABLE discipline_scores (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  period_start      DATE NOT NULL,
  period_end        DATE NOT NULL,
  period_label      TEXT,               -- e.g. "Januari 2025", "Triwulan I 2025"
  -- Nilai mentah
  c1_value          NUMERIC(5,2),       -- % kehadiran (0–100)
  c2_value          NUMERIC(5,2),       -- % tepat datang (0–100)
  c3_value          NUMERIC(5,2),       -- % tepat pulang (0–100)
  c4_value          INTEGER,            -- jumlah pelanggaran
  -- Nilai ternormalisasi
  c1_normalized     NUMERIC(8,6),
  c2_normalized     NUMERIC(8,6),
  c3_normalized     NUMERIC(8,6),
  c4_normalized     NUMERIC(8,6),
  -- Hasil akhir
  final_score       NUMERIC(8,6),       -- Vi = Σ(wj × rij)
  rank              INTEGER,
  discipline_status TEXT CHECK (discipline_status IN ('baik', 'sedang', 'kurang')),
  calculated_at     TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, period_start, period_end)
);

CREATE INDEX idx_discipline_period ON discipline_scores(period_start, period_end);
```

### 4.8 Row Level Security (RLS)
```sql
-- Aktifkan RLS semua tabel
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE face_descriptors ENABLE ROW LEVEL SECURITY;
ALTER TABLE discipline_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE leave_requests ENABLE ROW LEVEL SECURITY;

-- Helper function cek role
CREATE OR REPLACE FUNCTION get_user_role()
RETURNS TEXT AS $$
  SELECT role FROM profiles WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER;

-- PROFILES
CREATE POLICY "anggota_baca_profil_sendiri" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "admin_pimpinan_baca_semua_profil" ON profiles
  FOR SELECT USING (get_user_role() IN ('admin', 'pimpinan'));

CREATE POLICY "admin_kelola_profil" ON profiles
  FOR ALL USING (get_user_role() = 'admin');

-- ATTENDANCE
CREATE POLICY "anggota_kelola_absensi_sendiri" ON attendance
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "admin_pimpinan_baca_semua_absensi" ON attendance
  FOR SELECT USING (get_user_role() IN ('admin', 'pimpinan'));

CREATE POLICY "admin_input_manual" ON attendance
  FOR INSERT WITH CHECK (get_user_role() = 'admin');

-- FACE DESCRIPTORS
CREATE POLICY "admin_kelola_wajah" ON face_descriptors
  FOR ALL USING (get_user_role() = 'admin');

CREATE POLICY "semua_baca_descriptor" ON face_descriptors
  FOR SELECT USING (auth.uid() IS NOT NULL);  -- Untuk keperluan matching

-- DISCIPLINE SCORES
CREATE POLICY "anggota_baca_nilai_sendiri" ON discipline_scores
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "admin_pimpinan_baca_semua_nilai" ON discipline_scores
  FOR SELECT USING (get_user_role() IN ('admin', 'pimpinan'));

-- LEAVE REQUESTS
CREATE POLICY "anggota_kelola_izin_sendiri" ON leave_requests
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "admin_pimpinan_kelola_semua_izin" ON leave_requests
  FOR ALL USING (get_user_role() IN ('admin', 'pimpinan'));
```

---

## 5. Struktur Folder Project

```
sihadap-detasemen-perintis/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx               # Halaman login dengan branding Detasemen
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx                 # Layout utama + sidebar
│   │   ├── admin/
│   │   │   ├── page.tsx               # Dashboard admin
│   │   │   ├── personel/
│   │   │   │   ├── page.tsx           # List semua personel + filter regu/peleton
│   │   │   │   ├── [id]/page.tsx      # Detail & edit personel
│   │   │   │   └── tambah/page.tsx    # Tambah personel baru
│   │   │   ├── registrasi-wajah/
│   │   │   │   ├── page.tsx           # Pilih personel untuk registrasi
│   │   │   │   └── [userId]/page.tsx  # Proses registrasi wajah
│   │   │   ├── jadwal/
│   │   │   │   ├── page.tsx           # List jadwal aktif
│   │   │   │   └── [id]/page.tsx      # Edit jadwal
│   │   │   ├── kriteria-saw/
│   │   │   │   └── page.tsx           # Edit bobot C1–C4
│   │   │   ├── izin/
│   │   │   │   └── page.tsx           # Approve/reject pengajuan izin
│   │   │   ├── absensi-manual/
│   │   │   │   └── page.tsx           # Input absensi manual oleh admin
│   │   │   ├── kalkulasi-saw/
│   │   │   │   └── page.tsx           # Trigger & preview kalkulasi SAW
│   │   │   └── laporan/
│   │   │       └── page.tsx           # Cetak laporan PDF
│   │   ├── anggota/
│   │   │   ├── page.tsx               # Portal anggota (ringkasan hari ini)
│   │   │   ├── absensi/
│   │   │   │   └── page.tsx           # Scan wajah absen masuk/pulang
│   │   │   ├── riwayat/
│   │   │   │   └── page.tsx           # Riwayat + kalender kehadiran
│   │   │   ├── nilai-disiplin/
│   │   │   │   └── page.tsx           # Skor SAW personal + grafik
│   │   │   └── pengajuan-izin/
│   │   │       ├── page.tsx           # Riwayat pengajuan izin
│   │   │       └── baru/page.tsx      # Form ajukan izin baru
│   │   └── pimpinan/
│   │       ├── page.tsx               # Dashboard Komandan
│   │       ├── statistik/
│   │       │   └── page.tsx           # Statistik kehadiran satuan
│   │       ├── ranking-disiplin/
│   │       │   └── page.tsx           # Ranking kedisiplinan + filter periode
│   │       └── laporan/
│   │           └── page.tsx           # Generate & cetak laporan PDF resmi
│   ├── api/
│   │   ├── auth/
│   │   │   └── callback/route.ts
│   │   ├── personel/
│   │   │   ├── route.ts               # GET list, POST create
│   │   │   └── [id]/route.ts          # GET, PUT, DELETE (soft delete)
│   │   ├── face/
│   │   │   ├── register/route.ts      # POST: simpan descriptor
│   │   │   ├── descriptors/route.ts   # GET: semua descriptor aktif
│   │   │   └── [userId]/route.ts      # DELETE: hapus data wajah
│   │   ├── attendance/
│   │   │   ├── checkin/route.ts       # POST: absen masuk
│   │   │   ├── checkout/route.ts      # POST: absen pulang
│   │   │   ├── today/route.ts         # GET: status absensi hari ini
│   │   │   ├── history/route.ts       # GET: riwayat per personel
│   │   │   ├── summary/route.ts       # GET: rekapitulasi (admin/pimpinan)
│   │   │   └── manual/route.ts        # POST: input manual oleh admin
│   │   ├── leave/
│   │   │   ├── route.ts               # GET list, POST create
│   │   │   └── [id]/
│   │   │       ├── route.ts           # GET, PUT
│   │   │       └── approve/route.ts   # POST: setujui/tolak izin
│   │   ├── saw/
│   │   │   ├── calculate/route.ts     # POST: hitung ulang SAW
│   │   │   ├── criteria/route.ts      # GET/PUT: bobot kriteria
│   │   │   ├── ranking/route.ts       # GET: ranking per periode
│   │   │   └── score/[userId]/route.ts # GET: skor personal
│   │   └── reports/
│   │       ├── attendance/route.ts    # GET: data laporan absensi
│   │       └── discipline/route.ts    # GET: data laporan penilaian disiplin
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/                            # shadcn/ui components
│   ├── face/
│   │   ├── FaceScanner.tsx            # Kamera + deteksi real-time
│   │   ├── FaceRegistration.tsx       # Wizard registrasi wajah admin
│   │   ├── FaceOverlay.tsx            # Overlay kotak wajah + confidence
│   │   └── FaceStatusMessage.tsx      # Pesan status cocok/tidak
│   ├── attendance/
│   │   ├── AttendanceCard.tsx         # Kartu status absensi hari ini
│   │   ├── AttendanceCalendar.tsx     # Kalender dengan color coding
│   │   ├── AttendanceTable.tsx        # Tabel riwayat kehadiran
│   │   └── StatusBadge.tsx            # Badge hadir/terlambat/alpha/dll
│   ├── dashboard/
│   │   ├── StatsCard.tsx              # Kartu statistik (total hadir, %)
│   │   ├── AttendanceChart.tsx        # Grafik tren kehadiran (Recharts)
│   │   ├── RankingTable.tsx           # Tabel ranking kedisiplinan
│   │   └── DisciplineDonut.tsx        # Donut chart distribusi status disiplin
│   ├── reports/
│   │   ├── PDFAttendanceReport.tsx    # Template PDF laporan absensi
│   │   ├── PDFDisciplineReport.tsx    # Template PDF laporan penilaian disiplin
│   │   └── ReportFilters.tsx          # Form filter periode laporan
│   ├── leave/
│   │   ├── LeaveRequestForm.tsx       # Form pengajuan izin
│   │   └── LeaveApprovalCard.tsx      # Card untuk admin approve/reject
│   └── layout/
│       ├── Sidebar.tsx                # Sidebar dinamis per role
│       ├── Header.tsx                 # Header + info user yang login
│       ├── RoleGuard.tsx              # Komponen proteksi per role
│       └── BrandingHeader.tsx         # Logo & nama Detasemen Perintis
├── lib/
│   ├── supabase/
│   │   ├── client.ts                  # Browser Supabase client
│   │   ├── server.ts                  # Server Supabase client (SSR)
│   │   └── admin.ts                   # Service role client (serverless API)
│   ├── face/
│   │   ├── loadModels.ts              # Load model face-api.js (singleton)
│   │   ├── detectFace.ts              # Deteksi wajah dari video/image
│   │   └── matchFace.ts               # Matching descriptor vs database
│   ├── saw/
│   │   ├── calculator.ts              # Logika kalkulasi SAW murni
│   │   └── rekapitulasi.ts            # Hitung nilai mentah C1–C4 dari attendance
│   ├── utils/
│   │   ├── dateUtils.ts               # Helper tanggal (Indonesia locale)
│   │   ├── attendanceUtils.ts         # Kalkulasi status hadir/terlambat
│   │   └── formatters.ts              # Format angka, persentase, ranking
│   └── validations/
│       ├── personelSchema.ts          # Zod schema validasi data personel
│       ├── attendanceSchema.ts        # Zod schema absensi
│       └── leaveSchema.ts             # Zod schema pengajuan izin
├── hooks/
│   ├── useFaceRecognition.ts          # Hook kamera & deteksi wajah
│   ├── useAttendance.ts               # Hook data absensi + react-query
│   ├── useLeave.ts                    # Hook pengajuan izin
│   └── useAuth.ts                     # Hook auth state + role
├── public/
│   ├── models/                        # Model face-api.js (download manual)
│   │   ├── tiny_face_detector_model-weights_manifest.json
│   │   ├── face_landmark_68_model-weights_manifest.json
│   │   └── face_recognition_model-weights_manifest.json
│   └── logo-detasemen.png             # Logo Detasemen Perintis
├── middleware.ts                       # Proteksi route + redirect per role
├── .env.local
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 6. Role & Hak Akses

| Fitur | Admin | Anggota | Pimpinan |
|---|:---:|:---:|:---:|
| Login sistem | ✅ | ✅ | ✅ |
| Kelola data personel | ✅ | ❌ | ❌ |
| Registrasi wajah personel | ✅ | ❌ | ❌ |
| Input absensi manual | ✅ | ❌ | ❌ |
| Kelola jadwal kegiatan | ✅ | ❌ | ❌ |
| Edit bobot kriteria SAW | ✅ | ❌ | ❌ |
| Approve/reject izin | ✅ | ❌ | ✅ |
| Trigger kalkulasi SAW | ✅ | ❌ | ❌ |
| Absensi masuk/pulang (scan wajah) | ❌ | ✅ | ❌ |
| Ajukan izin/sakit | ❌ | ✅ | ❌ |
| Lihat riwayat absensi sendiri | ❌ | ✅ | ❌ |
| Lihat nilai disiplin sendiri | ❌ | ✅ | ❌ |
| Dashboard statistik satuan | ✅ | ❌ | ✅ |
| Lihat ranking kedisiplinan semua | ✅ | ❌ | ✅ |
| Cetak laporan PDF resmi | ✅ | ❌ | ✅ |

---

## 7. Modul & Fitur per Role

### 7.1 Admin

#### Kelola Data Personel (`/admin/personel`)
- Tabel list semua personel: NRP, nama, pangkat, jabatan, regu, peleton, status
- Filter per regu/peleton, search NRP/nama
- Tambah personel: form lengkap dengan validasi NRP unik
- Edit data: semua field kecuali NRP (butuh konfirmasi)
- Nonaktifkan personel (soft delete, data absensi tetap tersimpan)

#### Registrasi Wajah (`/admin/registrasi-wajah`)
- Pilih personel dari daftar (prioritaskan yang belum terdaftar wajahnya)
- Wizard 3 langkah:
  1. Posisikan wajah → deteksi otomatis → ambil foto
  2. Ambil dari 3 sudut berbeda (lurus, kiri 30°, kanan 30°)
  3. Konfirmasi & simpan → hitung rata-rata descriptor
- Update/reset wajah jika diperlukan

#### Kelola Jadwal (`/admin/jadwal`)
- CRUD jadwal: nama, tipe (apel pagi/piket/dll), jam buka-tutup absen, toleransi
- Assign jadwal ke regu tertentu atau semua
- Aktif/nonaktifkan jadwal

#### Bobot Kriteria SAW (`/admin/kriteria-saw`)
- Form edit bobot C1–C4
- Validasi real-time: total harus tepat 100%
- Histori perubahan bobot (dengan timestamp & siapa yang ubah)

#### Persetujuan Izin (`/admin/izin`)
- List pengajuan izin masuk status pending
- Detail pengajuan + dokumen terlampir
- Tombol Setujui / Tolak + catatan
- Jika disetujui → otomatis update status attendance hari-hari terkait

#### Kalkulasi SAW (`/admin/kalkulasi-saw`)
- Pilih periode (bulan / custom range)
- Preview data mentah sebelum kalkulasi
- Tombol "Hitung Sekarang" → POST ke `/api/saw/calculate`
- Tampilkan progress + hasil ranking

#### Laporan (`/admin/laporan`)
- Filter: periode, jenis laporan (absensi / penilaian), regu/peleton
- Preview tabel di browser
- Download PDF

---

### 7.2 Anggota

#### Dashboard Portal (`/anggota`)
- Status kehadiran hari ini (belum absen / sudah masuk / sudah pulang)
- Jam masuk & jam pulang hari ini
- Ringkasan bulan berjalan (hadir X dari Y hari, X kali terlambat)
- Nilai disiplin terakhir

#### Absensi (`/anggota/absensi`)
- Informasi jadwal aktif hari ini (nama jadwal, jam)
- **Absensi Masuk:**
  1. Tombol "Mulai Absen Masuk" → kamera aktif
  2. Face scanner dengan overlay panduan
  3. Auto-capture saat wajah terdeteksi stabil
  4. Matching → jika cocok → POST checkin
  5. Tampilkan: waktu masuk, status (tepat/terlambat X menit)
- **Absensi Pulang:** alur sama → POST checkout
- Jika sudah absen hari ini: tampilkan resume kehadiran hari ini

#### Riwayat Kehadiran (`/anggota/riwayat`)
- Kalender bulanan: warna tiap tanggal sesuai status
  - 🟢 Hadir tepat | 🟡 Terlambat | 🔴 Alpha | 🔵 Izin/Sakit | ⚫ Libur
- Tabel detail: tanggal, jam masuk, jam pulang, status, keterangan
- Filter bulan/tahun
- Summary footer: total hadir, terlambat, alpha

#### Nilai Disiplin (`/anggota/nilai-disiplin`)
- Kartu skor: nilai C1, C2, C3, C4, nilai akhir Vi, ranking
- Badge status disiplin: **Baik** / **Sedang** / **Kurang**
- Grafik tren nilai akhir per bulan (Recharts line chart)
- Penjelasan komponen nilai

#### Pengajuan Izin (`/anggota/pengajuan-izin`)
- Riwayat pengajuan + status (pending/disetujui/ditolak)
- Form ajukan izin baru: jenis, tanggal, alasan, upload dokumen
- Notifikasi status perubahan

---

### 7.3 Pimpinan

#### Dashboard Komandan (`/pimpinan`)
- **Statistik hari ini:** total personel aktif, hadir, terlambat, alpha, izin
- **Grafik 7 hari terakhir:** tren kehadiran (Recharts bar chart)
- **Donut chart:** distribusi status disiplin (Baik/Sedang/Kurang)
- **Top 5 disiplin terbaik** bulan berjalan
- **5 personel sering alpha** bulan berjalan

#### Statistik Satuan (`/pimpinan/statistik`)
- Filter: periode, regu/peleton
- Grafik tren kehadiran per regu
- Heatmap kehadiran per tanggal
- Tabel rekapitulasi per personel

#### Ranking Kedisiplinan (`/pimpinan/ranking-disiplin`)
- Tabel semua personel: ranking, NRP, nama, pangkat, regu, nilai C1–C4, skor akhir, status
- Filter: periode (bulan/triwulan/semester)
- Sort by: ranking / nama / regu
- Badge warna status: 🟢 Baik ≥ 0.80 | 🟡 Sedang ≥ 0.60 | 🔴 Kurang < 0.60
- Export ke PDF / cetak langsung

#### Laporan (`/pimpinan/laporan`)
- Pilih jenis: Laporan Absensi / Laporan Penilaian Kedisiplinan
- Filter periode + regu
- Generate PDF format resmi → header kop satuan, tanda tangan, cap

---

## 8. API Routes (Vercel Serverless)

### Auth
```
GET  /api/auth/callback              → Supabase OAuth callback
```

### Personel
```
GET  /api/personel                   → List semua personel (admin/pimpinan)
POST /api/personel                   → Buat personel + Supabase Auth user
GET  /api/personel/[id]              → Detail personel
PUT  /api/personel/[id]              → Update data personel
DELETE /api/personel/[id]            → Soft delete (is_active = false)
```

### Face Recognition
```
POST /api/face/register              → Simpan descriptor wajah
GET  /api/face/descriptors           → Semua descriptor aktif (untuk matching)
PUT  /api/face/[userId]              → Update/reset data wajah
DELETE /api/face/[userId]            → Hapus data wajah
```

### Absensi
```
GET  /api/attendance/today           → Status absensi hari ini (per user login)
POST /api/attendance/checkin         → Record absensi masuk
POST /api/attendance/checkout        → Record absensi pulang
POST /api/attendance/manual          → Input manual oleh admin
GET  /api/attendance/history         → Riwayat (query: userId, month, year)
GET  /api/attendance/summary         → Rekapitulasi satuan (admin/pimpinan)
```

### Pengajuan Izin
```
GET  /api/leave                      → List izin (filter: userId / status)
POST /api/leave                      → Ajukan izin baru
GET  /api/leave/[id]                 → Detail pengajuan
POST /api/leave/[id]/approve         → Setujui / tolak izin
```

### SAW & Penilaian
```
GET  /api/saw/criteria               → Ambil bobot kriteria aktif
PUT  /api/saw/criteria               → Update bobot (validasi total = 1.00)
POST /api/saw/calculate              → Hitung/simpan semua nilai SAW per periode
GET  /api/saw/ranking                → Ranking (query: period_start, period_end)
GET  /api/saw/score/[userId]         → Skor personal per periode
```

### Laporan
```
GET  /api/reports/attendance         → Data laporan absensi (untuk PDF)
GET  /api/reports/discipline         → Data laporan penilaian disiplin (untuk PDF)
```

### Contoh Implementasi — Checkin API
```typescript
// app/api/attendance/checkin/route.ts
import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // 1. Verifikasi session user
  const supabase = await createClient()
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // 2. Pastikan role = anggota
  const { data: profile } = await supabase
    .from('profiles')
    .select('role, name, nrp')
    .eq('id', user.id)
    .single()

  if (profile?.role !== 'anggota') {
    return NextResponse.json({ error: 'Hanya anggota yang dapat absen' }, { status: 403 })
  }

  const { photoUrl, scheduleId } = await request.json()

  // 3. Cek duplikasi absen hari ini
  const today = new Date().toISOString().split('T')[0]
  const adminClient = createAdminClient() // bypass RLS
  const { data: existing } = await adminClient
    .from('attendance')
    .select('id, check_in_time, status')
    .eq('user_id', user.id)
    .eq('date', today)
    .eq('schedule_id', scheduleId)
    .single()

  if (existing?.check_in_time) {
    return NextResponse.json({
      error: 'Sudah melakukan absen masuk hari ini',
      data: existing
    }, { status: 409 })
  }

  // 4. Ambil jadwal & hitung status
  const { data: schedule, error: schedErr } = await adminClient
    .from('schedules')
    .select('*')
    .eq('id', scheduleId)
    .single()

  if (schedErr || !schedule) {
    return NextResponse.json({ error: 'Jadwal tidak ditemukan' }, { status: 404 })
  }

  const now = new Date()
  const checkInEnd = new Date(`${today}T${schedule.check_in_end}`)
  const lateMinutes = now > checkInEnd
    ? Math.floor((now.getTime() - checkInEnd.getTime()) / 60000)
    : 0
  const status = lateMinutes > 0 ? 'terlambat' : 'hadir'

  // 5. Simpan record absensi
  const { data, error } = await adminClient
    .from('attendance')
    .upsert({
      user_id: user.id,
      schedule_id: scheduleId,
      date: today,
      check_in_time: now.toISOString(),
      check_in_photo: photoUrl,
      status,
      late_minutes: lateMinutes
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({
    success: true,
    data,
    message: status === 'hadir'
      ? `Absen masuk berhasil. Tepat waktu.`
      : `Absen masuk berhasil. Terlambat ${lateMinutes} menit.`
  })
}
```

---

## 9. Alur Face Recognition

### 9.1 Registrasi Wajah (Admin)
```
Admin buka halaman registrasi → pilih personel
  → Kamera aktif (react-webcam)
  → face-api.js: detectSingleFace() + faceLandmarks + faceDescriptor
  → Ambil 3 sampel (sudut berbeda, jeda 1 detik antar foto)
  → Rata-rata 3 descriptor → Float32Array[128]
  → Upload foto ke Supabase Storage: face-references/{userId}/{timestamp}.jpg
  → POST /api/face/register → simpan ke tabel face_descriptors
  → Konfirmasi berhasil, tandai personel sudah teregistrasi
```

### 9.2 Absensi Masuk / Pulang (Anggota)
```
Anggota buka halaman absensi
  → GET /api/face/descriptors → semua descriptor dari DB
  → Kamera aktif, face-api.js running real-time (requestAnimationFrame)
  → Setiap frame: detectSingleFace() → dapatkan descriptor
  → FaceMatcher.findBestMatch(descriptor) dengan threshold 0.45
  → Jika distance < 0.45 → tampilkan "Wajah dikenali: [Nama]" selama 1.5 detik
  → Konfirmasi otomatis → capture frame → upload foto → POST checkin/checkout
  → Tampilkan hasil: waktu, status
```

### 9.3 Kode Matching (Client-side)
```typescript
// lib/face/matchFace.ts
import * as faceapi from 'face-api.js'

interface DBDescriptor {
  userId: string
  personName: string
  descriptor: number[]
}

export async function matchFaceAgainstDB(
  detectedDescriptor: Float32Array,
  dbDescriptors: DBDescriptor[],
  threshold = 0.45
): Promise<{ userId: string; personName: string; distance: number } | null> {
  if (dbDescriptors.length === 0) return null

  const labeled = dbDescriptors.map(
    ({ userId, descriptor }) =>
      new faceapi.LabeledFaceDescriptors(userId, [new Float32Array(descriptor)])
  )

  const matcher = new faceapi.FaceMatcher(labeled, threshold)
  const result = matcher.findBestMatch(detectedDescriptor)

  if (result.label === 'unknown') return null

  const matched = dbDescriptors.find(d => d.userId === result.label)
  return {
    userId: result.label,
    personName: matched?.personName ?? '',
    distance: result.distance
  }
}
```

### 9.4 Load Model face-api.js
```typescript
// lib/face/loadModels.ts
import * as faceapi from 'face-api.js'

let modelsLoaded = false

export async function loadFaceModels(): Promise<void> {
  if (modelsLoaded) return
  const MODEL_URL = '/models'
  await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
    faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
    faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
  ])
  modelsLoaded = true
}
```

> **Catatan:** Download model dari https://github.com/justadudewhohacks/face-api.js/tree/master/weights ke folder `/public/models/`

---

## 10. Metode SAW (Simple Additive Weighting)

### 10.1 Kriteria Penilaian
| Kode | Nama Kriteria | Bobot Default | Tipe | Formula Nilai Mentah |
|---|---|---|---|---|
| C1 | Persentase Hadir | 40% | Benefit | (Jml Hadir + Terlambat) / Total Hari × 100 |
| C2 | Tepat Waktu Datang | 30% | Benefit | Jml Hadir Tepat / (Hadir + Terlambat) × 100 |
| C3 | Tepat Waktu Pulang | 20% | Benefit | Jml Pulang Tepat / (Hadir + Terlambat) × 100 |
| C4 | Jumlah Pelanggaran | 10% | Cost | Σ (Alpha + Terlambat > 30 menit) |

### 10.2 Formula SAW
```
Normalisasi Benefit : rij = xij / max(xj)
Normalisasi Cost    : rij = min(xj) / xij  [jika xij = 0, rij = 1]

Nilai Akhir         : Vi = Σ (wj × rij)
                      Vi = (0.4 × r_C1) + (0.3 × r_C2) + (0.2 × r_C3) + (0.1 × r_C4)

Threshold Status    : Vi ≥ 0.80 → Baik | Vi ≥ 0.60 → Sedang | Vi < 0.60 → Kurang
```

### 10.3 Implementasi Kalkulasi
```typescript
// lib/saw/calculator.ts

interface PersonelRawData {
  userId: string
  name: string
  nrp: string
  pangkat: string
  regu: string
  c1: number   // % kehadiran
  c2: number   // % tepat datang
  c3: number   // % tepat pulang
  c4: number   // jumlah pelanggaran
}

interface SAWWeights {
  w1: number; w2: number; w3: number; w4: number
}

export function calculateSAW(
  data: PersonelRawData[],
  weights: SAWWeights = { w1: 0.4, w2: 0.3, w3: 0.2, w4: 0.1 }
) {
  if (data.length === 0) return []

  // Validasi total bobot
  const totalWeight = weights.w1 + weights.w2 + weights.w3 + weights.w4
  if (Math.abs(totalWeight - 1.0) > 0.001) {
    throw new Error(`Total bobot harus 1.0, saat ini: ${totalWeight}`)
  }

  // Nilai max/min untuk normalisasi
  const maxC1 = Math.max(...data.map(d => d.c1))
  const maxC2 = Math.max(...data.map(d => d.c2))
  const maxC3 = Math.max(...data.map(d => d.c3))
  const minC4 = Math.min(...data.map(d => d.c4))

  const results = data.map(d => {
    // Normalisasi
    const r1 = maxC1 > 0 ? d.c1 / maxC1 : 0
    const r2 = maxC2 > 0 ? d.c2 / maxC2 : 0
    const r3 = maxC3 > 0 ? d.c3 / maxC3 : 0
    const r4 = d.c4 > 0 ? minC4 / d.c4 : 1  // cost: 0 pelanggaran = nilai sempurna

    // Nilai akhir SAW
    const vi = (weights.w1 * r1) + (weights.w2 * r2) + (weights.w3 * r3) + (weights.w4 * r4)

    const disciplineStatus = vi >= 0.80 ? 'baik' : vi >= 0.60 ? 'sedang' : 'kurang'

    return {
      userId: d.userId,
      name: d.name,
      nrp: d.nrp,
      pangkat: d.pangkat,
      regu: d.regu,
      rawValues: { c1: d.c1, c2: d.c2, c3: d.c3, c4: d.c4 },
      normalizedValues: {
        r1: parseFloat(r1.toFixed(6)),
        r2: parseFloat(r2.toFixed(6)),
        r3: parseFloat(r3.toFixed(6)),
        r4: parseFloat(r4.toFixed(6))
      },
      finalScore: parseFloat(vi.toFixed(6)),
      disciplineStatus
    }
  })

  // Sort descending + assign rank
  return results
    .sort((a, b) => b.finalScore - a.finalScore)
    .map((item, index) => ({ ...item, rank: index + 1 }))
}
```

### 10.4 Rekapitulasi Data Mentah (dari Attendance)
```typescript
// lib/saw/rekapitulasi.ts
import { createAdminClient } from '@/lib/supabase/admin'

export async function getPersonelRawData(periodStart: string, periodEnd: string) {
  const supabase = createAdminClient()

  const { data: attendances } = await supabase
    .from('attendance')
    .select(`
      user_id, status, late_minutes, check_out_time,
      schedule:schedules(check_out_end),
      profiles!inner(name, nrp, pangkat, regu, is_active)
    `)
    .gte('date', periodStart)
    .lte('date', periodEnd)
    .eq('profiles.is_active', true)

  // Hitung hari kerja dalam periode (exclude libur jika perlu)
  const startDate = new Date(periodStart)
  const endDate = new Date(periodEnd)
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1

  // Group per user
  const grouped = attendances?.reduce((acc, att) => {
    const uid = att.user_id
    if (!acc[uid]) acc[uid] = {
      ...att.profiles,
      userId: uid,
      hadir: 0, terlambat: 0, alpha: 0,
      tepat_datang: 0, tepat_pulang: 0, pelanggaran: 0
    }
    if (['hadir', 'terlambat'].includes(att.status)) {
      att.status === 'hadir' ? acc[uid].hadir++ : acc[uid].terlambat++
      if (att.late_minutes === 0) acc[uid].tepat_datang++
      // Cek tepat pulang
      if (att.check_out_time && att.schedule?.check_out_end) {
        const dateStr = att.date
        const checkoutEnd = new Date(`${dateStr}T${att.schedule.check_out_end}`)
        const actualCheckout = new Date(att.check_out_time)
        if (actualCheckout <= checkoutEnd) acc[uid].tepat_pulang++
      }
      // Pelanggaran: alpha atau terlambat > 30 menit
      if (att.status === 'terlambat' && att.late_minutes > 30) acc[uid].pelanggaran++
    } else if (att.status === 'alpha') {
      acc[uid].alpha++
      acc[uid].pelanggaran++
    }
    return acc
  }, {} as Record<string, any>)

  return Object.values(grouped ?? {}).map(u => ({
    userId: u.userId,
    name: u.name,
    nrp: u.nrp,
    pangkat: u.pangkat,
    regu: u.regu,
    c1: totalDays > 0 ? ((u.hadir + u.terlambat) / totalDays) * 100 : 0,
    c2: (u.hadir + u.terlambat) > 0 ? (u.tepat_datang / (u.hadir + u.terlambat)) * 100 : 0,
    c3: (u.hadir + u.terlambat) > 0 ? (u.tepat_pulang / (u.hadir + u.terlambat)) * 100 : 0,
    c4: u.pelanggaran
  }))
}
```

---

## 11. Desain UI & Branding

### 11.1 Identitas Visual
- **Nama Sistem:** SIHADAP — Sistem Informasi Kehadiran Detasemen Perintis
- **Tone Warna:** Formal, tegas — nuansa militer/kepolisian
- **Palet Warna Utama:**
  - Primary: `#1A3A5C` (biru tua — warna dinas)
  - Secondary: `#2E7D32` (hijau — aktif/hadir)
  - Accent: `#C62828` (merah — alpha/pelanggaran)
  - Warning: `#F57F17` (kuning — terlambat)
  - Neutral: `#37474F` (abu gelap — teks)
  - Background: `#F5F5F5` (abu terang)

### 11.2 Badge Status Kehadiran
| Status | Warna | Label |
|---|---|---|
| hadir | 🟢 hijau | Hadir |
| terlambat | 🟡 kuning | Terlambat |
| alpha | 🔴 merah | Alpha |
| izin | 🔵 biru | Izin |
| sakit | 🟣 ungu | Sakit |
| dinas_luar | 🟤 cokelat | Dinas Luar |
| cuti | ⚪ abu | Cuti |

### 11.3 Badge Status Disiplin
| Status | Threshold Vi | Warna | Label |
|---|---|---|---|
| baik | ≥ 0.80 | 🟢 hijau | DISIPLIN BAIK |
| sedang | 0.60 – 0.79 | 🟡 kuning | DISIPLIN SEDANG |
| kurang | < 0.60 | 🔴 merah | PERLU PEMBINAAN |

### 11.4 Halaman Login
- Logo Detasemen Perintis di atas form
- Judul: "SIHADAP" + "Sistem Informasi Kehadiran Detasemen Perintis"
- Form: NRP + Password (bukan email — NRP dikonversi jadi email: `{nrp}@detasemen.internal`)
- Background: warna gelap/formal dengan pattern subtle

### 11.5 Template Laporan PDF
```
╔══════════════════════════════════════════════════════╗
║  [LOGO]  PASUKAN DETASEMEN PERINTIS                 ║
║          LAPORAN PENILAIAN KEDISIPLINAN PERSONEL    ║
║          Periode: [Bulan/Tahun]                     ║
╠══════════════════════════════════════════════════════╣
║  No │ NRP    │ Nama   │ Pangkat │ Regu │ C1 │...│ Vi │ Status ║
╠══════════════════════════════════════════════════════╣
║  1  │ ...    │ ...    │ ...     │ ...  │ .. │...│ .. │ BAIK   ║
╚══════════════════════════════════════════════════════╝
                              Mengetahui,
                        Komandan Detasemen
                        
                        (_____________________)
                        Pangkat NRP Nama
```

---

## 12. Rencana Pengerjaan (Fase)

### Fase 1 — Setup & Foundation (Hari 1–2)
- [ ] Init Next.js 14 project dengan TypeScript + ESLint
- [ ] Setup Tailwind CSS + install shadcn/ui
- [ ] Buat Supabase project (region: ap-southeast-1 / Singapore)
- [ ] Jalankan semua SQL schema (tabel + RLS + trigger + seed SAW)
- [ ] Setup Supabase Auth dengan email (NRP@detasemen.internal)
- [ ] Konfigurasi `.env.local`
- [ ] Setup `middleware.ts` untuk proteksi & redirect per role

### Fase 2 — Auth & Navigasi (Hari 2–3)
- [ ] Halaman login dengan branding Detasemen Perintis
- [ ] Hook `useAuth` → session + role dari profiles
- [ ] Sidebar dinamis per role (Admin / Anggota / Pimpinan)
- [ ] `RoleGuard` component
- [ ] Redirect otomatis setelah login ke dashboard role masing-masing
- [ ] Halaman 401 Unauthorized & 404 Not Found

### Fase 3 — Admin: Kelola Personel (Hari 3–4)
- [ ] API CRUD `/api/personel`
- [ ] Halaman list personel + search + filter regu
- [ ] Form tambah personel (Zod + React Hook Form)
- [ ] Form edit personel
- [ ] Soft delete / nonaktifkan personel

### Fase 4 — Face Recognition Engine (Hari 4–6)
- [ ] Download & letakkan model face-api.js di `/public/models/`
- [ ] `lib/face/loadModels.ts` (singleton loader)
- [ ] Komponen `FaceScanner.tsx` (kamera + real-time detection)
- [ ] Komponen `FaceOverlay.tsx` (kotak + confidence bar)
- [ ] Halaman registrasi wajah (wizard 3 langkah)
- [ ] API `/api/face/register` + `/api/face/descriptors`
- [ ] Fungsi `matchFace.ts` client-side
- [ ] Testing akurasi dengan beberapa personel

### Fase 5 — Absensi (Hari 6–8)
- [ ] API `checkin` dan `checkout`
- [ ] API `attendance/today` untuk status hari ini
- [ ] Halaman absensi anggota
- [ ] Integrasi face scanner → checkin/checkout flow
- [ ] Upload foto ke Supabase Storage
- [ ] Validasi: duplikasi absen, belum checkin saat checkout

### Fase 6 — Pengajuan Izin (Hari 8–9)
- [ ] API CRUD leave + approve
- [ ] Form pengajuan izin anggota
- [ ] Upload dokumen izin ke Supabase Storage
- [ ] Halaman approval admin
- [ ] Auto-update attendance saat izin disetujui

### Fase 7 — Kalkulasi SAW (Hari 9–10)
- [ ] `lib/saw/rekapitulasi.ts` — hitung nilai mentah dari attendance
- [ ] `lib/saw/calculator.ts` — kalkulasi SAW murni
- [ ] API `POST /api/saw/calculate` — simpan ke discipline_scores
- [ ] API `GET /api/saw/ranking`
- [ ] API `GET /api/saw/score/[userId]`
- [ ] Halaman admin trigger kalkulasi + preview hasil

### Fase 8 — Dashboard & Statistik (Hari 10–11)
- [ ] Dashboard admin: kartu + grafik
- [ ] Dashboard pimpinan: statistik satuan + charts
- [ ] Dashboard anggota: ringkasan hari ini + nilai
- [ ] Halaman ranking kedisiplinan pimpinan
- [ ] Halaman nilai disiplin personal anggota

### Fase 9 — Laporan PDF (Hari 11–12)
- [ ] Template PDF laporan absensi (`PDFAttendanceReport.tsx`)
- [ ] Template PDF laporan penilaian disiplin (`PDFDisciplineReport.tsx`)
- [ ] Header kop satuan, footer tanda tangan
- [ ] API data laporan absensi & disiplin
- [ ] Tombol preview & download PDF

### Fase 10 — Portal Anggota Lengkap (Hari 12)
- [ ] Kalender kehadiran dengan color coding
- [ ] Riwayat tabel + filter bulan/tahun
- [ ] Grafik tren nilai disiplin per bulan

### Fase 11 — Testing & QA (Hari 13)
- [ ] Test login semua 3 role
- [ ] Test flow absensi end-to-end (registrasi wajah → absen masuk → pulang)
- [ ] Test kalkulasi SAW dengan data dummy berbagai skenario
- [ ] Test RLS: anggota tidak bisa akses data orang lain
- [ ] Test edge cases: absen duplikat, wajah tidak cocok, kamera no-permission
- [ ] Test PDF generate

### Fase 12 — Deployment (Hari 14)
- [ ] Push ke GitHub repository
- [ ] Connect repo ke Vercel
- [ ] Set environment variables di Vercel dashboard
- [ ] Deploy & smoke test production
- [ ] Setup Supabase backup otomatis
- [ ] Dokumentasi ringkas untuk admin

---

## 13. Deployment Checklist

### Environment Variables
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...        # HANYA di server / API routes

# App Config
NEXT_PUBLIC_APP_URL=https://sihadap-detasemen.vercel.app
NEXT_PUBLIC_APP_NAME=SIHADAP
NEXT_PUBLIC_SATUAN_NAME=Pasukan Detasemen Perintis
NEXT_PUBLIC_FACE_MATCH_THRESHOLD=0.45
```

### `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' }
    ]
  },
  webpack: (config) => {
    // face-api.js: hindari bundle canvas (server-side)
    config.externals = [...(config.externals || []), { canvas: 'canvas' }]
    return config
  }
}
module.exports = nextConfig
```

### `middleware.ts`
```typescript
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Public routes
  if (pathname.startsWith('/login') || pathname.startsWith('/api/auth')) {
    return NextResponse.next()
  }

  // Cek session Supabase
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { /* handler */ } }
  )
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Proteksi route per role
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  const role = profile?.role
  if (pathname.startsWith('/admin') && role !== 'admin') {
    return NextResponse.redirect(new URL(`/${role}`, request.url))
  }
  if (pathname.startsWith('/pimpinan') && role !== 'pimpinan') {
    return NextResponse.redirect(new URL(`/${role}`, request.url))
  }
  if (pathname.startsWith('/anggota') && role !== 'anggota') {
    return NextResponse.redirect(new URL(`/${role}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|models/).*)']
}
```

### Supabase Storage Buckets
```
attendance-photos/    (private, max 5MB per file)
  ├── checkin/{userId}/{YYYY-MM-DD}.jpg
  └── checkout/{userId}/{YYYY-MM-DD}.jpg

face-references/      (private, max 10MB per file)
  └── {userId}/{timestamp}.jpg

leave-documents/      (private, max 10MB per file)
  └── {userId}/{leaveId}.pdf

reports/              (private, max 50MB per file)
  └── {period}/{report-type}.pdf
```

### Vercel Build Settings
- Framework Preset: Next.js
- Build Command: `next build`
- Output Directory: `.next`
- Install Command: `npm install`
- Node.js Version: 20.x

---

## 14. Error Handling & Edge Cases

### Face Recognition
| Skenario | Penanganan |
|---|---|
| Wajah tidak terdeteksi | Pesan: "Posisikan wajah Anda tepat di depan kamera" |
| Lebih dari 1 wajah | Pesan: "Pastikan hanya 1 personel di depan kamera" |
| Distance > threshold (0.45) | Pesan: "Wajah tidak dikenali. Coba lagi atau hubungi Admin" |
| Kamera tidak ada / no permission | Instruksi izin browser + fallback tombol refresh |
| Model face-api.js gagal load | Retry otomatis 3x, jika gagal tampilkan error + reload |
| Personel belum registrasi wajah | Pesan: "Data wajah belum terdaftar. Hubungi Admin" |
| Cahaya terlalu gelap/terang | Pesan: "Pastikan pencahayaan cukup" (deteksi dari confidence) |

### Absensi
| Skenario | Penanganan |
|---|---|
| Absen masuk duplikat hari ini | Return 409 + tampilkan data absen existing |
| Checkout sebelum checkin | Block + pesan "Anda belum melakukan absen masuk" |
| Di luar jam absen (schedule) | Warning + tetap izinkan (catat waktu aktual) |
| Tidak ada jadwal aktif hari ini | Pesan: "Tidak ada jadwal kegiatan hari ini" |
| Koneksi internet putus saat upload | Retry upload 3x, jika gagal simpan data tanpa foto |

### Kalkulasi SAW
| Skenario | Penanganan |
|---|---|
| Tidak ada data absensi pada periode | Return error: "Tidak ada data pada periode ini" |
| Semua anggota nilai C4 = 0 | rij C4 = 1 untuk semua (semua sempurna di C4) |
| Semua anggota nilai max sama | Rank berurut berdasarkan NRP (alphanumerik) |
| Total bobot ≠ 1.00 | Validasi di API sebelum simpan, return 400 dengan detail |
| Hanya 1 personel | Tetap hitung (normalisasi = 1 untuk benefit, 1 untuk cost) |

### Database & API
| Skenario | Penanganan |
|---|---|
| Supabase timeout | Retry 2x dengan exponential backoff |
| Unique constraint violation | Return 409 Conflict dengan pesan user-friendly |
| RLS policy rejection | Return 403 Forbidden (jangan expose detail DB) |
| Service role key terexpose | WAJIB: hanya gunakan di server-side API routes |

---

## Catatan Penting

1. **face-api.js HANYA client-side** — semua logic deteksi & matching ada di `'use client'` component, BUKAN di Vercel API routes (tidak ada Node.js canvas di Vercel Edge).
2. **NRP sebagai login** — konversi NRP ke format email: `{nrp}@detasemen.internal` agar kompatibel dengan Supabase Auth.
3. **SUPABASE_SERVICE_ROLE_KEY** — jangan pernah expose ke frontend. Hanya gunakan di `/app/api/**` routes.
4. **Model face-api.js** (~7MB total) — tambahkan ke `.gitignore` jika ukuran repo jadi masalah, dan download via script setup. Pastikan di-cache browser.
5. **Threshold face matching 0.45** — lebih ketat dari default (0.6) untuk mengurangi false positive dalam konteks keamanan absensi militer/kepolisian.
6. **UNIQUE(user_id, date, schedule_id)** — satu personel bisa punya 2 record per hari jika ada 2 jadwal berbeda (apel pagi + piket).
7. **Soft delete personel** — jangan hapus record, cukup `is_active = false`. Data absensi historis harus tetap terjaga.
8. **Bobot SAW = 1.0** — selalu validasi di API `/api/saw/criteria` sebelum simpan. Bulatkan ke 2 desimal.
9. **Login dengan NRP** — saat create user di Supabase Auth, gunakan format: email = `{nrp}@detasemen.internal`, kemudian di form login hanya tampilkan field NRP (email di-suffix otomatis di client sebelum dikirim).