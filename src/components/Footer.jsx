import "./footer.css"

function Footer() {
  return (
    <footer>

      {/* Top Links */}
      <div className="footer-top">
        <div className="container text-center">

          <a href="#">अभिप्राय</a>
          <span>|</span>
          <a href="#">वेबसाइट धोरण</a>
          <span>|</span>
          <a href="#">आमच्याशी संपर्क साधा</a>
          <span>|</span>
          <a href="#">मदत</a>
          <span>|</span>
          <a href="#">वेब माहिती व्यवस्थापन</a>
          <span>|</span>
          <a href="#">FAQs</a>

        </div>
      </div>


      {/* Main Footer */}
      <div className="footer-main">

        <div className="container">

          <div className="row">

            {/* Left Section */}
            <div className="col-12 col-sm-6 col-lg-3">

              <div className="footer-logo d-flex align-items-center gap-3">

                <img src="/images/emblem.png" alt="महाराष्ट्र शासनाचा लोगो" />

                <div>
                  <a className="sitetitle" href="/"><strong>पंचायत समिती पुणे</strong></a>
                  <a className="sitetitle" href="/"><h5>Panchayat Samiti Pune</h5></a>
                </div>

              </div>

              <p className="mt-3 small">
                मालकीची सामग्री जिल्हा परिषद पुणे<br/>
                राष्ट्रीय माहिती विज्ञान केंद्र द्वारे विकसित आणि होस्ट केलेले,<br/><br/>
                शेवटचे अद्यावत: March 11, 2026
              </p>

            </div>


            {/* Important Links */}
            <div className="col-12 col-sm-6 col-lg-3">

              <h6>महत्वाच्या लिंक</h6>

              <ul>
                <li><a href="https://www.india.gov.in/" target="blank">भारत सरकार</a></li>
                <li><a href="https://www.maharashtra.gov.in/" target="blank">महाराष्ट्र शासन</a></li>
                <li><a href="https://rdd.maharashtra.gov.in/" target="blank">ग्रामविकास व पंचायतराज विभाग</a></li>
                <li><a href="https://divcompune.maharashtra.gov.in/" target="blank">विभागीय कार्यालय, पुणे</a></li>
                <li><a href="https://pune.gov.in/" target="blank">जिल्हाधिकारी कार्यालय, पुण</a></li>
                <li><a href="https://dashboard.daxy.in/pages/login.php" target="blank">इंटीग्रेटेड जिल्हा परिषद पुणे डॅशबोर् (ID)</a></li>
                <li><a href="https://www.punezpebilling.in/site/login" target="blank">इंटेलिजंट वर्क्स मॅनेजमेंट सिस्टम (IWMS)</a></li>
                <li><a href="https://zppunekamwatap.in/" target="blank">सु.बे.अ आणि मजूर सहकारी संस्था कामवाटप सिस्टम</a></li>
                <li><a href="https://drive.google.com/file/d/1vUHbFzoe8-RWmJuCtJYi7tcrHAS2GMid/view" target="blank">१५० दिवसांच्या सेवा कामगार कार्यक्रमाचे मूल्यांकन</a></li>
                <li><a href="https://cdnbbsr.s3waas.gov.in/s3be1df9a5d08724971f64a511e24fc904/uploads/2025/12/202512082022874382.pdf" target="blank">राष्ट्रीय आयुष अभियानांतर्गत डाटा एन्ट्री ऑपरेटर पदाची पात्र व अपात्र यादी.</a></li>
                <li><a href="https://cdnbbsr.s3waas.gov.in/s3be1df9a5d08724971f64a511e24fc904/uploads/2025/11/202511261482118605.pdf" target="blank">बांधकाम उपविभाग इंदापूर साठी वाहन भाड्याने पुरवठा करणेसाठी दरपत्रके मागवणेबाबत</a></li>
                <li><a href="https://cdnbbsr.s3waas.gov.in/s3be1df9a5d08724971f64a511e24fc904/uploads/2025/11/202511201227498333.pdf" target="blank">बी पी एच यु अंतर्गत विविध तीन संवर्गाची अंतरीम गुणवत्ता यादी</a></li>
              </ul>

            </div>


            {/* Helpline */}
            <div className="col-12 col-sm-6 col-lg-3">

              <h6>हेल्पलाईन</h6>

              <ul>
                <li>आपत्कालीन पोलीस: <b>100</b></li>
                <li>आपत्कालीन हेल्पलाइन: <b>122</b></li>
                <li>गुन्हेगारी थांबवणारा: <b>1090</b></li>
                <li>महिला हेल्पलाइन: <b>1091</b></li>
                <li>बाल हेल्पलाइन: <b>1098</b></li>
                <li>नागरिकांचे कॉल सेंटर: <b>155300</b></li>
                <li>सायबर गुन्हे: <b>1930</b></li>
              </ul>

            </div>


            {/* Contact */}
            <div className="col-12 col-sm-6 col-lg-3">

            <h6>संपर्क करा</h6>

            <p>
                <i className="bi bi-geo-alt-fill me-2"></i>
                पुणे जिल्हा परिषद भवन,<br/>
                जिल्हाधिकारी कार्यालयाजवळ,<br/>
                पुणे - 411001
            </p>

            <p>
                <i className="bi bi-telephone-fill me-2"></i>
                020-26114141
            </p>

            <p>
                <i className="bi bi-envelope-fill me-2"></i>
                <a href="mailto:ceozp.pune@maharashtra.gov.in">ceozp.pune@maharashtra.gov.in</a>
            </p>

            <div>
              <i className="bi bi-instagram me-2"></i>
              <i className="bi bi-facebook me-2"></i>
              <i className="bi bi-youtube me-2"></i>
            </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer