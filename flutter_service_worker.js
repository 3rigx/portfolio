'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c34d194919dc3dc9975b1659f483fe24",
"assets/AssetManifest.bin.json": "b8818149c70580ac4e7de8a766f54ec9",
"assets/AssetManifest.json": "6a85108e21bf2eedc4e283e72b21445f",
"assets/assets/card_per.png": "5da925a83c71a49175cf23e34d0edea5",
"assets/assets/cove1.png": "aa898419d584a63519a808dc49c4b176",
"assets/assets/cove2.png": "113a9b47739a1c5a255fc3ed2c7ae582",
"assets/assets/cove3.png": "338b38bf69e1761172fd0d0b4bc997e1",
"assets/assets/cove4.png": "fac650ed0fd090537d8c02aa4140c405",
"assets/assets/cove5.png": "80991a1fe8d864023c74f0551b153d05",
"assets/assets/cove6.png": "dbb94365eeeb719d728fdcf8e0d6fe9a",
"assets/assets/crm1.jpg": "452fb622ef8755b636c8f814b00b0b15",
"assets/assets/crm2.jpg": "37feb593ec50e6b0ed97e35456a78574",
"assets/assets/crm3.jpg": "b2168c834391d7e55c56576144d8306b",
"assets/assets/crm4.jpg": "4c1841d6e9798457e2661b2c600358b8",
"assets/assets/crm5.jpg": "3a868021f4124cc823d6da83e198d65a",
"assets/assets/crm6.jpg": "e1cb60fcd8990c65f9957b6e6be0e134",
"assets/assets/crm7.jpg": "c85fd20ebd4b97fa5e4d356dd1bb9bff",
"assets/assets/cvc1.png": "b9d1136863f6e93ab9fe62ba9cc4ede9",
"assets/assets/cvc2.png": "2af5e2a73a08ff171fc31f90c9c4ae52",
"assets/assets/cvc3.png": "37cd43e38cfbc942619c7d43509f9b42",
"assets/assets/cvc4.png": "7e4417c5901901f33f5c2c4a5d6f162a",
"assets/assets/cvc5.png": "b9dde4145519ec510f0531632b9be6ea",
"assets/assets/cvc6.png": "94284eff169b9a28a0c0d885420257b0",
"assets/assets/cvc7.png": "6dc9b8859050c0757fac2253a547f866",
"assets/assets/cvc8.png": "ceac8a83cf3008eb9dabc9e2c74bcde8",
"assets/assets/election1.png": "fcb7740dc75e33643d4eef58e0d6772d",
"assets/assets/election2.png": "d22f43f22ae659b157e9c7450e0c5898",
"assets/assets/flawless1.jpeg": "181b7998dd5c0310e28776315ca22a87",
"assets/assets/flawless2.jpeg": "aeb569794955bbc4b3b6a6a171e014ef",
"assets/assets/flawless3.jpeg": "7a5d26c98f9cfa1fcf7322bb3caf02b8",
"assets/assets/flawless3.jpg": "e936b8420e836b1e78dbfe684d7a0a78",
"assets/assets/flawlesss4.jpeg": "a79989302c16218a47fe7d4f75e9b934",
"assets/assets/hotel1.png": "0b0faf40b37e751bc21fc1e292e941a8",
"assets/assets/hotel2.png": "9cf9c89f947026284bb590357fd9b4fd",
"assets/assets/lottie.json": "02612d56654b144b810ecdb2210b0415",
"assets/assets/lumi1.png": "08f638468d77ff1f624f5fd062699b56",
"assets/assets/lumi2.png": "ab391c3337c07dad73ec780c1056349c",
"assets/assets/lumi3.png": "3dea43df4585cc5c509a224855675c67",
"assets/assets/lumi4.png": "43fcab90b90e7a0ddcaa019c3bb57bba",
"assets/assets/lumi5.png": "3bc7eae4a352add7cfd952dd0805975c",
"assets/assets/onad1.png": "c1debb6c56366fda483dd5f2b923b8f5",
"assets/assets/onad2.png": "65b991b1a22b85ef866b3805f204d151",
"assets/assets/onad3.png": "1c2924f9d81155313efa9c72e0abebb3",
"assets/assets/onad4.png": "8151a1b1423b2febb2265571c733c7be",
"assets/assets/onad5.png": "c1f9938f87328f18b158a7a8c7b82317",
"assets/assets/onad6.png": "b134426faffc57d8413d396510076d7f",
"assets/assets/onad7.png": "e1dd35bd8a430981dd53137f0a9ca680",
"assets/assets/parcelkeepers1.jpeg": "ef377b24ef76c363f100ae4c2cee8e03",
"assets/assets/parcelkeepers2.jpeg": "bac043752292f36cc6b462dd61a346c6",
"assets/assets/royalexpress1.png": "709addb7a1a9451a1d172396807cf370",
"assets/assets/royalexpress2.png": "207c0e4c337920184d1ab4616ff44b23",
"assets/assets/royalexpress3.png": "066a8f3e0f22b55c995a9bbf5ed906f8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "77b934a1ff9d6714f38de6110ee0f6ea",
"assets/NOTICES": "af25434beed79fe8bae97a102e91e1c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "dd677b435b16f44e4ca08a9f354bac24",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "1b3a5d9678c29fe7ed5034c2aa4e503b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9ee6ffcde85b3b6a205605d7d7433e15",
"/": "9ee6ffcde85b3b6a205605d7d7433e15",
"main.dart.js": "ec5cd0e15054ccef970028e4c8330847",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"version.json": "cc132570d6d238130e38adc59e1f998d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
