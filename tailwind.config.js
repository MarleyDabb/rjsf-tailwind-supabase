/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nsAdmin: {
          50: `hsla(var(--color-admin-h, 232), var(--color-admin-s, 57%), 90%, var(--tw-bg-opacity, 1))`,
          100: `hsla(var(--color-admin-h, 232), var(--color-admin-s, 57%), 87%, var(--tw-bg-opacity, 1))`,
          200: `hsla(var(--color-admin-h, 232), var(--color-admin-s, 57%), 74%, var(--tw-bg-opacity, 1))`,
          300: `hsla(var(--color-admin-h, 232), var(--color-admin-s, 57%), 61%, var(--tw-bg-opacity, 1))`,
          400: `hsla(var(--color-admin-h, 232), var(--color-admin-s, 57%), 48%, var(--tw-bg-opacity, 1))`,
          DEFAULT: `hsla(var(--color-admin-h, 232), var(--color-admin-s, 57%), 35%), var(--tw-bg-opacity, 1))`,
          600: `hsla(var(--color-admin-h, 232), var(--color-admin-s, 57%), 28%, var(--tw-bg-opacity, 1))`,
          700: `hsla(var(--color-admin-h, 232), var(--color-admin-s, 57%), 21%, var(--tw-bg-opacity, 1))`,
          800: `hsla(var(--color-admin-h, 232), var(--color-admin-s, 57%), 14%, var(--tw-bg-opacity, 1))`,
          900: `hsla(var(--color-admin-h, 232), var(--color-admin-s, 57%), 7%, var(--tw-bg-opacity, 1))`,
        }
      }
    },
  },
  plugins: [],
}

/*
 "@rjsf/material-ui": "^5.0.0-beta.14",
    "@material-ui/core": "^4.12.4",
    "@material-ui/icons": "^4.11.3",
 */
