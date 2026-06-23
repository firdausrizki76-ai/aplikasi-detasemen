"use client";

import React, { useState } from "react";

export default function PersonelPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="flex items-center gap-xs text-[10px] text-outline font-bold uppercase tracking-[0.1em]">
        <span>Console</span>
        <span className="material-symbols-outlined !text-xs">
          chevron_right
        </span>
        <span className="text-primary">Personnel Roster</span>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-md">
        <div>
          <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface tracking-tighter uppercase">
            Personnel Roster
          </h2>
          <p className="text-xs text-outline font-medium tracking-wide">
            Registry of all authorized personnel and biometric access status.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-sm bg-primary-container text-primary px-lg py-sm border border-primary/30 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-sm">person_add</span>
          Enroll Personnel
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-lg">
        {/* Main Table Section */}
        <div className="xl:col-span-3 space-y-lg">
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-sm shadow-2xl">
            {/* Table Filter Bar */}
            <div className="px-md py-sm flex flex-wrap items-center justify-between gap-md border-b border-outline-variant/20 bg-surface-container">
              <div className="flex items-center gap-sm bg-background/50 px-md py-1 border border-outline-variant/50 w-full sm:w-80">
                <span className="material-symbols-outlined text-outline text-sm">
                  filter_list
                </span>
                <input
                  type="text"
                  className="bg-transparent border-none focus:ring-0 outline-none text-xs w-full text-on-surface font-mono"
                  placeholder="FILTER_REGISTRY..."
                />
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-xs px-md py-1 bg-surface-container-high border border-outline-variant/50 text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined !text-sm">
                    download
                  </span>{" "}
                  Export
                </button>
                <button className="flex items-center gap-xs px-md py-1 bg-surface-container-high border border-outline-variant/50 text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined !text-sm">
                    sort
                  </span>{" "}
                  Sort
                </button>
              </div>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-surface-container-highest/30 border-b border-outline-variant/30">
                    <th className="px-lg py-3 text-[10px] font-bold text-outline uppercase tracking-widest">
                      Personnel ID
                    </th>
                    <th className="px-lg py-3 text-[10px] font-bold text-outline uppercase tracking-widest">
                      Clearance
                    </th>
                    <th className="px-lg py-3 text-[10px] font-bold text-outline uppercase tracking-widest">
                      Status
                    </th>
                    <th className="px-lg py-3 text-[10px] font-bold text-outline uppercase tracking-widest">
                      Biometrics
                    </th>
                    <th className="px-lg py-3 text-[10px] font-bold text-outline uppercase tracking-widest text-right">
                      Ops
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10 font-mono">
                  {/* Row 1 */}
                  <tr className="hover:bg-primary/5 transition-colors cursor-pointer">
                    <td className="px-lg py-3">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 border border-outline-variant/50 bg-surface grayscale contrast-125">
                          <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
                            alt="Member Avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-on-surface uppercase">
                            Ahmad Hidayat
                          </div>
                          <div className="text-[10px] text-outline">
                            REF: 482910
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-3">
                      <span className="px-2 py-0.5 border border-primary/20 bg-primary/10 text-[10px] font-bold text-primary uppercase">
                        Standard
                      </span>
                    </td>
                    <td className="px-lg py-3">
                      <span className="flex items-center gap-xs text-primary font-bold text-[10px] uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>{" "}
                        On Duty
                      </span>
                    </td>
                    <td className="px-lg py-3">
                      <span className="text-[10px] font-bold text-primary uppercase flex items-center gap-1">
                        <span className="material-symbols-outlined !text-xs">
                          verified
                        </span>{" "}
                        VERIFIED
                      </span>
                    </td>
                    <td className="px-lg py-3 text-right">
                      <button className="p-1 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined !text-sm">
                          terminal
                        </span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-primary/5 transition-colors cursor-pointer">
                    <td className="px-lg py-3">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 border border-outline-variant/50 bg-surface grayscale contrast-125">
                          <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                            alt="Member Avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-on-surface uppercase">
                            Siti Aminah
                          </div>
                          <div className="text-[10px] text-outline">
                            REF: 482911
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-3">
                      <span className="px-2 py-0.5 border border-tertiary/20 bg-tertiary/10 text-[10px] font-bold text-tertiary uppercase">
                        Command
                      </span>
                    </td>
                    <td className="px-lg py-3">
                      <span className="flex items-center gap-xs text-tertiary font-bold text-[10px] uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>{" "}
                        Delayed
                      </span>
                    </td>
                    <td className="px-lg py-3">
                      <span className="text-[10px] font-bold text-primary uppercase flex items-center gap-1">
                        <span className="material-symbols-outlined !text-xs">
                          verified
                        </span>{" "}
                        VERIFIED
                      </span>
                    </td>
                    <td className="px-lg py-3 text-right">
                      <button className="p-1 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined !text-sm">
                          terminal
                        </span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-primary/5 transition-colors cursor-pointer bg-error/5">
                    <td className="px-lg py-3">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-10 border border-error/50 bg-surface grayscale contrast-125">
                          <img
                            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
                            alt="Member Avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-on-surface uppercase">
                            Budi Santoso
                          </div>
                          <div className="text-[10px] text-error font-bold uppercase">
                            FLAGGED: 482915
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-3">
                      <span className="px-2 py-0.5 border border-outline-variant/30 text-[10px] font-bold text-outline uppercase">
                        Standard
                      </span>
                    </td>
                    <td className="px-lg py-3">
                      <span className="flex items-center gap-xs text-error font-bold text-[10px] uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-error"></span>{" "}
                        Unauthorized
                      </span>
                    </td>
                    <td className="px-lg py-3">
                      <span className="text-[10px] font-bold text-error uppercase flex items-center gap-1">
                        <span className="material-symbols-outlined !text-xs">
                          error
                        </span>{" "}
                        INCOMPLETE
                      </span>
                    </td>
                    <td className="px-lg py-3 text-right">
                      <button className="p-1 text-primary hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined !text-sm">
                          add_a_photo
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-md bg-surface-container/50 flex items-center justify-between border-t border-outline-variant/20">
              <span className="text-[10px] text-outline font-bold uppercase tracking-widest">
                Entry: 1-10 / Total: 248
              </span>
              <div className="flex items-center gap-1">
                <button
                  className="p-1 hover:bg-surface-container-highest text-outline disabled:opacity-10"
                  disabled
                >
                  <span className="material-symbols-outlined !text-sm">
                    chevron_left
                  </span>
                </button>
                <button className="px-2 py-0.5 bg-primary text-on-secondary font-bold text-[10px]">
                  1
                </button>
                <button className="px-2 py-0.5 hover:bg-surface-container-highest text-on-surface text-[10px]">
                  2
                </button>
                <button className="px-2 py-0.5 hover:bg-surface-container-highest text-on-surface text-[10px]">
                  3
                </button>
                <button className="p-1 hover:bg-surface-container-highest text-outline">
                  <span className="material-symbols-outlined !text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Biometric Enrollment Panel */}
        <div className="xl:col-span-1">
          <div className="bg-surface-container-low border border-outline-variant/30 p-lg sticky top-lg shadow-2xl">
            <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-[3px] border-primary px-md py-2 mb-lg">
              <h3 className="font-headline-md text-lg font-bold text-on-surface uppercase tracking-tight">
                Biometric Enrollment
              </h3>
              <span className="text-[10px] text-primary/70 font-mono tracking-widest">
                STATUS: SYSTEM_READY
              </span>
            </div>

            <div className="space-y-lg">
              {/* Camera Viewfinder */}
              <div className="relative aspect-square w-full bg-background border border-outline-variant/30 overflow-hidden group">
                <div className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-screen">
                  <div className="absolute inset-0 border border-primary/20"></div>
                  <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-primary/20"></div>
                  <div className="absolute top-0 left-1/2 w-[0.5px] h-full bg-primary/20"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-primary/40 rounded-full"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline-variant/20 text-6xl">
                    person
                  </span>
                </div>

                {/* Viewfinder Corners */}
                <div className="absolute w-6 h-6 border-2 border-primary top-4 left-4 border-r-0 border-b-0"></div>
                <div className="absolute w-6 h-6 border-2 border-primary top-4 right-4 border-l-0 border-b-0"></div>
                <div className="absolute w-6 h-6 border-2 border-primary bottom-4 left-4 border-r-0 border-t-0"></div>
                <div className="absolute w-6 h-6 border-2 border-primary bottom-4 right-4 border-l-0 border-t-0"></div>

                {/* Scanning Animation */}
                <div className="scan-line"></div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-sm bg-background/80 backdrop-blur-sm px-md py-1 border border-primary/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
                  <span className="text-primary text-[10px] font-bold tracking-[0.2em]">
                    SENSORS_ACTIVE
                  </span>
                </div>
              </div>

              <div className="space-y-md">
                <div className="p-md bg-surface-container border-l-2 border-primary">
                  <p className="text-[10px] text-outline font-bold uppercase tracking-wider mb-xs">
                    Selected Target
                  </p>
                  <p className="text-sm font-bold text-on-surface uppercase font-mono">
                    Budi Santoso
                  </p>
                  <p className="text-[10px] text-primary font-mono mt-1 animate-pulse">
                    &gt; AWAITING_CAPTURE
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button className="flex flex-col items-center justify-center gap-xs p-3 bg-surface-container border border-outline-variant/30 hover:bg-surface-container-highest transition-colors group">
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                      upload_file
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Load Data
                    </span>
                  </button>
                  <button className="flex flex-col items-center justify-center gap-xs p-3 bg-primary text-on-secondary shadow-lg hover:brightness-110 active:scale-95 transition-all">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      photo_camera
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Capture Scan
                    </span>
                  </button>
                </div>
              </div>

              <div className="bg-background p-md border border-outline-variant/20">
                <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 border-b border-primary/20 pb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined !text-sm">
                    gavel
                  </span>{" "}
                  Protocols
                </h4>
                <ul className="text-[10px] text-outline/80 space-y-2 list-none font-mono">
                  <li className="flex gap-2">
                    <span>[01]</span> CENTER SUBJECT IN FRAME
                  </li>
                  <li className="flex gap-2">
                    <span>[02]</span> ENSURE UNIFORM ILLUMINATION
                  </li>
                  <li className="flex gap-2">
                    <span>[03]</span> REMOVE NON-TACTICAL FACEWEAR
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-md z-[100] flex items-center justify-center transition-opacity duration-300">
          <div className="bg-surface w-full max-w-lg border border-primary/30 shadow-[0_0_50px_rgba(60,221,199,0.1)] mx-margin-mobile">
            <div className="p-lg border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low">
              <div className="flex flex-col">
                <h3 className="font-headline-md text-lg font-bold text-on-surface uppercase tracking-tight">
                  Personnel Enrollment
                </h3>
                <span className="text-[10px] text-primary/50 tracking-widest">
                  SUB-PROCESS: ID_GENERATION
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-lg space-y-lg font-mono">
              <div className="space-y-md">
                <div>
                  <label className="block text-[10px] font-bold text-outline uppercase tracking-widest mb-2">
                    FULL_NAME_IDENTITY
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background/50 px-md py-sm border border-outline-variant focus:border-primary outline-none text-on-surface text-sm uppercase"
                    placeholder="INPUT IDENTITY..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-md">
                  <div>
                    <label className="block text-[10px] font-bold text-outline uppercase tracking-widest mb-2">
                      ACCESS_LEVEL
                    </label>
                    <select className="w-full bg-background/50 px-md py-sm border border-outline-variant focus:border-primary outline-none text-on-surface text-sm uppercase">
                      <option>Standard (Member)</option>
                      <option>Command (Leadership)</option>
                      <option>Sys-Admin (Admin)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-outline uppercase tracking-widest mb-2">
                      REGISTRY_ID
                    </label>
                    <input
                      type="text"
                      className="w-full bg-background/50 px-md py-sm border border-outline-variant focus:border-primary outline-none text-on-surface text-sm"
                      placeholder="482XXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-outline uppercase tracking-widest mb-2">
                    COMMS_ADDRESS
                  </label>
                  <input
                    type="email"
                    className="w-full bg-background/50 px-md py-sm border border-outline-variant focus:border-primary outline-none text-on-surface text-sm"
                    placeholder="hq_comms@sector.mil"
                  />
                </div>
              </div>
              <div className="flex gap-md pt-md">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-sm border border-outline-variant text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container transition-colors"
                >
                  Abort
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-sm bg-primary text-on-secondary text-[10px] font-bold uppercase tracking-widest hover:brightness-110 shadow-lg active:scale-95 transition-all"
                >
                  Init Biometric Scan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
