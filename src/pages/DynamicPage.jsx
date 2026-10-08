import pagesData from "../data/pagesData"
import SubPageLayout from "../components/SubPageLayout"
import Seo from "../components/Seo"

function DynamicPage() {
  const path = decodeURI(window.location.pathname)
  const pathParts = path.split('/').filter(p => p)
  
  // Try to find the page by checking different slug combinations
  let page = null
  let pageSlug = null
  
  // Try full path first (for multi-level pages)
  if (pathParts.length >= 2) {
    pageSlug = pathParts.slice(-1)[0]; // Last part of path
    page = pagesData[pageSlug];
  }
  
  // If not found, try the full path with hyphens
  if (!page && pathParts.length >= 1) {
    pageSlug = pathParts[pathParts.length - 1];
    page = pagesData[pageSlug];
  }

  if (!page) {
    return (
      <>
        <Seo
          title="पृष्ठ मिळाले नाही"
          description="मागितलेला पृष्ठ उपलब्ध नाही किंवा अद्याप तयार केलेले नाही."
          url={`https://panchayat-samiti-pune.com${path}`}
          noindex={true}
        />
        <div className="container mt-5 text-center">
          <h1>404 - पृष्ठ मिळाले नाही</h1>
          <p className="lead mt-3">मागितलेला पृष्ठ उपलब्ध नाही किंवा अजून तयार नाही।</p>
          <a href="/" className="btn btn-primary mt-3">मुख्यपृष्ठावर परत जा</a>
        </div>
      </>
    )
  }

  const description = page.content ? page.content[0].substring(0, 160) : "पुणे जिल्हा परिषद आणि पंचायत समिती विषयी माहिती."

  return (
    <>
      <Seo
        title={page.title}
        description={description}
        keywords={`${page.title}, पंचायत समिती हवेली, जिल्हा परिषद`}
        url={`https://panchayat-samiti-pune.com${path}`}
      />
      <SubPageLayout
        title={page.title}
        date={page.date}
        label={page.label}
        content={page.content}
        sections={page.sections}
      />
    </>
  )
}

export default DynamicPage