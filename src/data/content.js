export const navItems = [
  { id: 'intro', label: 'Einleitung', phase: null },
  { id: 'phase1', label: 'Phase 1: Die Spec', phase: '1' },
  { id: 'phase1-1', label: '1.1 Tech-Stack', phase: '1.1' },
  { id: 'phase2', label: 'Phase 2: UI/UX Design', phase: '2' },
  { id: 'phase3', label: 'Phase 3: GitHub Setup', phase: '3' },
  { id: 'phase4', label: 'Phase 4: Screens & Commits', phase: '4' },
  { id: 'phase4-1', label: '4.1 Git Branches & Tags', phase: '4.1' },
  { id: 'phase5', label: 'Phase 5: Entwicklung', phase: '5' },
  { id: 'phase5-1', label: '5.1 Vibe Testing', phase: '5.1' },
  { id: 'phase5-2', label: '5.2 Debugging', phase: '5.2' },
  { id: 'phase6', label: 'Phase 6: Deployment', phase: '6' },
  { id: 'phase6-1', label: '6.1 Frontend hosten', phase: '6.1' },
  { id: 'phase6-2', label: '6.2 Backend hosten', phase: '6.2' },
  { id: 'phase6-3', label: '6.3 Env Variables', phase: '6.3' },
  { id: 'golden-rules', label: 'Goldene Regeln', phase: null },
];

export const techStacks = [
  {
    label: 'A',
    title: 'Der "Ich will schnell launchen" Stack',
    subtitle: 'Modern MVP / Monolith',
    description: 'Perfekt für Web-Apps, SaaS-Projekte, interne Tools.',
    items: [
      { category: 'Frontend', tech: 'React (oder Next.js) + Tailwind CSS' },
      { category: 'Backend', tech: 'Node.js (Express) oder Next.js API-Routen' },
      { category: 'Datenbank', tech: 'Supabase oder Firebase' },
    ],
  },
  {
    label: 'B',
    title: 'Der "Mobile First" Stack',
    subtitle: 'App Stores',
    description: 'Perfekt für echte Apps für iOS und Android aus einer einzigen Codebase.',
    items: [
      { category: 'Frontend/App', tech: 'React Native mit Expo' },
      { category: 'Backend/DB', tech: 'Firebase' },
    ],
  },
  {
    label: 'C',
    title: 'Der "Data & AI" Stack',
    subtitle: 'Heavy Logic / Backend Fokus',
    description: 'Perfekt für Apps mit viel Datenverarbeitung, Machine Learning oder komplexer Logik.',
    items: [
      { category: 'Frontend', tech: 'React + Tailwind CSS' },
      { category: 'Backend', tech: 'Python mit FastAPI' },
      { category: 'Datenbank', tech: 'PostgreSQL' },
    ],
  },
  {
    label: 'D',
    title: 'Der "Enterprise" Stack',
    subtitle: 'Skalierbare Microservices',
    description: 'Perfekt für große, komplexe Systeme, die von vielen Nutzern gleichzeitig verwendet werden.',
    items: [
      { category: 'Backend-Services', tech: 'Go (Golang) oder Java (Spring Boot)' },
      { category: 'Kommunikation', tech: 'REST oder gRPC' },
      { category: 'Infrastruktur', tech: 'Containerisiert mit Docker' },
    ],
  },
];

export const goldenRules = [
  {
    icon: 'Brain',
    title: 'Denk wie a Product Manager',
    description: 'Du bist der Architekt. Fokussiere dich auf das "Was" und "Warum", die KI kümmert sich um das "Wie".',
  },
  {
    icon: 'Baby',
    title: 'Kleine Schritte (Baby Steps)',
    description: 'Lass die KI nicht die ganze App auf einmal bauen. Mach Feature für Feature. Zuerst das UI, dann das Routing, dann das Backend.',
  },
  {
    icon: 'RefreshCw',
    title: 'Wenn es feststeckt, starte neu',
    description: 'Manchmal verrennt sich die KI in eine Sackgasse. Lösche den schlechten Code, mach einen Git-Reset und starte den Prompt neu.',
  },
  {
    icon: 'Heart',
    title: 'Vibe Check',
    description: 'Wenn sich der Code nicht gut anfühlt, sag es der KI. "Das ist zu kompliziert, bitte refactore das in saubere, kleinere Komponenten."',
  },
];
