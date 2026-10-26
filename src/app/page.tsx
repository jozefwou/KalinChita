"use client";

import { useEffect, useState } from "react";

const eventTimestamp = Date.parse("2026-10-30T23:00:00+01:00");

function getTimeRemaining() {
  const totalSeconds = Math.max(0, Math.floor((eventTimestamp - Date.now()) / 1000));

  return {
    dagen: Math.floor(totalSeconds / 86_400),
    uren: Math.floor((totalSeconds % 86_400) / 3_600),
    minuten: Math.floor((totalSeconds % 3_600) / 60),
    seconden: totalSeconds % 60,
  };
}

const instagramUrl = "https://www.instagram.com/kalin_chita_26/";
const ticketUrl = getTicketUrl(process.env.NEXT_PUBLIC_TICKET_URL);

function getTicketUrl(value: string | undefined) {
  if (!value?.trim()) return null;

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

function TicketAction({ className }: { className: string }) {
  if (!ticketUrl) {
    return (
      <button className={className} type="button" disabled>
        TICKETVERKOOP BINNENKORT BESCHIKBAAR
      </button>
    );
  }

  return (
    <a className={className} href={ticketUrl}>
      KOOP TICKETS — €5 <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Home() {
  const [tijd, setTijd] = useState({ dagen: 0, uren: 0, minuten: 0, seconden: 0 });

  useEffect(() => {
    const updateCountdown = () => setTijd(getTimeRemaining());
    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#boven" aria-label="Kalin Chita — naar boven">
          KALIN <span>CHITA</span>
        </a>
        <nav className="main-nav" aria-label="Hoofdnavigatie">
          <a href="#info">Info</a>
          <a href="#tickets">Tickets</a>
        </nav>
        <a className="header-ticket-link" href="#tickets">
          Tickets <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="boven" aria-labelledby="hero-title">
        <div className="hero-lines" aria-hidden="true">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <path d="M820-80C650 100 1420 160 1190 330S700 450 910 620 1310 730 1550 610" />
            <path d="M900-100C710 100 1480 190 1250 360S760 470 970 650 1360 770 1580 650" />
            <path d="M1040-100C830 90 1530 220 1320 400S830 510 1060 690 1430 810 1620 700" />
            <path d="M-120 730C150 570 300 960 590 790S700 500 450 480 80 600-70 430" />
          </svg>
        </div>
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-dot" />
            VRIJDAG 30 OKTOBER 2026 <span className="eyebrow-divider">/</span> ANTWERPEN
          </p>
          <h1 id="hero-title" className="hero-title">
            <span className="hero-title-top">KALIN</span>
            <span className="hero-title-bottom">CHITA</span>
          </h1>
          <div className="event-edition">
            <span className="edition-rule" />
            <span className="edition-part">PART <strong>2</strong></span>
            <span className="edition-rule" />
            <span className="edition-halloween">HALLOWEEN EDITION</span>
          </div>
          <div className="hero-details">
            <div className="hero-venue">
              <span className="detail-label">DE NACHT BEGINT IN</span>
              <strong>DEN AALMOEZENIER</strong>
              <span>ANTWERPEN, BELGIË</span>
            </div>
            <div className="hero-dj">
              <span className="detail-label">AAN DE DRAAITAFELS</span>
              <strong>DJ ACHILLE</strong>
            </div>
            <TicketAction className="button button--orange" />
          </div>
        </div>
        <div className="hero-stamp" aria-label="Deuren open om 22.30 uur">
          <span>DEUREN OPEN</span>
          <strong>22:30</strong>
          <span>ANTWERPEN</span>
        </div>
        <a className="scroll-cue" href="#aftellen">
          <span className="scroll-cue-line" />
          ONTDEK DE NACHT
        </a>
      </section>

      <div className="ticker" aria-label="Kalin Chita Part 2 Halloween Edition">
        <div className="ticker-track" aria-hidden="true">
          {Array.from({ length: 4 }, (_, index) => (
            <span className="ticker-group" key={index}>
              KALIN CHITA PART 2 <span>✳</span> HALLOWEEN EDITION <span>✳</span> VRIJDAG 30 OKTOBER
              <span>✳</span>
            </span>
          ))}
        </div>
      </div>

      <section className="countdown-section" id="aftellen" aria-labelledby="countdown-title">
        <p className="eyebrow"><span className="eyebrow-dot" />DE NACHT KOMT DICHTERBIJ</p>
        <h2 id="countdown-title">ZIJT GIJ <span>ER KLAAR VOOR?</span></h2>
        <div className="countdown" aria-live="off">
          {Object.entries(tijd).map(([eenheid, waarde]) => (
            <div className="countdown-unit" key={eenheid}>
              <strong>{String(waarde).padStart(2, "0")}</strong>
              <span>{eenheid}</span>
            </div>
          ))}
        </div>
        <p className="countdown-note">TOT VRIJDAG 30 OKTOBER · 23:00 · BRUSSELSE TIJD</p>
      </section>

      <section className="info-section" id="info" aria-labelledby="info-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" />ALLE INFO OP EEN RIJ</p>
            <h2 id="info-title">ÉÉN NACHT.<br /><span>PART 2.</span></h2>
          </div>
          <p className="section-intro">
            De tweede editie van Kalin Chita. Halloween in Antwerpen, met DJ Achille aan de decks.
          </p>
        </div>

        <div className="info-grid">
          <article className="info-card">
            <span className="info-card-number">01 / WANNEER</span>
            <span className="info-card-symbol" aria-hidden="true">◷</span>
            <h3>VRIJDAG<br />30 OKTOBER 2026</h3>
            <p>Deuren open om 22:30<br />Feest van 23:00 tot 04:00</p>
          </article>
          <article className="info-card">
            <span className="info-card-number">02 / WAAR</span>
            <span className="info-card-symbol" aria-hidden="true">⌖</span>
            <h3>DEN<br />AALMOEZENIER</h3>
            <p>Antwerpen, België</p>
          </article>
          <article className="info-card">
            <span className="info-card-number">03 / MUZIEK</span>
            <span className="info-card-symbol" aria-hidden="true">♫</span>
            <h3>DJ<br />ACHILLE</h3>
            <p>Aan de draaitafels, de hele nacht.</p>
          </article>
        </div>

        <div className="rules-row">
          <span className="rules-icon" aria-hidden="true">!</span>
          <div>
            <strong>TOEGANG VANAF 17 JAAR</strong>
            <p>Verkleed komen wordt verwacht. Tickets kosten €5, inclusief één gratis drankje per ticket.</p>
          </div>
          <span className="rules-age">17+</span>
        </div>
      </section>

      <section className="ticket-section" id="tickets" aria-labelledby="ticket-title">
        <div className="ticket-lines" aria-hidden="true">
          <svg viewBox="0 0 800 650" preserveAspectRatio="xMidYMid slice">
            <path d="M780-60C540 120 850 210 640 340S320 420 430 690" />
            <path d="M850-30C600 150 920 240 700 380S390 460 500 720" />
            <path d="M920 0C650 190 990 270 760 430S460 500 570 760" />
          </svg>
        </div>
        <div className="ticket-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />TICKETVERKOOP</p>
          <h2 id="ticket-title">ZIEN WE <span>U DAAR?</span></h2>
          <p className="ticket-description">
            €5 per ticket<br />
            Inclusief één gratis drankje per ticket
          </p>
          <TicketAction className="button button--orange ticket-button" />
          {!ticketUrl && (
            <p className="ticket-note" role="status">
              Ticketverkoop binnenkort beschikbaar
            </p>
          )}
        </div>
        <div className="ticket-graphic" aria-hidden="true">
          <span className="ticket-orbit ticket-orbit--one" />
          <span className="ticket-orbit ticket-orbit--two" />
          <span className="ticket-glow" />
          <span className="ticket-star">✳</span>
          <span className="ticket-number">€<br /><i>5</i></span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#boven" aria-label="Kalin Chita — naar boven">
          KALIN <span>CHITA</span>
        </a>
        <p>PART 2 · HALLOWEEN EDITION · ANTWERPEN</p>
        <a
          className="instagram-link"
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          VOLG ONS OP INSTAGRAM <span>@KALIN_CHITA_26</span> ↗
        </a>
      </footer>
    </main>
  );
}
