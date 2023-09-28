const CACHE_NAME = 'my-cache';
const urls_to_cache = ['/','/downloads','/led_hardware_circuit.jpg']

self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            return cache.addAll(urls_to_cache);
        })
    );
});

self.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request).then((res)=>{
            return res||fetch(event.request);
        })
    );
});
