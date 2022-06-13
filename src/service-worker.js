/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;

self.addEventListener('install', (event) => {
  console.log('SW Installing');
  self.skipWaiting();
  event.waitUntil(
    caches
      .open('static')
      .then((cache) => cache.addAll(statics.map((url) => url.url)))
  );
});

self.addEventListener('activate', (event) => {
  console.log('SW Activating');
});

self.addEventListener('fetch', (event) => {
  if (navigator.onLine) {
    console.log('Online!');
  } else {
    console.log('Offline!');
  }

  event.respondWith(
    caches.open('static').then(async (cache) => {
      const response = await caches.match(event.request);
      if (response) {
        return response;
      }
      return fetch(event.request);

      // if (!navigator.onLine) {
      //   const markup = '<h1>You are offline!</h1>';
      //   const headers = { 'Content-Type': 'text/html' };
      //   const response_1 = new Response(markup, { headers });
      //   return response_1;
      // }
      // else {
      //   const result = fetch(event.request);
      //   result.then((response_2) => {
      //     cache.put(event.request, response_2.clone());
      //   });
      //   return result;
      // }
    })
  );
});
