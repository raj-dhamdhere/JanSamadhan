import React from "react";
import "../Layouts/test.css";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Container } from "react-bootstrap";

class Forma extends React.Component {
	constructor() {
		super();
		this.state = {
			cardno: "",
			amount: "",
			encData: "",
		};
		this.update = this.update.bind(this);
		this.submit = this.submit.bind(this);
	}
	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value,
		});
	}

	submit = async (event) => {
		event.preventDefault();

		let response = await axios.post(
			"http://localhost:3000/api/manualTransaction",
			{
				cardno: this.state.cardno,
				amount: this.state.amount,
			}
		);

		console.log(await response.data.data);

		await this.setState({ encData: response.data.data.encryptedData });

		document.querySelector(
			'[name="me_id"]'
		).value = this.state.encData.me_id;
		document.querySelector(
			'[name="txn_details"]'
		).value = this.state.encData.txn_details;
		document.querySelector(
			'[name="pg_details"]'
		).value = this.state.encData.pg_details;
		document.querySelector(
			'[name="card_details"]'
		).value = this.state.encData.card_details;
		document.querySelector(
			'[name="cust_details"]'
		).value = this.state.encData.cust_details;
		document.querySelector(
			'[name="bill_details"]'
		).value = this.state.encData.bill_details;
		document.querySelector(
			'[name="ship_details"]'
		).value = this.state.encData.ship_details;
		document.querySelector(
			'[name="item_details"]'
		).value = this.state.encData.item_details;
		document.querySelector(
			'[name="other_details"]'
		).value = this.state.encData.other_details;

		document.querySelector("#submitForm").click();
	};

	render() {
		return (
			<div style={{ color: "black" }}>
				<form
					class="form-horizontal"
					id="avanthgarde_payment_form"
					action="https://www.avantgardepayments.com/agcore/payment"
					method="POST"
				>
					<input
						type="hidden"
						class="form-control"
						name="me_id"
						value=""
					/>
					<input
						type="hidden"
						class="form-control"
						name="txn_details"
						value=""
					/>
					<input
						type="hidden"
						class="form-control"
						name="pg_details"
						value=""
					/>
					<input
						type="hidden"
						class="form-control"
						name="card_details"
						value=""
					/>
					<input
						type="hidden"
						class="form-control"
						name="cust_details"
						value=""
					/>
					<input
						type="hidden"
						class="form-control"
						name="bill_details"
						value=""
					/>
					<input
						type="hidden"
						class="form-control"
						name="ship_details"
						value=""
					/>
					<input
						type="hidden"
						class="form-control"
						name="item_details"
						value=""
					/>
					<input
						type="hidden"
						class="form-control"
						name="other_details"
						value=""
					/>
					<input
						type="hidden"
						name="submit_details"
						id="submitForm"
						type="submit"
					/>
				</form>

				<Container>
					<Row>
						<Col>
							<form onSubmit={this.submit}>
								<h2>Amount:</h2>
								<input
									type="text"
									value={this.state.amount}
									name="amount"
									onChange={this.update}
									placeholder="amount"
								></input>

								<h2>CardNo:</h2>
								<input
									type="text"
									value={this.state.cardno}
									name="cardno"
									onChange={this.update}
									placeholder="cardNo"
								></input>

								<button type="submit" className="btnAuth">
									Submit{" "}
								</button>
							</form>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Forma;
