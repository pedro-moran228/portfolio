/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "460px",
        // sm	640px
        // md	768px
        // lg	1024px
        // xl	1280px
        // 2xl	1536px
      },
      animation: {
        'spin': 'spin 100s linear infinite',
        'spin-reverse': 'spin 100s linear reverse infinite',
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        md: "16px",
        lg: "18px",
        xl: "21px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        h1: { "@apply text-[45px] sm:text-[50px] font-bold": {} },
        h2: { "@apply text-[40px] sm:text-[43px] font-bold": {} },
        h3: { "@apply text-[20px] sm:text-[24px] font-bold": {} },
        h4: { "@apply text-[18px] sm:text-[20px] font-bold": {} },
        ".container-card": { "@apply w-[90%] 2xl:w-[87%] mx-auto max-w-[1620px] bg-white/25 rounded-lg shadow-xl": {}},
        ".container": { "@apply w-[87%] md:w-[80%] mx-auto max-w-[640px] lg:max-w-[1020px]": {} },
        ".flex-center": { "@apply flex items-center justify-center": {} },
        ".btn": { "@apply inline-block py-[0.45rem] px-[1rem] text-lg font-medium shadow rounded transition-colors duration-100": {} },
        ".divider-x": { "@apply container bg-gradient-to-r from-transparent via-[rgba(185,_185,_185,_1)] sm:via-[rgba(185,_185,_185,_0.85)] lg:via-[rgba(185,_185,_185,_0.45)] to-transparent h-[2px]": {} },
        ".divider-y": { "@apply container bg-gradient-to-b from-transparent via-[rgba(185,_185,_185,_1)] sm:via-[rgba(185,_185,_185,_0.85)] lg:via-[rgba(185,_185,_185,_0.45)] to-transparent w-[2px] h-full": {} },
        body: { "@apply text-md": {} },
      });
    },
  ],
};
