export const generateXShareLink = (messageBody: string) => {
  const siteUrl: string = 'https://guitar-quiz.oguemon.com/';
  const userId: string = 'oguemon_com';
  const params: string =
    'url=' +
    encodeURI(siteUrl) +
    '&text=' +
    encodeURI(messageBody).replace('#', '%23') +
    '&related=' +
    userId;
  return `https://twitter.com/intent/tweet?${params}`;
};
