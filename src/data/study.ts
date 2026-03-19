import { QuizQuestion, Flashcard } from '../types';

export const quizzes: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Which rocket was the first to cross the Kármán line into space?',
    options: ['Saturn V', 'V-2 (A-4)', 'R-7 Semyorka', 'Goddard\'s 1926 Rocket'],
    correctAnswerIndex: 1,
    explanation: 'The German V-2 rocket, developed during WWII, was the first artificial object to travel into space by crossing the Kármán line in 1942.',
    category: 'modern'
  },
  {
    id: 'q2',
    question: 'What type of engine cycle does the SpaceX Raptor engine use?',
    options: ['Gas-generator', 'Staged combustion', 'Full-flow staged combustion', 'Expander cycle'],
    correctAnswerIndex: 2,
    explanation: 'The Raptor engine uses a highly complex and efficient full-flow staged combustion cycle, the first operational engine to do so.',
    category: 'technology'
  },
  {
    id: 'q3',
    question: 'What was the primary innovation of the Mysorean rockets?',
    options: ['Liquid fuel', 'Multi-staging', 'Iron casing', 'Gimbaled thrust'],
    correctAnswerIndex: 2,
    explanation: 'Mysorean rockets used iron casings, which allowed for higher combustion pressure and greater range than previous paper or bamboo designs.',
    category: 'ancient'
  }
];

export const flashcards: Flashcard[] = [
  {
    id: 'f1',
    front: 'Specific Impulse (Isp)',
    back: 'A measure of the efficiency of rocket propellants, defined as the thrust produced per unit weight flow of propellant. Higher Isp means better fuel efficiency.',
    category: 'technology'
  },
  {
    id: 'f2',
    front: 'Staged Combustion Cycle',
    back: 'A power cycle of a bipropellant rocket engine where propellant is first burned in a preburner to power the turbopumps, and the exhaust is then directed into the main combustion chamber.',
    category: 'technology'
  },
  {
    id: 'f3',
    front: 'Kármán Line',
    back: 'An attempt to define a boundary between Earth\'s atmosphere and outer space, typically set at an altitude of 100 kilometers (62 miles).',
    category: 'general'
  }
];
