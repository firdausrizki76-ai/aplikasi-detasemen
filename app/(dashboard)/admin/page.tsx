"use client";
import React from "react";

export default function AdminDashboardPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="flex items-center gap-xs text-[10px] text-outline font-bold uppercase tracking-[0.1em] mb-md">
        <span>Console</span>
        <span className="material-symbols-outlined !text-xs">
          chevron_right
        </span>
        <span className="text-primary">Overview</span>
      </div>

      <div className="mb-lg">
        <h2 className="font-headline-lg text-3xl font-extrabold text-on-surface tracking-tighter uppercase">
          Command Center
        </h2>
        <p className="text-xs text-outline font-medium tracking-wide">
          Real-time tactical overview and deployment status.
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-md mb-lg">
        <div className="bg-surface-container-low border-l-4 border-primary p-md shadow-lg flex flex-col justify-between">
          <span className="text-[10px] text-outline uppercase font-bold tracking-widest">Active Personnel</span>
          <div className="text-3xl font-bold text-on-surface mt-sm">248</div>
          <span className="text-[10px] text-primary mt-1">+12 from last cycle</span>
        </div>
        <div className="bg-surface-container-low border-l-4 border-primary p-md shadow-lg flex flex-col justify-between">
          <span className="text-[10px] text-outline uppercase font-bold tracking-widest">Deployed Today</span>
          <div className="text-3xl font-bold text-on-surface mt-sm">215</div>
          <span className="text-[10px] text-primary mt-1">86.7% Readiness</span>
        </div>
        <div className="bg-surface-container-low border-l-4 border-tertiary p-md shadow-lg flex flex-col justify-between">
          <span className="text-[10px] text-outline uppercase font-bold tracking-widest">On Leave / Sick</span>
          <div className="text-3xl font-bold text-on-surface mt-sm">12</div>
          <span className="text-[10px] text-tertiary mt-1">Authorized absence</span>
        </div>
        <div className="bg-surface-container-low border-l-4 border-error p-md shadow-lg flex flex-col justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-16 h-16 bg-error/10 flex items-center justify-center rounded-bl-full">
            <span className="material-symbols-outlined text-error">warning</span>
          </div>
          <span className="text-[10px] text-outline uppercase font-bold tracking-widest">AWOL / Flagged</span>
          <div className="text-3xl font-bold text-error mt-sm">21</div>
          <span className="text-[10px] text-error mt-1 animate-pulse">ACTION REQUIRED</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        {/* Main Chart Placeholder */}
        <div className="lg:col-span-2 bg-surface-container-low border border-outline-variant/30 p-md shadow-lg min-h-[300px] relative">
          <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-md flex items-center gap-2">
            <span className="material-symbols-outlined !text-sm text-primary">monitoring</span>
            Deployment Trends (7 Days)
          </h3>
          <div className="absolute inset-0 top-12 bottom-4 left-4 right-4 border-l border-b border-outline-variant/50 flex items-end justify-between px-4 pb-4 pt-12">
            {/* Fake bars */}
            {[60, 80, 50, 90, 70, 85, 95].map((h, i) => (
              <div key={i} className="w-8 sm:w-12 bg-primary/20 hover:bg-primary/40 transition-colors border-t border-primary relative group cursor-crosshair" style={{ height: `${h}%` }}>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-surface text-[10px] px-1 border border-primary text-primary opacity-0 group-hover:opacity-100 z-10">{h}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-surface-container-low border border-outline-variant/30 p-md shadow-lg min-h-[300px]">
          <h3 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-tight mb-md flex items-center gap-2">
            <span className="material-symbols-outlined !text-sm text-primary">history</span>
            Live Activity Feed
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-1.5"></span>
              <div>
                <p className="text-xs text-on-surface font-bold uppercase">Siti Aminah</p>
                <p className="text-[10px] text-outline">Clocked In - Sector A</p>
                <p className="text-[9px] text-primary mt-0.5 font-mono">JUST NOW</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-error mt-1.5 animate-pulse"></span>
              <div>
                <p className="text-xs text-error font-bold uppercase">Budi Santoso</p>
                <p className="text-[10px] text-outline">Unauthorized Access Attempt</p>
                <p className="text-[9px] text-primary mt-0.5 font-mono">12 MINS AGO</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-1.5"></span>
              <div>
                <p className="text-xs text-on-surface font-bold uppercase">Ahmad Hidayat</p>
                <p className="text-[10px] text-outline">Clocked In - Sector C</p>
                <p className="text-[9px] text-primary mt-0.5 font-mono">45 MINS AGO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
