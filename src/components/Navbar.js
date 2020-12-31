import React from "react";

function Navbar({ root }) {
	return (
		<nav className="nav">
			<div className="links">
				<ul className="list">
					<li
						className="link"
						onClick={() => root.home.scrollIntoView({ behavior: "smooth" })}
					>
						Home
					</li>
					<li
						className="link"
						onClick={() => root.about.scrollIntoView({ behavior: "smooth" })}
					>
						About
					</li>
					<li
						className="link"
						onClick={() => root.services.scrollIntoView({ behavior: "smooth" })}
					>
						Services
					</li>
					<li
						className="link"
						onClick={() => root.contact.scrollIntoView({ behavior: "smooth" })}
					>
						Contact
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
