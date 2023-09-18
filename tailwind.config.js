module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Varela Round"', 'sans-serif'],
      },
      colors: {
        'light-blue': '#EB4900',
        'dark-blue': '#810806',
	'text-blue': '#1f2760',
        'light-oliver': '#efe9e5',
        'light-sky': '#f0f8f5',
        'dark-white': '#dddddd',
        'black': '#222222',
        'blacker': '#000000'
      }
    },
  },
  plugins: [],
}