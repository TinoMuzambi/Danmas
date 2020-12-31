import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const template_params = {
			reply_to: email,
			from_name: name,
			message: message,
		};
		const service_id = "service_tebm2p4";
		const template_id = "template_tsoy1fo";
		window.emailjs
			.send(service_id, template_id, template_params)
			.then((res) => {
				alert("Thank you for your query! We will be in touch.");
				setName("");
				setEmail("");
				setMessage("");
			})
			.catch((err) => alert("Something went wrong, please try again."));
	};

	return (
		<div className="contact">
			<img src="/assets/phone-dark.jpg" alt="phone" className="backdrop" />
			<div className="content">
				<form onSubmit={handleSubmit} className="contact-form" id="form">
					<label htmlFor="name">Name (required)</label>
					<input
						type="text"
						name="name"
						id="name"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<label htmlFor="email">Email (required)</label>
					<input
						type="email"
						name="email"
						id="email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="10"
						required
						value={message}
						onChange={(e) => setMessage(e.target.value)}
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
						<a href="tel:+27749989847">+27 74 998 9847</a>
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
