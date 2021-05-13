export const urlBase =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_URL_BASE
    : process.env.REACT_APP_URL_BASE_DEV;

export const urlGetMenuConfig = 'setup/%s';
export const urlGetHomeData = 'setup/home-data';
export const urlGetSetting = 'setup/home-data';
export const urlArticle = 'article';
export const urlEvent = 'event';
export const urlSetup = 'setup';
export const urlEmail = 'email-sub';
export const urlContactForm = 'contact-form';
