import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
const MainLayout = () => {
	return (
		<div className="w-full h-full overflow-y-scroll">
			{/* <Navbar /> */}
			<div className="w-full h-full flex items-center justify-center">
				<Home />
			</div>
		</div>
	);
};

export default MainLayout;
