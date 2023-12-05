import FeaturedHouses from "../../components/featuredHouses/FeaturedHouses";
import FeaturedPlaces from "../../components/featuredPlaces/FeaturedPlaces";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import Subscribe from "../../components/subscribe/Subscribe";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import Footer from "../../components/footer/Footer";

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
				<Subscribe />
				<Footer />
			</div>  
		</div>
	);
};

export default Home;
