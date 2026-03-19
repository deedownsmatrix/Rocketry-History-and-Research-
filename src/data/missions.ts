import { MissionEvent } from '../types';

export const missionEvents: MissionEvent[] = [
  {
    id: 'm-mr3',
    date: 'May 5, 1961',
    year: 1961,
    title: 'Freedom 7 (Mercury-Redstone 3)',
    program: 'Mercury',
    description: 'Alan Shepard becomes the first American in space during a 15-minute suborbital flight.',
    crew: ['Alan Shepard'],
    vehicle: 'Redstone',
    duration: '15m 22s',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Alan_Shepard_in_Freedom_7_capsule.jpg'
  },
  {
    id: 'm-ma6',
    date: 'February 20, 1962',
    year: 1962,
    title: 'Friendship 7 (Mercury-Atlas 6)',
    program: 'Mercury',
    description: 'John Glenn becomes the first American to orbit the Earth, completing three orbits.',
    crew: ['John Glenn'],
    vehicle: 'Atlas LV-3B',
    duration: '4h 55m 23s',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/John_Glenn_in_Friendship_7_capsule.jpg'
  },
  {
    id: 'm-g4',
    date: 'June 3, 1965',
    year: 1965,
    title: 'Gemini 4',
    program: 'Gemini',
    description: 'Ed White performs the first American extravehicular activity (EVA) or "spacewalk".',
    crew: ['James McDivitt', 'Ed White'],
    vehicle: 'Titan II GLV',
    duration: '4d 1h 56m',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Ed_White_spacewalk_-_Gemini_4.jpg'
  },
  {
    id: 'm-g8',
    date: 'March 16, 1966',
    year: 1966,
    title: 'Gemini 8',
    program: 'Gemini',
    description: 'First docking of two spacecraft in orbit (with the Agena target vehicle), followed by a critical thruster malfunction successfully handled by Neil Armstrong and David Scott.',
    crew: ['Neil Armstrong', 'David Scott'],
    vehicle: 'Titan II GLV',
    duration: '10h 41m 26s',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Gemini_8_Agena_Target_Vehicle.jpg'
  },
  {
    id: 'm-a8',
    date: 'December 21, 1968',
    year: 1968,
    title: 'Apollo 8',
    program: 'Apollo',
    description: 'First crewed spacecraft to leave low Earth orbit, reach the Moon, orbit it, and return. The crew took the famous "Earthrise" photograph.',
    crew: ['Frank Borman', 'James Lovell', 'William Anders'],
    vehicle: 'Saturn V',
    duration: '6d 3h 0m',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/NASA-Apollo8-Dec24-Earthrise.jpg'
  },
  {
    id: 'm-a11',
    date: 'July 16, 1969',
    year: 1969,
    title: 'Apollo 11',
    program: 'Apollo',
    description: 'First humans to land and walk on the Moon. "That\'s one small step for [a] man, one giant leap for mankind."',
    crew: ['Neil Armstrong', 'Buzz Aldrin', 'Michael Collins'],
    vehicle: 'Saturn V',
    duration: '8d 3h 18m',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Apollo_11_first_step.jpg'
  },
  {
    id: 'm-a13',
    date: 'April 11, 1970',
    year: 1970,
    title: 'Apollo 13',
    program: 'Apollo',
    description: 'Lunar landing aborted after an oxygen tank exploded. The crew successfully returned to Earth using the Lunar Module as a "lifeboat".',
    crew: ['James Lovell', 'John Swigert', 'Fred Haise'],
    vehicle: 'Saturn V',
    duration: '5d 22h 54m',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Apollo_13_Service_Module.jpg'
  },
  {
    id: 'm-sl1',
    date: 'May 14, 1973',
    year: 1973,
    title: 'Skylab 1',
    program: 'Skylab',
    description: 'Launch of the first United States space station. It suffered damage during launch, requiring repairs by the first crew.',
    crew: ['Uncrewed'],
    vehicle: 'Saturn INT-21',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Skylab_%28SL-4%29.jpg'
  },
  {
    id: 'm-astp',
    date: 'July 15, 1975',
    year: 1975,
    title: 'Apollo-Soyuz Test Project',
    program: 'ASTP',
    description: 'First joint US-Soviet space flight, marking the end of the Space Race. An Apollo spacecraft docked with a Soviet Soyuz capsule.',
    crew: ['Thomas Stafford', 'Vance Brand', 'Deke Slayton'],
    vehicle: 'Saturn IB',
    duration: '9d 1h 28m',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Apollo-Soyuz_Test_Project_illustration.jpg'
  },
  {
    id: 'm-sts1',
    date: 'April 12, 1981',
    year: 1981,
    title: 'STS-1 (Columbia)',
    program: 'Space Shuttle',
    description: 'The first orbital flight of the Space Shuttle program. Columbia demonstrated the viability of a reusable winged spacecraft.',
    crew: ['John Young', 'Robert Crippen'],
    vehicle: 'Space Shuttle Columbia',
    duration: '2d 6h 20m',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/STS-1_launch.jpg'
  },
  {
    id: 'm-sts51l',
    date: 'January 28, 1986',
    year: 1986,
    title: 'STS-51-L (Challenger)',
    program: 'Space Shuttle',
    description: 'Tragic loss of the Space Shuttle Challenger and its seven crew members 73 seconds after liftoff due to an O-ring failure.',
    crew: ['Dick Scobee', 'Michael J. Smith', 'Ellison Onizuka', 'Judith Resnik', 'Ronald McNair', 'Gregory Jarvis', 'Christa McAuliffe'],
    vehicle: 'Space Shuttle Challenger',
    duration: '73 seconds',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Challenger_flight_51-l_crew.jpg'
  },
  {
    id: 'm-sts31',
    date: 'April 24, 1990',
    year: 1990,
    title: 'STS-31 (Discovery)',
    program: 'Space Shuttle',
    description: 'Deployment of the Hubble Space Telescope, revolutionizing astronomy and our understanding of the universe.',
    crew: ['Loren Shriver', 'Charles Bolden', 'Steven Hawley', 'Bruce McCandless II', 'Kathryn Sullivan'],
    vehicle: 'Space Shuttle Discovery',
    duration: '5d 1h 16m',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Hubble_Space_Telescope_deployed_from_Discovery.jpg'
  },
  {
    id: 'm-sts135',
    date: 'July 8, 2011',
    year: 2011,
    title: 'STS-135 (Atlantis)',
    program: 'Space Shuttle',
    description: 'The 135th and final mission of the American Space Shuttle program, delivering supplies to the International Space Station.',
    crew: ['Christopher Ferguson', 'Douglas Hurley', 'Sandra Magnus', 'Rex Walheim'],
    vehicle: 'Space Shuttle Atlantis',
    duration: '12d 18h 28m',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Atlantis_taking_off_on_STS-135.jpg'
  }
];
