import { defineNuxtModule } from 'nuxt/kit'

// Stands in for a module whose `close` hook awaits something that never finishes.
export default defineNuxtModule({
  meta: { name: 'hang-on-close' },
  setup(_options, nuxt) {
    nuxt.hook('close', () => {
      console.log('[hang-on-close] close hook called, it never settles')
      return new Promise<void>(() => {})
    })
  },
})
