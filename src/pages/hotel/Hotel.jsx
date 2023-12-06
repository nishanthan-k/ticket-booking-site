import {
	faChevronLeft,
	faChevronRight,
	faLocationDot,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Subscribe from "../../components/subscribe/Subscribe";
import "./hotel.css";

const Hotel = () => {
	const photos = [
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
		},
	];

	const [sliderIndex, setSliderIndex] = useState(0);
	const [sliderOpen, setSliderOpen] = useState(false);

	const handleSlider = (index) => {
		setSliderIndex(index);
		setSliderOpen(true);
	};

  console.log(sliderOpen, sliderIndex, photos.length-1)

	return (
		<div>
			<Navbar />
			<Header type="showInListPage" />
			<div className="hotelContainer">
				{sliderOpen && (
					<div className="sliderContainer">
						<FontAwesomeIcon
							icon={faXmark}
							className="sliderCloseBtn"
							onClick={() => setSliderOpen(false)}
						/>
						<FontAwesomeIcon
							icon={faChevronLeft}
							className="sliderLeftBtn"
              onClick={() => sliderIndex > 0 ? setSliderIndex(sliderIndex-1) : setSliderIndex(photos.length-1)}
						/>
						<FontAwesomeIcon
							icon={faChevronRight}
							className="sliderRightBtn"
              onClick={() => sliderIndex < photos.length-1 ? setSliderIndex(sliderIndex+1) : setSliderIndex(0)}
						/>
						<div className="sliderWrapper">
							<img
								src={photos[sliderIndex].src}
								alt={`photo ${sliderIndex}`}
								className="sliderImg"
							/>
						</div>
					</div>
				)}
				<div className="hotelWrapper">
					<button className="bookNowBtn">Reserve or Book Now!</button>
					<h1 className="hotelTitle">Grand Hotel</h1>
					<div className="hotelAddress">
						<FontAwesomeIcon icon={faLocationDot} />
						<span>Elton st 125 New York</span>
					</div>
					<span className="hotelDistance">
						Excellent Distance - 500m from center
					</span>
					<span className="highPriceHighlight">
						Book a stay over $114 at this property and get a free
						airport taxi
					</span>
					<div className="hotelImageContainer">
						{photos.map((photo, index) => (
							<div
								key={`photo${index}`}
								className="hotelImageWrapper"
							>
								<img
									src={photo.src}
									alt={`photo${index}`}
									className="hotelImg"
									onClick={() => handleSlider(index)}
								/>
							</div>
						))}
					</div>
					<div className="hotelDetails">
						<div className="hotelDetailsTexts">
							<h1 className="hotelTitle">
								Stay in the heart of City
							</h1>
							<p className="hotelDesc">
								Located a 5-minute walk from St. Florians Gate
								in Krakow, Tower Street Apartments has
								accommodations with air conditioning and free
								WiFi. The units come with hardwood floors and
								feature a fully equipped kitchenette with a
								microwave, a flat-screen TV, and a private
								bathroom with shower and a hairdryer. A fridge
								is also offered, as well as an electric tea pot
								and a coffee machine. Popular points of interest
								near the apartment include Cloth Hall, Main
								Market Square and Town Hall Tower. The nearest
								airport is John Paul II International
								Kraków–Balice, 16.1 km from Tower Street
								Apartments, and the property offers a paid
								airport shuttle service.
							</p>
						</div>
						<div className="hotelDetailsPrice">
							<h1>Perfect for a 9-night stay!</h1>
							<span>
								Located in the real heart of Krakow, this
								property has an excellent location score of 9.8!
							</span>
							<h2>
								<b>$945</b> (9 nights)
							</h2>
							<button>Reserve or Book Now!</button>
						</div>
					</div>
				</div>
				<Subscribe />
				<Footer />
			</div>
		</div>
	);
};

export default Hotel;
