export const maybeSetDarkModeClass = () => {
  if (
    localStorage.lightDarkMode === 'dark' ||
    (!localStorage.lightDarkMode &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    console.log('case 1');
    document.documentElement.classList.add('dark');
  } else {
    console.log('case 2');
    document.documentElement.classList.remove('dark');
  }
};
