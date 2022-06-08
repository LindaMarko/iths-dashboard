/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;

self.addEventListener('install', (event) => {
  console.log('SW Installing');
  event.waitUntil(
    caches
      .open('static')
      .then((cache) =>
        cache.addAll([
          '/',
          'index.html',
          '/static/js/main.7974edee.js',
          '/static/css/main.dc4f7f01.css',
        ])
      )
  );
  self.skipWaiting();
});

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
