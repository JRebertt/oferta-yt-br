/** Config Tailwind v3 — igual ao tailwind.config do Play CDN da origem (playvideo.site) */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'yt-black': '#050811',
        'yt-gray': '#13233c',
        'yt-red': '#ff0000',
        'yt-text': '#ffffff',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
