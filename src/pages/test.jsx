import BannerAll from "../components/BannerAll";
import Seo from "../components/Seo";

function Test() {
  return (
    <>
      <Seo
        title="निर्देशिका"
        description="पंचायत समिती पुणे ची निर्देशिका आणि संपर्क माहिती."
        keywords="निर्देशिका, संपर्क, पंचायत समिती पुणे"
        url="https://panchayat-samiti-pune.com/निर्देशिका"
      />
      <div className="sitemap-page">
        <BannerAll></BannerAll>
      </div>
    </>
  );
}

export default Test;