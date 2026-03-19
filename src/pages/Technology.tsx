import { motion } from 'motion/react';
import { engines } from '../data/engines';
import { Flame, Cpu, Wrench, ExternalLink, Radio } from 'lucide-react';
import EngineViewer3D from '../components/EngineViewer3D';

export default function Technology() {
  return (
    <div className="min-h-screen bg-black text-zinc-300">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=2000&auto=format&fit=crop" 
            alt="Rocket Technology" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 uppercase">
              Rocket <span className="text-emerald-500">Technology</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
              Deep dive into the engineering subsystems that make spaceflight possible: propulsion, avionics, and vehicle design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-40 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            <a href="#engines" className="flex items-center gap-2 text-emerald-400 font-medium whitespace-nowrap hover:text-emerald-300 transition-colors">
              <Flame className="w-5 h-5" /> Engines & Propulsion
            </a>
            <a href="#avionics" className="flex items-center gap-2 text-zinc-400 font-medium whitespace-nowrap hover:text-white transition-colors">
              <Cpu className="w-5 h-5" /> Avionics & Control
            </a>
            <a href="#design" className="flex items-center gap-2 text-zinc-400 font-medium whitespace-nowrap hover:text-white transition-colors">
              <Wrench className="w-5 h-5" /> Vehicle Design
            </a>
            <a href="#communications" className="flex items-center gap-2 text-zinc-400 font-medium whitespace-nowrap hover:text-white transition-colors">
              <Radio className="w-5 h-5" /> Space Networks
            </a>
          </div>
        </div>
      </div>

      {/* Engines Section */}
      <section id="engines" className="py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white uppercase tracking-wider mb-4">Engines & Propulsion</h2>
            <div className="w-24 h-1 bg-emerald-500 rounded-full mb-8"></div>
            <p className="text-lg text-zinc-400 max-w-4xl leading-relaxed">
              Rocket engines are the heart of any launch vehicle. They convert chemical energy into kinetic energy through combustion, expelling mass at high velocity to generate thrust according to Newton's third law.
            </p>
            <a href="#" className="inline-flex items-center gap-2 mt-6 text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
              Get More Technical Information <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="mb-24">
            <EngineViewer3D />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {engines.map((engine, index) => (
              <motion.div 
                key={engine.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-colors"
              >
                <div className="md:w-2/5 aspect-square md:aspect-auto relative overflow-hidden">
                  <img 
                    src={engine.image} 
                    alt={engine.name} 
                    className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/90 md:to-zinc-900" />
                </div>
                <div className="md:w-3/5 p-8 flex flex-col justify-center relative z-10">
                  <div className="text-emerald-500 text-xs font-mono mb-2 uppercase tracking-widest">{engine.type}</div>
                  <div className="flex items-center flex-wrap gap-3 mb-4">
                    <h3 className="text-3xl font-bold text-white">{engine.name}</h3>
                    {engine.companyUrl && (
                      <a href={engine.companyUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1 bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20">
                        {engine.manufacturer || 'Company Website'}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: engine.description }}></p>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                    <div>
                      <div className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Propellants</div>
                      <div className="text-white font-mono text-sm">{engine.propellants}</div>
                    </div>
                    <div>
                      <div className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Thrust (Vac)</div>
                      <div className="text-white font-mono text-sm">{engine.thrust.toLocaleString()} kN</div>
                    </div>
                    <div>
                      <div className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Specific Impulse</div>
                      <div className="text-white font-mono text-sm">{engine.isp} s</div>
                    </div>
                    <div>
                      <div className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Cycle</div>
                      <div className="text-white font-mono text-sm truncate" title={engine.cycle}>{engine.cycle}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avionics Section */}
      <section id="avionics" className="py-24 bg-zinc-950 border-t border-white/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white uppercase tracking-wider mb-4">Avionics & Control</h2>
            <div className="w-24 h-1 bg-emerald-500 rounded-full mb-8"></div>
            <p className="text-lg text-zinc-400 max-w-4xl leading-relaxed">
              The nervous system of the rocket. Avionics encompass guidance, navigation, and control (GNC), telemetry, and flight termination systems. Modern rockets rely on highly redundant, fault-tolerant computer architectures to process thousands of inputs per second and make split-second adjustments to maintain trajectory.
            </p>
            <a href="https://notebooklm.google.com/notebook/871a8821-88e0-466c-9d46-9d8c34340cc0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
              Get More Technical Information <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <div className="space-y-16">
            {/* Flight Computers */}
            <div className="flex flex-col lg:flex-row gap-12 items-center bg-black p-8 rounded-3xl border border-white/5">
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Cpu className="w-8 h-8 text-emerald-500" />
                  <h3 className="text-3xl font-bold text-white">Flight Computers</h3>
                </div>
                <div className="space-y-4 text-zinc-400 leading-relaxed">
                  <p>
                    Flight computers are the central processing units of a launch vehicle. They run specialized real-time operating systems (RTOS) designed to guarantee deterministic execution times—meaning a calculation will always finish within a strict microsecond deadline.
                  </p>
                  <p>
                    Because radiation and intense vibrations can cause bit-flips or hardware failures, modern rockets use <strong>Triple Modular Redundancy (TMR)</strong> or even more complex architectures. For example, the Space Shuttle used five identical <a href="https://www.ibm.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">IBM</a> AP-101 computers. <a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">SpaceX's</a> Falcon 9 uses three dual-core x86 processors running a customized version of Linux. Each core calculates the flight path independently, and a "voter" system compares the results. If one computer disagrees with the other two, it is ignored and rebooted.
                  </p>
                  <div className="bg-zinc-900/50 p-4 rounded-xl border border-white/5 mt-6">
                    <h4 className="text-emerald-400 font-mono text-sm uppercase tracking-wider mb-2">Reference Architecture</h4>
                    <ul className="list-disc list-inside text-sm space-y-2">
                      <li><strong>CPU Architecture:</strong> Often PowerPC (RAD750) or hardened x86/ARM.</li>
                      <li><strong>OS:</strong> VxWorks, RTEMS, or custom Linux kernels.</li>
                      <li><strong>Bus:</strong> MIL-STD-1553, RS-422, or modern deterministic Ethernet.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/LvFTBSzDIpc?rel=0" 
                    title="Apollo Guidance Computer" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-3 text-xs text-zinc-400 backdrop-blur-sm pointer-events-none">
                    Historical Reference: The Apollo Guidance Computer (AGC), one of the first computers to use integrated circuits, paved the way for modern digital fly-by-wire systems.
                  </div>
                </div>
              </div>
            </div>

            {/* IMU */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center bg-black p-8 rounded-3xl border border-white/5">
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Cpu className="w-8 h-8 text-emerald-500" />
                  <h3 className="text-3xl font-bold text-white">Inertial Measurement Units (IMU)</h3>
                </div>
                <div className="space-y-4 text-zinc-400 leading-relaxed">
                  <p>
                    An IMU is an electronic device that measures and reports a vehicle's specific force, angular rate, and sometimes the magnetic field surrounding the body, using a combination of accelerometers and gyroscopes.
                  </p>
                  <p>
                    Rockets cannot rely solely on GPS because GPS signals can be jammed, lost during plasma blackout, or simply update too slowly for the rapid dynamics of a rocket launch. Instead, they use "dead reckoning." By knowing the exact starting position on the launch pad and integrating the acceleration and rotation data from the IMU over time, the flight computer calculates the rocket's exact position and velocity in 3D space.
                  </p>
                  <p>
                    Modern rockets use Ring Laser Gyros (RLG) or Fiber Optic Gyros (FOG), which have no moving parts and use the interference of light beams to measure rotation with incredible precision.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-zinc-900 p-8 flex items-center justify-center">
                  {/* Abstract representation of an IMU/Gyroscope */}
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 border-4 border-emerald-500/30 rounded-full animate-[spin_4s_linear_infinite]"></div>
                    <div className="absolute inset-4 border-4 border-emerald-500/50 rounded-full animate-[spin_3s_linear_infinite_reverse] rotate-45"></div>
                    <div className="absolute inset-8 border-4 border-emerald-500/80 rounded-full animate-[spin_2s_linear_infinite] rotate-90"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-3 text-xs text-zinc-400 backdrop-blur-sm">
                    Diagram: 3-Axis Gimbal / Gyroscope conceptual model. Modern FOGs measure the Sagnac effect of light traveling in a coil of optical fiber.
                  </div>
                </div>
              </div>
            </div>

            {/* Telemetry */}
            <div className="flex flex-col lg:flex-row gap-12 items-center bg-black p-8 rounded-3xl border border-white/5">
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Cpu className="w-8 h-8 text-emerald-500" />
                  <h3 className="text-3xl font-bold text-white">Telemetry & FTS</h3>
                </div>
                <div className="space-y-4 text-zinc-400 leading-relaxed">
                  <p>
                    <strong>Telemetry</strong> is the continuous transmission of thousands of data channels—including pressures, temperatures, voltages, valve states, and video feeds—to ground stations. This data is crucial for real-time monitoring by mission control and for post-flight analysis. Rockets use S-band and X-band radio frequencies to transmit this data at high bitrates.
                  </p>
                  <p>
                    The <strong>Flight Termination System (FTS)</strong> or Autonomous Flight Safety System (AFSS) is arguably the most critical safety component. If the rocket deviates from its planned trajectory and threatens populated areas, the FTS is triggered. Historically, this was done manually by a Range Safety Officer sending a destruct command via radio. Modern rockets, like the Falcon 9 and Electron, use AFSS: the rocket's own computers monitor the trajectory and will automatically detonate linear shape charges to destroy the vehicle if it violates safety corridors.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                  <img src="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1000&auto=format&fit=crop" alt="Mission Control" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-3 text-xs text-zinc-400 backdrop-blur-sm">
                    Telemetry data is received and processed by Mission Control in real-time to monitor vehicle health and trajectory.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Design Section */}
      <section id="design" className="py-24 bg-black border-t border-white/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white uppercase tracking-wider mb-4">Vehicle Design & Structures</h2>
            <div className="w-24 h-1 bg-emerald-500 rounded-full mb-8"></div>
            <p className="text-lg text-zinc-400 max-w-4xl leading-relaxed">
              Rockets are essentially giant, flying fuel tanks. The primary engineering challenge in vehicle design is maximizing the mass fraction—the ratio of propellant mass to the total mass of the vehicle. Every kilogram of structure saved allows for more payload to orbit.
            </p>
            <a href="#" className="inline-flex items-center gap-2 mt-6 text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
              Get More Technical Information <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/5">
              <div className="h-64 overflow-hidden relative">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Electron_Rocket_on_Launch_Pad_1.jpg/800px-Electron_Rocket_on_Launch_Pad_1.jpg" alt="Carbon Composite Rocket" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Materials: Aluminum vs. Composites</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Historically, rockets were built using aerospace-grade aluminum alloys (like Aluminum-Lithium) because they are lightweight, strong, and handle cryogenic temperatures well. The Space Shuttle External Tank and the Falcon 9 use aluminum-lithium orthogrid or isogrid structures—panels machined with a grid pattern to reduce weight while maintaining stiffness.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Modern small-lift vehicles, like <a href="https://www.rocketlabusa.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Rocket Lab's</a> Electron, use carbon fiber composites. Composites offer a superior strength-to-weight ratio but are notoriously difficult to use for cryogenic tanks because the extreme cold can cause micro-cracking in the resin, leading to leaks.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/5">
              <div className="h-64 overflow-hidden relative">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Atlas_V_launching_the_Mars_Science_Laboratory_%28cropped%29.jpg/800px-Atlas_V_launching_the_Mars_Science_Laboratory_%28cropped%29.jpg" alt="Rocket Staging" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Staging Mechanisms</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Because of the Tsiolkovsky rocket equation, a single-stage-to-orbit (SSTO) vehicle is incredibly difficult to build with current chemical propulsion. Therefore, rockets use staging—dropping dead weight (empty tanks and engines) as they ascend.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  <strong>Hot Staging:</strong> The upper stage ignites its engines while the lower stage is still firing (or just shutting down). This avoids the need for ullage motors to settle the propellant in zero-G. Used by Russian rockets and recently adopted by <a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">SpaceX's</a> Starship.<br/><br/>
                  <strong>Cold Staging:</strong> The lower stage shuts down, pneumatic pushers separate the stages, ullage motors fire to settle the upper stage propellant, and then the upper stage ignites. Used by Falcon 9 and <a href="https://www.ulalaunch.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">United Launch Alliance (ULA)'s</a> Atlas V.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communications Section */}
      <section id="communications" className="py-24 bg-zinc-950 border-t border-white/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white uppercase tracking-wider mb-4">Space Networks & Communication</h2>
            <div className="w-24 h-1 bg-emerald-500 rounded-full mb-8"></div>
            <p className="text-lg text-zinc-400 max-w-4xl leading-relaxed">
              As humanity expands its presence in Low Earth Orbit (LEO), the Moon, and beyond, the need for robust, high-bandwidth, and dynamic networking capabilities has never been greater. Traditional radio frequency (RF) communications are facing bandwidth bottlenecks and spectrum congestion. The future of space communication relies on advanced software-defined networking and free-space optical (laser) communications.
            </p>
            <a href="#" className="inline-flex items-center gap-2 mt-6 text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
              Get More Technical Information <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-black rounded-3xl border border-white/5 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-3xl font-bold text-white">Aalyria: The Brain and The Backbone</h3>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider">Google Spin-off</span>
              </div>
              
              <p className="text-lg text-zinc-400 leading-relaxed mb-12 max-w-4xl">
                Aalyria, an independent company spun out of Alphabet (Google's parent company) in 2022, is tackling the hardest challenges in aerospace communications. Born from nearly a decade of secret development within Google's Project Loon and Project Taara, Aalyria's breakthrough lies in combining <strong>"the brain"</strong> (advanced routing software) with <strong>"the backbone"</strong> (next-generation optical hardware).
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* The Brain: Spacetime */}
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -z-10 group-hover:bg-emerald-500/10 transition-colors" />
                  <h4 className="text-2xl font-bold text-white mb-2">The Brain: <span className="text-emerald-400">Spacetime</span></h4>
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">Software Defined Network Orchestration</div>
                  
                  <div className="space-y-4 text-zinc-400 leading-relaxed text-sm">
                    <p>
                      <strong>Spacetime</strong> is a software platform designed to orchestrate complex, ever-changing networks across land, sea, air, and space. Unlike terrestrial fiber networks where nodes are stationary, space networks involve satellites moving at 17,000 mph, aircraft, and ships.
                    </p>
                    <p>
                      Spacetime acts as an omniscient network controller. It ingests massive amounts of data about the physical world—including orbital mechanics, weather patterns, antenna pointing capabilities, and bandwidth requirements. 
                    </p>
                    <p>
                      Using advanced algorithms, it predicts when a connection between two moving objects will be optimal, when it will break (due to line-of-sight loss or weather), and proactively reroutes traffic across the network before a drop occurs. It effectively turns a chaotic swarm of moving vehicles into a stable, high-speed mesh network.
                    </p>
                  </div>
                </div>

                {/* The Backbone: Tightbeam */}
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -z-10 group-hover:bg-emerald-500/10 transition-colors" />
                  <h4 className="text-2xl font-bold text-white mb-2">The Backbone: <span className="text-emerald-400">Tightbeam</span></h4>
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">Advanced Free-Space Optics</div>
                  
                  <div className="space-y-4 text-zinc-400 leading-relaxed text-sm">
                    <p>
                      <strong>Tightbeam</strong> is Aalyria's hardware solution: an advanced coherent light free-space optics (FSO) technology. It transmits data using lasers through the atmosphere and the vacuum of space at speeds ranging from 100 Gbps to 1 Tbps—vastly outperforming traditional radio frequency systems.
                    </p>
                    <p>
                      The historical challenge with laser communications through the atmosphere has been weather and atmospheric turbulence (scintillation), which scatters the light beam. Tightbeam solves this by using advanced adaptive optics and coherent transmission techniques.
                    </p>
                    <p>
                      It dynamically adjusts the phase and amplitude of the laser to compensate for atmospheric distortion in real-time. This allows Tightbeam to maintain fiber-optic-like speeds and reliability over hundreds of kilometers, even through clouds, fog, and rain, acting as a wireless backbone where laying physical fiber is impossible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
