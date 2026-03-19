import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Clock, BarChart2, Rocket } from 'lucide-react';
import { eras } from '../data/eras';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2000&auto=format&fit=crop" 
            alt="Rocket Launch" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 font-sans uppercase">
              Rocket Research <span className="text-emerald-500">Atlas</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              A comprehensive historical and current rocket research and learning platform for students and serious self-learners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/timeline" 
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
              >
                Explore Timeline <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/technology" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-colors text-lg backdrop-blur-sm border border-white/10"
              >
                Study Technology <BookOpen className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eras Overview */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-4">Historical Eras</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eras.map((era, index) => (
              <motion.div 
                key={era.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-emerald-500/50 transition-colors"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={era.image} 
                    alt={era.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="text-emerald-500 text-sm font-mono mb-2">{era.startYear} - {era.endYear}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{era.name}</h3>
                  <p className="text-zinc-400 mb-6 line-clamp-3">{era.description}</p>
                  <Link 
                    to={`/${era.id}`} 
                    className="inline-flex items-center text-white font-medium hover:text-emerald-400 transition-colors"
                  >
                    Enter Exhibition <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: 'Master Timeline', desc: 'Explore centuries of rocketry development.', path: '/timeline' },
              { icon: BarChart2, title: 'Comparison Lab', desc: 'Side-by-side technical and historical analysis.', path: '/compare' },
              { icon: Rocket, title: 'Technology Deep Dive', desc: 'Engines, avionics, and vehicle design.', path: '/technology' },
              { icon: BookOpen, title: 'Study System', desc: 'Quizzes, flashcards, and progress tracking.', path: '/study' },
            ].map((feature, i) => (
              <Link key={i} to={feature.path} className="block p-6 rounded-2xl bg-black border border-white/5 hover:bg-zinc-900 transition-colors group">
                <feature.icon className="w-10 h-10 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
