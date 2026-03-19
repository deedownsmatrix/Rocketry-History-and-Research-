import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { eras } from '../data/eras';
import { rockets } from '../data/rockets';
import { Rocket as RocketIcon, ShieldAlert, ExternalLink } from 'lucide-react';

export default function EraPage({ eraId }: { eraId: string }) {
  const era = eras.find(e => e.id === eraId);
  const eraRockets = rockets.filter(r => r.eraId === eraId);

  if (!era) return <div>Era not found</div>;

  return (
    <div className="min-h-screen bg-black text-zinc-300">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={era.image} 
            alt={era.name} 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-emerald-500 font-mono tracking-widest mb-4 uppercase text-sm">
              {era.startYear} - {era.endYear}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 uppercase">
              {era.name}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl font-light leading-relaxed">
              {era.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Era Sections */}
          {era.sections && era.sections.length > 0 && (
            <div className="mb-24">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white uppercase tracking-wider mb-2">Historical Programs & Systems</h2>
                <div className="w-16 h-1 bg-emerald-500 rounded-full"></div>
              </div>
              <div className="space-y-16">
                {era.sections.map((section, idx) => (
                  <motion.div 
                    key={section.id} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
                  >
                    <div className="w-full lg:w-1/2">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {section.companyUrl ? (
                          <a href={section.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-2">
                            {section.title}
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        ) : (
                          section.title
                        )}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: section.content }}></p>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                      {section.videoUrl && (
                        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                          <iframe 
                            src={section.videoUrl} 
                            title={section.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                      {section.image && (
                        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                          <img src={section.image} alt={section.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider mb-2">Key Vehicles & Systems</h2>
            <div className="w-16 h-1 bg-emerald-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eraRockets.map((rocket, index) => (
              <motion.div 
                key={rocket.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden group hover:border-emerald-500/50 transition-colors"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <img 
                    src={rocket.image} 
                    alt={rocket.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-emerald-400 border border-emerald-500/30">
                    {rocket.firstFlight}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{rocket.name}</h3>
                      <div className="text-sm text-zinc-500 font-mono mt-1">{rocket.country}</div>
                    </div>
                    <div className="bg-white/5 p-2 rounded-lg">
                      <RocketIcon className="w-5 h-5 text-zinc-400" />
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 text-sm mb-6 line-clamp-3">
                    {rocket.description}
                  </p>

                  {rocket.militaryContext && (
                    <div className="mb-6 bg-red-950/30 border border-red-900/50 rounded-lg p-4 flex gap-3">
                      <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-red-200/80 leading-relaxed">
                        <strong className="text-red-400 block mb-1">Military Context</strong>
                        {rocket.militaryContext}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-sm">
                    <div>
                      <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Type</div>
                      <div className="text-white font-medium">{rocket.type}</div>
                    </div>
                    <div>
                      <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Status</div>
                      <div className="text-white font-medium capitalize">{rocket.status}</div>
                    </div>
                    <div>
                      <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Height</div>
                      <div className="text-white font-medium">{rocket.height}m</div>
                    </div>
                    <div>
                      <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Mass</div>
                      <div className="text-white font-medium">{rocket.mass.toLocaleString()}kg</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
