workbox.routing.registerRoute(
  new RegExp('/assets/.*.(png|jpg|mp3|gif)$'),
  new workbox.strategies.CacheFirst({
    cacheName: 'assets-cache',
  })
)

workbox.routing.registerRoute(
  new RegExp('/data/.*.png'),
  new workbox.strategies.NetworkOnly({
    cacheName: 'generate-images',
  })
);
