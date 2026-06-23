"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isAdmin = pathname.startsWith("/admin");
  const isPimpinan = pathname.startsWith("/pimpinan");
  const isAnggota = pathname.startsWith("/anggota");

  let navItems = [];
  
  if (isAdmin) {
    navItems = [
      { href: "/admin", icon: "dashboard", label: "Dasbor" },
      { href: "/admin/personel", icon: "group", label: "Kelola Anggota" },
      { href: "/admin/jadwal", icon: "event_note", label: "Jadwal Kegiatan" },
      { href: "/admin/kriteria", icon: "tune", label: "Kriteria & Bobot" },
      { href: "/admin/absensi", icon: "how_to_reg", label: "Data Absensi" },
      { href: "/admin/pelanggaran", icon: "gavel", label: "Data Pelanggaran" },
      { href: "/admin/penilaian", icon: "military_tech", label: "Penilaian Kedisiplinan" },
      { href: "/admin/laporan", icon: "print", label: "Cetak Laporan" },
    ];
  } else if (isPimpinan) {
    navItems = [
      { href: "/pimpinan", icon: "dashboard", label: "Dasbor" },
      { href: "/pimpinan/ranking-disiplin", icon: "military_tech", label: "Peringkat Disiplin" },
      { href: "/pimpinan/laporan", icon: "analytics", label: "Laporan" },
    ];
  } else {
    // Default / Anggota
    navItems = [
      { href: "/anggota", icon: "dashboard", label: "Dasbor" },
      { href: "/anggota/absensi", icon: "face", label: "Portal Absensi" },
      { href: "/anggota/riwayat", icon: "history", label: "Riwayat Kehadiran" },
      { href: "/anggota/nilai-disiplin", icon: "military_tech", label: "Nilai Disiplin" },
      { href: "/anggota/izin", icon: "assignment_late", label: "Pengajuan Izin" },
    ];
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      {/* SideNavBar */}
      <aside className={`${isMobileMenuOpen ? "flex fixed left-0 top-0 h-full bg-surface-container-low z-50 shadow-2xl transition-transform transform translate-x-0" : "hidden md:flex"} flex-col h-full py-lg px-md space-y-sm bg-surface-container-low w-64 border-r border-outline-variant/30 md:z-50 overflow-y-auto`}>
        <div className="mb-xl px-sm flex flex-col items-center justify-center text-center gap-3 shrink-0 pt-4">
          <Image src="/logo.png" alt="Logo" width={160} height={160} className="object-contain shrink-0 drop-shadow-lg" />
          <div>
            <h1 className="font-headline-md text-xl text-primary font-extrabold tracking-widest uppercase leading-tight">
              DETASEMEN PERINTIS
            </h1>
            <p className="text-[10px] text-outline uppercase tracking-[0.2em] font-bold mt-1">
              Versi 1.0
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto pr-2 custom-scrollbar">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-md px-md py-sm rounded-sm transition-colors ${
                  isActive
                    ? "text-primary bg-primary-container/20 border-l-2 border-primary font-bold"
                    : "text-on-surface-variant hover:bg-surface-container-highest"
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                <span className={`text-sm uppercase tracking-wider ${isActive ? "" : "font-semibold"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="pt-lg border-t border-outline-variant/30 space-y-xs">
          {isAnggota && (
            <Link href="/anggota/absensi">
              <button className="w-full flex items-center justify-center gap-sm bg-primary text-on-secondary py-sm rounded-sm font-bold hover:brightness-110 transition-all uppercase text-xs tracking-widest">
                <span className="material-symbols-outlined text-sm">alarm</span>
                Absen Masuk
              </button>
            </Link>
          )}
          <Link
            href="#"
            className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded-sm mt-2"
          >
            <span className="material-symbols-outlined">help</span>
            <span className="text-xs uppercase tracking-wider">Bantuan</span>
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-md px-md py-sm text-error hover:bg-error-container/20 hover:text-error transition-colors rounded-sm mt-2"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="text-xs uppercase tracking-wider font-bold">Keluar</span>
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* TopNavBar */}
        <header className="sticky top-0 z-50 flex justify-between items-center w-full px-md h-20 bg-surface border-b border-outline-variant/30">
          <div className="flex items-center gap-md">
            <button 
              className="md:hidden p-sm hover:bg-surface-container transition-colors rounded-sm cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="flex items-center gap-sm">
              <Image src="/logo.png" alt="Logo" width={64} height={64} className="object-contain shrink-0 drop-shadow-md" />
              <div className="font-headline-md font-bold text-on-surface tracking-tight hidden sm:block">
                PASUKAN DETASEMEN PERINTIS{" "}
                <span className="text-outline font-normal text-xs ml-2">
                  PRO
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-lg">
            <div className="hidden sm:flex items-center bg-surface-container-low px-md py-1 border border-outline-variant/50 rounded-sm focus-within:border-primary/50 transition-all">
              <span className="material-symbols-outlined text-outline text-sm">
                search
              </span>
              <input
                type="text"
                className="bg-transparent border-none focus:ring-0 outline-none text-xs w-48 lg:w-64 text-on-surface placeholder:text-outline/50 ml-2"
                placeholder="CARI DATA..."
              />
            </div>
            <div className="flex items-center gap-sm">
              <button className="p-sm text-outline hover:text-primary transition-colors cursor-pointer relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary rounded-full"></span>
              </button>
              <div className="w-8 h-8 bg-surface-container-highest border border-outline-variant/50 flex items-center justify-center overflow-hidden cursor-pointer grayscale hover:grayscale-0 transition-all">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  alt="Foto profil pengguna"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-lg space-y-lg">
          {children}
        </main>
      </div>
    </div>
  );
}
