/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'mincho': ['Shippori Mincho', 'serif'],
        'gothic': ['Zen Kaku Gothic New', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
