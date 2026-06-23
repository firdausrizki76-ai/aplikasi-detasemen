"use client";

import React from "react";

const mockAbsensi = [
  { id: "ABS-101", tanggal: "2026-06-19", nama: "Sertu Budi", waktuMasuk: "05:45", waktuKeluar: "18:10", status: "HADIR", metode: "Face Recognition" },
  { id: "ABS-102", tanggal: "2026-06-19", nama: "Praka Andi", waktuMasuk: "05:50", waktuKeluar: "18:05", status: "HADIR", metode: "Face Recognition" },
  { id: "ABS-103", tanggal: "2026-06-19", nama: "Pratu Dedi", waktuMasuk: "06:15", waktuKeluar: "17:50", status: "TERLAMBAT", metode: "Manual (Izin)" },
  { id: "ABS-104", tanggal: "2026-06-19", nama: "Prada Fajar", waktuMasuk: "-", waktuKeluar: "-", status: "ALPHA", metode: "-" },
];

export default function DataAbsensiPage() {
  return (
    <div className="space-y-lg pb-xl">
      <header className="mb-lg border-b border-outline-variant/30 pb-md flex justify-between items-end">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight flex items-center gap-sm">
            <span className="material-symbols-outlined text-3xl">how_to_reg</span>
            Log Data Absensi Personel
          </h1>
          <p className="text-on-surface-variant font-body-md mt-xs max-w-2xl">
            Sistem pemantauan riwayat kehadiran biometrik harian. Memantau kedatangan dan kepulangan prajurit secara real-time.
          </p>
        </div>
        <div className="flex gap-md">
          <button className="flex items-center gap-sm bg-surface-container-high text-on-surface px-md py-sm rounded-sm font-bold hover:bg-surface-container-highest transition-all uppercase text-xs tracking-widest border border-outline-variant/30">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filter Tanggal
          </button>
          <button className="flex items-center gap-sm bg-primary text-on-secondary px-md py-sm rounded-sm font-bold hover:brightness-110 transition-all uppercase text-xs tracking-widest shadow-[0_0_15px_rgba(139,214,145,0.2)]">
            <span className="material-symbols-outlined text-sm">download</span>
            Ekspor Data
          </button>
        </div>
      </header>

      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-sm overflow-hidden shadow-lg">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant/50 uppercase text-[10px] tracking-widest text-outline">
                <th className="py-md px-md font-semibold">ID Log</th>
                <th className="py-md px-md font-semibold">Tanggal</th>
                <th className="py-md px-md font-semibold">Nama Personel</th>
                <th className="py-md px-md font-semibold text-center">Waktu Masuk</th>
                <th className="py-md px-md font-semibold text-center">Waktu Keluar</th>
                <th className="py-md px-md font-semibold text-center">Metode Verifikasi</th>
                <th className="py-md px-md font-semibold text-center">Status</th>
                <th className="py-md px-md font-semibold text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 font-body-sm text-on-surface-variant">
              {mockAbsensi.map((row) => (
                <tr key={row.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="py-md px-md font-mono text-xs tracking-wider">{row.id}</td>
                  <td className="py-md px-md font-mono text-xs">{row.tanggal}</td>
                  <td className="py-md px-md font-bold text-on-surface uppercase">{row.nama}</td>
                  <td className="py-md px-md text-center font-mono">{row.waktuMasuk}</td>
                  <td className="py-md px-md text-center font-mono">{row.waktuKeluar}</td>
                  <td className="py-md px-md text-center text-xs">{row.metode}</td>
                  <td className="py-md px-md text-center">
                    <span className={`px-2 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold ${
                      row.status === 'HADIR' ? 'bg-primary-container/20 text-primary border border-primary' :
                      row.status === 'TERLAMBAT' ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400' :
                      'bg-error-container/20 text-error border border-error'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-md px-md text-center">
                    <button className="text-outline hover:text-primary transition-colors p-1" title="Lihat Foto Bukti">
                      <span className="material-symbols-outlined text-sm">photo_camera</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
