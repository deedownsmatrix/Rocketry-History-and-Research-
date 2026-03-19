import { useState, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { rockets } from '../data/rockets';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Rocket } from '../types';
import { ArrowLeftRight } from 'lucide-react';

export default function Compare() {
  const [selectedRockets, setSelectedRockets] = useState<Rocket[]>([rockets[3], rockets[5]]); // Saturn V and Falcon 9

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
    const rocket = rockets.find(r => r.id === e.target.value);
    if (rocket) {
      const newSelected = [...selectedRockets];
      newSelected[index] = rocket;
      setSelectedRockets(newSelected);
    }
  };

  const chartData = selectedRockets.map(r => ({
    name: r.name,
    height: r.height,
    mass: r.mass / 1000, // tons
    payload: r.payloadToLEO / 1000, // tons
  }));

  return (
    <div className="min-h-screen bg-black text-zinc-300 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6 uppercase">
            Comparison <span className="text-emerald-500">Lab</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Side-by-side technical analysis of launch vehicles across history.
          </p>
        </div>

        {/* Selectors */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <select 
            value={selectedRockets[0].id}
            onChange={(e) => handleSelect(e, 0)}
            className="bg-zinc-900 border border-white/10 text-white rounded-lg px-4 py-3 w-full md:w-64 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          >
            {rockets.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
          </select>
          
          <div className="bg-white/5 p-3 rounded-full">
            <ArrowLeftRight className="w-6 h-6 text-emerald-500" />
          </div>

          <select 
            value={selectedRockets[1].id}
            onChange={(e) => handleSelect(e, 1)}
            className="bg-zinc-900 border border-white/10 text-white rounded-lg px-4 py-3 w-full md:w-64 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          >
            {rockets.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
          </select>
        </div>

        {/* Comparison Table */}
        <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10 text-sm font-medium text-zinc-400 uppercase tracking-wider">
            <div className="p-4 bg-black/50">Spec</div>
            <div className="p-4 text-center text-white">{selectedRockets[0].name}</div>
            <div className="p-4 text-center text-white">{selectedRockets[1].name}</div>
          </div>
          
          {[
            { label: 'Country', key: 'country' as keyof Rocket },
            { label: 'First Flight', key: 'firstFlight' as keyof Rocket },
            { label: 'Type', key: 'type' as keyof Rocket },
            { label: 'Status', key: 'status' as keyof Rocket },
            { label: 'Height (m)', key: 'height' as keyof Rocket },
            { label: 'Mass (kg)', key: 'mass' as keyof Rocket, format: (v: any) => v.toLocaleString() },
            { label: 'Payload to LEO (kg)', key: 'payloadToLEO' as keyof Rocket, format: (v: any) => v.toLocaleString() },
          ].map((row, i) => (
            <div key={row.label} className={`grid grid-cols-3 divide-x divide-white/10 border-b border-white/5 ${i % 2 === 0 ? 'bg-zinc-900/50' : 'bg-zinc-900'}`}>
              <div className="p-4 text-zinc-500 text-sm">{row.label}</div>
              <div className="p-4 text-center text-white font-mono text-sm">
                {row.format ? row.format(selectedRockets[0][row.key]) : String(selectedRockets[0][row.key])}
              </div>
              <div className="p-4 text-center text-white font-mono text-sm">
                {row.format ? row.format(selectedRockets[1][row.key]) : String(selectedRockets[1][row.key])}
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 h-96">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Height (meters)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="name" stroke="#888" tick={{ fill: '#888' }} />
                <YAxis stroke="#888" tick={{ fill: '#888' }} />
                <Tooltip cursor={{ fill: '#222' }} contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
                <Bar dataKey="height" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 h-96">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Payload to LEO (tons)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="name" stroke="#888" tick={{ fill: '#888' }} />
                <YAxis stroke="#888" tick={{ fill: '#888' }} />
                <Tooltip cursor={{ fill: '#222' }} contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
                <Bar dataKey="payload" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
