import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
	const handleSubmit = () => {
		console.log("Email!");
	};

	return (
		<div className="contact">
			<div className="after"></div>
			<img src="/assets/phone.jpg" alt="phone" className="backdrop" />
			<div className="content">
				<form action={handleSubmit} className="contact-form">
					<label htmlFor="name">Name (required)</label>
					<input type="text" name="name" id="name" required />
					<label htmlFor="email">Email (required)</label>
					<input type="email" name="email" id="email" required />
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="10"
						required
					></textarea>
					<button type="submit">Contact us</button>
				</form>
				<div className="details">
					<div className="socials">
						<a
							href="https://facebook.com"
							className="link"
							target="_blank"
							rel="noreferrer"
						>
							<FaFacebook className="icon" />
						</a>
						<a
							href="https://linkedin.com"
							className="link"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedin className="icon" />
						</a>
						<a
							href="https://twitter.com"
							className="link"
							target="_blank"
							rel="noreferrer"
						>
							<FaTwitter className="icon" />
						</a>
						<a
							href="https://instagram.com"
							className="link"
							target="_blank"
							rel="noreferrer"
						>
							<FaInstagram className="icon" />
						</a>
					</div>
					<div className="address">
						<a href="mailto:danmasara@gmail.com" className="email">
							danmasara@gmail.com
						</a>
						<a href="tel:+277499889847">+277499889847</a>
						<p className="text">25, 7th Avenue</p>
						<p className="text">Belgravia</p>
						<p className="text">Cape Town, Western Cape 7764</p>
						<p className="text">South Africa</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
