"use client";
import React from "react";

export default function ReportsPage() {
  return (
    <>
      <div className="flex items-center gap-xs text-[10px] text-outline font-bold uppercase tracking-[0.1em] mb-md">
        <span>Console</span>
        <span className="material-symbols-outlined !text-xs">
          chevron_right
        </span>
        <span className="text-primary">Tactical Reports</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md mb-lg">
        <div>
          <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface tracking-tighter uppercase flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl text-primary">analytics</span>
            Tactical Reports & Analytics
          </h2>
          <p className="text-xs text-outline font-medium tracking-wide">
            Comprehensive data analysis of operational readiness and attendance trends.
          </p>
        </div>
        
        <button className="flex items-center gap-sm bg-primary text-on-secondary px-lg py-sm font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-[0_0_15px_rgba(139,214,145,0.3)] transition-all">
          <span className="material-symbols-outlined text-sm">print</span>
          Generate Dossier
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg mb-lg">
        {/* Readiness Index */}
        <div className="bg-surface-container-low border border-outline-variant/30 p-lg shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-primary">
            <span className="material-symbols-outlined text-8xl">troubleshoot</span>
          </div>
          <h3 className="font-headline-md text-xs font-bold text-outline uppercase tracking-widest mb-1">
            Global Readiness Index
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-mono font-bold text-on-surface">92.4</span>
            <span className="text-xl text-primary">%</span>
          </div>
          <p className="text-[10px] text-primary mt-2 font-mono flex items-center gap-1">
            <span className="material-symbols-outlined !text-xs">arrow_upward</span>
            +1.2% VS LAST QUARTER
          </p>
          
          <div className="mt-6">
            <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[92.4%]"></div>
            </div>
            <div className="flex justify-between mt-1 text-[9px] text-outline font-mono">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Anomaly Detection */}
        <div className="bg-surface-container-low border border-error/30 p-lg shadow-2xl relative">
          <h3 className="font-headline-md text-xs font-bold text-outline uppercase tracking-widest mb-1">
            Detected Anomalies
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-mono font-bold text-error">7</span>
            <span className="text-xs text-outline uppercase tracking-widest">Incidents</span>
          </div>
          <p className="text-[10px] text-error mt-2 font-mono flex items-center gap-1 animate-pulse">
             REQUIRES REVIEW
          </p>
          <div className="mt-4 space-y-2">
             <div className="flex justify-between items-center text-[10px] border-b border-outline-variant/20 pb-1">
               <span className="text-outline uppercase">Unauthorized Access</span>
               <span className="text-error font-mono font-bold">4</span>
             </div>
             <div className="flex justify-between items-center text-[10px] border-b border-outline-variant/20 pb-1">
               <span className="text-outline uppercase">Biometric Mismatch</span>
               <span className="text-error font-mono font-bold">2</span>
             </div>
             <div className="flex justify-between items-center text-[10px]">
               <span className="text-outline uppercase">System Tamper Alert</span>
               <span className="text-error font-mono font-bold">1</span>
             </div>
          </div>
        </div>

        {/* Division Breakdown */}
        <div className="bg-surface-container-low border border-outline-variant/30 p-lg shadow-2xl">
          <h3 className="font-headline-md text-xs font-bold text-outline uppercase tracking-widest mb-4">
            Deployment by Division
          </h3>
          <div className="space-y-4">
            <div>
               <div className="flex justify-between text-[10px] mb-1">
                 <span className="text-on-surface uppercase font-bold">Alpha Squad</span>
                 <span className="text-primary font-mono">98%</span>
               </div>
               <div className="w-full h-1 bg-surface-container-highest">
                 <div className="h-full bg-primary w-[98%]"></div>
               </div>
            </div>
            <div>
               <div className="flex justify-between text-[10px] mb-1">
                 <span className="text-on-surface uppercase font-bold">Bravo Unit</span>
                 <span className="text-tertiary font-mono">85%</span>
               </div>
               <div className="w-full h-1 bg-surface-container-highest">
                 <div className="h-full bg-tertiary w-[85%]"></div>
               </div>
            </div>
            <div>
               <div className="flex justify-between text-[10px] mb-1">
                 <span className="text-on-surface uppercase font-bold">Charlie Platoon</span>
                 <span className="text-error font-mono">72%</span>
               </div>
               <div className="w-full h-1 bg-surface-container-highest">
                 <div className="h-full bg-error w-[72%]"></div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Data Table */}
      <div className="bg-surface-container-low border border-outline-variant/30 shadow-2xl overflow-hidden mt-8">
        <div className="bg-surface-container border-b border-outline-variant/20 px-md py-sm flex justify-between items-center">
          <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight">
            Raw Telemetry Log
          </h3>
          <div className="flex gap-2">
            <button className="text-[10px] font-bold uppercase tracking-widest text-outline hover:text-primary px-2 py-1 border border-outline-variant/30 transition-colors">
              Filter
            </button>
            <button className="text-[10px] font-bold uppercase tracking-widest text-outline hover:text-primary px-2 py-1 border border-outline-variant/30 transition-colors">
              Download CSV
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-highest/30 border-b border-outline-variant/30">
                <th className="px-lg py-3 text-[10px] font-bold text-outline uppercase tracking-widest">Timestamp</th>
                <th className="px-lg py-3 text-[10px] font-bold text-outline uppercase tracking-widest">Event ID</th>
                <th className="px-lg py-3 text-[10px] font-bold text-outline uppercase tracking-widest">Location/Terminal</th>
                <th className="px-lg py-3 text-[10px] font-bold text-outline uppercase tracking-widest">Personnel</th>
                <th className="px-lg py-3 text-[10px] font-bold text-outline uppercase tracking-widest">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10 font-mono text-[11px]">
              {[
                { time: "07:05:12", id: "EVT-8821A", loc: "TERM-A1 (Main Gate)", per: "Siti Aminah [482911]", res: "SUCCESS", ok: true },
                { time: "07:08:45", id: "EVT-8821B", loc: "TERM-A1 (Main Gate)", per: "Deni Pratama [482914]", res: "SUCCESS", ok: true },
                { time: "07:15:22", id: "EVT-8821C", loc: "TERM-B2 (Armory)", per: "UNKNOWN_SUBJECT", res: "ACCESS_DENIED", ok: false },
                { time: "07:22:01", id: "EVT-8821D", loc: "TERM-C1 (Vehicle Bay)", per: "Bagus Setiawan [482912]", res: "SUCCESS", ok: true },
                { time: "08:01:19", id: "EVT-8821E", loc: "TERM-A1 (Main Gate)", per: "Rina Kusuma [482913]", res: "SUCCESS", ok: true },
              ].map((log, i) => (
                <tr key={i} className={`hover:bg-primary/5 transition-colors ${!log.ok ? 'bg-error/5' : ''}`}>
                  <td className="px-lg py-3 text-outline">{log.time}</td>
                  <td className="px-lg py-3 text-on-surface">{log.id}</td>
                  <td className="px-lg py-3 text-outline">{log.loc}</td>
                  <td className={`px-lg py-3 ${!log.ok ? 'text-error font-bold' : 'text-on-surface'}`}>{log.per}</td>
                  <td className="px-lg py-3">
                    <span className={`px-2 py-0.5 font-bold ${log.ok ? 'text-primary bg-primary/10 border border-primary/30' : 'text-error bg-error/10 border border-error/30 animate-pulse'}`}>
                      {log.res}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
