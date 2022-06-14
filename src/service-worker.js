/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST.map((file) => file.url);

const cacheResources = (files) => {
  caches.open('static').then((cache) => cache.addAll(files));
};

const clearOldCache = () => {
  caches.keys().then((cacheNames) => {
    cacheNames.forEach((name) => {
      if (name !== 'static') caches.delete(name);
    });
  });
};

const cachedAssets = (request) => {
  return caches.match(request).then((res) => {
    if (res) return res;
    // else
    //   return new Response('<h1>You are offline.</h1>', {
    //     headers: { 'Content-Type': 'text/html' },
    //   });
  });
};

const fetchAndCache = (request) => {
  fetch(request)
    .then((response) => {
      const resClone = response.clone();
      caches.open('static').then((cache) => {
        if (request.url.startsWith('chrome-extension')) return;
        cache.put(request, resClone);
      });
      return response;
    })
    .catch((err) => console.log('error', err));
};

self.addEventListener('install', (e) => {
  console.log('SW installing');
  e.waitUntil(cacheResources(statics));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('SW activating');
  e.waitUntil(clearOldCache());
});

self.addEventListener('fetch', (e) => {
  if (!navigator.onLine) {
    e.respondWith(cachedAssets(e.request));
  } else {
    fetchAndCache(e.request);
  }
});
