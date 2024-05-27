/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
      },
      colors: {
        "bg-navbar": "#001B35",
        "button-navbar": "#003366",
        fundo: "#EDEFF8",
        search: "#D9D9D9",
        "search-text": "#AAAAAB",
        card: "#FFFFFF",
        fundoChat: "#E1E3EF",
        fundoCadastro: "#BCBCBC",
        placeholder: "#B5B5B5",
      },
    },
  },
  plugins: [],
};
