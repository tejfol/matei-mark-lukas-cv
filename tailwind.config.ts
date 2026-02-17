import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      }
    }
  },
  plugins: [daisyui]
} satisfies Config
