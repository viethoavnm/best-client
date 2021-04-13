import { vsprintf } from 'sprintf-js';

export const replaceStrUrl = (baseUrl, arrStr) => {
  var path = vsprintf(baseUrl, arrStr);
  return path;
};
