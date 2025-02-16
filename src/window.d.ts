interface Window {
  adsbygoogle: { [key: string]: unknown }[];
  gtag: (
    event: 'event',
    eventName: string,
    params: {
      [key: string]: string | number | boolean;
    }
  ) => void;
}
