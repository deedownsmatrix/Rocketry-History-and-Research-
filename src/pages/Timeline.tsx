import { useState } from 'react';
import { motion } from 'motion/react';
import { timelineEvents } from '../data/timeline';
import { missionEvents } from '../data/missions';
import { Clock, Shield, FlaskConical, Globe, Rocket, Users } from 'lucide-react';
import { clsx } from 'clsx';

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<'master' | 'missions'>('missions');

  const sortedEvents = [...timelineEvents].sort((a, b) => a.year - b.year);
  const sortedMissions = [...missionEvents].sort((a, b) => a.year - b.year);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'military': return <Shield className="w-4 h-4" />;
      case 'scientific': return <FlaskConical className="w-4 h-4" />;
      case 'civil': return <Globe className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'military': return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'scientific': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'civil': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
      default: return 'text-zinc-500 bg-zinc-500/10 border-zinc-500/20';
    }
  };

  const getProgramColor = (program: string) => {
    switch (program) {
      case 'Mercury': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Gemini': return 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20';
      case 'Apollo': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'Skylab': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'ASTP': return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
      case 'Space Shuttle': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      default: return 'text-zinc-400 bg-zinc-400/10 border-zinc-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6 uppercase">
            Historical <span className="text-emerald-500">Timeline</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Trace the evolution of rocketry from ancient Chinese fire arrows to modern reusable launch vehicles, and explore the key missions that defined human spaceflight.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-zinc-900 border border-white/10 rounded-full p-1">
            <button
              onClick={() => setActiveTab('missions')}
              className={clsx(
                'px-6 py-2.5 rounded-full text-sm font-medium transition-colors',
                activeTab === 'missions' ? 'bg-emerald-500 text-black' : 'text-zinc-400 hover:text-white'
              )}
            >
              Missions (Mercury to Shuttle)
            </button>
            <button
              onClick={() => setActiveTab('master')}
              className={clsx(
                'px-6 py-2.5 rounded-full text-sm font-medium transition-colors',
                activeTab === 'master' ? 'bg-emerald-500 text-black' : 'text-zinc-400 hover:text-white'
              )}
            >
              Master Timeline
            </button>
          </div>
        </div>

        {activeTab === 'master' && (
          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
            {sortedEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-16 relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-12 md:gap-8 items-center">
                  {/* Timeline Node */}
                  <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-black z-10" />
                  
                  {/* Year (Desktop: Left, Mobile: Top) */}
                  <div className="md:col-span-5 md:text-right mb-2 md:mb-0">
                    <div className="text-3xl font-bold text-white font-mono tracking-tighter">
                      {event.year}
                    </div>
                  </div>

                  {/* Content (Desktop: Right, Mobile: Bottom) */}
                  <div className="md:col-span-7 md:pl-8">
                    <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={clsx(
                          'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border uppercase tracking-wider',
                          getCategoryColor(event.category)
                        )}>
                          {getCategoryIcon(event.category)}
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'missions' && (
          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
            {sortedMissions.map((mission, index) => (
              <motion.div 
                key={mission.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-16 relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-12 md:gap-8 items-center">
                  {/* Timeline Node */}
                  <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-black z-10" />
                  
                  {/* Date (Desktop: Left, Mobile: Top) */}
                  <div className="md:col-span-5 md:text-right mb-2 md:mb-0">
                    <div className="text-2xl font-bold text-white font-mono tracking-tighter">
                      {mission.date}
                    </div>
                    <div className="text-emerald-500 font-mono text-sm mt-1 uppercase tracking-widest">
                      {mission.vehicle}
                    </div>
                  </div>

                  {/* Content (Desktop: Right, Mobile: Bottom) */}
                  <div className="md:col-span-7 md:pl-8">
                    <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors overflow-hidden relative">
                      {mission.image && (
                        <div className="absolute top-0 right-0 w-64 h-full opacity-20 mask-image-linear-gradient pointer-events-none">
                          <img src={mission.image} alt={mission.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={clsx(
                            'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border uppercase tracking-wider',
                            getProgramColor(mission.program)
                          )}>
                            <Rocket className="w-3.5 h-3.5" />
                            {mission.program}
                          </span>
                          {mission.duration && (
                            <span className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded-full">
                              ⏱ {mission.duration}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{mission.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                          {mission.description}
                        </p>
                        <div className="flex items-start gap-2 text-sm">
                          <Users className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                          <div className="text-zinc-300">
                            {mission.crew.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
