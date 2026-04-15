# Der Ultimative Vibe Coding Guide — 2026 Edition

Eine interaktive, moderne Web-App, die als umfassender Leitfaden für KI-gestützte Softwareentwicklung (Vibe Coding) dient. Von der ersten Idee bis zur fertigen App im Store — Schritt für Schritt, für Einsteiger und Fortgeschrittene.

---

## Was ist Vibe Coding?

Vibe Coding beschreibt einen modernen Entwicklungsansatz, bei dem du als Entwickler den **Vibe** (Idee, Architektur, User Experience) vorgibst und eine KI die eigentliche Code-Implementierung übernimmt. Du bist Architekt und Regisseur — die KI ist dein unermüdliches Entwickler-Team.

---

## Inhalte des Guides

### Haupt-Guide (6 Phasen)

| Phase | Thema | Inhalt |
|---|---|---|
| 1 | **Die Spec** | Spec-Driven Development, Architektur-Entscheidungen, GitHub Spec Kit |
| 1.1 | **Tech-Stack** | Die vier empfohlenen Tech-Stacks (MVP, Mobile, Data/AI, Enterprise) |
| 2 | **UI/UX Design** | Design-Tools, Mobbin, Stitch, Figma-Workflow |
| 3 | **GitHub Setup** | Repository anlegen, `.gitignore`, Branch-Strategie |
| 4 | **Screens & Commits** | Screen-by-Screen-Entwicklung, saubere Commit-Messages, Git Tags |
| 5 | **Entwicklung** | KI-Prompts, Vibe Testing, Debugging-Strategien |
| 6 | **Deployment** | Frontend (Vercel), Backend (Render), Umgebungsvariablen & Security |

### Advanced Track (eigene Seite)

Für alle, die über Web-Apps hinausgehen wollen:

- **Native Android Apps** — Android Studio + Kotlin/Jetpack Compose mit Gemini CLI
- **Native iOS Apps** — Xcode + SwiftUI mit KI-Unterstützung
- **Hybride Container-Apps** — Capacitor (Ionic): Eine Web-Codebase, zwei native Apps
- **Kotlin Multiplatform (KMP)** — Geteilte Logik, native UIs für Android & iOS
- **App-Testing** — JUnit, Compose UI Tests, XCTest, KMP Shared Tests
- **Release-Prozess** — Google Play Store & Apple App Store, Schritt für Schritt

---

## Tech-Stack der App

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Routing:** Zustand-basiertes Client-Side-Routing (kein Router nötig)
- **Build:** Vite mit `@tailwindcss/vite` Plugin

---

## Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen
npm run build
```

---

## Projektstruktur

```
src/
├── components/          # Alle Sektions-Komponenten
│   ├── HeroSection.jsx
│   ├── IntroSection.jsx
│   ├── Phase1Section.jsx   # Die Spec
│   ├── Phase1_1Section.jsx # Tech-Stack
│   ├── Phase2Section.jsx   # UI/UX Design
│   ├── Phase3Section.jsx   # GitHub Setup
│   ├── Phase4Section.jsx   # Screens & Commits
│   ├── Phase5Section.jsx   # Entwicklung
│   ├── Phase6Section.jsx   # Deployment
│   ├── GoldenRulesSection.jsx
│   ├── AdvancedSection.jsx # Advanced Track Content
│   ├── Sidebar.jsx
│   ├── MobileMenu.jsx
│   ├── CodeBlock.jsx
│   ├── Callout.jsx
│   ├── SectionHeader.jsx
│   ├── ToolLink.jsx
│   └── PrintButton.jsx
├── pages/
│   └── AdvancedPage.jsx    # Eigenständige Advanced-Seite
├── data/
│   └── content.js          # Navigation & Inhalts-Daten
├── App.jsx                 # Root-Komponente mit Routing-Logik
└── main.jsx
```

---

## Features

- **Responsive Design** — Optimiert für Mobile, Tablet und Desktop
- **Sticky Sidebar** — Navigationssidebar mit aktivem Abschnitt-Tracking via IntersectionObserver
- **Mobile Menu** — Slide-in Navigation für kleine Bildschirme
- **Advanced-Seite** — Eigenständige Unterseite für Mobile-Entwicklung und Store-Releases
- **Code Highlighting** — Syntax-hervorgehobene Code-Blöcke für alle Beispiele
- **Print-Funktion** — Der Guide kann als Druckversion exportiert werden
- **Dark Theme** — Konsequentes Dark-UI mit `#060d1a` als Basis

---

## Design-System

Die App folgt einem konsequenten Dark-UI-Design:

| Token | Wert | Verwendung |
|---|---|---|
| `bg-primary` | `#060d1a` | Seitenhintergrund |
| `bg-card` | `#0a1628` | Karten & Panels |
| `border` | `#122035` | Trennlinien |
| `accent-cyan` | `#00d4ff` | Primäre Akzente, Links |
| `accent-amber` | `#f59e0b` | Advanced-Inhalte |
| `text-primary` | `#e2e8f0` | Haupttext |
| `text-muted` | `#94a3b8` | Beschreibungstexte |
| `text-subtle` | `#475569` | Dekorative Texte |

---

## Lizenz

MIT
