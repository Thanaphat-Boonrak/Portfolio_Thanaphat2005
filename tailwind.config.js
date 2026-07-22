module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: '#12151b',
        surface: '#191d25',
        border: '#262b34',
        accent: '#6f8cff',
      },
    },
  },
  plugins: [],
};
