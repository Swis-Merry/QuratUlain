# AGENTS.md

- Stack: Next.js 15 App Router, TypeScript, Tailwind v4 (theme tokens in `src/app/globals.css`), `motion/react`.
- Verify: `npm run lint && npm run typecheck && npm run build`.
- Content lives in `src/content/*.ts`; every fact/quote must reference a URL in `src/content/sources.ts`. Never invent awards, quotes or social handles.
- Reduced motion is handled globally by `<MotionConfig reducedMotion="user">` in `src/components/Providers.tsx` — do not branch on `useReducedMotion()` during render (causes hydration mismatches).
- Contact form: `src/app/api/contact/route.ts` (Resend REST API, env vars in `.env.example`).
- Windows host: no Python available; git has no global identity configured.
