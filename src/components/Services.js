import React from "react";
import { VscSymbolMisc, VscCreditCard } from "react-icons/vsc";

function Services() {
	return (
		<div className="services">
			<h1 className="title">Services</h1>

			<div className="service">
				<VscCreditCard className="icon" />
				<div className="content">
					<h2 className="subtitle">Accounting and Bookkeeping Services</h2>
					<ul className="list">
						<li className="item">Payroll Preparation and Administration</li>
						<li className="item">Taxation Advice</li>
						<li className="item">Budgeting and Budgetary Control</li>
						<li className="item">Purchasesd and Inventory Management</li>
					</ul>
				</div>
			</div>

			<div className="service">
				<VscSymbolMisc className="icon" />
				<div className="content">
					<h2 className="subtitle">Other Services</h2>
					<ul className="list">
						<li className="item">
							Company Registration and Corporate Governance
						</li>
						<li className="item">Investment Advice</li>
						<li className="item">Entrepreneurship Training</li>
						<li className="item">Risk Management and Business Continuity</li>
						<li className="item">Strategy Formulation and Planning</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Services;
