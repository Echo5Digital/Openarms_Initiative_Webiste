import Link from 'next/link';

export default function LegalPage({ title, updated, intro, sections }) {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <header className="legal-head">
          <span className="services-kicker">Open Arms Initiative</span>
          <h1>{title}</h1>
          <i className="legal-line" />
          <p className="legal-updated">Last updated: {updated}</p>
          <p className="legal-intro">{intro}</p>
        </header>

        <nav className="legal-toc" aria-label="On this page">
          <h2>On this page</h2>
          <ol>
            {sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
            ))}
            <li><a href="#contact">Contact Us</a></li>
          </ol>
        </nav>

        {sections.map((s) => (
          <section className="legal-section" id={s.id} key={s.id}>
            <h2>{s.title}</h2>
            {s.body.map((block, i) =>
              Array.isArray(block) ? (
                <ul key={i}>{block.map((item) => <li key={item}>{item}</li>)}</ul>
              ) : (
                <p key={i}>{block}</p>
              )
            )}
          </section>
        ))}

        <section className="legal-section legal-contact" id="contact">
          <h2>Contact Us</h2>
          <p>Questions about this page? Reach out any time.</p>
          <p>
            <strong>Open Arms Initiative</strong><br />
            1101 Sovereign Row Unit A<br />
            Oklahoma City, OK 73108<br />
            Phone: <a href="tel:+14059208934">(405) 920-8934</a><br />
            Email: <a href="mailto:info@openarmsinitiative.com">info@openarmsinitiative.com</a>
          </p>
          <p>
            You can also <Link href="/contact">contact us through our website</Link>.
          </p>
        </section>
      </div>
    </main>
  );
}
