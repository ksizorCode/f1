// 🧠 Nombre de la caché
const CACHE_NAME = 'f1-pwa-v1';

// 📦 Archivos a cachear
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/assets/icons/icon_f1.png'
];

// 🚀 Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('✅ Cache abierta');
        return cache.addAll(urlsToCache); // Guarda los archivos
      })
  );
});

// 📡 Interceptar peticiones
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 🔁 Si está en caché → lo devuelve
        if (response) {
          return response;
        }
        // 🌐 Si no → tira de red
        return fetch(event.request);
      })
  );
});