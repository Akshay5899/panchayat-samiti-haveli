import Breadcrumb from "./Breadcrumb"
import "../styles/subpage.css"

export default function BannerAll() {

  return (

    <div>

      {/* Banner */}
      <div className="banner">
        <div className="banner-overlay">
          
        </div>
      </div>

      {/* Content */}
      <div className="all-subpage-content">
      <div className="container">
        <Breadcrumb />
      </div>
      </div>

    </div>

  )

}