import React from "react";
import "./css/App.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar root={this} />
				<section
					ref={(section) => {
						this.home = section;
					}}
				>
					<Hero />
				</section>
				<section
					ref={(section) => {
						this.home = section;
					}}
				>
					<About />
				</section>
				<section
					ref={(section) => {
						this.services = section;
					}}
				>
					<Services />
				</section>
				<section
					ref={(section) => {
						this.contact = section;
					}}
				>
					<Contact />
				</section>

				<Footer />
			</div>
		);
	}
}

export default App;
