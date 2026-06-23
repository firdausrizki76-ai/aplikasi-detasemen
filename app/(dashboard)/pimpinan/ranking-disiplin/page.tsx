"use client";
import React, { useState } from "react";

const mockRankingData = [
  { rank: 1, nrp: "14029301", name: "Andi Saputra", pangkat: "Serda", regu: "Alpha", c1: 0.98, c2: 0.95, c3: 0.96, c4: 1.0, score: 0.95, status: "Baik" },
  { rank: 2, nrp: "14029302", name: "Budi Santoso", pangkat: "Prada", regu: "Bravo", c1: 0.95, c2: 0.90, c3: 0.95, c4: 0.8, score: 0.92, status: "Baik" },
  { rank: 3, nrp: "14029303", name: "Cahya Gunawan", pangkat: "Sertu", regu: "Alpha", c1: 0.92, c2: 0.90, c3: 0.90, c4: 0.8, score: 0.90, status: "Baik" },
  { rank: 4, nrp: "14029304", name: "Dedi Irawan", pangkat: "Kopda", regu: "Charlie", c1: 0.90, c2: 0.88, c3: 0.89, c4: 0.8, score: 0.88, status: "Baik" },
  { rank: 5, nrp: "14029305", name: "Eko Prasetyo", pangkat: "Pratu", regu: "Bravo", c1: 0.88, c2: 0.85, c3: 0.88, c4: 0.8, score: 0.87, status: "Baik" },
  { rank: 6, nrp: "14029306", name: "Feri Siswanto", pangkat: "Serda", regu: "Delta", c1: 0.80, c2: 0.80, c3: 0.75, c4: 0.6, score: 0.75, status: "Sedang" },
  { rank: 7, nrp: "14029307", name: "Gatot Pambudi", pangkat: "Prada", regu: "Alpha", c1: 0.75, c2: 0.70, c3: 0.75, c4: 0.6, score: 0.72, status: "Sedang" },
  { rank: 8, nrp: "14029308", name: "Hari Wibowo", pangkat: "Kopda", regu: "Charlie", c1: 0.70, c2: 0.65, c3: 0.70, c4: 0.6, score: 0.68, status: "Sedang" },
  { rank: 9, nrp: "14029309", name: "Iwan Setiawan", pangkat: "Pratu", regu: "Bravo", c1: 0.60, c2: 0.55, c3: 0.60, c4: 0.4, score: 0.55, status: "Kurang" },
  { rank: 10, nrp: "14029310", name: "Joko Anwar", pangkat: "Serda", regu: "Delta", c1: 0.50, c2: 0.50, c3: 0.50, c4: 0.2, score: 0.45, status: "Kurang" },
];

