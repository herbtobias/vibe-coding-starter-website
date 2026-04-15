import { Flame, Smartphone, Apple, Globe, Layers, TestTube, Store, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import CodeBlock from './CodeBlock';
import Callout from './Callout';
import ToolLink from './ToolLink';

const capAddCmds = `npx cap add android
npx cap add ios`;

const capSyncCmd = `npx cap sync`;

function SubHeader({ icon: Icon, title, id }) {
  return (
    <div id={id} className="flex items-center gap-3 mb-5 mt-10 scroll-mt-20">
      <div className="w-7 h-7 border border-[#162840] flex items-center justify-center bg-[#0a1628] shrink-0">
        <Icon size={14} className="text-[#f59e0b]" />
      </div>
      <h3 className="text-lg font-bold text-[#e2e8f0]">{title}</h3>
    </div>
  );
}

function StepList({ steps }) {
  return (
    <div className="space-y-2 mb-5">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-3 text-xs">
          <span className="text-[#f59e0b] font-mono font-bold min-w-[20px]">{i + 1}.</span>
          <span className="text-[#94a3b8] leading-relaxed">{step}</span>
        </div>
      ))}
    </div>
  );
}

function PromptBox({ title, children }) {
  return (
    <div className="border border-[#f59e0b]/20 bg-[#f59e0b]/5 rounded-none p-4 my-4">
      {title && (
        <p className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-widest mb-2">{title}</p>
      )}
      <p className="text-xs text-[#94a3b8] leading-relaxed italic">&ldquo;{children}&rdquo;</p>
    </div>
  );
}

