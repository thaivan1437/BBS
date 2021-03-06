import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import {config} from '../src/helper/get_config';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

// if (config.env !== 'local') {
//   Sentry.init({
//     dsn: config.SENTRY_URL,
//     integrations: [new Integrations.BrowserTracing()],
//     tracesSampleRate: 1.0,
//     environment: config.env,
//   });
// }

if (module.hot) {
  module.hot.addStatusHandler(status => {
    if (typeof window !== "undefined" && status === "ready") {
      window.__webpack_reload_css__ = true;
    }
  });
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <div>
      <Head>
        <title>Belmont Beauty Salon</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta property="og:image" content={'/invite/bannerShare.png'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://belmontbeautysalon.com/`} />
        <meta property="og:title" content={`Belmont Beauty Salon`} />
        <meta property="og:description" content='Belmont Beauty Salon' />
        <meta name="keywords" content="Salon,Beauty" />
        <meta name="author" content="Salon Manager" />
      </Head>
      <Component {...pageProps} />
    </div>
  }
}

export default MyApp