export default function RankingDisiplinPage() {
  const [periode, setPeriode] = useState("Juni 2026");
  const [filterRegu, setFilterRegu] = useState("Semua Regu");

  return (
    <>
      {/* Breadcrumbs */}
      <div className="flex items-center gap-xs text-[10px] text-outline font-bold uppercase tracking-[0.1em] mb-md">
        <span>Dasbor Utama</span>
        <span className="material-symbols-outlined !text-xs">
          chevron_right
        </span>
        <span className="text-primary">Peringkat Disiplin</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg">
        <div>
          <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface tracking-tighter uppercase flex items-center gap-2">
            <span className="material-symbols-outlined !text-3xl text-primary">military_tech</span>
            Peringkat Kedisiplinan
          </h2>
          <p className="text-xs text-outline font-medium tracking-wide mt-1">
            Daftar peringkat kedisiplinan seluruh personel berdasarkan perhitungan metode SAW (Simple Additive Weighting).
          </p>
        </div>
        
        <div className="flex items-center gap-sm">
           <div className="flex flex-col">
              <label className="text-[10px] text-outline font-bold uppercase tracking-wider mb-1">Periode</label>
              <select 
                className="bg-surface-container-low border border-outline-variant/50 text-on-surface text-sm px-3 py-1.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer"
                value={periode}
                onChange={(e) => setPeriode(e.target.value)}
              >
                 <option value="Juni 2026">Juni 2026</option>
                 <option value="Mei 2026">Mei 2026</option>
                 <option value="Triwulan 1 2026">Triwulan 1 2026</option>
              </select>
           </div>
           <div className="flex flex-col">
              <label className="text-[10px] text-outline font-bold uppercase tracking-wider mb-1">Filter Regu</label>
              <select 
                className="bg-surface-container-low border border-outline-variant/50 text-on-surface text-sm px-3 py-1.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer"
                value={filterRegu}
                onChange={(e) => setFilterRegu(e.target.value)}
              >
                 <option value="Semua Regu">Semua Regu</option>
                 <option value="Alpha">Regu Alpha</option>
                 <option value="Bravo">Regu Bravo</option>
                 <option value="Charlie">Regu Charlie</option>
                 <option value="Delta">Regu Delta</option>
              </select>
           </div>
           <button className="mt-5 flex items-center justify-center gap-2 bg-primary text-on-primary px-4 py-2 hover:brightness-110 transition-all text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined !text-sm">print</span>
              Cetak
           </button>
        </div>
      </div>

      {/* Podium Top 3 */}
      <div className="flex justify-center items-end gap-2 sm:gap-6 mb-12 mt-12 h-64">
        {/* Rank 2 */}
        <div className="flex flex-col items-center animate-slide-up-delayed-1">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-slate-400 mb-2 relative shadow-lg">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Rank 2" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 bg-slate-500 w-full text-center text-[10px] sm:text-xs font-bold text-white">#2</div>
          </div>
          <div className="bg-surface-container-low border border-slate-400 w-24 sm:w-28 h-32 flex flex-col items-center justify-start pt-4 shadow-xl">
             <span className="font-bold text-xs sm:text-sm text-center px-1 uppercase">{mockRankingData[1].name}</span>
             <span className="text-xs text-primary font-mono mt-2">{mockRankingData[1].score.toFixed(3)}</span>
          </div>
        </div>

        {/* Rank 1 */}
        <div className="flex flex-col items-center animate-slide-up z-10">
          <span className="material-symbols-outlined text-yellow-500 text-4xl sm:text-5xl mb-1 drop-shadow-md">military_tech</span>
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-yellow-400 mb-2 relative shadow-2xl">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" alt="Rank 1" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 bg-yellow-500 w-full text-center text-xs sm:text-sm font-bold text-white">#1</div>
          </div>
          <div className="bg-surface-container border-2 border-yellow-400 w-28 sm:w-36 h-40 flex flex-col items-center justify-start pt-4 shadow-2xl relative">
             <span className="font-bold text-sm sm:text-base text-center px-1 uppercase">{mockRankingData[0].name}</span>
             <span className="text-sm sm:text-base text-primary font-bold font-mono mt-2">{mockRankingData[0].score.toFixed(3)}</span>
          </div>
        </div>

        {/* Rank 3 */}
        <div className="flex flex-col items-center animate-slide-up-delayed-2">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-amber-600 mb-2 relative shadow-lg">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80" alt="Rank 3" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 bg-amber-700 w-full text-center text-[10px] sm:text-xs font-bold text-white">#3</div>
          </div>
          <div className="bg-surface-container-low border border-amber-600 w-24 sm:w-28 h-24 flex flex-col items-center justify-start pt-4 shadow-xl">
             <span className="font-bold text-xs sm:text-sm text-center px-1 uppercase">{mockRankingData[2].name}</span>
             <span className="text-xs text-primary font-mono mt-2">{mockRankingData[2].score.toFixed(3)}</span>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-low border border-outline-variant/30 shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-highest/50 text-on-surface text-xs uppercase tracking-wider border-b border-outline-variant/50">
                <th className="p-3 w-16 text-center font-bold">Rank</th>
                <th className="p-3 font-bold">Personel</th>
                <th className="p-3 font-bold text-center">Regu</th>
                <th className="p-3 font-bold text-center" title="Kriteria 1: Persentase Kehadiran">C1</th>
                <th className="p-3 font-bold text-center" title="Kriteria 2: Ketepatan Waktu Masuk">C2</th>
                <th className="p-3 font-bold text-center" title="Kriteria 3: Ketepatan Waktu Pulang">C3</th>
                <th className="p-3 font-bold text-center" title="Kriteria 4: Jumlah Pelanggaran (Cost)">C4</th>
                <th className="p-3 font-bold text-center bg-primary/10">Skor Akhir (Vi)</th>
                <th className="p-3 font-bold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {mockRankingData.map((data, idx) => {
                let statusColor = "text-primary bg-primary/10 border-primary/30";
                if (data.status === "Sedang") statusColor = "text-yellow-600 bg-yellow-500/10 border-yellow-500/30";
                if (data.status === "Kurang") statusColor = "text-error bg-error/10 border-error/30";

                return (
                  <tr key={idx} className="hover:bg-surface-container-highest/30 transition-colors">
                    <td className="p-3 text-center">
                      {data.rank <= 3 ? (
                         <div className="w-8 h-8 mx-auto bg-primary text-on-primary flex items-center justify-center rounded-full font-bold text-sm shadow-md">
                           {data.rank}
                         </div>
                      ) : (
                         <div className="w-8 h-8 mx-auto text-outline flex items-center justify-center font-bold text-sm">
                           {data.rank}
                         </div>
                      )}
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/50 flex items-center justify-center overflow-hidden grayscale opacity-80">
                          <span className="material-symbols-outlined text-outline text-sm">person</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-on-surface uppercase leading-tight">{data.name}</p>
                          <p className="text-[10px] text-outline uppercase font-mono">{data.nrp} • {data.pangkat}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                       <span className="text-xs text-on-surface font-bold bg-surface-container-highest px-2 py-1 rounded-sm uppercase tracking-wide border border-outline-variant/30">
                          {data.regu}
                       </span>
                    </td>
                    <td className="p-3 text-center text-xs font-mono text-outline">{data.c1.toFixed(2)}</td>
                    <td className="p-3 text-center text-xs font-mono text-outline">{data.c2.toFixed(2)}</td>
                    <td className="p-3 text-center text-xs font-mono text-outline">{data.c3.toFixed(2)}</td>
                    <td className="p-3 text-center text-xs font-mono text-outline">{data.c4.toFixed(2)}</td>
                    <td className="p-3 text-center text-sm font-mono font-bold text-primary bg-primary/5">{data.score.toFixed(3)}</td>
                    <td className="p-3 text-center">
                      <span className={`text-[10px] px-2 py-1 font-bold uppercase tracking-wider border rounded-sm ${statusColor}`}>
                        {data.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Pagination / Footer */}
        <div className="p-4 border-t border-outline-variant/30 bg-surface-container-highest/20 flex items-center justify-between text-xs text-outline">
           <span>Menampilkan 1-10 dari 248 personel</span>
           <div className="flex gap-1">
              <button className="px-2 py-1 hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer border border-outline-variant/30 disabled:opacity-50" disabled>&laquo; Prev</button>
              <button className="px-2 py-1 bg-primary text-on-primary border border-primary font-bold">1</button>
              <button className="px-2 py-1 hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer border border-outline-variant/30">2</button>
              <button className="px-2 py-1 hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer border border-outline-variant/30">3</button>
              <button className="px-2 py-1 hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer border border-outline-variant/30">Next &raquo;</button>
           </div>
        </div>
      </div>
    </>
  );
}
