import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Reloj = props => {
	return (
		<div className="container my-5">
			<div className="row">
				<div className="col-2">
					<div className="card text-center text-white bg-secondary py-5">
						<i className="far fa-clock fa-4x"></i>
					</div>
				</div>
				<div className="col-2">
					<div className="card text-center text-white bg-secondary py-5">
						<h1>{props.digitFive}</h1>
					</div>
				</div>
				<div className="col-2">
					<div className="card text-center text-white bg-secondary py-5">
						<h1>{props.digitFour}</h1>
					</div>
				</div>
				<div className="col-2">
					<div className="card text-center text-white bg-secondary py-5">
						<h1>{props.digitThree}</h1>
					</div>
				</div>
				<div className="col-2">
					<div className="card text-center text-white bg-secondary py-5">
						<h1>{props.digitTwo}</h1>
					</div>
				</div>
				<div className="col-2">
					<div className="card text-center text-white bg-secondary py-5">
						<h1>{props.digitOne}</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

Reloj.propTypes = {
	digitOne: PropTypes.string,
	digitTwo: PropTypes.string,
	digitThree: PropTypes.string,
	digitFour: PropTypes.string,
	digitFive: PropTypes.string
};

export default Reloj;
