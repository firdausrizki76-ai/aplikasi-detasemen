"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [role, setRole] = useState<"admin" | "pimpinan" | "anggota">("anggota");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (role === "admin") {
        router.push("/admin");
      } else if (role === "pimpinan") {
        router.push("/pimpinan/ranking-disiplin");
      } else {
        router.push("/anggota/absensi");
      }
    }, 1000);
  };

  return (
    <main className="w-full h-screen flex flex-col md:flex-row">
      {/* Hero Side (Left on Desktop) */}
      <section className="hidden md:flex md:w-1/2 lg:w-3/5 bg-surface-container-lowest relative overflow-hidden items-end p-xl pl-12 lg:pl-24 border-r border-outline-variant/20 pb-24">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co.com/Pv4cR4cZ/Chat-GPT-Image-Jun-23-2026-08-21-14-AM.png"
            alt="Demonstrasi teknologi Face Recognition"
            className="w-full h-full object-cover object-center grayscale brightness-75 contrast-125"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none"></div>
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(139,214,145,0.1)_1px,transparent_1px),linear-gradient(rgba(139,214,145,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full max-w-2xl text-on-primary">
          <h1 className="font-headline-xl text-headline-xl mb-md tracking-tighter uppercase text-white drop-shadow-md">
            Terminal Akses Unit
          </h1>
          <p className="font-body-lg text-body-lg text-white/80 max-w-lg border-l-2 border-primary pl-md drop-shadow">
            Akses biometrik diperlukan untuk penempatan detasemen. Personel
            harus memverifikasi menggunakan pemindaian optik atau wajah untuk mengakses catatan taktis.
          </p>

          {/* Status Indicator Component */}
          <div className="mt-lg flex gap-md">
            <div className="flex items-center gap-sm px-md py-sm bg-black/40 backdrop-blur-md border border-outline-variant/30 rounded-sm">
              <span
                className="material-symbols-outlined text-primary text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                security
              </span>
              <span className="font-label-md text-label-md text-white uppercase tracking-wider">
                KEAMANAN TINGKAT MILITER
              </span>
            </div>
            <div className="flex items-center gap-sm px-md py-sm bg-black/40 backdrop-blur-md border border-outline-variant/30 rounded-sm">
              <span
                className="material-symbols-outlined text-primary text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                target
              </span>
              <span className="font-label-md text-label-md text-white uppercase tracking-wider">
                AKURASI TARGET 99.9%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Login Form Side (Right on Desktop) */}
      <section className="w-full md:w-1/2 lg:w-2/5 h-full bg-surface flex flex-col justify-center px-margin-mobile md:px-xl py-xl overflow-y-auto">
        <div className="max-w-md w-full mx-auto">
          <header className="flex flex-row items-center gap-md mb-xl">
            <div className="w-32 h-32 md:w-48 md:h-48 relative shrink-0">
              <Image src="/logo.png" alt="Logo" fill className="object-contain drop-shadow-[0_0_15px_rgba(139,214,145,0.3)]" priority />
            </div>
            <div className="flex flex-col text-left">
              <h2 className="font-headline-lg text-2xl md:text-3xl font-extrabold text-on-surface mb-xs uppercase tracking-[0.15em] md:tracking-[0.2em] leading-tight">
                APLIKASI ABSENSI
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                Digital anggota Pasukan Detasemen Perintis menggunakan teknologi Face Recognition.
              </p>
            </div>
          </header>

          <form className="space-y-lg" id="login-form" onSubmit={handleSubmit}>
            {/* Role Selection */}
            <div className="space-y-md">
              <label className="font-label-md text-label-md text-primary uppercase tracking-[0.2em]">
                Peran Penugasan
              </label>
              <div className="grid grid-cols-3 gap-sm">
                <button
                  type="button"
                  onClick={() => setRole("admin")}
                  className={`role-card flex flex-col items-center justify-center p-md border border-outline-variant transition-all hover:bg-surface-container group ${
                    role === "admin" ? "active" : ""
                  }`}
                >
                  <span className="material-symbols-outlined text-outline group-[.active]:text-primary mb-xs">
                    military_tech
                  </span>
                  <span className="font-label-sm text-label-sm uppercase">
                    Admin
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole("pimpinan")}
                  className={`role-card flex flex-col items-center justify-center p-md border border-outline-variant transition-all hover:bg-surface-container group ${
                    role === "pimpinan" ? "active" : ""
                  }`}
                >
                  <span className="material-symbols-outlined text-outline group-[.active]:text-primary mb-xs">
                    stars
                  </span>
                  <span className="font-label-sm text-label-sm uppercase">
                    Pimpinan
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole("anggota")}
                  className={`role-card flex flex-col items-center justify-center p-md border border-outline-variant transition-all hover:bg-surface-container group ${
                    role === "anggota" ? "active" : ""
                  }`}
                >
                  <span className="material-symbols-outlined text-outline group-[.active]:text-primary mb-xs">
                    person_pin
                  </span>
                  <span className="font-label-sm text-label-sm uppercase">
                    Anggota
                  </span>
                </button>
              </div>
            </div>

            {/* Input Fields */}
            <div className="space-y-md">
              <div className="space-y-xs">
                <label
                  htmlFor="id_field"
                  className="font-label-md text-label-md text-on-surface-variant uppercase"
                >
                  ID Layanan / Nomor Registrasi
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                    fingerprint
                  </span>
                  <input
                    type="text"
                    id="id_field"
                    placeholder="ID-ALPHA-4492"
                    className="w-full pl-[48px] pr-md py-md bg-surface-container-lowest border border-outline-variant rounded-none focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-mono"
                  />
                </div>
              </div>

              <div className="space-y-xs">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="font-label-md text-label-md text-on-surface-variant uppercase"
                  >
                    Kata Sandi
                  </label>
                  <Link
                    href="#"
                    className="text-label-sm font-label-sm text-primary hover:text-primary-fixed uppercase tracking-wider"
                  >
                    Lupa Sandi
                  </Link>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                    key
                  </span>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="w-full pl-[48px] pr-[48px] py-md bg-surface-container-lowest border border-outline-variant rounded-none focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-mono"
                  />
                  <button
                    type="button"
                    className="absolute right-md top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                  >
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Remember Me */}
            <label className="flex items-center gap-md cursor-pointer group">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-none border-outline-variant bg-surface-container text-primary focus:ring-0 focus:ring-offset-0 transition-all"
              />
              <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors uppercase tracking-tight">
                Ingat sesi selama 24 jam
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-md text-on-secondary font-label-md text-label-md uppercase tracking-widest transition-all flex items-center justify-center gap-sm
                ${
                  role === "admin"
                    ? "bg-tertiary hover:bg-tertiary-fixed-dim"
                    : "bg-primary hover:bg-primary-fixed-dim shadow-[0_0_20px_rgba(139,214,145,0.2)] hover:shadow-[0_0_25px_rgba(139,214,145,0.4)]"
                }
              `}
            >
              {loading ? (
                <span>Memverifikasi...</span>
              ) : (
                <>
                  <span>Mulai Akses</span>
                  <span className="material-symbols-outlined text-xl">login</span>
                </>
              )}
            </button>
          </form>

          <footer className="mt-xl pt-xl border-t border-outline-variant/30 text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Terjadi Kesalahan?{" "}
              <Link
                href="#"
                className="text-primary font-bold hover:underline uppercase tracking-tight"
              >
                Hubungi Pusat Komando
              </Link>
            </p>
            <div className="mt-lg flex justify-center gap-xl text-outline font-mono">
              <span className="text-[10px]">VER: OP-2.4.0.TAC</span>
              <span className="text-[10px]">© 2024 DEPLOYMENT-SEC</span>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
