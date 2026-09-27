# FitLog — Workout Library

FitLog is a responsive Next.js workout library and training log built from the provided Figma design. Users can browse exercises, inspect full workout instructions, add up to five lifts to today's plan, save workouts for later, mark workouts as done, and keep plan data after refresh.

## Technologies

- Next.js 16 App Router
- React 19 + TypeScript
- Tailwind CSS
- DaisyUI
- Lucide React icons
- React Hot Toast
- FitLog REST API
- LocalStorage for plan/saved persistence

## Key Features

1. Responsive Figma-inspired dark/lime workout library.
2. API-powered workout cards with loading state.
3. Workout details page with specs and instructions.
4. Today's Plan with a five-exercise limit.
5. Saved workouts tab with persistent LocalStorage data.
6. Live navbar counters for Plan and Saved.
7. Sort workouts by Duration, Calories, or Rating.
8. Mark workouts as Done, remove them, and show toast feedback.
9. Custom 404 page for invalid routes.
10. Responsive mobile navigation and layout.

## API

All workouts:
`https://api.abcz.workers.dev/api/fitlog`

Single workout:
`https://api.abcz.workers.dev/api/fitlog/:id`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Suggested Git commits

```text
git add . && git commit -m "setup nextjs fitlog project"
git add . && git commit -m "added fitlog navbar and responsive navigation"
git add . && git commit -m "added home hero and workout library"
git add . && git commit -m "added workout detail page"
git add . && git commit -m "added today's plan and saved workouts"
git add . && git commit -m "added plan actions and toast notifications"
git add . && git commit -m "added sorting loading and empty states"
git add . && git commit -m "added responsive styling 404 and readme"
```
