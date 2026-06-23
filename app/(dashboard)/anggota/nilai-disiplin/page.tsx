"use client";
import React, { useState } from "react";

export default function NilaiDisiplinPage() {
  const [periode, setPeriode] = useState("Juni 2026");

  return (
    <>
      <div className="flex items-center gap-xs text-[10px] text-outline font-bold uppercase tracking-[0.1em] mb-md">
        <span>Portal Personal</span>
        <span className="material-symbols-outlined !text-xs">
          chevron_right
        </span>
        <span className="text-primary">Indeks Kedisiplinan</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg">
        <div>
          <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface tracking-tighter uppercase flex items-center gap-2">
            <span className="material-symbols-outlined !text-3xl text-primary">military_tech</span>
            Indeks Kedisiplinan
          </h2>
          <p className="text-xs text-outline font-medium tracking-wide mt-1 max-w-xl">
            Laporan skor evaluasi kinerja dan kedisiplinan Anda yang dihitung menggunakan metode SAW (Simple Additive Weighting).
          </p>
        </div>
        
        <div className="flex items-center gap-sm">
           <div className="flex flex-col">
              <label className="text-[10px] text-outline font-bold uppercase tracking-wider mb-1">Periode Evaluasi</label>
              <select 
                className="bg-surface-container-low border border-outline-variant/50 text-on-surface text-sm px-3 py-1.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer"
                value={periode}
                onChange={(e) => setPeriode(e.target.value)}
              >
                 <option value="Juni 2026">Juni 2026</option>
                 <option value="Mei 2026">Mei 2026</option>
              </select>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-lg">
         {/* Skor Akhir */}
         <div className="md:col-span-1 bg-surface-container-low border border-outline-variant/30 shadow-lg flex flex-col justify-center items-center p-xl relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay pointer-events-none">
               <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(139,214,145,0.1)_1px,transparent_1px),linear-gradient(rgba(139,214,145,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
               <span className="text-[10px] text-outline font-bold tracking-widest uppercase mb-4">Nilai Akhir (Vi)</span>
               
               <div className="w-40 h-40 rounded-full border-4 border-primary/30 flex items-center justify-center relative shadow-[0_0_30px_rgba(139,214,145,0.2)]">
                  <div className="absolute inset-2 rounded-full border border-primary animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-4 rounded-full border border-dashed border-primary/50 animate-[spin_15s_linear_infinite_reverse]"></div>
                  <span className="text-5xl font-mono font-bold text-primary drop-shadow-md">0.92</span>
               </div>

               <div className="mt-6 flex flex-col items-center">
                  <span className="bg-primary text-on-primary px-6 py-1.5 uppercase font-bold tracking-widest text-sm shadow-md">
                     PREDIKAT: BAIK
                  </span>
                  <span className="text-xs text-outline mt-2 uppercase font-bold tracking-wider">
                     Peringkat #2 Regu Bravo
                  </span>
               </div>
            </div>
         </div>

         {/* Rincian Kriteria */}
         <div className="md:col-span-2 bg-surface-container-low border border-outline-variant/30 shadow-lg p-md">
            <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-md flex items-center gap-2 border-b border-outline-variant/30 pb-2">
               <span className="material-symbols-outlined !text-sm text-secondary">tune</span>
               Rincian Perhitungan Kriteria SAW
            </h3>

            <div className="space-y-4 mt-6">
               {/* C1 */}
               <div>
                  <div className="flex justify-between items-end mb-1">
                     <span className="text-xs font-bold text-on-surface uppercase tracking-wider flex items-center gap-2">
                        <span className="w-6 h-6 bg-surface-container flex items-center justify-center text-[10px] font-mono border border-outline-variant/50">C1</span>
                        Kehadiran Tepat Waktu
                     </span>
                     <div className="flex flex-col items-end">
                        <span className="text-[10px] text-outline font-bold uppercase">Bobot: 40% (Benefit)</span>
                        <span className="text-sm font-mono text-primary font-bold">18 Hari (Nilai: 1.0)</span>
                     </div>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest overflow-hidden">
                     <div className="h-full bg-primary" style={{ width: '100%' }}></div>
                  </div>
               </div>

               {/* C2 */}
               <div>
                  <div className="flex justify-between items-end mb-1">
                     <span className="text-xs font-bold text-on-surface uppercase tracking-wider flex items-center gap-2">
                        <span className="w-6 h-6 bg-surface-container flex items-center justify-center text-[10px] font-mono border border-outline-variant/50">C2</span>
                        Tingkat Keterlambatan
                     </span>
                     <div className="flex flex-col items-end">
                        <span className="text-[10px] text-outline font-bold uppercase">Bobot: 30% (Cost)</span>
                        <span className="text-sm font-mono text-yellow-500 font-bold">2 Kali (Nilai: 0.8)</span>
                     </div>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest overflow-hidden">
                     <div className="h-full bg-yellow-500" style={{ width: '80%' }}></div>
                  </div>
               </div>

               {/* C3 */}
               <div>
                  <div className="flex justify-between items-end mb-1">
                     <span className="text-xs font-bold text-on-surface uppercase tracking-wider flex items-center gap-2">
                        <span className="w-6 h-6 bg-surface-container flex items-center justify-center text-[10px] font-mono border border-outline-variant/50">C3</span>
                        Ketidakhadiran Tanpa Keterangan
                     </span>
                     <div className="flex flex-col items-end">
                        <span className="text-[10px] text-outline font-bold uppercase">Bobot: 20% (Cost)</span>
                        <span className="text-sm font-mono text-primary font-bold">0 Kali (Nilai: 1.0)</span>
                     </div>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest overflow-hidden">
                     <div className="h-full bg-primary" style={{ width: '100%' }}></div>
                  </div>
               </div>

               {/* C4 */}
               <div>
                  <div className="flex justify-between items-end mb-1">
                     <span className="text-xs font-bold text-on-surface uppercase tracking-wider flex items-center gap-2">
                        <span className="w-6 h-6 bg-surface-container flex items-center justify-center text-[10px] font-mono border border-outline-variant/50">C4</span>
                        Pelanggaran Disiplin Khusus
                     </span>
                     <div className="flex flex-col items-end">
                        <span className="text-[10px] text-outline font-bold uppercase">Bobot: 10% (Cost)</span>
                        <span className="text-sm font-mono text-primary font-bold">0 Kali (Nilai: 1.0)</span>
                     </div>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest overflow-hidden">
                     <div className="h-full bg-primary" style={{ width: '100%' }}></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  );
}
