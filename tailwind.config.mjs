/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'mincho': ['Noto Serif JP', 'Hiragino Mincho Pro', 'Yu Mincho', 'serif'],
        'gothic': ['Noto Sans JP', 'Hiragino Kaku Gothic Pro', 'Yu Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
