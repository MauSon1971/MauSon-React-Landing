import React from "react";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Navbar from "./Navbar";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0 m-0">
			<Navbar />

			<div className="content-container d-flex flex-column">
				<div className="row">
					<Jumbotron />
				</div >
				<div className=" row mb-2 d-flex justify-content-center justify-content-lg-between g-1">
					<div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mb-2">
						<Card />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mb-2">
						<Card />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mb-2">
						<Card />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mb-2">
						<Card />
					</div>
				</div>
			</div>
			<div className="footer row text-white text-center bg-dark p-1 d-flex align-items-end">
				<p>Copyrigth @ melasuda.com 2024</p>
			</div>

		</div>
	);
};

export default Home;
