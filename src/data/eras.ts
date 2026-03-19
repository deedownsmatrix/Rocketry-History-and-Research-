import { Era } from '../types';

export const eras: Era[] = [
  {
    id: 'ancient',
    name: 'Ancient Era',
    category: 'ancient',
    startYear: 1200,
    endYear: 1899,
    description: 'The origins of gunpowder-based rocketry, from Chinese fire arrows to early incendiary and battlefield rockets like the Mysorean and Congreve rockets.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop',
    sections: [
      {
        id: 'gunpowder-origins',
        title: 'Origins of Gunpowder Rocketry',
        content: 'The earliest rockets were developed in China during the Song dynasty (960–1279), initially as incendiary weapons known as "fire arrows." These early solid-propellant rockets utilized bamboo tubes packed with gunpowder. The technology gradually spread across Eurasia following the Mongol conquests, leading to the development of more advanced metal-cased rockets in India and Europe, such as the Mysorean and Congreve rockets, which fundamentally changed siege warfare.',
        videoUrl: 'https://www.youtube.com/embed/Kjtaqb5yyVk'
      }
    ]
  },
  {
    id: 'modern',
    name: 'Modern Era',
    category: 'modern',
    startYear: 1900,
    endYear: 2011,
    description: 'The rise of liquid-fuel rockets, interwar rocketry, World War II military rocketry, the Cold War space race, and the Space Shuttle era.',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop',
    sections: [
      {
        id: 'project-mercury',
        title: 'Project Mercury',
        content: 'Initiated in 1958, Project Mercury was the United States\' first man-in-space program. Its objectives were specific: to orbit a manned spacecraft around Earth, to investigate man\'s ability to function in space, and to recover both man and spacecraft safely. The program utilized two launch vehicles: the Redstone for suborbital flights (like Alan Shepard\'s historic Freedom 7 mission) and the Atlas for orbital flights (such as John Glenn\'s Friendship 7). Mercury laid the foundational knowledge for spacecraft design, life support systems, and global tracking networks. The spacecraft was a small, bell-shaped capsule that could hold a single astronaut, earning them the moniker "capsule communicators" or CAPCOMs.',
        videoUrl: 'https://www.youtube.com/embed/2goptoffM3M',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Mercury-Atlas_6_launch.jpg'
      },
      {
        id: 'project-gemini',
        title: 'Project Gemini',
        content: 'Running from 1961 to 1966, Project Gemini was the critical bridge between Mercury and Apollo. Named for its two-man crew, Gemini\'s primary purpose was to develop and perfect the techniques necessary for lunar missions. This included demonstrating long-duration spaceflight (up to 14 days), performing extravehicular activity (EVA or spacewalks), and mastering orbital rendezvous and docking. Gemini missions relied on the modified Titan II ICBM, a powerful and reliable hypergolic-fueled rocket. The program\'s successes, including the first American spacewalk by Ed White and the complex rendezvous maneuvers of Gemini 6A and 7, proved that the ambitious goals of the Apollo program were achievable.',
        videoUrl: 'https://www.youtube.com/embed/JksrrkpFCs8',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Gemini_11_Titan_II_Launch_-_GPN-2000-001350.jpg'
      },
      {
        id: 'atlas-rockets',
        title: 'The Atlas Rocket Family',
        content: 'The Atlas family of rockets traces its lineage back to the SM-65 Atlas, the first operational intercontinental ballistic missile (ICBM) developed by the United States in the late 1950s. Designed by Karel Bossart, the original Atlas featured a unique "stage-and-a-half" design, where two booster engines were jettisoned during ascent while the central sustainer engine continued to fire. It also utilized incredibly thin, pressure-stabilized stainless steel "balloon tanks" to save weight. Atlas rockets launched the orbital Mercury missions, the Agena target vehicles for Gemini, and countless scientific probes. Today, the heavily evolved Atlas V, operated by <a href="https://www.ulalaunch.com" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">United Launch Alliance (ULA)</a>, remains one of the most reliable launch vehicles in history, responsible for launching missions like the Mars Perseverance rover and the New Horizons probe to Pluto.',
        videoUrl: 'https://www.youtube.com/embed/CC2RN8LBHRA',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Atlas_V_launching_the_Mars_Science_Laboratory_%28cropped%29.jpg'
      },
      {
        id: 'delta-rockets',
        title: 'The Delta Rocket Family',
        content: 'The Delta rocket family originated from the Thor intermediate-range ballistic missile (IRBM) in the late 1950s. Initially intended as a temporary launch vehicle, Delta evolved through numerous iterations to become a workhorse for NASA and the US military. Early Deltas were instrumental in launching the first communications and weather satellites. The Delta II, introduced in 1989, became legendary for its reliability, launching the Global Positioning System (GPS) constellation and numerous Mars rovers, including Spirit and Opportunity. The family culminated in the Delta IV Heavy, a massive vehicle utilizing cryogenic liquid hydrogen and liquid oxygen, which served as the primary heavy-lift vehicle for classified national security payloads until its retirement.',
        videoUrl: 'https://www.youtube.com/embed/BUClxcUbuNM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Delta_IV_Heavy_launches_Parker_Solar_Probe.jpg'
      }
    ]
  },
  {
    id: 'current',
    name: 'Current Era',
    category: 'current',
    startYear: 2011,
    endYear: 'Present',
    description: 'The post-Space Shuttle era, characterized by commercial spaceflight, reusable rockets, megaconstellations, and a renewed focus on deep space exploration.',
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=1000&auto=format&fit=crop',
    sections: [
      {
        id: 'spacex',
        title: 'SpaceX',
        content: 'Founded by Elon Musk in 2002, <a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">SpaceX</a> revolutionized the aerospace industry by making rocket reusability a reality. The Falcon 9, a medium-lift two-stage rocket, became the first orbital-class launch vehicle capable of landing its first stage vertically and flying again. This drastically reduced the cost of access to space. SpaceX also developed the Falcon Heavy and the Crew Dragon spacecraft, returning human spaceflight capabilities to American soil. Currently, SpaceX is developing Starship, a fully reusable super-heavy lift launch vehicle designed for missions to the Moon, Mars, and beyond.',
        videoUrl: 'https://www.youtube.com/embed/7unpSaMRXZY',
        image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1000&auto=format&fit=crop',
        companyUrl: 'https://www.spacex.com'
      },
      {
        id: 'blue-origin',
        title: 'Blue Origin',
        content: 'Established by Jeff Bezos in 2000, <a href="https://www.blueorigin.com" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">Blue Origin</a> focuses on lowering the cost of spaceflight and enabling a future where millions of people can live and work in space. Their New Shepard suborbital vehicle provides space tourism and microgravity research flights, featuring a fully reusable booster and capsule. Blue Origin is currently developing the New Glenn, a massive heavy-lift orbital rocket powered by their own BE-4 methalox engines, which will also power <a href="https://www.ulalaunch.com" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">ULA\'s</a> Vulcan Centaur rocket. The company is also a key player in developing lunar lander technologies for NASA\'s Artemis program.',
        image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop',
        companyUrl: 'https://www.blueorigin.com'
      },
      {
        id: 'rocket-lab',
        title: 'Rocket Lab',
        content: 'Founded by Peter Beck in New Zealand, <a href="https://www.rocketlabusa.com" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">Rocket Lab</a> has become the leading dedicated small-satellite launch provider. Their Electron rocket is notable for its extensive use of carbon composite materials and its Rutherford engines, which are the first orbital-class rocket engines to use electric pump feeds instead of traditional gas generators. Rocket Lab has also pioneered mid-air recovery techniques and ocean splashdown recoveries for the Electron\'s first stage. They are currently developing the Neutron rocket, a medium-lift, fully reusable launch vehicle designed for mega-constellation deployment.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Electron_Rocket_on_Launch_Pad_1.jpg/800px-Electron_Rocket_on_Launch_Pad_1.jpg',
        companyUrl: 'https://www.rocketlabusa.com'
      },
      {
        id: 'relativity-space',
        title: 'Relativity Space',
        content: '<a href="https://www.relativityspace.com" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">Relativity Space</a> is pioneering the use of large-scale 3D printing in aerospace manufacturing. Their goal is to build rockets with 100x fewer parts in a matter of days rather than years. Their first vehicle, Terran 1, was the world\'s first largely 3D-printed rocket. Although it did not reach orbit, it successfully demonstrated the viability of 3D-printed structures under maximum dynamic pressure (Max-Q). Relativity is now focused entirely on Terran R, a fully reusable, medium-to-heavy lift launch vehicle designed to compete directly with the Falcon 9, powered by their 3D-printed Aeon R methalox engines.',
        image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000&auto=format&fit=crop',
        companyUrl: 'https://www.relativityspace.com'
      },
      {
        id: 'stoke-space',
        title: 'Stoke Space',
        content: '<a href="https://www.stokespace.com" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">Stoke Space</a> is a rapidly growing aerospace startup focused on achieving the holy grail of rocketry: 100% rapid and complete reusability. While companies like <a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">SpaceX</a> reuse the first stage, Stoke is designing a fully reusable second stage. Their innovative Nova rocket features a unique second stage with a regeneratively cooled heat shield and a novel ring of thrust chambers that act as an aerospike engine during ascent and a heat shield during reentry. This design aims to allow the second stage to return from orbit, land vertically, and fly again with minimal refurbishment.',
        image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1000&auto=format&fit=crop',
        companyUrl: 'https://www.stokespace.com'
      },
      {
        id: 'firefly-aerospace',
        title: 'Firefly Aerospace',
        content: '<a href="https://fireflyspace.com" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">Firefly Aerospace</a> is an end-to-end space transportation company developing a family of launch vehicles, in-space vehicles, and lunar landers. Their flagship rocket, the Alpha, is an expendable small-lift launch vehicle utilizing carbon-composite structures and tap-off cycle engines. Firefly is also developing the Medium Launch Vehicle (MLV) in partnership with <a href="https://www.northropgrumman.com" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">Northrop Grumman</a>, and the Blue Ghost lunar lander, which is contracted by NASA to deliver payloads to the lunar surface as part of the Commercial Lunar Payload Services (CLPS) program.',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000&auto=format&fit=crop',
        companyUrl: 'https://fireflyspace.com'
      },
      {
        id: 'astra',
        title: 'Astra',
        content: '<a href="https://astra.com" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">Astra Space</a> was founded with the mission to improve life on Earth from space by creating a mass-produced, highly portable launch system. Their Rocket 3 series was designed to be transported in standard shipping containers and launched from austere environments with minimal infrastructure. While Rocket 3 experienced several failures and was ultimately retired, Astra is now focusing on Rocket 4, a larger and more capable launch vehicle, as well as their successful line of spacecraft electric propulsion systems (Astra Spacecraft Engine).',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Astra_Rocket_3.3_Launch_%28cropped%29.jpg/800px-Astra_Rocket_3.3_Launch_%28cropped%29.jpg',
        companyUrl: 'https://astra.com'
      }
    ]
  }
];
