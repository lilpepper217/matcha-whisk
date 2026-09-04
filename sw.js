// This site no longer uses a service worker. This version's only job is to
// clear out any offline cache left by the previous PWA build and then
// unregister itself, so returning visitors get the new page instead of a
// stale cached copy of the old game.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll())
      .then((clients) => clients.forEach((client) => client.navigate(client.url)))
  );
});
