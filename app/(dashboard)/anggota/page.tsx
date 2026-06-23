"use client";
import React from "react";
import Link from "next/link";

export default function AnggotaDashboardPage() {
  return (
    <>
      <div className="flex items-center gap-xs text-[10px] text-outline font-bold uppercase tracking-[0.1em] mb-md">
        <span>Portal Personal</span>
        <span className="material-symbols-outlined !text-xs">
          chevron_right
        </span>
        <span className="text-primary">Dasbor Utama</span>
      </div>

      <div className="mb-lg">
        <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface tracking-tighter uppercase">
          Selamat Datang, Prada Budi Santoso
        </h2>
        <p className="text-xs text-outline font-medium tracking-wide mt-1">
          NRP: 14029302 | Regu: Bravo | Status: AKTIF BERTUGAS
        </p>
      </div>

      {/* Hero Status Bar */}
      <div className="bg-primary/10 border-l-4 border-primary p-lg shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-md mb-xl">
         <div>
            <span className="text-xs text-outline uppercase font-bold tracking-widest flex items-center gap-2 mb-2">
               <span className="material-symbols-outlined !text-sm text-primary">schedule</span>
               Status Kehadiran Hari Ini
            </span>
            <div className="text-2xl font-bold text-primary flex items-center gap-3">
               BELUM ABSEN MASUK
               <span className="w-3 h-3 rounded-full bg-error animate-pulse"></span>
            </div>
            <p className="text-xs text-outline mt-1 font-mono">Batas Waktu Apel Pagi: 07:00 WIB</p>
         </div>
         <Link href="/anggota/absensi">
            <button className="bg-primary text-on-primary px-8 py-3 uppercase font-bold tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,214,145,0.4)]">
               <span className="material-symbols-outlined">face</span>
               Mulai Absen Sekarang
            </button>
         </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-lg">
         {/* Ringkasan Kehadiran */}
         <div className="bg-surface-container-low border border-outline-variant/30 shadow-lg p-md">
            <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-md flex items-center gap-2 border-b border-outline-variant/30 pb-2">
               <span className="material-symbols-outlined !text-sm text-secondary">calendar_month</span>
               Kehadiran Bulan Ini
            </h3>
            <div className="flex items-center justify-between mt-4">
               <div className="flex flex-col">
                  <span className="text-[10px] text-outline font-bold tracking-widest uppercase">Hadir</span>
                  <span className="text-2xl font-bold text-on-surface">18 <span className="text-[10px] font-normal text-outline">Hari</span></span>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] text-outline font-bold tracking-widest uppercase">Terlambat</span>
                  <span className="text-2xl font-bold text-yellow-500">2 <span className="text-[10px] font-normal text-outline">Kali</span></span>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] text-outline font-bold tracking-widest uppercase">Alpha</span>
                  <span className="text-2xl font-bold text-error">0 <span className="text-[10px] font-normal text-outline">Kali</span></span>
               </div>
            </div>
            <Link href="/anggota/riwayat">
               <button className="w-full mt-6 bg-surface-container hover:bg-surface-container-highest transition-colors text-xs font-bold uppercase tracking-wider py-2 text-on-surface border border-outline-variant/50">
                  Lihat Riwayat Lengkap
               </button>
            </Link>
         </div>

         {/* Indeks Kedisiplinan */}
         <div className="bg-surface-container-low border border-outline-variant/30 shadow-lg p-md">
            <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-md flex items-center gap-2 border-b border-outline-variant/30 pb-2">
               <span className="material-symbols-outlined !text-sm text-yellow-500">military_tech</span>
               Indeks Kedisiplinan
            </h3>
            <div className="flex items-center justify-between mt-4">
               <div>
                  <div className="text-4xl font-bold text-primary font-mono">0.920</div>
                  <div className="text-[10px] text-outline mt-1 font-bold tracking-wider uppercase">Skor SAW Terakhir</div>
               </div>
               <div className="flex flex-col items-end">
                  <span className="bg-primary/20 text-primary border border-primary/50 px-3 py-1 font-bold text-xs uppercase tracking-widest">
                     BAIK
                  </span>
                  <span className="text-[10px] text-outline mt-2 font-bold uppercase">Peringkat #2 di Detasemen</span>
               </div>
            </div>
            <Link href="/anggota/nilai-disiplin">
               <button className="w-full mt-6 bg-surface-container hover:bg-surface-container-highest transition-colors text-xs font-bold uppercase tracking-wider py-2 text-on-surface border border-outline-variant/50">
                  Rincian Penilaian
               </button>
            </Link>
         </div>

         {/* Tiket Pengajuan */}
         <div className="bg-surface-container-low border border-outline-variant/30 shadow-lg p-md">
            <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-md flex items-center gap-2 border-b border-outline-variant/30 pb-2">
               <span className="material-symbols-outlined !text-sm text-tertiary">assignment</span>
               Pengajuan Aktif
            </h3>
            <div className="flex flex-col justify-center h-[72px] mt-4">
               <div className="bg-tertiary/10 border-l-2 border-tertiary p-2">
                  <div className="flex justify-between items-start">
                     <span className="text-xs font-bold text-on-surface uppercase">Izin Berobat</span>
                     <span className="text-[9px] bg-yellow-500/20 text-yellow-600 px-1 py-0.5 border border-yellow-500/30 font-bold uppercase tracking-widest">Pending</span>
                  </div>
                  <p className="text-[10px] text-outline mt-1">24 Juni 2026 - RS Pusat</p>
               </div>
            </div>
            <Link href="/anggota/izin">
               <button className="w-full mt-6 bg-surface-container hover:bg-surface-container-highest transition-colors text-xs font-bold uppercase tracking-wider py-2 text-on-surface border border-outline-variant/50">
                  Kelola Izin / Dinas
               </button>
            </Link>
         </div>
      </div>
    </>
  );
}
