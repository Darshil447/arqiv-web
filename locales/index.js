export const handleLanguage = (lang) => {
  // Handle language switching logic
  console.log('Language switched to:', lang);
};

export const setLanguage = (lang) => {
  // Set language logic
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
};

export const getLanguage = () => {
  // Get current language logic
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'en';
  }
  return 'en';
};
