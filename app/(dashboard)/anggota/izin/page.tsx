"use client";
import React, { useState } from "react";

export default function PengajuanIzinPage() {
  const [formData, setFormData] = useState({
    jenis: "Sakit",
    tanggalMulai: "",
    tanggalSelesai: "",
    keterangan: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pengajuan Izin berhasil dikirim ke Pimpinan.");
  };

  return (
    <>
      <div className="flex items-center gap-xs text-[10px] text-outline font-bold uppercase tracking-[0.1em] mb-md">
        <span>Portal Personal</span>
        <span className="material-symbols-outlined !text-xs">
          chevron_right
        </span>
        <span className="text-primary">Pengajuan Izin</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg">
        <div>
          <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface tracking-tighter uppercase flex items-center gap-2">
            <span className="material-symbols-outlined !text-3xl text-primary">assignment_late</span>
            Pengajuan Izin / Cuti
          </h2>
          <p className="text-xs text-outline font-medium tracking-wide mt-1 max-w-xl">
            Sistem pengajuan izin khusus (Sakit, Cuti, Dinas Luar). Semua pengajuan wajib mendapatkan persetujuan komando.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
         {/* Form Pengajuan */}
         <div className="bg-surface-container-low border border-outline-variant/30 shadow-lg p-md">
            <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-md flex items-center gap-2 border-b border-outline-variant/30 pb-2">
               <span className="material-symbols-outlined !text-sm text-primary">add_circle</span>
               Buat Pengajuan Baru
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
               <div className="space-y-1">
                  <label className="text-[10px] text-outline font-bold uppercase tracking-wider">Jenis Pengajuan</label>
                  <select 
                     className="w-full bg-surface-container-lowest border border-outline-variant/50 text-on-surface p-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                     value={formData.jenis}
                     onChange={(e) => setFormData({...formData, jenis: e.target.value})}
                  >
                     <option value="Sakit">Sakit</option>
                     <option value="Cuti">Cuti Tahunan</option>
                     <option value="Dinas Luar">Dinas Luar</option>
                  </select>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                     <label className="text-[10px] text-outline font-bold uppercase tracking-wider">Tanggal Mulai</label>
                     <input 
                        type="date" 
                        className="w-full bg-surface-container-lowest border border-outline-variant/50 text-on-surface p-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono text-sm"
                        value={formData.tanggalMulai}
                        onChange={(e) => setFormData({...formData, tanggalMulai: e.target.value})}
                        required
                     />
                  </div>
                  <div className="space-y-1">
                     <label className="text-[10px] text-outline font-bold uppercase tracking-wider">Tanggal Selesai</label>
                     <input 
                        type="date" 
                        className="w-full bg-surface-container-lowest border border-outline-variant/50 text-on-surface p-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono text-sm"
                        value={formData.tanggalSelesai}
                        onChange={(e) => setFormData({...formData, tanggalSelesai: e.target.value})}
                        required
                     />
                  </div>
               </div>

               <div className="space-y-1">
                  <label className="text-[10px] text-outline font-bold uppercase tracking-wider">Keterangan / Alasan</label>
                  <textarea 
                     className="w-full h-24 bg-surface-container-lowest border border-outline-variant/50 text-on-surface p-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm resize-none"
                     placeholder="Tuliskan keterangan detail pengajuan..."
                     value={formData.keterangan}
                     onChange={(e) => setFormData({...formData, keterangan: e.target.value})}
                     required
                  ></textarea>
               </div>

               <div className="space-y-1">
                  <label className="text-[10px] text-outline font-bold uppercase tracking-wider">Dokumen Pendukung (Opsional)</label>
                  <div className="w-full border-2 border-dashed border-outline-variant/50 p-4 text-center hover:border-primary/50 transition-colors cursor-pointer bg-surface-container-lowest">
                     <span className="material-symbols-outlined text-outline mb-1">upload_file</span>
                     <p className="text-xs text-outline font-bold">Klik untuk mengunggah file</p>
                     <p className="text-[10px] text-outline/70 mt-1">PDF, JPG, PNG (Max 5MB)</p>
                  </div>
               </div>

               <button 
                  type="submit"
                  className="w-full bg-primary text-on-primary py-3 uppercase font-bold tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-4"
               >
                  <span className="material-symbols-outlined">send</span>
                  Kirim Pengajuan
               </button>
            </form>
         </div>

         {/* Riwayat Pengajuan */}
         <div className="bg-surface-container-low border border-outline-variant/30 shadow-lg p-md">
            <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-md flex items-center gap-2 border-b border-outline-variant/30 pb-2">
               <span className="material-symbols-outlined !text-sm text-secondary">history</span>
               Riwayat Pengajuan
            </h3>
            
            <div className="space-y-4 mt-6">
               {/* Tiket 1 */}
               <div className="border border-outline-variant/30 p-3 bg-surface-container relative overflow-hidden group hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="absolute left-0 top-0 w-1 h-full bg-yellow-500"></div>
                  <div className="flex justify-between items-start mb-2 pl-2">
                     <div>
                        <span className="text-xs font-bold text-on-surface uppercase">Izin Berobat</span>
                        <p className="text-[10px] text-outline mt-0.5">24 Jun 2026 - 25 Jun 2026</p>
                     </div>
                     <span className="text-[9px] bg-yellow-500/20 text-yellow-600 px-2 py-1 border border-yellow-500/30 font-bold uppercase tracking-widest">Menunggu</span>
                  </div>
                  <p className="text-[10px] text-outline-variant pl-2">Berobat ke RS Pusat untuk penanganan rujukan.</p>
               </div>

               {/* Tiket 2 */}
               <div className="border border-outline-variant/30 p-3 bg-surface-container relative overflow-hidden group hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="absolute left-0 top-0 w-1 h-full bg-primary"></div>
                  <div className="flex justify-between items-start mb-2 pl-2">
                     <div>
                        <span className="text-xs font-bold text-on-surface uppercase">Cuti Tahunan</span>
                        <p className="text-[10px] text-outline mt-0.5">12 Mei 2026 - 15 Mei 2026</p>
                     </div>
                     <span className="text-[9px] bg-primary/20 text-primary px-2 py-1 border border-primary/30 font-bold uppercase tracking-widest">Disetujui</span>
                  </div>
                  <p className="text-[10px] text-outline-variant pl-2">Keperluan keluarga di luar kota.</p>
               </div>

               {/* Tiket 3 */}
               <div className="border border-outline-variant/30 p-3 bg-surface-container relative overflow-hidden group hover:border-primary/50 transition-colors cursor-pointer opacity-70">
                  <div className="absolute left-0 top-0 w-1 h-full bg-error"></div>
                  <div className="flex justify-between items-start mb-2 pl-2">
                     <div>
                        <span className="text-xs font-bold text-on-surface uppercase">Izin Keluar Markas</span>
                        <p className="text-[10px] text-outline mt-0.5">10 Apr 2026</p>
                     </div>
                     <span className="text-[9px] bg-error/20 text-error px-2 py-1 border border-error/30 font-bold uppercase tracking-widest">Ditolak</span>
                  </div>
                  <p className="text-[10px] text-outline-variant pl-2">Pengajuan mendadak tanpa urgensi kuat.</p>
               </div>
            </div>
         </div>
      </div>
    </>
  );
}
