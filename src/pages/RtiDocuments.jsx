
import "../styles/rtidocuments.css"
import BannerAll from "../components/BannerAll";
import { Helmet } from 'react-helmet-async';

const documents = [
  {
    id: 1,
    title: "माहिती अधिकार अर्ज अ",
    size: "26 KB",
    file: "https://cdnbbsr.s3waas.gov.in/s3be1df9a5d08724971f64a511e24fc904/uploads/2025/02/20250214794157952.pdf",
  },
  {
    id: 2,
    title: "माहिती अधिकार अर्ज ब",
    size: "20 KB",
    file: "https://cdnbbsr.s3waas.gov.in/s3be1df9a5d08724971f64a511e24fc904/uploads/2025/02/202502141599192414.pdf",
  },
  {
    id: 3,
    title: "माहिती अधिकार अर्ज क",
    size: "20 KB",
    file: "https://cdnbbsr.s3waas.gov.in/s3be1df9a5d08724971f64a511e24fc904/uploads/2025/02/20250214824848723.pdf",
  },
  {
    id: 4,
    title:
      "सामान्य प्रशासन विभाग-माहिती अधिकार अधिनियम 2005 कलम 4(1)(ख) नुसार 1 ते 17 बाबी ची माहिती",
    size: "633 KB",
    file: "https://cdnbbsr.s3waas.gov.in/s3be1df9a5d08724971f64a511e24fc904/uploads/2025/04/20251104791161244.pdf",
  },
  // 👉 Add remaining items same format
];

const RtiDocuments = () => {
  return (
    <>
      <Helmet>
        <title>माहितीचा अधिकार कागदपत्रे - पंचायत समिती पुणे</title>
        <meta name="description" content="पंचायत समिती पुणे मध्ये माहिती अधिकार अधिनियम 2005 अंतर्गत उपलब्ध कागदपत्रे आणि अर्ज डाउनलोड करा." />
        <meta name="keywords" content="RTI, माहिती अधिकार, कागदपत्रे, पंचायत समिती पुणे" />
        <meta property="og:title" content="माहितीचा अधिकार कागदपत्रे - पंचायत समिती पुणे" />
        <meta property="og:description" content="माहिती अधिकार अधिनियम अंतर्गत उपलब्ध कागदपत्रे आणि अर्ज." />
        <meta property="og:url" content="https://panchayat-samiti-pune.com/माहिती-अधिकार/माहितीचा-अधिकार-कागदपत्रे" />
        <link rel="canonical" href="https://panchayat-samiti-pune.com/माहिती-अधिकार/माहितीचा-अधिकार-कागदपत्रे" />
      </Helmet>
      <div>
        <BannerAll />
        <div className="subpage-content container">
          <div className="table-container rti-table">

            <table className="data-table">
              <caption>माहितीचा अधिकार कागदपत्रे</caption>
              <thead>
                <tr>
                  <th style={{ width: "5%" }}>अ.क्र</th>
                  <th style={{ width: "75%" }}>शीर्षक</th>
                  <th style={{ width: "20%" }}>डाउनलोड</th>
                </tr>
              </thead>

        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>

              <td>{doc.title}</td>

              <td>
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  पहा
                </a>{" "}
                ({doc.size})
                
                {"  "}
                
                <a
                  href={doc.file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn"
                >
                  <i className="bi bi-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </>
  );
};

export default RtiDocuments;