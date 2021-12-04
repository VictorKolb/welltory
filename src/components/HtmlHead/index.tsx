import Head from 'next/head';
import { useRouter } from 'next/router';

import {
  defaultDescription,
  defaultOgDescription,
  defaultTitle,
} from 'components/HtmlHead/constants';

interface Props {
  title?: string;
  description?: string;
  ldJSON?: Record<string, any>;
}

export const HtmlHead = (props: Props): JSX.Element => {
  const {
    title = defaultTitle,
    description = defaultDescription,
    ldJSON,
  } = props;
  const router = useRouter();
  const canonicalUrl = `https://nestukanet.ru${router.asPath}`;

  return (
    <Head>
      {ldJSON && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJSON) }}
        />
      )}

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Подтверждение права собственности Yandex */}
      <meta name="yandex-verification" content="7fb036ce98d2fe47" />
      {/* Подтверждение права собственности Google */}
      <meta
        name="google-site-verification"
        content="e-3otSDNUjAj-TdFVOdkgGkMQ3UxhEzBTLNbyR93Slk"
      />
      <link key="canonical" rel="canonical" href={canonicalUrl} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="twitter:title" content="Нестуканёт" />
      <meta name="twitter:image" content="/public/og/og.png" />
      <meta
        name="twitter:description"
        content={description || defaultOgDescription}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta key="og:url" property="og:url" content={canonicalUrl} />
      <meta property="og:title" content="Нестуканёт" />
      <meta
        property="og:description"
        content={description ?? defaultOgDescription}
      />

      <meta property="og:image" content="/public/og/og.png" />
      <meta property="og:image:alt" content="nestukanet" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ru_RU" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};
