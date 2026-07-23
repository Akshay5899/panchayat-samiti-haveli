import BannerAll from "../components/BannerAll";
import { Helmet } from 'react-helmet-async';

function Test() {
  return (
    <>
      <Helmet>
        <title>निर्देशिका - पंचायत समिती पुणे</title>
        <meta name="description" content="पंचायत समिती पुणे ची निर्देशिका आणि संपर्क माहिती." />
        <meta name="keywords" content="निर्देशिका, संपर्क, पंचायत समिती पुणे" />
        <meta property="og:title" content="निर्देशिका - पंचायत समिती पुणे" />
        <meta property="og:description" content="पंचायत समिती पुणे ची निर्देशिका आणि संपर्क माहिती." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://panchayat-samiti-pune.com/निर्देशिका" />
        <link rel="canonical" href="https://panchayat-samiti-pune.com/निर्देशिका" />
      </Helmet>
      <div className="sitemap-page">
        <BannerAll></BannerAll>
      </div>
    </>
  );
}

export default Test;