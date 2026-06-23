"use client";
import React from "react";

export default function PimpinanDashboardPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="flex items-center gap-xs text-[10px] text-outline font-bold uppercase tracking-[0.1em] mb-md">
        <span>Dasbor Utama</span>
        <span className="material-symbols-outlined !text-xs">
          chevron_right
        </span>
        <span className="text-primary">Statistik Satuan</span>
      </div>

      <div className="mb-lg">
        <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface tracking-tighter uppercase">
          Dasbor Komandan
        </h2>
        <p className="text-xs text-outline font-medium tracking-wide">
          Ringkasan eksekutif kehadiran dan kedisiplinan Detasemen Perintis.
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-md mb-lg">
        <div className="bg-surface-container-low border-l-4 border-primary p-md shadow-lg flex flex-col justify-between">
          <span className="text-[10px] text-outline uppercase font-bold tracking-widest">Total Personel</span>
          <div className="text-3xl font-bold text-on-surface mt-sm">248</div>
          <span className="text-[10px] text-primary mt-1">Aktif Bertugas</span>
        </div>
        <div className="bg-surface-container-low border-l-4 border-secondary p-md shadow-lg flex flex-col justify-between">
          <span className="text-[10px] text-outline uppercase font-bold tracking-widest">Hadir Tepat</span>
          <div className="text-3xl font-bold text-on-surface mt-sm">205</div>
          <span className="text-[10px] text-secondary mt-1">82.6% dari Total</span>
        </div>
        <div className="bg-surface-container-low border-l-4 border-error/70 p-md shadow-lg flex flex-col justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-12 h-12 bg-error/10 flex items-center justify-center rounded-bl-full">
            <span className="material-symbols-outlined text-error/70 text-sm">schedule</span>
          </div>
          <span className="text-[10px] text-outline uppercase font-bold tracking-widest">Terlambat</span>
          <div className="text-3xl font-bold text-error/80 mt-sm">18</div>
          <span className="text-[10px] text-error mt-1">Hari Ini</span>
        </div>
        <div className="bg-surface-container-low border-l-4 border-error p-md shadow-lg flex flex-col justify-between relative overflow-hidden">
           <div className="absolute right-0 top-0 w-12 h-12 bg-error/10 flex items-center justify-center rounded-bl-full">
            <span className="material-symbols-outlined text-error text-sm">warning</span>
          </div>
          <span className="text-[10px] text-outline uppercase font-bold tracking-widest">Alpha / TK</span>
          <div className="text-3xl font-bold text-error mt-sm">7</div>
          <span className="text-[10px] text-error mt-1">Tanpa Keterangan</span>
        </div>
        <div className="bg-surface-container-low border-l-4 border-tertiary p-md shadow-lg flex flex-col justify-between">
          <span className="text-[10px] text-outline uppercase font-bold tracking-widest">Izin / Sakit / DL</span>
          <div className="text-3xl font-bold text-on-surface mt-sm">18</div>
          <span className="text-[10px] text-tertiary mt-1">Keterangan Resmi</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg mb-lg">
        {/* Main Chart Placeholder */}
        <div className="lg:col-span-2 bg-surface-container-low border border-outline-variant/30 p-md shadow-lg min-h-[300px] relative">
          <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-md flex items-center gap-2">
            <span className="material-symbols-outlined !text-sm text-primary">bar_chart</span>
            Tren Kehadiran (7 Hari Terakhir)
          </h3>
          <div className="absolute inset-0 top-12 bottom-8 left-10 right-4 border-l border-b border-outline-variant/50 flex flex-row items-end justify-around px-4 pb-0 pt-12">
            {/* Fake bars for a bar chart */}
            {[
              { day: "Sen", value: 92 },
              { day: "Sel", value: 89 },
              { day: "Rab", value: 95 },
              { day: "Kam", value: 88 },
              { day: "Jum", value: 85 },
              { day: "Sab", value: 60 },
              { day: "Min", value: 55 },
            ].map((data, i) => (
              <div key={i} className="flex flex-col items-center justify-end h-full w-full">
                <div className="w-8 sm:w-16 bg-primary/80 hover:bg-primary transition-colors relative group rounded-t-sm" style={{ height: `${data.value}%` }}>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-surface text-[10px] px-1 border border-primary text-primary opacity-0 group-hover:opacity-100 z-10 transition-opacity">
                    {data.value}%
                  </div>
                </div>
                <span className="text-[10px] text-outline mt-2 font-bold uppercase">{data.day}</span>
              </div>
            ))}
          </div>
          {/* Y-axis labels */}
          <div className="absolute left-2 top-12 bottom-8 flex flex-col justify-between text-[10px] text-outline font-mono">
            <span>100%</span>
            <span>75%</span>
            <span>50%</span>
            <span>25%</span>
            <span>0%</span>
          </div>
        </div>

        {/* Donut Chart Placeholder */}
        <div className="bg-surface-container-low border border-outline-variant/30 p-md shadow-lg min-h-[300px] flex flex-col">
          <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-md flex items-center gap-2">
            <span className="material-symbols-outlined !text-sm text-primary">pie_chart</span>
            Distribusi Kedisiplinan
          </h3>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            {/* CSS-based pseudo donut chart */}
            <div className="w-40 h-40 rounded-full border-[16px] border-primary flex items-center justify-center relative shadow-inner" style={{ borderTopColor: 'rgb(220 38 38)', borderRightColor: 'rgb(234 179 8)' }}>
                <div className="absolute inset-0 rounded-full border-[16px] border-transparent" style={{ transform: 'rotate(45deg)', borderRightColor: 'rgb(var(--color-primary))', borderBottomColor: 'rgb(var(--color-primary))' }}></div>
                <div className="text-center z-10 bg-surface-container-low w-full h-full rounded-full flex flex-col items-center justify-center m-1 shadow-xl">
                  <span className="text-2xl font-bold text-on-surface">SAW</span>
                  <span className="text-[9px] text-outline font-bold tracking-widest uppercase">Skor Indeks</span>
                </div>
            </div>
            
            <div className="w-full mt-6 space-y-2 px-4">
               <div className="flex items-center justify-between text-xs">
                 <div className="flex items-center gap-2"><div className="w-3 h-3 bg-primary rounded-sm"></div> <span className="font-bold text-on-surface">BAIK</span></div>
                 <span className="font-mono">72%</span>
               </div>
               <div className="flex items-center justify-between text-xs">
                 <div className="flex items-center gap-2"><div className="w-3 h-3 bg-yellow-500 rounded-sm"></div> <span className="font-bold text-on-surface">SEDANG</span></div>
                 <span className="font-mono">20%</span>
               </div>
               <div className="flex items-center justify-between text-xs">
                 <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-600 rounded-sm"></div> <span className="font-bold text-on-surface">KURANG</span></div>
                 <span className="font-mono">8%</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
        {/* Top 5 Disiplin */}
        <div className="bg-surface-container-low border border-outline-variant/30 p-md shadow-lg">
          <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-md flex items-center justify-between">
            <div className="flex items-center gap-2">
               <span className="material-symbols-outlined !text-sm text-primary">emoji_events</span>
               Top 5 Disiplin Terbaik
            </div>
            <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-sm">BULAN INI</span>
          </h3>
          <div className="space-y-3">
             {[
               { name: "Andi Saputra", rank: "Serda", score: 0.95 },
               { name: "Budi Santoso", rank: "Prada", score: 0.92 },
               { name: "Cahya Gunawan", rank: "Sertu", score: 0.90 },
               { name: "Dedi Irawan", rank: "Kopda", score: 0.88 },
               { name: "Eko Prasetyo", rank: "Pratu", score: 0.87 },
             ].map((p, idx) => (
                <div key={idx} className="flex items-center justify-between bg-surface-container p-sm rounded-sm border-l-2 border-primary">
                   <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/20 text-primary flex items-center justify-center font-bold text-xs rounded-sm">#{idx + 1}</div>
                      <div>
                        <p className="text-xs font-bold text-on-surface uppercase">{p.name}</p>
                        <p className="text-[10px] text-outline uppercase">{p.rank}</p>
                      </div>
                   </div>
                   <div className="text-sm font-mono font-bold text-primary">{p.score.toFixed(2)}</div>
                </div>
             ))}
          </div>
        </div>

        {/* 5 Sering Alpha */}
        <div className="bg-surface-container-low border border-outline-variant/30 p-md shadow-lg">
           <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-md flex items-center justify-between">
            <div className="flex items-center gap-2">
               <span className="material-symbols-outlined !text-sm text-error">warning</span>
               Perhatian Khusus (Sering Alpha)
            </div>
            <span className="text-[10px] text-error bg-error/10 px-2 py-0.5 rounded-sm">BULAN INI</span>
          </h3>
          <div className="space-y-3">
             {[
               { name: "Fajar Nugraha", rank: "Prada", count: 4 },
               { name: "Gilang Ramadhan", rank: "Pratu", count: 3 },
               { name: "Hadi Purnomo", rank: "Kopda", count: 3 },
               { name: "Indra Lesmana", rank: "Serda", count: 2 },
               { name: "Joko Susilo", rank: "Prada", count: 2 },
             ].map((p, idx) => (
                <div key={idx} className="flex items-center justify-between bg-error-container/20 p-sm rounded-sm border-l-2 border-error">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-error/50 flex items-center justify-center overflow-hidden grayscale">
                        <span className="material-symbols-outlined text-outline text-sm">person</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-on-surface uppercase">{p.name}</p>
                        <p className="text-[10px] text-outline uppercase">{p.rank}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-1 bg-error/10 px-2 py-1 rounded-sm">
                      <span className="text-error font-bold text-xs">{p.count}</span>
                      <span className="text-[9px] text-error uppercase font-bold">Kali</span>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </>
  );
}
