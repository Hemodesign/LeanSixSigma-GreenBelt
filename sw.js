// Minimal service worker. Sen ainoa tehtävä on täyttää selainten vaatimus
// asennettavalle sovellukselle (PWA) — se ei välimuisti mitään erikseen,
// vaan välittää kaikki pyynnöt suoraan verkkoon/selaimen omaan välimuistiin.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
