"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function AbsensiPortalPage() {
  const [status, setStatus] = useState<"idle" | "scanning" | "matched" | "error">("idle");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (status === "scanning") {
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            setStatus("matched");
            return 100;
          }
          return p + 10;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [status]);

  const startScan = () => {
    setProgress(0);
    setStatus("scanning");
  };

  return (
    <>
      <div className="flex items-center gap-xs text-[10px] text-outline font-bold uppercase tracking-[0.1em] mb-md">
        <span>Portal Personal</span>
        <span className="material-symbols-outlined !text-xs">
          chevron_right
        </span>
        <span className="text-primary">Terminal Absensi</span>
      </div>

      <div className="mb-lg">
        <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface tracking-tighter uppercase flex items-center gap-2">
          <span className="material-symbols-outlined !text-3xl text-primary">face</span>
          Pindai Wajah
        </h2>
        <p className="text-xs text-outline font-medium tracking-wide mt-1 max-w-xl">
          Sistem akan memverifikasi identitas Anda berdasarkan titik biometrik wajah. Pastikan pencahayaan cukup dan wajah tidak tertutup.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-lg">
         {/* Camera Section */}
         <div className="lg:w-2/3 bg-surface-container-lowest border border-outline-variant/30 shadow-2xl p-md relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
            {status === "idle" && (
               <div className="flex flex-col items-center justify-center z-10 text-center space-y-4">
                  <span className="material-symbols-outlined text-6xl text-outline mb-2 opacity-50">photo_camera</span>
                  <p className="text-sm font-bold text-outline uppercase tracking-widest">Kamera Siap</p>
                  <button 
                     onClick={startScan}
                     className="bg-primary text-on-primary px-8 py-3 uppercase font-bold tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,214,145,0.4)]"
                  >
                     <span className="material-symbols-outlined">center_focus_strong</span>
                     Mulai Pindai
                  </button>
               </div>
            )}

            {(status === "scanning" || status === "matched") && (
               <>
                  <div className="absolute inset-0 z-0">
                     <img 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" 
                        alt="Kamera" 
                        className="w-full h-full object-cover grayscale opacity-60"
                     />
                  </div>
                  
                  {/* Overlay Tactical HUD */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                     <div className="absolute top-4 left-4 border-t-2 border-l-2 border-primary w-12 h-12"></div>
                     <div className="absolute top-4 right-4 border-t-2 border-r-2 border-primary w-12 h-12"></div>
                     <div className="absolute bottom-4 left-4 border-b-2 border-l-2 border-primary w-12 h-12"></div>
                     <div className="absolute bottom-4 right-4 border-b-2 border-r-2 border-primary w-12 h-12"></div>
                     
                     {/* Face Detection Box */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-56 border border-primary/50 flex items-center justify-center">
                        {status === "scanning" && <div className="scan-line"></div>}
                        {status === "matched" && (
                           <div className="absolute -right-32 top-0 bg-primary/20 border border-primary text-primary px-2 py-1 text-[10px] font-mono uppercase tracking-widest animate-pulse backdrop-blur-sm flex flex-col">
                              <span>ID: 14029302</span>
                              <span>CONFIDENCE: 99.8%</span>
                              <span>MATCHED</span>
                           </div>
                        )}
                     </div>
                  </div>
               </>
            )}

            {/* Status Overlays */}
            {status === "scanning" && (
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-64 bg-black/60 backdrop-blur-md p-3 border border-primary/50 text-center">
                  <p className="text-primary text-xs font-mono font-bold uppercase mb-2">Menganalisis Biometrik... {progress}%</p>
                  <div className="w-full h-1 bg-surface-container-highest">
                     <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }}></div>
                  </div>
               </div>
            )}

            {status === "matched" && (
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                  <div className="flex items-center gap-2 bg-primary/90 text-on-primary px-6 py-2 uppercase font-bold text-sm tracking-widest shadow-[0_0_20px_rgba(139,214,145,0.6)]">
                     <span className="material-symbols-outlined">check_circle</span>
                     Identitas Terverifikasi
                  </div>
                  <button 
                     onClick={() => setStatus("idle")}
                     className="mt-4 text-xs font-bold text-outline hover:text-on-surface uppercase tracking-wider underline underline-offset-4 transition-colors"
                  >
                     Ulangi Pemindaian
                  </button>
               </div>
            )}
         </div>

         {/* Info Section */}
         <div className="lg:w-1/3 flex flex-col gap-md">
            <div className="bg-surface-container-low border border-outline-variant/30 p-md shadow-lg">
               <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-md flex items-center gap-2 border-b border-outline-variant/30 pb-2">
                  <span className="material-symbols-outlined !text-sm text-secondary">info</span>
                  Data Kehadiran Terakhir
               </h3>
               <div className="space-y-4 mt-4">
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] text-outline font-bold uppercase tracking-widest">Apel Masuk</span>
                     <span className="text-xs font-mono text-on-surface font-bold bg-surface-container-highest px-2 py-0.5 border border-outline-variant/30">BELUM TERCATAT</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] text-outline font-bold uppercase tracking-widest">Apel Pulang</span>
                     <span className="text-xs font-mono text-outline bg-surface-container-highest px-2 py-0.5 border border-outline-variant/30">-</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] text-outline font-bold uppercase tracking-widest">Status Saat Ini</span>
                     <span className="text-[10px] text-error font-bold uppercase bg-error/10 border border-error/30 px-2 py-0.5 animate-pulse">Menunggu Absen</span>
                  </div>
               </div>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/30 p-md shadow-lg flex-1 flex flex-col">
               <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-xs border-b border-outline-variant/30 pb-2">
                  Protokol Keamanan
               </h3>
               <ul className="space-y-2 mt-4 flex-1">
                  <li className="flex items-start gap-2 text-[10px] text-outline">
                     <span className="material-symbols-outlined !text-xs text-primary mt-0.5">check</span>
                     <span>Sistem mencatat waktu absensi berdasarkan jam server satelit terenkripsi.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[10px] text-outline">
                     <span className="material-symbols-outlined !text-xs text-primary mt-0.5">check</span>
                     <span>Manipulasi waktu pada perangkat lokal tidak akan mempengaruhi pencatatan.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[10px] text-outline">
                     <span className="material-symbols-outlined !text-xs text-primary mt-0.5">check</span>
                     <span>Absensi palsu menggunakan foto 2D akan dideteksi oleh algoritma Liveness Detection.</span>
                  </li>
               </ul>
            </div>
         </div>
      </div>
    </>
  );
}
