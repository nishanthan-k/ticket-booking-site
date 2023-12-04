import "./featuredPlaces.css"
import DublinImg from "../../assets/images/places/dublin.webp"
import RenoImg from "../../assets/images/places/reno.webp"
import AustinImg from "../../assets/images/places/austin.webp"

const FeaturedPlaces = () => {
  return (
    <div className="featuredPlaces">
      <div className="featuredPlacesItem">
        <img src={DublinImg} alt="" className="featuredPlacesImg" />
        <div className="featuredPlacesTitle">
          <h1>Dublin</h1>
          <h2>127 properties</h2>
        </div>
      </div>
      <div className="featuredPlacesItem">
        <img src={RenoImg} alt="" className="featuredPlacesImg" />
        <div className="featuredPlacesTitle">
          <h1>Reno</h1>
          <h2>192 properties</h2>
        </div>
      </div>
      <div className="featuredPlacesItem">
        <img src={AustinImg} alt="" className="featuredPlacesImg" />
        <div className="featuredPlacesTitle">
          <h1>Austin</h1>
          <h2>144 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPlaces;