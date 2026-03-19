import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-black text-zinc-300 px-4">
      <Rocket className="w-24 h-24 text-emerald-500 mb-8 opacity-50" />
      <h1 className="text-6xl font-bold text-white mb-4 font-mono">404</h1>
      <p className="text-2xl text-zinc-400 mb-8 font-light">Trajectory Not Found</p>
      <Link 
        to="/" 
        className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-medium transition-colors"
      >
        Return to Base
      </Link>
    </div>
  );
}
