// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'red': {
          500: '#9e1b32',
        },
      },
      keyframes: {
        typing: {
          '0%, 100%': { width: '0%' },
          '30%, 70%': { width: '100%' },
        },
        blink: {
          '0%': {
            opacity: 0,
          },
        },
        'rotate-loader': {
          '0%': {
            transform: 'rotate(0deg)',
            strokeDashoffset: '360%',
          },
          '100%': {
            transform: 'rotate(360deg)',
            strokeDashoffset: '-360%',
          },
        },
      },
      screens: {
        touch: { raw: 'only screen and (pointer: coarse)' },
      },
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require('@tailwindcss/forms'), require('@tailwindcss/typography'),
    // https://github.com/mattpfeffer/tailwind-typewriter/
    require('tailwind-typewriter')({
      wordsets: {
        intro: {
          words: ["Hi, I'm Tyler, "],
          delay: 1,
          repeat: 0,
          eraseSpeed: 0,
          writeSpeed: .25,
          caretWidth: '0px',
        },
        introCont: {
          words: ["engineer", "learner", "developer", "leader", "collaborator", "team player", "researcher", "innovator", "strategist", "mentor", "self-starter", "thinker", ],
          delay: 5.5,
          repeat: -1,
          writeSpeed: .25,
          caretWidth: '3px',
          caretColor: 'white'
        }
      }
    }),
  ],
};
