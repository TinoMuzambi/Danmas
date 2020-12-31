import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";

function Navbar({ root }) {
	const [shown, setShown] = useState(false);

	return (
		<nav className="nav">
			<div className={`ul-wrapper ${shown ? "active" : ""}`}>
				<VscThreeBars className="bars" onClick={() => setShown(!shown)} />
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
							onClick={() =>
								root.services.scrollIntoView({ behavior: "smooth" })
							}
						>
							Services
						</li>
						<li
							className="link"
							onClick={() =>
								root.contact.scrollIntoView({ behavior: "smooth" })
							}
						>
							Contact
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
