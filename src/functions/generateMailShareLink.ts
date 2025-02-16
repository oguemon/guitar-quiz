export const generateMailShareLink = (subject: string, messageBody: string) => {
  const body = encodeURI(messageBody);
  return `mailto:contact@oguemon.com?subject=${subject}&body=${body}`;
};
