import { useState } from 'react';

export default function EngineViewer3D() {
  const [activeEngine, setActiveEngine] = useState<'raptor' | 'be4'>('raptor');

  return (
    <div className="w-full h-[600px] bg-zinc-950 rounded-3xl border border-white/10 overflow-hidden relative flex flex-col">
      {/* UI Overlay */}
      <div className="absolute top-0 left-0 right-0 p-6 z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pointer-events-none">
        <div>
          <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Interactive 3D Viewer</h3>
          <p className="text-zinc-400 text-sm">Drag to rotate, scroll to zoom</p>
        </div>
        
        <div className="flex bg-black/50 backdrop-blur-md border border-white/10 rounded-full p-1 pointer-events-auto">
          <button
            onClick={() => setActiveEngine('raptor')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeEngine === 'raptor' ? 'bg-emerald-500 text-black' : 'text-zinc-400 hover:text-white'
            }`}
          >
            SpaceX Raptor
          </button>
          <button
            onClick={() => setActiveEngine('be4')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeEngine === 'be4' ? 'bg-blue-500 text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Blue Origin BE-4
          </button>
        </div>
      </div>

      {/* Engine Stats Overlay */}
      <div className="absolute bottom-6 left-6 z-10 pointer-events-none bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl max-w-xs">
        {activeEngine === 'raptor' ? (
          <>
            <div className="text-emerald-500 text-xs font-mono mb-1 uppercase tracking-widest">Full-Flow Staged Combustion</div>
            <h4 className="text-white font-bold text-lg mb-2">Raptor (Sea Level)</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-zinc-500">Propellant:</div><div className="text-zinc-300 text-right">CH4 / LOX</div>
              <div className="text-zinc-500">Thrust:</div><div className="text-zinc-300 text-right">2,690 kN</div>
              <div className="text-zinc-500">Chamber Press:</div><div className="text-zinc-300 text-right">350 bar</div>
            </div>
          </>
        ) : (
          <>
            <div className="text-blue-400 text-xs font-mono mb-1 uppercase tracking-widest">Oxygen-Rich Staged Combustion</div>
            <h4 className="text-white font-bold text-lg mb-2">BE-4</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-zinc-500">Propellant:</div><div className="text-zinc-300 text-right">CH4 / LOX</div>
              <div className="text-zinc-500">Thrust:</div><div className="text-zinc-300 text-right">2,400 kN</div>
              <div className="text-zinc-500">Chamber Press:</div><div className="text-zinc-300 text-right">134 bar</div>
            </div>
          </>
        )}
      </div>

      {/* 3D Canvas */}
      <div className="flex-grow w-full h-full cursor-grab active:cursor-grabbing">
        {activeEngine === 'raptor' ? (
          <iframe
            title="SpaceX Starship Raptor 3 Engine"
            className="w-full h-full border-0"
            src="https://sketchfab.com/models/2d3918a9edcb4eedbf2d180391113e3a/embed?autostart=1&ui_theme=dark&dnt=1&ui_infos=0&ui_watermark=0&ui_help=0"
            allow="autoplay; fullscreen; vr"
          />
        ) : (
          <iframe
            title="Blue Origin BE-4 Engine"
            className="w-full h-full border-0"
            src="https://sketchfab.com/models/9ddaccacc2fa4beaa4f2e576ca1e7b6e/embed?autostart=1&ui_theme=dark&dnt=1&ui_infos=0&ui_watermark=0&ui_help=0"
            allow="autoplay; fullscreen; vr"
          />
        )}
      </div>
    </div>
  );
}
