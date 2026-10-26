# KALIN CHITA PART 2 — HALLOWEEN EDITION

Website voor het evenement op vrijdag 30 oktober 2026 in Den Aalmoezenier, Antwerpen. Met DJ Achille. Deuren open om 22:30; het evenement loopt van 23:00 tot 04:00. Tickets kosten €5, inclusief één gratis drankje. Toegang vanaf 17 jaar.

## Lokaal starten

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) om de website te bekijken.

## Controleren en bouwen

```bash
npm run lint
npm run build
```

## Ticketverkoop

Stel `NEXT_PUBLIC_TICKET_URL` in op de HTTPS-link naar het evenement op Ticketwinkel, bijvoorbeeld in `.env.local` tijdens ontwikkeling of in de omgevingsinstellingen van de hostingprovider vóór het bouwen. De ticketknoppen verwijzen dan naar die externe pagina. Zolang de variabele ontbreekt of geen geldige HTTPS-link bevat, blijft ticketverkoop uitgeschakeld en verschijnt de melding “Ticketverkoop binnenkort beschikbaar”.

Volg het officiële Instagram-account [@kalin_chita_26](https://www.instagram.com/kalin_chita_26/) voor updates en ticketinformatie. Betalingen zijn niet geïmplementeerd.
