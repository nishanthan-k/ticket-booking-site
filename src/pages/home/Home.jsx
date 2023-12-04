import FeaturedHouses from "../../components/featuredHouses/FeaturedHouses";
import FeaturedPlaces from "../../components/featuredPlaces/FeaturedPlaces";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<Header />
			<div className="homeContainer">
				<FeaturedPlaces />
				<h1 className="homeTitle">Browse by property type</h1>
				<FeaturedProperties />
				<h1 className="homeTitle">Home guests love</h1>
				<FeaturedHouses />
			</div>  
		</div>
	);
};

export default Home;
