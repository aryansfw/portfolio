export const projects = [
  {
    title: 'Beecloud',
    summary: 'A cloud-accounting SaaS product with finance, inventory, and operations workflows.',
    problem: 'Growing businesses need consistent transaction, documentation, and reporting workflows across finance and operations.',
    approach: 'I delivered and refined frontend workflows across accounting, cash/bank, purchasing, sales, inventory, and reporting, including shared attachment and financial-period controls.',
    outcome: 'Delivered 150+ tracked frontend tasks, including features and reliability improvements, for a product used by 140,000+ business owners.',
    stack: ['React', 'TypeScript', 'Vite', 'Ant Design', 'TanStack Query'],
    image: {
      src: '/projects/beecloud.png',
      alt: 'Beecloud accounting dashboard with finance and operations metrics.',
      width: 2535,
      height: 1600,
    },
    live: 'https://app.bee.id',
    id: 'beecloud-dashboard',
  },
  {
    title: 'Sahabat CAPD',
    summary: 'A deployed CAPD monitoring application for treatment logging and health-data review.',
    problem: 'CAPD patients and clinicians needed a reliable way to record daily exchanges and health indicators between clinic visits.',
    approach: 'As a frontend contributor, I built patient logbook workflows, health charts, medical-record editing, push notifications, guided help, and camera-based image-detection integration.',
    outcome: 'Between March 2024 and May 2025, the deployed product recorded 415 completed exchanges from 43 patients across 8 hospitals, 9 clinicians, and 265 active days.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Laravel'],
    image: {
      src: '/projects/sahabat-capd.png',
      alt: 'Sahabat CAPD patient dashboard with treatment reminder and feature cards.',
      width: 603,
      height: 1311,
    },
    live: 'https://riset.its.ac.id/sahabat-capdv2/login',
    id: 'sahabat-capd',
  },
  {
    title: 'Winterview',
    summary: 'A solo-built interview practice app with AI-generated questions, timed sessions, and recorded answer review.',
    problem: 'Job seekers need a way to rehearse timed answers and review their delivery without coordinating a mock interviewer.',
    approach: 'I built a React and Express monorepo with shared validation, Groq question generation, Supabase authentication and persistence, and browser-based video recording.',
    outcome: 'Delivered a live end-to-end MVP with authentication, AI question generation, answer recording, review, and saved interviews.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Express', 'Supabase', 'Groq'],
    image: {
      src: '/projects/winterview.png',
      alt: 'Winterview active interview with webcam preview, recording status, question, and countdown.',
      width: 2560,
      height: 1600,
    },
    source: 'https://github.com/aryansfw/winterview',
    live: 'https://winterview.my.id',
    id: 'winterview',
  },
  {
    title: 'Schematics ITS 2023',
    summary:
      'An event platform with public information, participant registration, and administration workflows.',
    problem:
      'Organizers needed a reliable way to guide thousands of participants through event information, registration, and verification.',
    approach:
      'I contributed responsive landing pages, bootcamp and seminar registration flows, payment-proof uploads, and administrator participant-review screens.',
    outcome:
      'Contributed frontend features for an event platform serving 3,000+ participants.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
      'React Hook Form',
    ],
    image: {
      src: '/projects/schematics.png',
      alt: 'Schematics ITS 2023 landing page with event navigation and registration actions.',
      width: 2535,
      height: 1600,
    },
    live: 'https://schematics-23.vercel.app/',
    id: 'schematics-its-2023',
  },
  {
    title: 'ITS Expo 2023',
    summary:
      'An event platform for competition information, participant workflows, and administration.',
    problem:
      'Event organizers needed accessible public information and reliable participant and administrator workflows across multiple competitions.',
    approach:
      'I built responsive contest pages and dashboard experiences, integrated APIs for dynamic content, and resolved payment, ordering, and mobile-interface issues.',
    outcome:
      'Built frontend pages and integrated backend APIs for an event website used by 500+ participants.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Axios'],
    image: {
      src: '/projects/its-expo.png',
      alt: 'ITS Expo 2023 landing page with cultural illustrations and event navigation.',
      width: 2535,
      height: 1600,
    },
    live: 'https://itsexpo-frontend.vercel.app/',
    id: 'its-expo-2023',
  },
]
