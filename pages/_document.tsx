import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <meta
            name='description'
            content='Solar panels are a possibility for you if you want to consume your own, clean energy and save money in the long term.'
          />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
