"use client";

import React, { useMemo } from "react";

// Mock Data Personel (C1-C3: Benefit, C4: Cost)
const mockData = [
  { id: "ID-001", nama: "Sertu Budi", pangkat: "Sersan I", c1: 95, c2: 90, c3: 85, c4: 1 },
  { id: "ID-002", nama: "Praka Andi", pangkat: "Prajurit Kepala", c1: 85, c2: 80, c3: 80, c4: 2 },
  { id: "ID-003", nama: "Kopda Cipto", pangkat: "Kopral Dua", c1: 100, c2: 95, c3: 95, c4: 0 },
  { id: "ID-004", nama: "Pratu Dedi", pangkat: "Prajurit Satu", c1: 70, c2: 60, c3: 50, c4: 5 },
  { id: "ID-005", nama: "Serda Eko", pangkat: "Sersan II", c1: 90, c2: 85, c3: 90, c4: 1 },
  { id: "ID-006", nama: "Prada Fajar", pangkat: "Prajurit Dua", c1: 60, c2: 50, c3: 40, c4: 8 },
];

const weights = { c1: 0.4, c2: 0.3, c3: 0.2, c4: 0.1 };

export default function PenilaianPage() {
  const dataDenganSAW = useMemo(() => {
    // Normalisasi Max untuk Benefit
    const maxC1 = Math.max(...mockData.map((d) => d.c1));
    const maxC2 = Math.max(...mockData.map((d) => d.c2));
    const maxC3 = Math.max(...mockData.map((d) => d.c3));
    
    // Normalisasi Min untuk Cost
    const minC4 = Math.min(...mockData.map((d) => d.c4));

    return mockData
      .map((d) => {
        const r_C1 = d.c1 / maxC1;
        const r_C2 = d.c2 / maxC2;
        const r_C3 = d.c3 / maxC3;
        
        // Aturan SAW: Jika Cost 0, nilai normalisasi 1 untuk menghindari pembagian dengan 0
        const r_C4 = d.c4 === 0 ? 1 : minC4 / d.c4;

        const v =
          weights.c1 * r_C1 +
          weights.c2 * r_C2 +
          weights.c3 * r_C3 +
          weights.c4 * r_C4;

        let status = "KURANG";
        let colorClass = "text-error bg-error-container/20 border-error";
        let icon = "warning";
        
        if (v >= 0.8) {
          status = "BAIK";
          colorClass = "text-primary bg-primary-container/20 border-primary";
          icon = "check_circle";
        } else if (v >= 0.6) {
          status = "SEDANG";
          colorClass = "text-yellow-400 bg-yellow-400/20 border-yellow-400";
          icon = "info";
        }

        return { ...d, v, status, colorClass, icon };
      })
      .sort((a, b) => b.v - a.v);
  }, []);

  return (
    <div className="space-y-lg pb-xl">
      <header className="mb-lg border-b border-outline-variant/30 pb-md flex justify-between items-end">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight flex items-center gap-sm">
            <span className="material-symbols-outlined text-3xl">military_tech</span>
            Kalkulasi Penilaian Kedisiplinan (SAW)
          </h1>
          <p className="text-on-surface-variant font-body-md mt-xs max-w-2xl">
            Sistem terpadu pembobotan Simple Additive Weighting. Mengkalkulasikan performa kehadiran, 
            ketepatan waktu, dan rekam jejak indisipliner untuk menentukan kelayakan prajurit.
          </p>
        </div>
        <button className="flex items-center gap-sm bg-primary text-on-secondary px-md py-sm rounded-sm font-bold hover:brightness-110 transition-all uppercase text-xs tracking-widest shadow-[0_0_15px_rgba(139,214,145,0.2)]">
          <span className="material-symbols-outlined text-sm">print</span>
          Cetak Laporan
        </button>
      </header>

      {/* Rangkuman Matriks */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
        <div className="bg-surface-container-low border border-outline-variant/50 p-md rounded-sm">
          <div className="text-[10px] text-outline uppercase tracking-widest mb-1">Bobot Kehadiran (C1)</div>
          <div className="text-2xl font-mono text-on-surface">40% <span className="text-xs text-primary ml-1">BENEFIT</span></div>
        </div>
        <div className="bg-surface-container-low border border-outline-variant/50 p-md rounded-sm">
          <div className="text-[10px] text-outline uppercase tracking-widest mb-1">Datang Tepat (C2)</div>
          <div className="text-2xl font-mono text-on-surface">30% <span className="text-xs text-primary ml-1">BENEFIT</span></div>
        </div>
        <div className="bg-surface-container-low border border-outline-variant/50 p-md rounded-sm">
          <div className="text-[10px] text-outline uppercase tracking-widest mb-1">Pulang Tepat (C3)</div>
          <div className="text-2xl font-mono text-on-surface">20% <span className="text-xs text-primary ml-1">BENEFIT</span></div>
        </div>
        <div className="bg-surface-container-low border border-error/30 p-md rounded-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-error/5 mix-blend-overlay"></div>
          <div className="relative z-10">
            <div className="text-[10px] text-error uppercase tracking-widest mb-1">Pelanggaran (C4)</div>
            <div className="text-2xl font-mono text-error">10% <span className="text-xs text-error ml-1">COST</span></div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-sm overflow-hidden shadow-lg">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant/50 uppercase text-[10px] tracking-widest text-outline">
                <th className="py-md px-md font-semibold">Rank</th>
                <th className="py-md px-md font-semibold">No Reg</th>
                <th className="py-md px-md font-semibold">Nama / Pangkat</th>
                <th className="py-md px-md font-semibold text-center">C1<br/><span className="text-[8px] font-normal opacity-70">Hadir</span></th>
                <th className="py-md px-md font-semibold text-center">C2<br/><span className="text-[8px] font-normal opacity-70">Datang</span></th>
                <th className="py-md px-md font-semibold text-center">C3<br/><span className="text-[8px] font-normal opacity-70">Pulang</span></th>
                <th className="py-md px-md font-semibold text-center text-error">C4<br/><span className="text-[8px] font-normal opacity-70">Pelanggaran</span></th>
                <th className="py-md px-md font-semibold text-right">Nilai Akhir (V)</th>
                <th className="py-md px-md font-semibold text-center">Status</th>
                <th className="py-md px-md font-semibold text-center">Tindakan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 font-body-sm text-on-surface-variant">
              {dataDenganSAW.map((row, index) => (
                <tr key={row.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="py-md px-md text-center">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full font-mono text-xs ${
                      index === 0 ? "bg-yellow-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.5)]" :
                      index === 1 ? "bg-gray-400 text-black" :
                      index === 2 ? "bg-amber-700 text-white" :
                      "bg-surface-container-highest text-outline"
                    }`}>
                      {index + 1}
                    </span>
                  </td>
                  <td className="py-md px-md font-mono text-xs tracking-wider">{row.id}</td>
                  <td className="py-md px-md">
                    <div className="font-bold text-on-surface uppercase">{row.nama}</div>
                    <div className="text-[10px] text-outline uppercase tracking-widest">{row.pangkat}</div>
                  </td>
                  <td className="py-md px-md text-center font-mono">{row.c1}%</td>
                  <td className="py-md px-md text-center font-mono">{row.c2}%</td>
                  <td className="py-md px-md text-center font-mono">{row.c3}%</td>
                  <td className="py-md px-md text-center font-mono text-error font-bold">{row.c4}</td>
                  <td className="py-md px-md text-right">
                    <div className="text-lg font-mono font-bold text-primary group-hover:text-primary-fixed transition-colors">
                      {row.v.toFixed(4)}
                    </div>
                  </td>
                  <td className="py-md px-md text-center">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-sm border text-[10px] tracking-widest font-bold ${row.colorClass}`}>
                      <span className="material-symbols-outlined text-[12px]">{row.icon}</span>
                      {row.status}
                    </div>
                  </td>
                  <td className="py-md px-md text-center">
                    <button className="text-outline hover:text-primary transition-colors p-1" title="Lihat Rincian">
                      <span className="material-symbols-outlined text-sm">visibility</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="flex gap-sm items-center text-xs text-outline font-mono mt-md justify-end">
        <span className="material-symbols-outlined text-[14px]">info</span>
        Threshold: BAIK (≥ 0.8), SEDANG (≥ 0.6), KURANG (&lt; 0.6)
      </div>
    </div>
  );
}
