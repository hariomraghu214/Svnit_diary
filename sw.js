// This is the Service Worker (sw.js)
// It allows your SVNIT Diary to be installed as an app
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
