module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "my-purple": '#4356b7',
        "my-orange": '#ff6948',
        "my-green": "#afde15",
        "my-light-purple": "#e8efff"
      },
      maxWidth: {
        half: "50%",
        contain: "900px",
      },
      width: {
        half: "50%"
      },

      height: {
        "80": "80vh",
        "50": "50vh"
      }
    },
  },
  plugins: [],
}
