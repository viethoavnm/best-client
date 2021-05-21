export const isEmpty = string => {
  if (typeof string === 'string') {
    return string.trim() === '';
  }
  return true;
};

export const isEmail = email => {
  const re = /^[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
//if string length is > max then truncate it without cutting word
export const truncateString = (str, max = 150, suffix = '...') =>
  typeof str === 'string'
    ? str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(' ')
        )}${suffix}`
    : str;

export const removeHTMLTag = str =>
  typeof str === 'string'
    ? str.replace(/<\/?[^>]+(>|$)/g, '').replace(/&nbsp;/g, ' ')
    : str;
