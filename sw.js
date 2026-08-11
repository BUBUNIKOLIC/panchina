/* PANCHINA — service worker.
   Compito unico: far funzionare l'app anche senza rete, e allo stesso tempo
   far arrivare gli aggiornamenti quando la rete c'è.

   Strategia scelta:
   - la pagina (index.html) usa "prima la rete, poi la cache": online prendi
     sempre l'ultima versione, offline parte comunque quella salvata;
   - icone e manifest usano "prima la cache": non cambiano quasi mai e così
     l'avvio è istantaneo.
   Cambiando VERSIONE si invalida tutta la cache vecchia: è la leva da toccare
   a ogni nuova versione dell'app. */
const VERSIONE = 'panchina-v1';
const CORE = ['./', './index.html', './manifest.webmanifest',
              './icons/icon-192.png', './icons/icon-512.png',
              './icons/icon-512-maskable.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', ev => {
  ev.waitUntil(
    caches.open(VERSIONE)
      // addAll fallisce tutto se un solo file manca: qui si preferisce
      // installare comunque, tanto la pagina viene rimessa in cache al primo
      // caricamento riuscito.
      .then(c => Promise.allSettled(CORE.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', ev => {
  ev.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSIONE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', ev => {
  const req = ev.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const isPagina = req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('index.html');

  if (isPagina) {
    ev.respondWith(
      fetch(req)
        .then(res => { const copia = res.clone(); caches.open(VERSIONE).then(c => c.put('./index.html', copia)); return res; })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }
  ev.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copia = res.clone();
      caches.open(VERSIONE).then(c => c.put(req, copia));
      return res;
    }).catch(() => cached))
  );
});
