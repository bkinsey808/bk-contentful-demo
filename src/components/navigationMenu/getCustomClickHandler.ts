import { MouseEventHandler } from 'react';

import { maybeSetDarkModeClass } from '@/helpers/maybeSetDarkModeClass';

const lightDarkModeThemeOptions = {
  System: {
    lightDarkMode: undefined,
    theme: undefined,
  },
  'Light Mode': {
    lightDarkMode: 'light',
    theme: undefined,
  },
  'Dark Mode': {
    lightDarkMode: 'dark',
    theme: undefined,
  },
  Monochrome: {
    lightDarkMode: undefined,
    theme: 'Monochrome',
  },
  'Dark Monochrome': {
    lightDarkMode: undefined,
    theme: 'DarkMonochrome',
  },
  'Blue Tint': {
    lightDarkMode: undefined,
    theme: 'BlueTint',
  },
};

/** add any custom navigation item click event handling here */
export const getCustomClickHandler =
  (content_componentName: string): MouseEventHandler<HTMLAnchorElement> =>
  (e) => {
    const itemLightDarkModeThemeOptions =
      lightDarkModeThemeOptions[
        content_componentName as keyof typeof lightDarkModeThemeOptions
      ];

    if (!itemLightDarkModeThemeOptions) {
      return;
    }

    const { lightDarkMode, theme } = itemLightDarkModeThemeOptions;
    localStorage.lightDarkMode = lightDarkMode ?? '';
    localStorage.theme = theme ?? '';
    maybeSetDarkModeClass();
    const selectedThemeWrapperEl = document.querySelector(
      '#localStorageThemeWrapper'
    );
    if (selectedThemeWrapperEl) {
      selectedThemeWrapperEl.className = theme ? `theme--${theme}` : '';
    }
    e.preventDefault();
  };
