import React from "react";

function About() {
	return (
		<div className="about">
			<h1 className="title">Who We Are</h1>
			<div className="list-wrapper">
				<ul className="list">
					<ul className="sublist">
						<li className="item">
							Our Vision
							<ul className="list">
								<li className="item">
									To be a leader in assisting businesses attain economic growth.
								</li>
							</ul>
						</li>
						<li className="item">
							Our Mission
							<ul className="list">
								<li className="item">
									We assist businesses manage their financial resources by
									combining research, technology and continuous improvement
									through dedicated and competent employees.
								</li>
							</ul>
						</li>
						<li className="item">
							Our Values
							<ul className="list">
								<li className="inner-item">Excellence</li>
								<li className="inner-item">Integrity</li>
								<li className="inner-item">Commitment</li>
								<li className="inner-item">Confidentiality</li>
							</ul>
						</li>
					</ul>
				</ul>
			</div>
		</div>
	);
}

export default About;
