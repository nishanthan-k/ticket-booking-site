import { useLocation } from "react-router"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"

const Search = () => {
  const location = useLocation();

  console.log(location)
  return (
    <div>
      <Navbar />
      <Header type="showInListPage" />
      <div className="search">
        <div className="searchContainer">
          <div className="searchWrapper">
            <div className="searchOption"></div>
            <div className="searchResult"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search