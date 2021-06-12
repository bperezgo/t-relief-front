type ColorsObject = {
  main: string;
  mainBright: string;
  mainBack: string;
  mainBackWithOpacity: string;
  secondaryBack: string;
  secondary: string;
  secondaryWithOpacity: string;
};

interface ColorsSet {
  darker: ColorsObject;
  lighter: ColorsObject;
}

export const Colors: ColorsSet = {
  darker: {
    main: '#D45BA2', // pink/orange
    mainBright: '#CC5FDE', // pink
    mainBack: '#935FC7', // violet
    mainBackWithOpacity: 'rgba(270, 48, 58, 0.7)', // violet with opacity
    secondaryBack: '#715FDE', // blue with violet
    secondary: '#627CD6', // blue
    secondaryWithOpacity: 'rgba(227, 59, 61, 0.8)', // blue
  },
  lighter: {
    main: '#D45BA2',
    mainBright: '#CC5FDE',
    mainBack: '#935FC7',
    mainBackWithOpacity: 'rgba(270, 48, 58, 0.7)',
    secondaryBack: '#715FDE',
    secondary: '#627CD6',
    secondaryWithOpacity: 'rgba(227, 59, 61, 0.8)',
  },
};
