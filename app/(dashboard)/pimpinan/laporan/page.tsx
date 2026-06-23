"use client";
import React, { useState } from "react";

export default function LaporanPimpinanPage() {
  const [jenisLaporan, setJenisLaporan] = useState("absensi");
  const [periodeBulan, setPeriodeBulan] = useState("2026-06");
  const [filterRegu, setFilterRegu] = useState("Semua Regu");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      // alert("Laporan berhasil di-generate. Silakan periksa PDF yang diunduh.");
    }, 2000);
  };

  return (
    <>
      {/* Breadcrumbs */}
      <div className="flex items-center gap-xs text-[10px] text-outline font-bold uppercase tracking-[0.1em] mb-md">
        <span>Dasbor Utama</span>
        <span className="material-symbols-outlined !text-xs">
          chevron_right
        </span>
        <span className="text-primary">Laporan Resmi</span>
      </div>

      <div className="mb-lg">
        <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface tracking-tighter uppercase flex items-center gap-2">
          <span className="material-symbols-outlined !text-3xl text-primary">analytics</span>
          Laporan Satuan
        </h2>
        <p className="text-xs text-outline font-medium tracking-wide mt-1">
          Generate dan cetak laporan resmi kehadiran maupun kedisiplinan (format PDF siap cetak dengan kop satuan).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        {/* Form Filter */}
        <div className="lg:col-span-1 bg-surface-container-low border border-outline-variant/30 shadow-lg p-md">
          <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-md flex items-center gap-2">
             <span className="material-symbols-outlined !text-sm text-primary">filter_alt</span>
             Parameter Laporan
          </h3>
          
          <div className="space-y-4">
             <div className="flex flex-col gap-1">
                <label className="text-[10px] text-outline font-bold uppercase tracking-wider">Jenis Laporan</label>
                <select 
                  className="bg-surface-container border border-outline-variant/50 text-on-surface text-sm px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer"
                  value={jenisLaporan}
                  onChange={(e) => setJenisLaporan(e.target.value)}
                >
                   <option value="absensi">Laporan Kehadiran (Absensi)</option>
                   <option value="disiplin">Laporan Penilaian Disiplin (SAW)</option>
                   <option value="rekap">Laporan Rekapitulasi Pelanggaran</option>
                </select>
             </div>

             <div className="flex flex-col gap-1">
                <label className="text-[10px] text-outline font-bold uppercase tracking-wider">Periode Bulan</label>
                <input 
                  type="month"
                  className="bg-surface-container border border-outline-variant/50 text-on-surface text-sm px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  value={periodeBulan}
                  onChange={(e) => setPeriodeBulan(e.target.value)}
                />
             </div>

             <div className="flex flex-col gap-1">
                <label className="text-[10px] text-outline font-bold uppercase tracking-wider">Unit / Regu</label>
                <select 
                  className="bg-surface-container border border-outline-variant/50 text-on-surface text-sm px-3 py-2 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer"
                  value={filterRegu}
                  onChange={(e) => setFilterRegu(e.target.value)}
                >
                   <option value="Semua Regu">Seluruh Detasemen</option>
                   <option value="Alpha">Regu Alpha</option>
                   <option value="Bravo">Regu Bravo</option>
                   <option value="Charlie">Regu Charlie</option>
                   <option value="Delta">Regu Delta</option>
                </select>
             </div>

             <div className="flex flex-col gap-1 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                   <input type="checkbox" className="accent-primary w-4 h-4" defaultChecked />
                   <span className="text-xs font-bold text-on-surface">Sertakan Tanda Tangan Komandan</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer mt-1">
                   <input type="checkbox" className="accent-primary w-4 h-4" defaultChecked />
                   <span className="text-xs font-bold text-on-surface">Cetak dengan Kop Resmi</span>
                </label>
             </div>

             <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-primary text-on-primary px-4 py-3 hover:brightness-110 transition-all font-bold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
             >
                {isGenerating ? (
                  <>
                    <span className="material-symbols-outlined !text-lg animate-spin">sync</span>
                    Generating...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined !text-lg">picture_as_pdf</span>
                    Generate Laporan
                  </>
                )}
             </button>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-2 bg-surface-container-low border border-outline-variant/30 shadow-lg flex flex-col">
          <div className="border-b border-outline-variant/30 p-sm bg-surface-container-highest/20 flex items-center justify-between">
             <div className="flex items-center gap-2">
                <span className="material-symbols-outlined !text-sm text-outline">preview</span>
                <span className="text-xs font-bold uppercase text-outline">Preview Dokumen</span>
             </div>
             <div className="flex gap-2">
                <button className="w-8 h-8 flex items-center justify-center bg-surface-container hover:bg-surface-container-highest transition-colors cursor-pointer text-on-surface">
                   <span className="material-symbols-outlined !text-sm">zoom_in</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-surface-container hover:bg-surface-container-highest transition-colors cursor-pointer text-on-surface">
                   <span className="material-symbols-outlined !text-sm">zoom_out</span>
                </button>
             </div>
          </div>
          
          <div className="flex-1 bg-surface-container-highest/10 p-md flex items-center justify-center overflow-auto">
             {isGenerating ? (
                <div className="flex flex-col items-center justify-center gap-4 text-primary">
                   <span className="material-symbols-outlined !text-5xl animate-spin">autorenew</span>
                   <p className="text-sm font-bold uppercase tracking-widest animate-pulse">Menyusun Data Laporan...</p>
                </div>
             ) : (
                <div className="w-full max-w-[500px] h-[700px] bg-white shadow-2xl p-8 flex flex-col relative transform scale-90 lg:scale-100 origin-top">
                   {/* Kop Surat Placeholder */}
                   <div className="border-b-4 border-black pb-4 mb-6 flex items-center justify-between">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                         <span className="text-[8px] text-gray-500">LOGO</span>
                      </div>
                      <div className="text-center flex-1">
                         <h4 className="text-black font-bold uppercase text-sm tracking-wider">Detasemen Perintis</h4>
                         <p className="text-black text-[10px] uppercase">Markas Komando Pasukan Khusus</p>
                         <p className="text-gray-600 text-[8px] mt-1">Jl. Kesatriaan No. 1, Telp: (021) 1234567</p>
                      </div>
                      <div className="w-16 h-16 opacity-0"></div>
                   </div>

                   {/* Title */}
                   <div className="text-center mb-6">
                      <h5 className="text-black font-bold text-xs uppercase underline decoration-black underline-offset-4">
                         {jenisLaporan === "absensi" ? "Laporan Rekapitulasi Kehadiran" : jenisLaporan === "disiplin" ? "Laporan Penilaian Disiplin Personel" : "Laporan Rekapitulasi Pelanggaran"}
                      </h5>
                      <p className="text-black text-[10px] mt-2 uppercase">Periode: {periodeBulan.replace("-", " ")}</p>
                   </div>

                   {/* Content Table Placeholder */}
                   <div className="flex-1">
                      <div className="w-full h-8 bg-gray-200 mb-2 flex">
                         <div className="w-10 border-r border-white"></div>
                         <div className="flex-1 border-r border-white"></div>
                         <div className="w-20 border-r border-white"></div>
                         <div className="w-20"></div>
                      </div>
                      {[...Array(12)].map((_, i) => (
                         <div key={i} className={`w-full h-6 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"} mb-1 flex border-b border-gray-100`}>
                            <div className="w-10 border-r border-gray-100"></div>
                            <div className="flex-1 border-r border-gray-100"></div>
                            <div className="w-20 border-r border-gray-100"></div>
                            <div className="w-20"></div>
                         </div>
                      ))}
                   </div>

                   {/* Signature Placeholder */}
                   <div className="mt-8 self-end text-center w-48">
                      <p className="text-black text-[10px]">Mengetahui,</p>
                      <p className="text-black text-[10px] font-bold uppercase mt-1">Komandan Detasemen</p>
                      <div className="h-16 w-full my-1 border border-dashed border-gray-300 flex items-center justify-center">
                         <span className="text-[8px] text-gray-400 rotate-[-15deg] uppercase tracking-widest font-bold">Tanda Tangan</span>
                      </div>
                      <p className="text-black text-[10px] font-bold underline decoration-black">NAMA KOMANDAN</p>
                      <p className="text-black text-[8px] uppercase">NRP. 12345678</p>
                   </div>
                </div>
             )}
          </div>
        </div>
      </div>
    </>
  );
}
