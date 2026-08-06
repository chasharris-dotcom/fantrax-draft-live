GPB FANTRAX DRAFT DAY LIVE — MOBILE PWA v7.4

FILES
- index.html: the mobile-first draft app
- manifest.webmanifest: installable-app settings
- service-worker.js: offline cache
- icons/: Home Screen icons

QUICK TEST
Opening index.html directly will run the app, but iPhone Home Screen installation and reliable offline caching require HTTPS hosting.

EASIEST DEPLOYMENT
1. Upload the entire contents of this folder to Netlify Drop, GitHub Pages or Cloudflare Pages.
2. Open the resulting HTTPS address in Safari on the iPhone.
3. Tap Share.
4. Tap Add to Home Screen.
5. Launch GPB Draft from the new Home Screen icon once while online. It will then be cached for offline use.

DRAFT-DAY SAFETY
- The app autosaves after every change in that browser.
- Use Backup regularly to download a JSON session file.
- Phone and laptop browser storage do not automatically synchronise. Use the JSON backup/restore feature when switching devices.
- Do not clear Safari website data during the draft.

MOBILE DESIGN
- Bottom navigation: Draft, Advisor, My Roster, Players, Settings.
- Current pick and recent picks appear at the top of Draft.
- The full 10-team board is collapsed by default; tap Show full board when needed.
- Advisor and Player Explorer use touch-friendly cards.
- Player position colours and the personal Tottenham DND rules are preserved.
