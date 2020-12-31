import React from "react";

function Contact() {
	const handleSubmit = () => {
		console.log("Email!");
	};

	return (
		<div className="contact">
			<div className="form">
				<form action={handleSubmit} className="contact-form">
					<label htmlFor="name"></label>
					<input type="text" name="name" id="name" />
					<label htmlFor="email"></label>
					<input type="email" name="email" id="email" />
					<label htmlFor="message"></label>
					<textarea name="message" id="message" cols="30" rows="10"></textarea>
					<button type="submit">Contact us</button>
				</form>
			</div>
			<div className="details"></div>
		</div>
	);
}

export default Contact;
