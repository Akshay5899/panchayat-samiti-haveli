import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://panchayat-samiti-pune.com'
const SITE_NAME = 'पंचायत समिती पुणे'
const DEFAULT_DESCRIPTION = 'पंचायत समिती पुणे अधिकृत संकेतस्थळ - विभाग, सेवा, मार्गदर्शन आणि संपर्क माहिती.'
const DEFAULT_IMAGE = `${SITE_URL}/images/pune-banner.png`

const Seo = ({
  title,
  description,
  url,
  image,
  type = 'website',
  noindex = false,
  keywords,
  children,
}) => {
  const pageTitle = title ? `${title} - ${SITE_NAME}` : SITE_NAME
  const pageDescription = description || DEFAULT_DESCRIPTION
  const pageUrl = url || SITE_URL
  const pageImage = image || DEFAULT_IMAGE
  const robots = noindex ? 'noindex, nofollow' : 'index, follow'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: DEFAULT_IMAGE,
      },
    },
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:locale" content="mr_IN" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content={pageTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      {children}
    </Helmet>
  )
}

export default Seo
