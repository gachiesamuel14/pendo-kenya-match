# Pendo Kenya 🇰🇪❤️

**Location-based online dating and matchmaking platform for people in Kenya.**

Connect with nearby users by county, town, distance, age, interests, tribe, religion and lifestyle preferences.

## Live Demo

Coming soon on Netlify.

**Repo:** https://github.com/gachiesamuel14/pendo-kenya-match

## Tech Stack

- **Frontend:** Next.js (App Router) + Tailwind CSS
- **Hosting:** Netlify (continuous deploy from GitHub)
- **Planned Backend:** Supabase (Auth, PostgreSQL + PostGIS for location, Realtime chat, Storage)
- **Payments:** M-Pesa (Daraja API) for premium

## Features Roadmap

### Phase 1 – Foundation (current)
- [x] Landing page tailored for Kenya
- [ ] Signup / Login UI
- [ ] Connect real auth (Supabase)
- [ ] Deploy to Netlify

### Phase 2 – Core matching
- [ ] Profile creation (photos, bio, county, interests)
- [ ] GPS / approximate location + privacy
- [ ] Discover feed with filters
- [ ] Like / Match system

### Phase 3 – Chat & safety
- [ ] Real-time messaging
- [ ] Report & block
- [ ] Notifications

### Phase 4 – Localisation & monetisation
- [ ] M-Pesa payments
- [ ] Student / Professional / Church modes
- [ ] Sheng / Swahili support

## Getting Started

```bash
git clone https://github.com/gachiesamuel14/pendo-kenya-match.git
cd pendo-kenya-match
npm install
npm run dev
```

## Deploy to Netlify

1. Connect this GitHub repo in Netlify (Add new site → Import existing project).
2. Build command: `npm run build`
3. Publish directory: handled automatically by Netlify Next.js runtime.
4. Deploy.

## Next Steps

Tell me which feature to implement next (auth, profiles, location matching, chat, etc.).
