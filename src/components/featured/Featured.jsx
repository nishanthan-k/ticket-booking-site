import "./featured.css"
import DublinImg from "../../assets/images/dublin.webp"
import RenoImg from "../../assets/images/reno.webp"
import AustinImg from "../../assets/images/austin.webp"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={DublinImg} alt="" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Dublin</h1>
          <h2>127 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={RenoImg} alt="" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Reno</h1>
          <h2>192 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={AustinImg} alt="" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Austin</h1>
          <h2>144 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured;