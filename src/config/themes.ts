
export interface Theme {
  label: string;
  background: string;
  title: string;
  typeBoxText: string;
  stats: string;
  keyboardBackground: string;
  keyBackground: string;
  keyText: string;
  keyPressed: string;
  isDark?: boolean;
}

export const themes: Record<string, Theme> = {
  vantaBlack: {
    label: 'Vanta Black',
    background: '#2B2B2B',
    title: '#FFFFFF',
    typeBoxText: '#D4D4D4',
    stats: '#FFFFFF',
    keyboardBackground: 'transparent',
    keyBackground: '#404040',
    keyText: '#FFFFFF',
    keyPressed: '#606060',
    isDark: true
  },
  lightGray: {
    label: 'Light Gray',
    background: '#FFFFFF',
    title: '#2B2B2B',
    typeBoxText: '#2B2B2B',
    stats: '#2B2B2B',
    keyboardBackground: 'transparent',
    keyBackground: '#E5E5E5',
    keyText: '#2B2B2B',
    keyPressed: '#B8B8B8',
    isDark: false
  },
  mediumGray: {
    label: 'Medium Gray',
    background: '#D4D4D4',
    title: '#2B2B2B',
    typeBoxText: '#2B2B2B',
    stats: '#2B2B2B',
    keyboardBackground: 'transparent',
    keyBackground: '#B8B8B8',
    keyText: '#2B2B2B',
    keyPressed: '#9C9C9C',
    isDark: false
  },
  darkGray: {
    label: 'Dark Gray',
    background: '#B3B3B3',
    title: '#2B2B2B',
    typeBoxText: '#2B2B2B',
    stats: '#2B2B2B',
    keyboardBackground: 'transparent',
    keyBackground: '#8A8A8A',
    keyText: '#2B2B2B',
    keyPressed: '#737373',
    isDark: false
  },
  lightBlue: {
    label: 'Light Blue',
    background: '#E3F2FD',
    title: '#1565C0',
    typeBoxText: '#1976D2',
    stats: '#1565C0',
    keyboardBackground: 'transparent',
    keyBackground: '#BBDEFB',
    keyText: '#1565C0',
    keyPressed: '#90CAF9',
    isDark: false
  },
  lightPink: {
    label: 'Light Pink',
    background: '#FCE4EC',
    title: '#AD1457',
    typeBoxText: '#C2185B',
    stats: '#AD1457',
    keyboardBackground: 'transparent',
    keyBackground: '#F8BBD9',
    keyText: '#AD1457',
    keyPressed: '#F48FB1',
    isDark: false
  },
  forestGreen: {
    label: 'Forest Green',
    background: '#E8F5E8',
    title: '#2E7D32',
    typeBoxText: '#388E3C',
    stats: '#2E7D32',
    keyboardBackground: 'transparent',
    keyBackground: '#C8E6C9',
    keyText: '#2E7D32',
    keyPressed: '#A5D6A7',
    isDark: false
  }
};

export const themeOptions = Object.entries(themes).map(([value, theme]) => ({
  value,
  label: theme.label
}));
