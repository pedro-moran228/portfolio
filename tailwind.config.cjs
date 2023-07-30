/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        smallXL: "1230px",
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
      colors: {
        primary: '#1E1F22',
        secondary: '#1B9C85',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        h1: { "@apply text-[45px] sm:text-[50px] font-bold text-primary/95": {} },
        h2: { "@apply text-[40px] sm:text-[43px] font-bold text-primary/95": {} },
        h3: { "@apply text-[28px] sm:text-[36px] font-bold text-primary/95 leading-[1.5]": {} },
        h4: { "@apply text-[22px] sm:text-[26px] font-bold text-primary/95 leading-[2.3]": {} },
        p: { "@apply mt-5": {} },
        ul: { "@apply ml-7 space-y-2": {} },
        ".container": { "@apply w-[87%] md:w-[84%] mx-auto max-w-[640px] lg:max-w-[1080px]": {} },

        ".mark-triangle--before": { "@apply before:absolute before:left-[-15%] before:top-[-80px] before:w-[125%] before:h-[300px] before:-rotate-3 before:bg-primary before:z-0": {} },

        ".mark-triangle--after": { "@apply after:absolute after:left-[-15%] after:bottom-[-80px] after:w-[125%] after:h-[300px] after:rotate-3 after:bg-primary after:z-0": {} },

        ".divide-line--before": { "@apply before:absolute before:top-[-100px] before:w-full before:h-[5px] before:bg-secondary": {} },

        ".marker": { "@apply relative before:absolute before:-left-3.5 before:top-[13px] before:-translate-y-1/2 before:h-2 before:w-2 before:bg-secondary before:rounded": {} },

        ".flex-center": { "@apply flex items-center justify-center": {} },

        ".btn": { "@apply font-sans font-medium inline-block py-[0.65rem] px-[1rem] shadow rounded duration-100": {} },

        ".divider-x": { "@apply container bg-gradient-to-r from-transparent via-[rgba(185,_185,_185,_1)] sm:via-[rgba(185,_185,_185,_0.85)] lg:via-[rgba(185,_185,_185,_0.45)] to-transparent h-[2px]": {} },

        ".divider-y": { "@apply container bg-gradient-to-b from-transparent via-[rgba(185,_185,_185,_1)] sm:via-[rgba(185,_185,_185,_0.85)] lg:via-[rgba(185,_185,_185,_0.45)] to-transparent w-[2px] h-full": {} },
        
        body: { "@apply text-lg text-primary": {} },
      });
    },
  ],
};
