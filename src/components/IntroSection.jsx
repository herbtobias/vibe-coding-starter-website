export default function IntroSection() {
  const opportunities = [
    {
      icon: '💡',
      title: 'Gründe dein Startup an einem Wochenende',
      text: 'Du hast eine Millionen-Dollar-Idee? Du brauchst kein Team mehr, um einen ersten Prototypen (MVP) zu bauen. Du baust ihn einfach selbst.',
    },
    {
      icon: '🛠️',
      title: 'Löse echte Alltagsprobleme',
      text: 'Du bist Vermieter und hasst die jährliche Zettelwirtschaft bei der Nebenkostenabrechnung? Vibe-code dir an einem einzigen Nachmittag eine maßgeschneiderte Nebenkosten-App, die Rechnungen verwaltet und die Abrechnung für deine Mieter per Knopfdruck erstellt. Schluss mit dem ewigen Excel-Chaos!',
    },
    {
      icon: '🎮',
      title: 'Lass deiner Kreativität freien Lauf',
      text: 'Eine Fitness-App nur für dich? Ein kleines Spiel? Ein Tool für deinen Verein? Deine Fantasie ist ab sofort das einzige Limit.',
    },
  ];

  return (
    <section id="intro-text" className="relative bg-[#060d1a] border-b border-[#122035]">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        <div className="mb-12">
          <p className="text-[#94a3b8] text-lg md:text-xl leading-relaxed mb-6">
            Stell dir vor, die Barriere zwischen deiner genialen Idee und dem fertigen Produkt wäre plötzlich
            verschwunden. Keine monatelangen Frustrationen mehr über vergessene Semikolons, keine stundenlange
            Fehlersuche in kryptischem Code und keine steile Lernkurve, die dich davon abhält, einfach loszulegen.
          </p>
          <p className="text-[#e2e8f0] text-lg md:text-xl leading-relaxed font-medium">
            Willkommen in der Zukunft der Softwareentwicklung.{' '}
            <span className="text-[#00d4ff]">Willkommen in der Ära des Vibe Codings!</span>
          </p>
        </div>

        <div className="bg-[#0a1628] border border-[#122035] p-6 md:p-8 mb-12">
          <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed">
            Beim Vibe Coding bist du nicht länger der Fließbandarbeiter im Maschinenraum des Codes –
            du bist der <strong className="text-[#e2e8f0]">Architekt, der Regisseur, der Visionär</strong>.
            Du gibst den Vibe vor: die Idee, die Architektur, die User Experience und das Gefühl, das deine
            App vermitteln soll. Die KI ist dein unermüdliches, hochintelligentes Entwickler-Team, das deine
            Vision in Sekunden in echten, funktionierenden Code übersetzt.
          </p>
        </div>

        <div className="mb-12">
          <p className="text-[#00d4ff] text-sm font-mono font-bold uppercase tracking-[0.2em] mb-8">
            Was bedeutet das für dich? Unendliche Möglichkeiten!
          </p>

          <div className="space-y-6">
            {opportunities.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 bg-[#0a1628]/50 border border-[#122035] p-5 hover:border-[#00d4ff]/20 transition-colors duration-200"
              >
                <div className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="text-[#e2e8f0] font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-l-2 border-[#00d4ff] pl-6 mb-12">
          <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed">
            Du musst nicht wissen, wie man einen Server konfiguriert oder wie die genaue Syntax von Swift,
            Kotlin oder React lautet.{' '}
            <strong className="text-[#e2e8f0]">
              Du musst nur wissen, was du willst und warum du es willst.
            </strong>
          </p>
        </div>

        <div className="bg-[#00d4ff]/5 border border-[#00d4ff]/20 p-6 md:p-8">
          <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed">
            Dieser Guide ist deine <strong className="text-[#e2e8f0]">Eintrittskarte in diese neue Welt</strong>.
            Er nimmt dich an die Hand und führt dich durch einen professionellen Software-Entwicklungsprozess –
            aber komplett auf KI-gestütztes Arbeiten ausgelegt. Schnall dich an, mach den Kopf frei für deine
            besten Ideen und lass uns gemeinsam Software erschaffen, wie es noch nie zuvor möglich war.{' '}
            <span className="text-[#00d4ff] font-bold">Let's go! 🚀</span>
          </p>
        </div>

      </div>
    </section>
  );
}
