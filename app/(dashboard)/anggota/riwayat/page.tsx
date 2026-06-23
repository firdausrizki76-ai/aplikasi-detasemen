"use client";
import React, { useState } from "react";

const mockRiwayatData = [
  { date: "24 Juni 2026", checkIn: "06:45:12", checkOut: "17:05:30", status: "Hadir", type: "Apel Pagi" },
  { date: "23 Juni 2026", checkIn: "06:50:01", checkOut: "17:10:15", status: "Hadir", type: "Apel Pagi" },
  { date: "22 Juni 2026", checkIn: "07:12:44", checkOut: "17:02:11", status: "Terlambat", type: "Apel Pagi" },
  { date: "21 Juni 2026", checkIn: "-", checkOut: "-", status: "Libur", type: "Akhir Pekan" },
  { date: "20 Juni 2026", checkIn: "-", checkOut: "-", status: "Libur", type: "Akhir Pekan" },
  { date: "19 Juni 2026", checkIn: "06:55:20", checkOut: "17:00:05", status: "Hadir", type: "Apel Pagi" },
  { date: "18 Juni 2026", checkIn: "06:58:11", checkOut: "17:30:45", status: "Hadir", type: "Apel Pagi" },
];

export default function RiwayatKehadiranPage() {
  const [periode, setPeriode] = useState("Juni 2026");

  return (
    <>
      <div className="flex items-center gap-xs text-[10px] text-outline font-bold uppercase tracking-[0.1em] mb-md">
        <span>Portal Personal</span>
        <span className="material-symbols-outlined !text-xs">
          chevron_right
        </span>
        <span className="text-primary">Riwayat Kehadiran</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg">
        <div>
          <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface tracking-tighter uppercase flex items-center gap-2">
            <span className="material-symbols-outlined !text-3xl text-primary">history</span>
            Log Kehadiran
          </h2>
          <p className="text-xs text-outline font-medium tracking-wide mt-1">
            Riwayat presensi harian Anda yang dicatat oleh sistem biometrik.
          </p>
        </div>
        
        <div className="flex items-center gap-sm">
           <div className="flex flex-col">
              <label className="text-[10px] text-outline font-bold uppercase tracking-wider mb-1">Pilih Bulan</label>
              <select 
                className="bg-surface-container-low border border-outline-variant/50 text-on-surface text-sm px-3 py-1.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer"
                value={periode}
                onChange={(e) => setPeriode(e.target.value)}
              >
                 <option value="Juni 2026">Juni 2026</option>
                 <option value="Mei 2026">Mei 2026</option>
                 <option value="April 2026">April 2026</option>
              </select>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-lg">
         <div className="bg-surface-container-low border border-outline-variant/30 shadow-lg p-md flex items-center justify-between">
            <div>
               <span className="text-[10px] text-outline font-bold uppercase tracking-widest">Hadir Tepat</span>
               <div className="text-2xl font-bold text-secondary">18</div>
            </div>
            <span className="material-symbols-outlined text-secondary opacity-50 !text-3xl">check_circle</span>
         </div>
         <div className="bg-surface-container-low border border-outline-variant/30 shadow-lg p-md flex items-center justify-between">
            <div>
               <span className="text-[10px] text-outline font-bold uppercase tracking-widest">Terlambat</span>
               <div className="text-2xl font-bold text-yellow-500">2</div>
            </div>
            <span className="material-symbols-outlined text-yellow-500 opacity-50 !text-3xl">schedule</span>
         </div>
         <div className="bg-surface-container-low border border-outline-variant/30 shadow-lg p-md flex items-center justify-between">
            <div>
               <span className="text-[10px] text-outline font-bold uppercase tracking-widest">Izin / Sakit</span>
               <div className="text-2xl font-bold text-tertiary">0</div>
            </div>
            <span className="material-symbols-outlined text-tertiary opacity-50 !text-3xl">assignment</span>
         </div>
         <div className="bg-surface-container-low border border-outline-variant/30 shadow-lg p-md flex items-center justify-between">
            <div>
               <span className="text-[10px] text-outline font-bold uppercase tracking-widest">Alpha</span>
               <div className="text-2xl font-bold text-error">0</div>
            </div>
            <span className="material-symbols-outlined text-error opacity-50 !text-3xl">warning</span>
         </div>
      </div>

      <div className="bg-surface-container-low border border-outline-variant/30 shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-highest/50 text-on-surface text-xs uppercase tracking-wider border-b border-outline-variant/50">
                <th className="p-4 font-bold">Tanggal</th>
                <th className="p-4 font-bold">Kegiatan</th>
                <th className="p-4 font-bold text-center">Apel Masuk</th>
                <th className="p-4 font-bold text-center">Apel Pulang</th>
                <th className="p-4 font-bold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {mockRiwayatData.map((data, idx) => {
                let statusColor = "text-secondary bg-secondary/10 border-secondary/30";
                if (data.status === "Terlambat") statusColor = "text-yellow-600 bg-yellow-500/10 border-yellow-500/30";
                if (data.status === "Alpha") statusColor = "text-error bg-error/10 border-error/30";
                if (data.status === "Libur") statusColor = "text-outline bg-surface-container border-outline-variant/30";

                return (
                  <tr key={idx} className="hover:bg-surface-container-highest/30 transition-colors">
                    <td className="p-4">
                       <span className="text-sm font-bold text-on-surface uppercase">{data.date}</span>
                    </td>
                    <td className="p-4">
                       <span className="text-xs text-outline uppercase font-bold tracking-widest">{data.type}</span>
                    </td>
                    <td className="p-4 text-center">
                       <span className="text-sm font-mono text-on-surface">{data.checkIn}</span>
                    </td>
                    <td className="p-4 text-center">
                       <span className="text-sm font-mono text-on-surface">{data.checkOut}</span>
                    </td>
                    <td className="p-4 text-center">
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
      </div>
    </>
  );
}
