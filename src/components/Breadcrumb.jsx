import pagesData from "../data/pagesData"

export default function Breadcrumb(){

  const paths = window.location.pathname.split("/").filter(Boolean)

  const navigate = (path) => {
    window.location.href = path;
  };

  return(
    <div className="breadcrumb">

      <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>मुख्यपृष्ठ</a>

      {paths.map((path,index)=>{

        const decoded = decodeURIComponent(path)

        const href = "/" + paths.slice(0,index+1).join("/")

        const title = pagesData[decoded]?.title || decoded.replace(/-/g," ")

        return(

          <span key={index} className="crumb">

            <span className="separator"> &gt; </span>

            {index === paths.length-1
              ? <span>{title}</span>
              : <a href={href} onClick={(e) => { e.preventDefault(); navigate(href); }}>{title}</a>
            }

          </span>

        )

      })}

    </div>

  )

}