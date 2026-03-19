export type EraCategory = 'ancient' | 'modern' | 'current';

export interface EraSection {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
  image?: string;
  companyUrl?: string;
}

export interface Era {
  id: string;
  name: string;
  category: EraCategory;
  startYear: number | string;
  endYear: number | string;
  description: string;
  image: string;
  sections?: EraSection[];
}

export interface Rocket {
  id: string;
  name: string;
  eraId: string;
  country: string;
  type: string;
  height: number; // meters
  mass: number; // kg
  payloadToLEO: number; // kg
  firstFlight: string;
  status: 'active' | 'retired' | 'development' | 'historical';
  description: string;
  image: string;
  militaryContext?: string;
}

export interface Engine {
  id: string;
  name: string;
  type: 'solid' | 'liquid' | 'hybrid' | 'electric' | 'nuclear';
  propellants: string;
  thrust: number; // kN
  isp: number; // seconds
  chamberPressure?: number; // bar
  cycle?: string;
  description: string;
  image: string;
  manufacturer?: string;
  companyUrl?: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  category: 'military' | 'civil' | 'scientific';
  image?: string;
}

export interface MissionEvent {
  id: string;
  date: string;
  year: number;
  title: string;
  program: 'Mercury' | 'Gemini' | 'Apollo' | 'Skylab' | 'ASTP' | 'Space Shuttle';
  description: string;
  crew: string[];
  vehicle: string;
  image?: string;
  duration?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  relatedTerms?: string[];
}
