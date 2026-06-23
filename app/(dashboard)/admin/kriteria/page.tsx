"use client";

import React from "react";

const mockKriteria = [
  { id: "C1", nama: "Persentase Kehadiran", bobot: 40, tipe: "Benefit", desc: "Semakin tinggi tingkat kehadiran, semakin baik." },
  { id: "C2", nama: "Tepat Waktu Datang", bobot: 30, tipe: "Benefit", desc: "Rasio ketepatan waktu datang saat apel pagi." },
  { id: "C3", nama: "Tepat Waktu Pulang", bobot: 20, tipe: "Benefit", desc: "Rasio kedisiplinan pulang sesuai jadwal operasional." },
  { id: "C4", nama: "Jumlah Pelanggaran", bobot: 10, tipe: "Cost", desc: "Semakin banyak pelanggaran indisipliner, semakin buruk nilainya." },
];

export default function KriteriaPage() {
  return (
    <div className="space-y-lg pb-xl">
      <header className="mb-lg border-b border-outline-variant/30 pb-md flex justify-between items-end">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight flex items-center gap-sm">
            <span className="material-symbols-outlined text-3xl">tune</span>
            Konfigurasi Kriteria SAW
          </h1>
          <p className="text-on-surface-variant font-body-md mt-xs max-w-2xl">
            Tentukan parameter dan bobot algoritma Simple Additive Weighting. Pastikan total bobot bernilai 100%.
          </p>
        </div>
        <button className="flex items-center gap-sm bg-primary text-on-secondary px-md py-sm rounded-sm font-bold hover:brightness-110 transition-all uppercase text-xs tracking-widest shadow-[0_0_15px_rgba(139,214,145,0.2)]">
          <span className="material-symbols-outlined text-sm">save</span>
          Simpan Konfigurasi
        </button>
      </header>

      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-sm overflow-hidden shadow-lg p-md">
        <div className="flex justify-between items-center mb-md border-b border-outline-variant/30 pb-md">
          <div className="font-mono text-sm tracking-widest text-outline">STATUS ALGORITMA: <span className="text-primary font-bold">OPTIMAL</span></div>
          <div className="font-mono text-sm tracking-widest text-outline">TOTAL BOBOT: <span className="text-primary font-bold text-lg">100%</span></div>
        </div>

        <div className="space-y-md">
          {mockKriteria.map((k) => (
            <div key={k.id} className="flex flex-col md:flex-row gap-md items-center bg-surface-container-low border border-outline-variant/30 p-md rounded-sm">
              <div className="w-full md:w-1/4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-lg font-bold text-primary">{k.id}</span>
                  <span className={`text-[9px] px-2 py-0.5 rounded-sm uppercase tracking-widest font-bold ${
                    k.tipe === 'Benefit' ? 'bg-primary/20 text-primary border border-primary/50' : 'bg-error/20 text-error border border-error/50'
                  }`}>
                    {k.tipe}
                  </span>
                </div>
                <div className="font-bold text-on-surface uppercase tracking-tight">{k.nama}</div>
              </div>
              <div className="w-full md:w-2/4">
                <p className="text-xs text-on-surface-variant mb-2">{k.desc}</p>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${k.tipe === 'Benefit' ? 'bg-primary' : 'bg-error'} shadow-[0_0_10px_currentColor]`}
                    style={{ width: `${k.bobot}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-full md:w-1/4 flex justify-end items-center gap-sm">
                <input 
                  type="number" 
                  defaultValue={k.bobot} 
                  className="w-20 bg-surface-container border border-outline-variant px-2 py-1 text-center font-mono focus:ring-1 focus:ring-primary outline-none"
                />
                <span className="font-mono text-outline">%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
