/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'sans-serif'],
      },
      fontSize: {
        sm: ['14px', '24px'],
        base: ['16px', '24px'],
        lg: ['20px', '32px'],
        xl: ['24px', '32px'],
        '2xl': ['36px', '44px'],
        '3xl': ['48px', '56px'],
      },
    },
    colors: {
      white: '#FAFAFA',
      green: {
        900: '#004214',
        100: '#67DB8A',
      },
      gray: {
        500: '#6B7280'
      },
      neutral: {
        900: '#07060A',
        800: '#15121A',
        700: '#26232B',
        600: '#3A3740',
        500: '#4E4A54',
        400: '#636069',
        300: '#7A787D',
        200: '#908E91',
        100: '#A3A3A3',
      },
      blue: {
        900: '#003DB2',
        800: '#0848C4',
        700: '#0D52D9',
        600: '#135CEB',
        500: '#1A68FF',
        400: '#2B73FF',
        300: '#4081FF',
        200: '#5992FF',
        100: '#6E9FFF',
      },
      pink: {
        500: '#E545BC',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        md: '72px',
      },
      screens: {
        DEFAULT: '1440px',
      },
    },
  },
  plugins: [],

}
