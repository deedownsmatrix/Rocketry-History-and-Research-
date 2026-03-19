import { Network } from 'lucide-react';

export default function Graph() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-black text-zinc-300 px-4">
      <Network className="w-24 h-24 text-emerald-500 mb-8 opacity-50" />
      <h1 className="text-5xl font-bold text-white mb-4 uppercase tracking-wider">Knowledge Graph</h1>
      <p className="text-xl text-zinc-400 mb-8 font-light text-center max-w-2xl">
        Interactive relationship explorer connecting people, rockets, engines, programs, and missions.
      </p>
      <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 max-w-md w-full text-center">
        <p className="text-emerald-400 font-mono text-sm uppercase tracking-widest mb-2">Status</p>
        <p className="text-white font-medium">Module under construction</p>
      </div>
    </div>
  );
}
