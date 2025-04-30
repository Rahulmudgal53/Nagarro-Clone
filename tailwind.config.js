export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        equip: ['EquipExtended', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],


      },
      colors: {
        primary: '#47d7ac',
        secondary: '#13294b',
        accent: '#ff6b6b',
        darkBlue: '#1e3a8a',
        lightGray: '#f5f5f5',
        brandYellow: '#facc15',
        // You can define as many as you want
      },
    },
  },
  plugins: [],
}
