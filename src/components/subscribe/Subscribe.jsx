import "./subscribe.css";

const Subscribe = () => {
	return (
		<div className="subscribe">
			<h1 className="subscribeTitle">Save time, save money!</h1>
			<span className="subscribeDesc">
				Sign up and we will send the best deals to you
			</span>
			<div className="subscribeInputContainer">
				<input
					type="text"
					name="subscribeInput"
					id="subscribeInput"
					placeholder="Your subscribe"
					className="subscribeInput"
				/>
				<button className="subscribeBtn">Subscribe</button>
			</div>
		</div>
	);
};

export default Subscribe;
