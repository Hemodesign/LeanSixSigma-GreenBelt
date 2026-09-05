# Lean Six Sigma — Green Belt -harjoitusohjelma

Itsenäinen, selaimessa toimiva harjoitusohjelma Lean Six Sigma Green Belt -tason opiskeluun DMAIC-rungon mukaisesti. Sovelluslogiikka on yhdessä `index.html`-tiedostossa — ei build-vaihetta, ei palvelinta, ei ulkoisia riippuvuuksia (paitsi Google Fonts). Mukana on lisäksi asennettavuuden (PWA) vaatimat pienet liitännäistiedostot.

## Tiedostot — kaikki ladataan GitHubiin

| Tiedosto | Pakollinen? | Mikä se on |
|---|---|---|
| `index.html` | Kyllä | Koko sovellus |
| `manifest.json` | Kyllä, jotta kotinäytön kuvake toimii | Kertoo selaimelle sovelluksen nimen, värit ja kuvakkeet |
| `sw.js` | Kyllä, jotta kotinäytön kuvake toimii | Minimaalinen service worker; ei välimuisti mitään, mahdollistaa vain asennuksen |
| `favicon.svg` | Kyllä | Selaimen välilehden kuvake |
| `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` | Kyllä | Kotinäytön/asennuksen kuvakkeet eri kokoina |
| `README.md` | Ei | Tämä kuvaus, ei vaikuta sovellukseen |
| `.gitignore` | Ei | Vain git-komentorivikäyttöön |

Lataa kaikki yllä "Kyllä"-merkityt tiedostot GitHubiin **samaan kansioon (repon juureen)** — älä laita niitä alikansioon, sillä `index.html` viittaa niihin suhteellisilla poluilla.

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

### Asennus kotinäytölle (PWA)

Kun sivu on julkaistu GitHub Pagesissa (HTTPS on pakollinen tähän — pelkkä paikallinen tiedosto ei riitä):

- **Android/Chrome**: valikko → "Asenna sovellus" / "Lisää aloitusnäytölle" → kuvake avautuu ilman selaimen osoiteriviä
- **iPhone/Safari**: Jaa-painike → "Lisää Koti-valikkoon"

Tämä vaatii `manifest.json`:n, kuvaketiedostot ja `sw.js`:n edellä olevasta taulukosta — ilman niitä selain tekee vain tavallisen kirjanmerkki-oikotien.

## Tekninen toteutus

- Puhdas HTML/CSS/JavaScript, ei kirjastoja eikä build-työkalua
- Fontit: IBM Plex Sans Condensed, IBM Plex Serif, IBM Plex Mono (Google Fonts)
- Kaikki sisältö (`CURRICULUM`) määritelty suoraan `index.html`:n `<script>`-osiossa
- Yläpalkki ei ole "sticky" kapealla näytöllä (≤ 640px) — se vierii sisällön mukana, jotta vältetään mobiiliselainten tunnettu renderöintivirhe, jossa kiinteäkorkeuksinen mutta muuttuva sticky-elementti jää osittain väärin piirtyneeksi vieritettäessä

## Oikeudet

Kaikki oikeudet pidätetään. Sisältöä ei ole lisensoitu uudelleenkäyttöön tai muokkaukseen ilman tekijän lupaa.
