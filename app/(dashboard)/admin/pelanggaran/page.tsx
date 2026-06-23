"use client";

import React from "react";

const mockPelanggaran = [
  { id: "PLG-001", tanggal: "2026-06-15", nama: "Pratu Dedi", pelanggaran: "Terlambat Apel Pagi > 30 Menit", tingkat: "Sedang", poin: 5, status: "Tercatat" },
  { id: "PLG-002", tanggal: "2026-06-12", nama: "Prada Fajar", pelanggaran: "Tidak Hadir Tanpa Keterangan (Alpha)", tingkat: "Berat", poin: 8, status: "Tercatat" },
  { id: "PLG-003", tanggal: "2026-06-10", nama: "Praka Andi", pelanggaran: "Atribut Seragam Tidak Lengkap", tingkat: "Ringan", poin: 2, status: "Selesai Pembinaan" },
];

export default function DataPelanggaranPage() {
  return (
    <div className="space-y-lg pb-xl">
      <header className="mb-lg border-b border-outline-variant/30 pb-md flex justify-between items-end">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-error uppercase tracking-tight flex items-center gap-sm">
            <span className="material-symbols-outlined text-3xl">gavel</span>
            Log Pelanggaran Indisipliner
          </h1>
          <p className="text-on-surface-variant font-body-md mt-xs max-w-2xl">
            Pencatatan riwayat indisipliner prajurit. Data pelanggaran ini akan mengurangi nilai akhir pada kalkulasi Kedisiplinan (SAW).
          </p>
        </div>
        <button className="flex items-center gap-sm bg-error text-on-error-container px-md py-sm rounded-sm font-bold hover:brightness-110 transition-all uppercase text-xs tracking-widest shadow-[0_0_15px_rgba(255,180,171,0.2)]">
          <span className="material-symbols-outlined text-sm">add</span>
          Catat Pelanggaran
        </button>
      </header>

      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-sm overflow-hidden shadow-lg">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant/50 uppercase text-[10px] tracking-widest text-outline">
                <th className="py-md px-md font-semibold">ID Laporan</th>
                <th className="py-md px-md font-semibold">Tanggal</th>
                <th className="py-md px-md font-semibold">Nama Personel</th>
                <th className="py-md px-md font-semibold">Bentuk Pelanggaran</th>
                <th className="py-md px-md font-semibold text-center">Tingkat</th>
                <th className="py-md px-md font-semibold text-center text-error">Poin Penalti</th>
                <th className="py-md px-md font-semibold text-center">Status Laporan</th>
                <th className="py-md px-md font-semibold text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 font-body-sm text-on-surface-variant">
              {mockPelanggaran.map((row) => (
                <tr key={row.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="py-md px-md font-mono text-xs tracking-wider">{row.id}</td>
                  <td className="py-md px-md font-mono text-xs">{row.tanggal}</td>
                  <td className="py-md px-md font-bold text-on-surface uppercase">{row.nama}</td>
                  <td className="py-md px-md text-xs">{row.pelanggaran}</td>
                  <td className="py-md px-md text-center">
                    <span className={`px-2 py-1 rounded-sm text-[10px] uppercase tracking-widest font-bold border ${
                      row.tingkat === 'Berat' ? 'bg-error/20 text-error border-error' :
                      row.tingkat === 'Sedang' ? 'bg-yellow-400/20 text-yellow-400 border-yellow-400' :
                      'bg-surface-container-highest text-outline border-outline-variant'
                    }`}>
                      {row.tingkat}
                    </span>
                  </td>
                  <td className="py-md px-md text-center font-mono text-error font-bold text-lg">+{row.poin}</td>
                  <td className="py-md px-md text-center text-[10px] uppercase tracking-widest">{row.status}</td>
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
