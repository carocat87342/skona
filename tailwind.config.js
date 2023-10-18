module.exports = {
  mode: 'jit',
  corePlugins: {
    container: false
  },
  theme: {
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      '2xl': '1536px'
    },
    extend: {
      maxWidth: {
        content: '675px',
        sidebar: '360px',
        690: '690px',
        780: '780px',
        1920: '1920px'
      },
      fontFamily: {
        'museo-sans': ['museo-sans', 'sans-serif'],
        'kepler-std-display': ['kepler-std-display', 'serif']
      },
      fontSize: {
        'h1-desk': '120px',
        'h2-desk': '56px',
        'h3-desk': '28px',
        'h4-desk': '20px',
        'p-desk': '24px',
        'h1-tab': '90px',
        'h2-tab': '50px',
        'h3-tab': '26px',
        'p-tab': '18px',
        'h1-mob': '60px',
        'h2-mob': '36px',
        'h3-mob': '24px',
        'p-mob': '18px',
        'p-all': '16px',
        'p-all-small': '13px'
      },
      lineHeight: {
        'h1-desk': '120px',
        'h2-desk': '60px',
        'h3-desk': '30px',
        'p-desk': '36px',
        'h1-tab': '90px',
        'h2-tab': '54px',
        'h3-tab': '29px',
        'p-tab': '26px',
        'h1-mob': '60px',
        'h2-mob': '39px',
        'h3-mob': '26px',
        'p-mob': '26px',
        'p-all': '26px',
        'p-all-small': '16px',
        heading: 1.1
      },
      letterSpacing: {
        1: '1px'
      },
      colors: {
        'bi-coastal': {
          DEFAULT: 'var(--bi-coastal-default)',
          500: 'var(--bi-coastal-default)',
          400: 'var(--bi-coastal-400)',
          300: 'var(--bi-coastal-300)',
          200: 'var(--bi-coastal-200)',
          100: 'var(--bi-coastal-100)'
        },
        mustard: {
          DEFAULT: 'var(--mustard-default)',
          500: 'var(--mustard-default)',
          400: 'var(--mustard-400)',
          300: 'var(--mustard-300)',
          200: 'var(--mustard-200)',
          100: 'var(--mustard-100)'
        },
        'wise-sage': {
          DEFAULT: 'var(--wise-sage-default)',
          500: 'var(--wise-sage-default)',
          400: 'var(--wise-sage-400)',
          300: 'var(--wise-sage-300)',
          200: 'var(--wise-sage-200)',
          100: 'var(--wise-sage-100)'
        },
        'big-blue': {
          DEFAULT: 'var(--big-blue-default)',
          500: 'var(--big-blue-default)',
          400: 'var(--big-blue-400)',
          300: 'var(--big-blue-300)',
          200: 'var(--big-blue-200)',
          100: 'var(--big-blue-100)'
        },
        'oh-baby': {
          DEFAULT: 'var(--oh-baby-default)',
          500: 'var(--oh-baby-default)',
          400: 'var(--oh-baby-400)',
          300: 'var(--oh-baby-300)',
          200: 'var(--oh-baby-200)',
          100: 'var(--oh-baby-100)'
        },
        'arizona-sunset': {
          DEFAULT: 'var(--arizona-sunset-default)',
          500: 'var(--arizona-sunset-default)',
          400: 'var(--arizona-sunset-400)',
          300: 'var(--arizona-sunset-300)',
          200: 'var(--arizona-sunset-200)',
          100: 'var(--arizona-sunset-100)'
        },
        skona: {
          DEFAULT: 'var(--skona-default)',
          500: 'var(--skona-default)',
          400: 'var(--skona-400)',
          300: 'var(--skona-300)',
          200: 'var(--skona-200)',
          100: 'var(--skona-100)'
        },
        almost: {
          DEFAULT: 'var(--almost-default)',
          500: 'var(--almost-default)',
          400: 'var(--almost-400)',
          300: 'var(--almost-300)',
          200: 'var(--almost-200)',
          100: 'var(--almost-100)'
        },
        karl: {
          DEFAULT: 'var(--karl-default)',
          500: 'var(--karl-default)',
          400: 'var(--karl-400)',
          300: 'var(--karl-300)',
          200: 'var(--karl-200)',
          100: 'var(--karl-100)'
        }
      },
      padding: {
        'mobile-x-sm': '10px',
        'mobile-sm': '15px',
        'mobile-md': '30px',
        'mobile-lg': '45px',
        'mobile-x-lg': '80px',
        'mobile-xx-lg': '100px',
        'tablet-x-sm': '10px',
        'tablet-sm': '20px',
        'tablet-md': '35px',
        'tablet-lg': '50px',
        'tablet-x-lg': '100px',
        'tablet-xx-lg': '120px',
        'desktop-x-sm': '10px',
        'desktop-sm': '20px',
        'desktop-md': '45px',
        'desktop-lg': '60px',
        'desktop-x-lg': '120px',
        'desktop-xx-lg': '180px'
      },
      margin: {
        'mobile-x-sm': '10px',
        'mobile-sm': '15px',
        'mobile-md': '30px',
        'mobile-lg': '45px',
        'mobile-x-lg': '80px',
        'mobile-xx-lg': '100px',
        'tablet-x-sm': '10px',
        'tablet-sm': '20px',
        'tablet-md': '35px',
        'tablet-lg': '50px',
        'tablet-x-lg': '100px',
        'tablet-xx-lg': '120px',
        'desktop-x-sm': '10px',
        'desktop-sm': '20px',
        'desktop-md': '45px',
        'desktop-lg': '60px',
        'desktop-x-lg': '120px',
        'desktop-xx-lg': '180px'
      },
      gap: {
        'mobile-x-sm': '10px',
        'mobile-sm': '15px',
        'mobile-md': '30px',
        'mobile-lg': '45px',
        'mobile-x-lg': '80px',
        'mobile-xx-lg': '100px',
        'tablet-x-sm': '10px',
        'tablet-sm': '20px',
        'tablet-md': '35px',
        'tablet-lg': '50px',
        'tablet-x-lg': '100px',
        'tablet-xx-lg': '120px',
        'desktop-x-sm': '10px',
        'desktop-sm': '20px',
        'desktop-md': '45px',
        'desktop-lg': '60px',
        'desktop-x-lg': '120px',
        'desktop-xx-lg': '180px'
      },
      zIndex: {
        '-1': '-1',
        1: 1
      }
    }
  },
  variants: {

  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          marginInline: 'auto',
          paddingInline: theme('spacing.7'),
          maxWidth: theme('screens.sm'),

          // Breakpoints
          '@screen sm': {
            maxWidth: theme('screens.sm')

          },
          '@screen md': {
            maxWidth: '934px'
          },
          '@screen lg': {
            maxWidth: '1234px'

          }
        }
      });
    }
  ]
};