import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import format from "date-fns/format";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "./search.css";
import SearchResult from "../../components/searchResult/SearchResult";

const Search = () => {
	const location = useLocation();

	const [destination, setDestination] = useState(
		location.state.destination !== "Not Decided?"
			? location.state.destination
			: "Not Decided ?"
	);
	const [date, setDate] = useState(location.state.date);
	const [options, setOptions] = useState(location.state.options);
	const [openDate, setOpenDate] = useState(false);

	// console.log(location.state.destination, destination);
	// console.log(location.state.destination === destination);

	return (
		<div>
			<Navbar />
			<Header type="showInListPage" />
			<div className="search">
				<div className="searchContainer">
					<div className="searchWrapper">
						<div className="searchList">
							<h1 className="sTitle">Search</h1>
							<span className="searchDestDate">
								<div className="sItem">
									<label>Destination</label>
									<input
										type="text"
										name="sDestination"
										id="sDestination"
										className="sDest sText"
										placeholder={destination}
										// value={destination}
										onChange={(e) =>
											setDestination(e.target.value)
										}
									/>
								</div>
								<div className="sItem sDateOption">
									<label>Check-In Date</label>
									<span
										className="sDate sText"
										onClick={() => setOpenDate(!openDate)}
									>
										{`
                    ${format(date[0].startDate, "dd-MM-yyyy")}
                    to
                    ${format(date[0].endDate, "dd-MM-yyyy")}
                  `}
									</span>
									{openDate && (
										<DateRange
											onChange={(item) =>
												setDate([item.selection])
											}
											minDate={new Date()}
											ranges={date}
											moveRangeOnFirstSelection={false}
											className="sCalendar"
										/>
									)}
								</div>
							</span>
							<div className="sItem">
								<label>Options</label>
								<div className="sOptionsList">
									<div className="sOptionsItem">
										<p>
											Min Price
											<span className="optionsTextLight">
												{" "}
												per night
											</span>
										</p>
										<input
											type="number"
											name="sMinPrice"
											id="sMinPrice"
										/>
									</div>
									<div className="sOptionsItem">
										<p>
											Max Price
											<span className="optionsTextLight">
												{" "}
												per night
											</span>
										</p>
										<input
											type="number"
											name="sMaxPrice"
											id="sMaxPrice"
										/>
									</div>
									<div className="sOptionsItem">
										<span>Adults</span>
										<input
											type="number"
											min={1}
											name=""
											id=""
											className="optionInput"
											value={options.adults}
											onChange={(e) =>
												setOptions(e.target.value)
											}
										/>
									</div>
									<div className="sOptionsItem">
										<span>Children</span>
										<input
											type="number"
											min={0}
											name=""
											id=""
											className="optionInput"
											value={options.children}
											onChange={(e) =>
												setOptions(e.target.value)
											}
										/>
									</div>
									<div className="sOptionsItem">
										<span>Rooms</span>
										<input
											type="number"
											min={1}
											name=""
											id=""
											className="optionInput"
											value={options.rooms}
											onChange={(e) =>
												setOptions(e.target.value)
											}
										/>
									</div>
								</div>
							</div>
							<button className="searchBtn">Search</button>
						</div>
						<div className="searchResult">
							<SearchResult />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Search;
