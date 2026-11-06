# `nuxt dev` reload never finishes when a `close` hook doesn't settle

1. `npm install`
2. `npx nuxt dev`
3. Open the page, it shows `marker: one`.
4. In `nuxt.config.ts`, change `marker: 'one'` to `marker: 'two'` and save.

The local module `modules/hang-on-close.ts` registers a Nuxt `close` hook that never settles. After step 4 the dev server answers every request with the loading page (503) and never comes back. Further edits to `nuxt.config.ts` do nothing.

Delete `modules/hang-on-close.ts` and the same edit reloads in about a second.
