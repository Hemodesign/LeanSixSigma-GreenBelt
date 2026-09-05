# Lean Six Sigma — Green Belt -harjoitusohjelma

Itsenäinen, selaimessa toimiva harjoitusohjelma Lean Six Sigma Green Belt -tason opiskeluun DMAIC-rungon mukaisesti. Koko sovellus on yksi riippumaton `index.html`-tiedosto — ei build-vaihetta, ei palvelinta, ei ulkoisia riippuvuuksia (paitsi Google Fonts).

## Sisältö

- **6 vaihetta**: Perusteet, Define, Measure, Analyze, Improve, Control
- **23 oppituntia**, joissa jokaisessa teoriaosuus ja 6 harjoituskysymystä
- **138 kysymystä**: monivalinta, tosi/epätosi ja paritustehtävät, kaikki selityksin
- **Loppukoe** (20 satunnaista kysymystä) ja **heikoimpien aiheiden harjoittelu**
- Edistymisen seuranta, "suorituskykykortti" (liukuva osuvuus) ja arvioitu harjoitussigma
- Tumma/vaalea tila, joka noudattaa laitteen asetusta

## Käyttö

Avaa `index.html` suoraan selaimessa, tai julkaise sivu GitHub Pagesin kautta:

1. Asetuksista **Settings → Pages**
2. Valitse lähteeksi `main`-haara, juurihakemisto (`/`)
3. Sivu julkaistuu osoitteessa `https://<käyttäjätunnus>.github.io/<repo>/`

Edistyminen tallentuu selaimen `localStorage`-muistiin laitekohtaisesti — mitään ei lähetetä palvelimelle.

## Tekninen toteutus

- Puhdas HTML/CSS/JavaScript, ei kirjastoja eikä build-työkalua
- Fontit: IBM Plex Sans Condensed, IBM Plex Serif, IBM Plex Mono (Google Fonts)
- Kaikki sisältö (`CURRICULUM`) määritelty suoraan `index.html`:n `<script>`-osiossa

## Oikeudet

Kaikki oikeudet pidätetään. Sisältöä ei ole lisensoitu uudelleenkäyttöön tai muokkaukseen ilman tekijän lupaa.
