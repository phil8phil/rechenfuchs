/* Rechenfuchs – Service Worker
   WICHTIG: Bei jeder Änderung an einer Datei die CACHE-Version erhöhen,
   sonst lädt das iPhone die neue Version nicht.
   Mehrere Apps teilen sich die Domain phil8phil.github.io: deshalb nur die
   eigenen Caches (Präfix 'rechenfuchs-') anfassen. */
const PREFIX = 'rechenfuchs-';
const CACHE = PREFIX + 'v1.5.1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Seitenaufrufe: zuerst Netz (damit Updates ankommen), offline aus dem Cache
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const res = await Promise.race([
          fetch(req),
          new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 4000))
        ]);
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copy));
        }
        return res;
      } catch (e) {
        const c = await caches.open(CACHE);
        return (await c.match(req)) || (await c.match('./index.html')) || (await c.match('./'));
      }
    })());
    return;
  }

  // Übrige Dateien: zuerst Cache, sonst Netz
  event.respondWith(
    caches.open(CACHE).then(c => c.match(req)).then(hit => hit || fetch(req).then(res => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }))
  );
});
