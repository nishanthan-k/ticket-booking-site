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
          <span className="featuredHouseName">Aparthotel Stare Miasto</span>
          <span className="featuredHouseCity">Madrid</span>
          <span className="featuredHousePrice">Starting from $120</span>
        </div>
        <div className="featuredHousesListItem">
          <img src={ComfortSuitesAirport} alt="ComfortSuitesAirport" className="featuredHousesImg" />
          <span className="featuredHouseName">Aparthotel Stare Miasto</span>
          <span className="featuredHouseCity">Madrid</span>
          <span className="featuredHousePrice">Starting from $120</span>
        </div>
        <div className="featuredHousesListItem">
          <img src={FourSeasonsHotel} alt="FourSeasonsHotel" className="featuredHousesImg" />
          <span className="featuredHouseName">Aparthotel Stare Miasto</span>
          <span className="featuredHouseCity">Madrid</span>
          <span className="featuredHousePrice">Starting from $120</span>
        </div>
        <div className="featuredHousesListItem">
          <img src={HilteonGardenInn} alt="HilteonGardenInn" className="featuredHousesImg" />
          <span className="featuredHouseName">Aparthotel Stare Miasto</span>
          <span className="featuredHouseCity">Madrid</span>
          <span className="featuredHousePrice">Starting from $120</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedHouses