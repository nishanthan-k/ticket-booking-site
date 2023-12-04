import "./featuredHouses.css"
import AparthotelStareMiasto from "../../assets/images/houses/Aparthotel Stare Miasto.webp"
import ComfortSuitesAirport from "../../assets/images/houses/Comfort Suites Airport.jpg"
import FourSeasonsHotel from "../../assets/images/houses/Four Seasons Hotel.jpg"
import HilteonGardenInn from "../../assets/images/houses/Hilton Garden Inn.avif"

const FeaturedHouses = () => {
  return (
    <div className="featuredHouses">
      <div className="featuredHousesList">
        <div className="featuredHousesListItem">
          <img src={AparthotelStareMiasto} alt="AparthotelStareMiasto" className="featuredHousesImg" />
          <span className="featuredHousesName">Aparthotel Stare Miasto</span>
          <span className="featuredHousesCity">Madrid</span>
          <span className="featuredHousesPrice">Starting from $120</span>
          <div className="featuredHousesRatings">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="featuredHousesListItem">
          <img src={ComfortSuitesAirport} alt="ComfortSuitesAirport" className="featuredHousesImg" />
          <span className="featuredHousesName">Aparthotel Stare Miasto</span>
          <span className="featuredHousesCity">Madrid</span>
          <span className="featuredHousesPrice">Starting from $120</span>
          <div className="featuredHousesRatings">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="featuredHousesListItem">
          <img src={FourSeasonsHotel} alt="FourSeasonsHotel" className="featuredHousesImg" />
          <span className="featuredHousesName">Aparthotel Stare Miasto</span>
          <span className="featuredHousesCity">Madrid</span>
          <span className="featuredHousesPrice">Starting from $120</span>
          <div className="featuredHousesRatings">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="featuredHousesListItem">
          <img src={HilteonGardenInn} alt="HilteonGardenInn" className="featuredHousesImg" />
          <span className="featuredHousesName">Aparthotel Stare Miasto</span>
          <span className="featuredHousesCity">Madrid</span>
          <span className="featuredHousesPrice">Starting from $120</span>
          <div className="featuredHousesRatings">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedHouses