import React from "react";

function Hero() {
	return (
		<div className="hero">
			<div className="header">
				<h1 className="title">Danmas Consultancy</h1>
				<p className="subtitle">Helping businesses grow their finances.</p>
			</div>
			<div className="hero-img">
				<img src="/assets/laptop.jpg" alt="Laptop" className="image" />
				<p className="text">Welcome to our site</p>
			</div>
		</div>
	);
}

export default Hero;
