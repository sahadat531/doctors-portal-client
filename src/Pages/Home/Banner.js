import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
	return (
		<div
			class="hero min-h-screen"
			style={{
				backgroundImage: `url("../../assets/images/bg.png")`,
			}}
		>
			<div class="hero-content flex-col lg:flex-row-reverse">
				<img
					src={chair}
					class="max-w-lg rounded-lg shadow-2xl"
					alt="hero-img"
				/>
				<div className="pr-3">
					<h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
					<p class="py-6 pr-7">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the
					</p>
					<button class="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
