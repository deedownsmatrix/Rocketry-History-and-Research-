import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Rocket className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold tracking-tight text-white font-sans">ROCKET ATLAS</span>
            </Link>
            <p className="text-sm max-w-md">
              A comprehensive historical and current rocket research and learning platform for students and serious self-learners. Explore rockets in depth across history, engineering, military development, space exploration, and modern launch systems.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Eras</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ancient" className="hover:text-emerald-400 transition-colors">Ancient Era</Link></li>
              <li><Link to="/modern" className="hover:text-emerald-400 transition-colors">Modern Era</Link></li>
              <li><Link to="/current" className="hover:text-emerald-400 transition-colors">Current Era</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/technology" className="hover:text-emerald-400 transition-colors">Technology</Link></li>
              <li><Link to="/timeline" className="hover:text-emerald-400 transition-colors">Master Timeline</Link></li>
              <li><Link to="/compare" className="hover:text-emerald-400 transition-colors">Comparison Lab</Link></li>
              <li><Link to="/study" className="hover:text-emerald-400 transition-colors">Study System</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Rocket Research Atlas. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <Link to="/library" className="hover:text-white transition-colors">Library</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
