import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBed,
	faCalendarDays,
	faCar,
	faPerson,
	faPlane,
	faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useState } from "react";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PropTypes from "prop-types"
import { useNavigate } from "react-router";

const Header = ({ type }) => {
	const [openState, setOpenState] = useState(false);
	const [openOption, setOpenOption] = useState(false);
	const [destination, setDestination] = useState("Not Decided?");

	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const [options, setOptions] = useState({
		adults: 1,
		children: 0,
		rooms: 1,
	});

	const handleOptions = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev, [name]: operation === "increase" ? options[name] + 1 : options[name] - 1
			};
		});
	};

	const navigate = useNavigate();
	const handleSearch = () => {
		navigate("/search", {state: {destination, date, options}})
	}

	return (
		<div className="header">
			<div className={type !== "showInListPage" ? "headerContainer" : "headerContainer showInListPage"}>
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faBed}  />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faPlane}  />
						<span>Flights</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar}  />
						<span>Rental</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faBed}  />
						<span>Attractions</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faTaxi}  />
						<span>Airport Taxis</span>
					</div>
				</div>
				{type !== "showInListPage" &&
					<>
						<h1 className="headerTitle">
							A lifetime of discounts? Its Genius.
						</h1>
						<p className="headerDesc">
							Get rewarded for your travels – unlock instant savings of
							10% or more with a free BookingTomb account
						</p>
						<button className="headerBtn">Sign in / Register</button>
						<div className="headerSearch">
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faBed} className="headerIcon" />
								<input
									type="text"
									placeholder="Where are you going?"
									className="headerSearchInput"
									onChange={e => setDestination(e.target.value)}
								/>
							</div>
							<div className="headerSearchItem">
								<FontAwesomeIcon
									icon={faCalendarDays}
									className="headerIcon headerCalendarIcon"
									onClick={() => setOpenState(!openState)}
								/>
								<span
									className="headerSearchText"
									onClick={() => setOpenState(!openState)}
								>
									{`${format(date[0].startDate, "dd/MM/yyyy")} 
									to
								 ${format(date[0].endDate, "dd/MM/yyyy")}`}
								</span>
								{openState && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDate([item.selection])}
										minDate={new Date()}
										moveRangeOnFirstSelection={false}
										ranges={date}
										className="date"
									/>
								)}
							</div>
							<div className="headerSearchItem">
								<FontAwesomeIcon
									icon={faPerson}
									className="headerIcon headerPersonIcon"
									onClick={() => setOpenOption(!openOption)}
								/>
								<span
									className="headerSearchText"
									onClick={() => setOpenOption(!openOption)}
								>
									{`${options.adults} Adult . ${options.children} Children . ${options.rooms} Room`}
								</span>
								{openOption && (
									<div className="options">
										<div className="optionItem">
											<span className="optionText">Adult</span>
											<div className="optionCounter">
												<button
													className="optionCounterBtn"
													disabled={options.adults <= 1}
													onClick={() => handleOptions("adults", "decrease")}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{options.adults}
												</span>
												<button
													className="optionCounterBtn"
													onClick={() => handleOptions("adults", "increase")}
												>
													+
												</button>
											</div>
										</div>
										<div className="optionItem">
											<span className="optionText">Children</span>
											<div className="optionCounter">
												<button
													className="optionCounterBtn"
													disabled={options.children <= 0}
													onClick={() => handleOptions("children", "decrease")}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{options.children}
												</span>
												<button
													className="optionCounterBtn"
													onClick={() => handleOptions("children", "increase")}
												>
													+
												</button>
											</div>
										</div>
										<div className="optionItem">
											<span className="optionText">Room</span>
											<div className="optionCounter">
												<button
													className="optionCounterBtn"
													disabled={options.rooms <= 1}
													onClick={() => handleOptions("rooms", "decrease")}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{options.rooms}
												</span>
												<button
													className="optionCounterBtn"
													onClick={() => handleOptions("rooms", "increase")}
												>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="headerSearchItem" onClick={handleSearch}>
								<button className="headerBtn">Search</button>
							</div>
						</div>
					</>}
			</div>
		</div>
	);
};

Header.propTypes = {
	type: PropTypes.string,
}

export default Header;
