/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;

self.addEventListener('install', (event) => {
  console.log('SW Installing');
  event.waitUntil(
    caches
      .open('static')
      .then((cache) => cache.addAll(statics.map((url) => url.url)))
  );
  self.skipWaiting();
});

// statics.map((url) => url.url)

self.addEventListener('activate', (event) => {
  console.log('SW Activating');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// // self.addEventListener('fetch', (event) => {
// //   if (navigator.onLine) {
// //     console.log('Online!');
// //   } else {
// //     console.log('Offline!');
// //   }
// // });

// // self.addEventListener('fetch', (event) => {
// //   if (!navigator.onLine) {
// //     const markup = '<h1>Seems you are offline!.</h1>';
// //     const headers = { 'Content-Type': 'text/html' };
// //     const response = new Response(markup, { headers });
// //     event.respondWith(response);
// //   } else {
// //   }
// // });
