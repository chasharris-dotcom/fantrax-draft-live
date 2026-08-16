const CACHE='gpb-live-v0-2';
const SHELL=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('gpb-live-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));;
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const u=new URL(e.request.url); if(u.origin!==self.location.origin)return;
 if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put('./index.html',cp));return r}).catch(()=>caches.match('./index.html')));return}
 e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r.ok){const cp=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,cp))}return r})))
});
