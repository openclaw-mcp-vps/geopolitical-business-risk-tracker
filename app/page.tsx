export default function Page() {
  const faqs = [
    {
      q: "What data sources does GeoRisk Tracker use?",
      a: "We aggregate sanctions lists (OFAC, EU, UN), regulatory filings, and geopolitical news from 50+ authoritative sources, updated in real time."
    },
    {
      q: "How does the AI compliance analysis work?",
      a: "Our AI engine maps incoming geopolitical events to your business profile, flags relevant risks, and generates actionable compliance recommendations automatically."
    },
    {
      q: "Can I customize which regions and sectors to monitor?",
      a: "Yes. You can configure custom monitoring rules by country, industry, counterparty type, and risk threshold to focus alerts on what matters to your operations."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#161b22] border border-[#30363d] text-[#58a6ff] uppercase tracking-widest">
          Compliance Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Monitor Geopolitical Events<br />
          <span className="text-[#58a6ff]">Affecting Your Business</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Real-time sanctions tracking, regulatory change alerts, and AI-powered compliance suggestions — built for international businesses and compliance teams.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Monitoring — $149/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🌍", title: "50+ Data Sources", desc: "OFAC, EU, UN sanctions and global regulatory feeds" },
            { icon: "🤖", title: "AI Risk Analysis", desc: "Automated compliance suggestions tailored to your business" },
            { icon: "🔔", title: "Instant Alerts", desc: "Real-time notifications for events that match your rules" }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Professional</div>
          <div className="text-5xl font-extrabold text-white mb-1">$149</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Real-time sanctions & regulatory monitoring",
              "AI-powered compliance recommendations",
              "Customizable monitoring rules & alerts",
              "Dashboard analytics & risk scoring",
              "Email & Slack notifications",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} GeoRisk Tracker. All rights reserved.
      </footer>
    </main>
  );
}
