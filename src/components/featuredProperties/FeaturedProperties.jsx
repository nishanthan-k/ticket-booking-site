import "./featuredProperties.css";
import HotelsImg from "../../assets/images/properties/hotels.webp";
import ApartmentsImg from "../../assets/images/properties/apartments.jpg";
import CabinsImg from "../../assets/images/properties/cabins.jpg";
import ResortsImg from "../../assets/images/properties/resorts.jpg";
import VillasImg from "../../assets/images/properties/villas.jpg";

const FeaturedProperties = () => {
	return (
		<div className="featuredProperties">
			<div className="featuredPropertiesItem">
				<img src={HotelsImg} alt="HotelsImg" className="featuredPropertiesImg" />
				<div className="featuredPropertiesTitle">
					<h1>Hotels</h1>
					<h2>122 hotels</h2>
				</div>
			</div>
			<div className="featuredPropertiesItem">
				<img
					src={ApartmentsImg}
					alt="ApartmentsImg"
					className="featuredPropertiesImg"
				/>
				<div className="featuredPropertiesTitle">
					<h1>Apartments</h1>
					<h2>172 apartments</h2>
				</div>
			</div>
			<div className="featuredPropertiesItem">
				<img src={CabinsImg} alt="CabinsImg" className="featuredPropertiesImg" />
				<div className="featuredPropertiesTitle">
					<h1>Cabins</h1>
					<h2>112 cabins</h2>
				</div>
			</div>
			<div className="featuredPropertiesItem">
				<img src={ResortsImg} alt="ResortsImg" className="featuredPropertiesImg" />
				<div className="featuredPropertiesTitle">
					<h1>Resorts</h1>
					<h2>220 resorts</h2>
				</div>
			</div>
			<div className="featuredPropertiesItem">
				<img src={VillasImg} alt="VillasImg" className="featuredPropertiesImg" />
				<div className="featuredPropertiesTitle">
					<h1>Villas</h1>
					<h2>176 villas</h2>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProperties;
