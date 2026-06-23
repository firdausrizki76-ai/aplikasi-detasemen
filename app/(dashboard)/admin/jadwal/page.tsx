"use client";

import React from "react";

const mockJadwal = [
  { id: "JDW-01", kegiatan: "Apel Pagi & Pengecekan Pasukan", waktu: "06:00 - 07:00", lokasi: "Lapangan Utama", status: "AKTIF", tipe: "Harian" },
  { id: "JDW-02", kegiatan: "Latihan Fisik Taktikal", waktu: "07:30 - 09:30", lokasi: "Fasilitas Latihan Alpha", status: "AKTIF", tipe: "Mingguan" },
  { id: "JDW-03", kegiatan: "Patroli Area Sektor 4", waktu: "10:00 - 15:00", lokasi: "Sektor Perbatasan", status: "DITUNDA", tipe: "Khusus" },
  { id: "JDW-04", kegiatan: "Apel Sore & Evaluasi", waktu: "17:00 - 18:00", lokasi: "Lapangan Utama", status: "AKTIF", tipe: "Harian" },
];

export default function JadwalPage() {
  return (
    <div className="space-y-lg pb-xl">
      <header className="mb-lg border-b border-outline-variant/30 pb-md flex justify-between items-end">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight flex items-center gap-sm">
            <span className="material-symbols-outlined text-3xl">event_note</span>
            Manajemen Jadwal Operasional
          </h1>
          <p className="text-on-surface-variant font-body-md mt-xs max-w-2xl">
            Sistem penjadwalan komando. Atur waktu apel, latihan, dan penugasan khusus untuk seluruh personel detasemen.
          </p>
        </div>
        <button className="flex items-center gap-sm bg-primary text-on-secondary px-md py-sm rounded-sm font-bold hover:brightness-110 transition-all uppercase text-xs tracking-widest shadow-[0_0_15px_rgba(139,214,145,0.2)]">
          <span className="material-symbols-outlined text-sm">add</span>
          Tambah Jadwal
        </button>
      </header>

      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-sm overflow-hidden shadow-lg">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant/50 uppercase text-[10px] tracking-widest text-outline">
                <th className="py-md px-md font-semibold">ID Jadwal</th>
                <th className="py-md px-md font-semibold">Nama Kegiatan</th>
                <th className="py-md px-md font-semibold">Waktu Operasional</th>
                <th className="py-md px-md font-semibold">Lokasi</th>
                <th className="py-md px-md font-semibold text-center">Tipe</th>
                <th className="py-md px-md font-semibold text-center">Status</th>
                <th className="py-md px-md font-semibold text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 font-body-sm text-on-surface-variant">
              {mockJadwal.map((row) => (
                <tr key={row.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="py-md px-md font-mono text-xs tracking-wider">{row.id}</td>
                  <td className="py-md px-md font-bold text-on-surface">{row.kegiatan}</td>
                  <td className="py-md px-md font-mono text-primary">{row.waktu}</td>
                  <td className="py-md px-md">{row.lokasi}</td>
                  <td className="py-md px-md text-center">
                    <span className="px-2 py-1 bg-surface-container border border-outline-variant/50 rounded-sm text-[10px] uppercase tracking-widest">
                      {row.tipe}
                    </span>
                  </td>
                  <td className="py-md px-md text-center">
                    <span className={`px-2 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold ${
                      row.status === 'AKTIF' 
                        ? 'bg-primary-container/20 text-primary border border-primary' 
                        : 'bg-error-container/20 text-error border border-error'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-md px-md text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-outline hover:text-primary transition-colors" title="Edit">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </button>
                      <button className="text-outline hover:text-error transition-colors" title="Hapus">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
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
