/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "500px",
        sm: "670px",
        md: "768px",
        'lg-small': "900px",
        lg: "1024px",
        'lg-big': "1120px",
        'xl-small': "1230px",
        xl: "1280px",
        'xl-big': "1340px",
        '2xl': '1420px'
      },
      // animation: {
      //   'spin': 'spin 100s linear infinite',
      //   'spin-reverse': 'spin 100s linear reverse infinite',
      // },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        md: "16px",
        lg: "18px",
        xl: "21px",
      },
      colors: {
        primary: '#1b1a20',
        secondary: '#6c426e',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        h1: { "@apply text-[40px] sm:text-[43px] md:text-[50px] font-bold text-white": {} },
        h2: { "@apply text-[40px] sm:text-[43px] md:text-[47px] font-bold text-white": {} },
        h3: { "@apply text-[28px] sm:text-[36px] font-bold text-white leading-[1.5]": {} },
        h4: { "@apply text-[20px] sm:text-[23px] font-bold text-white leading-[1] mb-[20px]": {} },
        p: { "@apply mt-5": {} },
        a: { "@apply text-[#3e87fe] hover:underline": {} },
        ul: { "@apply ml-7 space-y-2": {} },

        ".container": { "@apply mx-auto w-[calc(100%_-_40px)] sm:w-[calc(100%_-_100px)] max-w-[800px]": {} },

        ".mark-triangle--before": { "@apply before:absolute before:left-[-15%] before:top-[-70px] before:w-[125%] before:h-[150px] before:-rotate-3 before:bg-primary before:z-[5]": {} },

        ".mark-triangle--after": { "@apply after:absolute after:left-[-15%] after:bottom-[-80px] after:w-[125%] after:h-[300px] after:rotate-3 after:bg-primary after:z-0": {} },

        ".divide-line--before": { "@apply before:absolute before:top-[-100px] before:w-full before:h-[5px] before:bg-secondary": {} },

        ".marker": { "@apply relative before:absolute before:-left-5 before:top-[13px] before:-translate-y-1/2 before:h-2 before:w-2 before:bg-secondary before:brightness-110 before:rounded": {} },

        ".flex-center": { "@apply flex items-center justify-center": {} },

        // bg-[#2e3966]
        ".btn": { "@apply text-white hover:no-underline font-medium inline-block py-[0.65rem] px-[1rem] shadow rounded bg-[#3e486b6b] text-white hover:bg-secondary/50 active:ring active:ring-blue-500 duration-100": {} },

        ".circle-clip": { "@apply font-medium inline-block py-[0.65rem] px-[1rem] shadow rounded duration-100": {} },
        // shape-outside: circle(50%); clip-path: circle(50%); shape-margin: 20px;
        ".divider-x": { "@apply container bg-gradient-to-r from-transparent via-[rgba(185,_185,_185,_1)] sm:via-[rgba(185,_185,_185,_0.85)] lg:via-[rgba(185,_185,_185,_0.45)] to-transparent h-[2px]": {} },

        ".divider-y": { "@apply container bg-gradient-to-b from-transparent via-[rgba(185,_185,_185,_1)] sm:via-[rgba(185,_185,_185,_0.85)] lg:via-[rgba(185,_185,_185,_0.45)] to-transparent w-[2px] h-full": {} },

        body: { "@apply text-lg text-primary": {} },
      });
    },
  ],
};