export default function AdvancedSection() {
  return (
    <section id="advanced" className="mb-12 scroll-mt-20">
      <SectionHeader
        phase={null}
        title="Advanced: Mobile Apps, Hybride Ansätze & Stores"
        icon={Flame}
      />

      <div className="text-[#94a3b8] text-base leading-relaxed mb-10">
        <p>
          Willkommen in der Königsklasse! Web-Apps sind fantastisch, aber manchmal brauchst du eine echte App,
          die sich Nutzer aus dem Play Store oder App Store herunterladen können. Hier hast du mehrere Wege:
          Den nativen Weg (maximale Performance), den hybriden Container-Weg (maximaler Speed bei der Entwicklung)
          oder den Kotlin Multiplatform Weg (das Beste aus beiden Welten).
        </p>
      </div>

      {/* Exkurs 1: Android */}
      <SubHeader icon={Smartphone} title="Exkurs 1: Native Android Apps bauen (Android Studio)" id="advanced-android" />

      <p className="text-[#94a3b8] text-sm mb-5">
        Hier kombinieren wir die visuelle Kraft von{' '}
        <ToolLink href="https://stitch.withgoogle.com">Stitch</ToolLink> /{' '}
        <ToolLink href="https://mobbin.com">Mobbin</ToolLink> mit der Logik von{' '}
        <ToolLink href="https://developer.android.com/studio">Android Studio</ToolLink>.
      </p>

      <div className="space-y-5">
        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840]">
            <p className="text-sm font-semibold text-[#e2e8f0]">Schritt 1 – Das Fundament (Leeres Projekt)</p>
          </div>
          <div className="p-5 bg-[#0a1628]">
            <p className="text-xs text-[#475569] italic mb-3">Lass die KI nicht die gesamte App-Struktur aus dem Nichts erschaffen.</p>
            <StepList steps={[
              'Öffne Android Studio → "New Project".',
              'Wähle "Empty Activity" (Sprache: Kotlin, Build-Konfiguration: Jetpack Compose).',
              'Lass Android Studio kurz laden (Gradle Sync).',
            ]} />
          </div>
        </div>

        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840]">
            <p className="text-sm font-semibold text-[#e2e8f0]">Schritt 2 – Die Screens-Bibliothek anlegen</p>
          </div>
          <div className="p-5 bg-[#0a1628]">
            <StepList steps={[
              'Erstelle im Projekt-Verzeichnis einen Ordner namens screens.',
              'Mach Screenshots von deinen fertigen Stitch-Designs oder Mobbin-Referenzen.',
              'Lege die Bilder in den Ordner (z.B. login_screen.png).',
              'Lege deine SPEC.md aus Phase 1 ins Hauptverzeichnis.',
            ]} />
          </div>
        </div>

        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840]">
            <p className="text-sm font-semibold text-[#e2e8f0]">Schritt 3 – Das Terminal übernehmen (Gemini CLI)</p>
          </div>
          <div className="p-5 bg-[#0a1628]">
            <p className="text-xs text-[#94a3b8] mb-3">
              Öffne das Terminal direkt in Android Studio (unten auf "Terminal" klicken) und starte{' '}
              <ToolLink href="https://github.com/google-gemini/gemini-cli">Gemini CLI</ToolLink>.
            </p>
          </div>
        </div>

        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840]">
            <p className="text-sm font-semibold text-[#e2e8f0]">Schritt 4 – Prompts mit Bild + Spec kombinieren</p>
          </div>
          <div className="p-5 bg-[#0a1628]">
            <PromptBox title="Der perfekte Android-Prompt">
              Ich möchte das Login-Feature für unsere Android-App entwickeln. 1. Bitte lies dir die SPEC.md durch, um die Kernanforderungen und das Datenbank-Setup (z.B. Firebase) zu verstehen. 2. Analysiere dann das angehängte Bild screens/login_screen.png. Bitte generiere den Kotlin / Jetpack Compose Code, um dieses UI exakt nachzubauen. Erstelle zudem das dazugehörige ViewModel, um die Login-Logik gemäß der Spezifikation zu implementieren.
            </PromptBox>
          </div>
        </div>
      </div>

      {/* Exkurs 2: iOS */}
      <SubHeader icon={Apple} title="Exkurs 2: Native iOS Apps bauen (Xcode)" id="advanced-ios" />

      <p className="text-[#94a3b8] text-sm mb-5">
        <ToolLink href="https://developer.apple.com/xcode/swiftui/">SwiftUI</ToolLink> (Apples modernes UI-Framework)
        ist geradezu prädestiniert dafür, von KIs geschrieben zu werden, da es extrem lesbar ist.
      </p>

      <div className="space-y-5">
        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840]">
            <p className="text-sm font-semibold text-[#e2e8f0]">Schritt 1 – Das Fundament (Leeres Projekt)</p>
          </div>
          <div className="p-5 bg-[#0a1628]">
            <StepList steps={[
              'Öffne Xcode → "Create a new Xcode project".',
              'Wähle Vorlage "App" (Interface: "SwiftUI", Language: "Swift").',
              'Speichere das Projekt auf deiner Festplatte.',
            ]} />
          </div>
        </div>

        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840]">
            <p className="text-sm font-semibold text-[#e2e8f0]">Schritt 2 – Die Screens-Bibliothek anlegen</p>
          </div>
          <div className="p-5 bg-[#0a1628]">
            <StepList steps={[
              'Gehe in den Projektordner und erstelle den Ordner Screens.',
              'Speichere die Screenshots deiner Layouts ab.',
              'Speichere deine SPEC.md im Hauptverzeichnis.',
            ]} />
          </div>
        </div>

        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840]">
            <p className="text-sm font-semibold text-[#e2e8f0]">Schritt 3 – Das Terminal vorbereiten & Prompten</p>
          </div>
          <div className="p-5 bg-[#0a1628]">
            <p className="text-xs text-[#94a3b8] mb-3">
              Öffne die Terminal-App deines Macs, navigiere in den Projektordner und starte die{' '}
              <ToolLink href="https://github.com/google-gemini/gemini-cli">Gemini CLI</ToolLink>.
            </p>
            <PromptBox title="Der iOS-Prompt">
              Bitte lies dir die SPEC.md durch. Analysiere dann das angehängte Bild Screens/login_screen.png. Generiere den SwiftUI Code, um dieses UI exakt nachzubauen. Erstelle außerdem ein passendes ViewModel (@Observable), um die Logik gemäß der Spezifikation zu trennen.
            </PromptBox>
          </div>
        </div>
      </div>

      {/* Exkurs 3: Hybrid */}
      <SubHeader icon={Globe} title="Exkurs 3: Hybride Container-Apps (Der Smart-Shortcut)" id="advanced-hybrid" />

      <p className="text-[#94a3b8] text-sm mb-5">
        Du hast deine Web-App (React, Vue, HTML) eigentlich schon fertig und denkst dir: &ldquo;Ich will das jetzt nicht noch mal
        komplett in Kotlin oder Swift neu bauen!&rdquo;? Willkommen bei Container-basierten (hybriden) Apps!
      </p>

      <p className="text-[#94a3b8] text-sm mb-5">
        Bei diesem Ansatz nimmst du deine fertige Web-App und steckst sie in einen &ldquo;Container&rdquo; (eine Art unsichtbaren Browser),
        der sich auf dem Handy wie eine echte App verhält. Du hast nur eine einzige Codebase für Web, iOS und Android.
      </p>

      <div className="bg-[#0a1628] border border-[#f59e0b]/30 rounded-none overflow-hidden mb-5">
        <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-[#f59e0b]/10 to-transparent border-b border-[#162840]">
          <div>
            <ToolLink href="https://capacitorjs.com" className="font-bold text-[#e2e8f0] text-sm">
              Capacitor (von Ionic)
            </ToolLink>
            <p className="text-xs text-[#10b981]">Das Tool der Wahl</p>
          </div>
        </div>
        <div className="p-5 space-y-4">
          <p className="text-xs text-[#94a3b8] italic">Lass die KI dir bei diesen Schritten helfen:</p>
          <div className="space-y-2">
            <div className="flex gap-3 text-xs">
              <span className="text-[#f59e0b] font-mono font-bold min-w-[20px]">1.</span>
              <span className="text-[#94a3b8]">Navigiere im Terminal in dein bestehendes Web-Projekt.</span>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="text-[#f59e0b] font-mono font-bold min-w-[20px]">2.</span>
              <div className="text-[#94a3b8]">
                <p className="mb-1">Lass die KI Capacitor installieren:</p>
                <PromptBox>Bitte installiere Capacitor in diesem Projekt und initialisiere es. Konfiguriere den Build-Ordner entsprechend unseres Web-Setups.</PromptBox>
              </div>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="text-[#f59e0b] font-mono font-bold min-w-[20px]">3.</span>
              <span className="text-[#94a3b8]">Sobald Capacitor läuft, baust du deine Web-App (<code className="text-[#00d4ff] font-mono">npm run build</code>).</span>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="text-[#f59e0b] font-mono font-bold min-w-[20px]">4.</span>
              <div className="text-[#94a3b8] w-full">
                <p className="mb-1">Füge die Plattformen hinzu:</p>
                <CodeBlock code={capAddCmds} language="bash" />
              </div>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="text-[#f59e0b] font-mono font-bold min-w-[20px]">5.</span>
              <div className="text-[#94a3b8] w-full">
                <p className="mb-1">Synchronisiere deinen Web-Code in den Container:</p>
                <CodeBlock code={capSyncCmd} language="bash" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Callout type="tip" title="Boom!">
        Jetzt hat Capacitor einen echten Android-Studio-Ordner und einen Xcode-Ordner für dich generiert. Du kannst
        diese Ordner in den jeweiligen Programmen öffnen und hast eine vollwertige App, die im Hintergrund dein
        Web-Design nutzt!
      </Callout>

      {/* Exkurs 4: KMP */}
      <SubHeader icon={Layers} title="Exkurs 4: Kotlin Multiplatform (KMP) – Einmal Logik, zwei native Apps" id="advanced-kmp" />

      <p className="text-[#94a3b8] text-sm mb-5">
        Wenn Container-Apps nicht performant genug sind, aber zwei komplett getrennte Codebases (Android & iOS) zu viel
        Arbeit bedeuten, kommt{' '}
        <ToolLink href="https://kotlinlang.org/docs/multiplatform.html">Kotlin Multiplatform (KMP)</ToolLink> ins Spiel.
        Dies ist aktuell der Heilige Gral der App-Entwicklung.
      </p>

      <div className="bg-[#0a1628] border border-[#162840] rounded-none p-5 mb-5">
        <p className="text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-widest mb-3">Das Konzept</p>
        <p className="text-sm text-[#94a3b8] leading-relaxed">
          Du lässt die KI die gesamte &ldquo;langweilige&rdquo; Logik (Netzwerk-Aufrufe, Datenbank, ViewModel-Status) nur{' '}
          <strong className="text-[#e2e8f0]">ein einziges Mal</strong> in einem gemeinsamen Kotlin-Ordner (<code className="text-[#00d4ff] font-mono text-xs">shared</code>) schreiben.
          Danach baust du nur noch die visuelle Oberfläche ("View") zweimal: Einmal in{' '}
          <ToolLink href="https://developer.android.com/develop/ui/compose">Jetpack Compose</ToolLink> (Android) und
          einmal in <ToolLink href="https://developer.apple.com/xcode/swiftui/">SwiftUI</ToolLink> (iOS).
        </p>
      </div>

      <div className="space-y-4">
        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840]">
            <p className="text-sm font-semibold text-[#e2e8f0]">
              Schritt 1 – Das KMP Projekt anlegen
            </p>
          </div>
          <div className="p-5 bg-[#0a1628]">
            <p className="text-xs text-[#94a3b8]">
              Öffne Android Studio, installiere das offizielle{' '}
              <ToolLink href="https://plugins.jetbrains.com/plugin/14936-kotlin-multiplatform">&ldquo;Kotlin Multiplatform&rdquo; Plugin</ToolLink>{' '}
              und erstelle ein neues KMP-Projekt.
            </p>
          </div>
        </div>

        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840]">
            <p className="text-sm font-semibold text-[#e2e8f0]">Schritt 2 – Der Shared-Prompt (Die Logik)</p>
          </div>
          <div className="p-5 bg-[#0a1628]">
            <p className="text-xs text-[#475569] italic mb-2">Richte die KI auf den gemeinsamen Code-Ordner aus:</p>
            <PromptBox>
              Bitte lies dir die SPEC.md durch. Schreibe die Kern-Geschäftslogik für das Login-Feature im shared KMP-Modul. Erstelle ein plattformunabhängiges ViewModel (oder einen Controller) und nutze Ktor für den API-Call, sodass Android und iOS diese Logik direkt nutzen können.
            </PromptBox>
          </div>
        </div>

        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840]">
            <p className="text-sm font-semibold text-[#e2e8f0]">Schritt 3 – Der Android-UI Prompt</p>
          </div>
          <div className="p-5 bg-[#0a1628]">
            <PromptBox>
              Lies die Logik aus dem shared-Modul. Nutze das dortige Login-ViewModel und baue das UI für Android in Jetpack Compose, passend zum Bild screens/login.png.
            </PromptBox>
          </div>
        </div>

        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840]">
            <p className="text-sm font-semibold text-[#e2e8f0]">Schritt 4 – Der iOS-UI Prompt</p>
          </div>
          <div className="p-5 bg-[#0a1628]">
            <PromptBox>
              Öffne den iosApp Ordner im Projekt. Binde das shared Kotlin-Modul ein. Baue das UI für iOS in nativem SwiftUI passend zum Bild screens/login.png, wobei die Button-Klicks direkt die Funktionen aus dem KMP-Modul aufrufen sollen.
            </PromptBox>
          </div>
        </div>
      </div>

      <Callout type="info" title="Vorteil">
        Mit diesem Setup nutzt du 100% native Komponenten, minimierst aber Bugs enorm, weil deine iOS-App und
        Android-App die exakt selbe Rechenlogik verwenden!
      </Callout>

      {/* Exkurs 5: Testing */}
      <SubHeader icon={TestTube} title="Exkurs 5: App-Testing (Android, iOS & KMP)" id="advanced-testing" />

      <p className="text-[#94a3b8] text-sm mb-5">
        Eine App stürzt auf dem Smartphone schnell mal ab, wenn das Netzwerk weg ist oder der Bildschirm gedreht wird.
        Web-Tests sind schön und gut, aber native Apps brauchen eigene Test-Werkzeuge. Auch hier übernimmt die KI das
        Schreiben der Tests für dich!
      </p>

      <div className="space-y-5">
        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840] flex items-center gap-2">
            <Smartphone size={13} className="text-[#f59e0b]" />
            <p className="text-sm font-semibold text-[#e2e8f0]">Test-Prompts für Android (Kotlin)</p>
          </div>
          <div className="p-5 bg-[#0a1628] space-y-4">
            <p className="text-xs text-[#475569] italic">Android unterscheidet stark zwischen reiner Logik (Unit-Tests) und der Oberfläche (UI-Tests).</p>
            <div>
              <p className="text-xs font-mono text-[#f59e0b] mb-2">
                Für die Logik (<ToolLink href="https://junit.org/junit4/">JUnit</ToolLink>):
              </p>
              <PromptBox>
                Bitte generiere für das LoginViewModel Unit-Tests mit JUnit 4 und MockK. Teste explizit den Fall, dass die Netzwerkanfrage fehlschlägt. Achte darauf, dass du Kotlin Coroutines im Test richtig behandelst (runTest).
              </PromptBox>
            </div>
            <div>
              <p className="text-xs font-mono text-[#f59e0b] mb-2">
                Für das UI (<ToolLink href="https://developer.android.com/develop/ui/compose/testing">Compose UI Tests</ToolLink>):
              </p>
              <PromptBox>
                Erstelle einen Jetpack Compose UI Test für den LoginScreen. Lass den Test prüfen, ob der 'Anmelden'-Button erst klickbar wird, wenn E-Mail und Passwort eingegeben wurden.
              </PromptBox>
            </div>
          </div>
        </div>

        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840] flex items-center gap-2">
            <Apple size={13} className="text-[#f59e0b]" />
            <p className="text-sm font-semibold text-[#e2e8f0]">Test-Prompts für iOS (Swift)</p>
          </div>
          <div className="p-5 bg-[#0a1628] space-y-4">
            <p className="text-xs text-[#475569] italic">
              Unter Apple läuft alles über das{' '}
              <ToolLink href="https://developer.apple.com/documentation/xctest">XCTest-Framework</ToolLink>.
            </p>
            <div>
              <p className="text-xs font-mono text-[#f59e0b] mb-2">Für die Logik:</p>
              <PromptBox>
                Schreibe eine XCTestCase Klasse, um das LoginViewModel in SwiftUI zu testen. Simuliere einen asynchronen API-Call und prüfe, ob der Error-Status korrekt auf 'true' gesetzt wird, wenn falsche Daten übergeben werden.
              </PromptBox>
            </div>
            <div>
              <p className="text-xs font-mono text-[#f59e0b] mb-2">Für das UI:</p>
              <PromptBox>
                Erstelle einen XCUITest, der das Starten der App simuliert, auf das Textfeld 'E-Mail' tippt, einen Test-String eingibt und dann auf den Login-Button drückt.
              </PromptBox>
            </div>
          </div>
        </div>

        <div className="border border-[#f59e0b]/20 rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#f59e0b]/5 border-b border-[#f59e0b]/20 flex items-center gap-2">
            <Layers size={13} className="text-[#f59e0b]" />
            <p className="text-sm font-semibold text-[#e2e8f0]">Der Joker: Test-Prompts für KMP</p>
          </div>
          <div className="p-5 bg-[#0a1628]">
            <p className="text-xs text-[#475569] italic mb-3">
              Das Geniale an Kotlin Multiplatform ist, dass du die Kernlogik nur einmal testen musst!
            </p>
            <p className="text-xs font-mono text-[#f59e0b] mb-2">
              Für KMP (<ToolLink href="https://kotlinlang.org/api/latest/kotlin.test/">Shared Logic</ToolLink>):
            </p>
            <PromptBox>
              Öffne das shared/commonTest Verzeichnis. Schreibe Tests mit kotlin.test für unsere Geschäftslogik. Diese Tests müssen so aufgebaut sein, dass sie später erfolgreich sowohl auf der JVM (Android) als auch auf der nativen Apple-Umgebung (iOS) durchlaufen.
            </PromptBox>
          </div>
        </div>
      </div>

      {/* Exkurs 6: Release */}
      <SubHeader icon={Store} title="Exkurs 6: Release – Ab in den Play Store & App Store" id="advanced-release" />

      <p className="text-[#94a3b8] text-sm mb-6">
        Egal, ob du nativ, hybrid oder mit KMP gebaut hast – am Ende müssen die Apps in die Stores. So läuft der Prozess ab:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840] flex items-center gap-2">
            <Smartphone size={13} className="text-[#10b981]" />
            <p className="text-sm font-semibold text-[#e2e8f0]">Google Play Store (Android)</p>
          </div>
          <div className="p-5 bg-[#0a1628] space-y-3">
            <div className="flex gap-3 text-xs">
              <span className="text-[#10b981] font-mono font-bold min-w-[20px]">1.</span>
              <span className="text-[#94a3b8]">
                Du brauchst einen{' '}
                <ToolLink href="https://play.google.com/console/signup">Google Play Console Account</ToolLink>{' '}
                (kostet einmalig 25&nbsp;$).
              </span>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="text-[#10b981] font-mono font-bold min-w-[20px]">2.</span>
              <span className="text-[#94a3b8]">
                <strong className="text-[#e2e8f0]">Das App Bundle:</strong> Öffne dein Projekt in Android Studio.
                Gehe auf <em>Build → Generate Signed Bundle / APK</em> und wähle Android App Bundle (.aab).
                Erstelle einen "Keystore" und lass die .aab Datei generieren.
              </span>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="text-[#10b981] font-mono font-bold min-w-[20px]">3.</span>
              <span className="text-[#94a3b8]">
                <strong className="text-[#e2e8f0]">Store Listing:</strong> Logge dich in die Play Console ein,
                lege deine App an, lade die .aab Datei hoch, fülle Beschreibungen aus und lade Screenshots hoch.
              </span>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="text-[#10b981] font-mono font-bold min-w-[20px]">4.</span>
              <span className="text-[#94a3b8]">
                <strong className="text-[#e2e8f0]">Review:</strong> Klicke auf Release. Google prüft die App
                (dauert beim ersten Mal ein paar Tage) – und dann bist du live!
              </span>
            </div>
          </div>
        </div>

        <div className="border border-[#162840] rounded-none overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#162840] flex items-center gap-2">
            <Apple size={13} className="text-[#10b981]" />
            <p className="text-sm font-semibold text-[#e2e8f0]">Apple App Store (iOS)</p>
          </div>
          <div className="p-5 bg-[#0a1628] space-y-3">
            <div className="flex gap-3 text-xs">
              <span className="text-[#10b981] font-mono font-bold min-w-[20px]">1.</span>
              <span className="text-[#94a3b8]">
                Du benötigst das{' '}
                <ToolLink href="https://developer.apple.com/programs/">Apple Developer Program</ToolLink>{' '}
                (kostet ca. 99&nbsp;$ pro Jahr).
              </span>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="text-[#10b981] font-mono font-bold min-w-[20px]">2.</span>
              <span className="text-[#94a3b8]">
                <strong className="text-[#e2e8f0]">Archivieren:</strong> Öffne dein Projekt in Xcode. Wähle
                als Zielgerät "Any iOS Device (arm64)". Gehe im Menü auf <em>Product → Archive</em>.
              </span>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="text-[#10b981] font-mono font-bold min-w-[20px]">3.</span>
              <span className="text-[#94a3b8]">
                <strong className="text-[#e2e8f0]">Upload:</strong> Im "Organizer" klicke auf{' '}
                <em>Distribute App</em> und lade sie in den{' '}
                <ToolLink href="https://appstoreconnect.apple.com">App Store Connect</ToolLink> hoch.
              </span>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="text-[#10b981] font-mono font-bold min-w-[20px]">4.</span>
              <span className="text-[#94a3b8]">
                <strong className="text-[#e2e8f0]">TestFlight & Release:</strong> Schicke deine App über{' '}
                <ToolLink href="https://developer.apple.com/testflight/">TestFlight</ToolLink> an Beta-Tester.
                Danach reichst du die App bei Apple zur offiziellen Überprüfung ein.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
