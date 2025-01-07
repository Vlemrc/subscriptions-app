module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F8FA',
        blue: '#001682',
        primary: '#1A1A1A',
        secondary: '#94A3B8',
        darkgray:'#777777',
        border: '#F3F3F3',
      },
      fontFamily: {
        digitalSansThinItalic: ['DigitalSansThinItalic', 'sans-serif'],
        digitalSansRegularItalic: ['DigitalSansRegularItalic', 'sans-serif'],
        digitalSansRegular: ['DigitalSansRegular', 'sans-serif'],
        digitalSansMediumItalic: ['DigitalSansMediumItalic', 'sans-serif'],
        digitalSansMedium: ['DigitalSansMedium', 'sans-serif'],
        digitalSansLightItalic: ['DigitalSansLightItalic', 'sans-serif'],
        digitalSansLight: ['DigitalSansLight', 'sans-serif'],
        digitalSansExtraLight: ['DigitalSansExtraLight', 'sans-serif'],
        digitalSansExtraLightItalic: ['DigitalSansExtraLightItalic', 'sans-serif'],
        digitalSansBoldItalic: ['DigitalSansBoldItalic', 'sans-serif'],
        digitalSansBold: ['DigitalSansBold', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
      },
    },
  },
  plugins: [],
}