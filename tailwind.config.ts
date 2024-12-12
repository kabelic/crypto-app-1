import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: 'rgba(19, 18, 26, 1)',
        headerBgColor:'rgba(30, 25, 50, 1)',
        searchBgColor: 'rgba(25, 25, 37, 1)',
        // bgColor: 'red',
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
