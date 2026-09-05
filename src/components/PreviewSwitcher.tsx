"use client";

import React, { useState } from "react";
import { Layers, ChevronDown, ChevronUp } from "lucide-react";
import { SITES } from "@/config/sites";

interface PreviewSwitcherProps {
  currentKey: string;
}

export function PreviewSwitcher({ currentKey }: PreviewSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const siteKeys = [
    { key: "stevchrist", label: "Steven Girsang (Portfolio)" },
    { key: "peninemate", label: "PenineMate (AI Movie)" },
    { key: "tbh-price", label: "TBH Price (Steam Tracker)" },
    { key: "social-sentiment", label: "SocialSentiment (NLP)" },
    { key: "pen-server", label: "Pen Platform (Homelab)" },
  ];

  return (
    <aside aria-label="Theme Preview Switcher" className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-2 text-xs text-white max-w-xs">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 transition-colors cursor-pointer w-full justify-between"
        >
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-semibold">Live Theme Preview:</span>
            <span className="text-cyan-300 capitalize">{currentKey}</span>
          </div>
          {isOpen ? (
            <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          ) : (
            <ChevronUp className="w-3.5 h-3.5 opacity-70" />
          )}
        </button>

        {isOpen && (
          <div className="mt-2 pt-2 border-t border-white/10 flex flex-col gap-1">
            <p className="text-[11px] text-slate-400 px-2 pb-1">
              Klik website untuk menguji desain masing-masing:
            </p>
            {siteKeys.map((s) => {
              const active = s.key === currentKey;
              return (
                <button
                  key={s.key}
                  onClick={() => {
                    const url = new URL(window.location.href);
                    url.searchParams.set("preview", s.key);
                    window.location.href = url.toString();
                  }}
                  className={`text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center justify-between cursor-pointer ${
                    active
                      ? "bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30"
                      : "hover:bg-white/5 text-slate-300"
                  }`}
                >
                  <span>{s.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
