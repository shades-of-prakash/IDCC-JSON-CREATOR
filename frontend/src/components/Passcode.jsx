// src/PasscodePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { usePasscode } from "../context/Passcodecontest";

const PasscodePage = () => {
	const [passcode, setPasscode] = useState("");
	const { setIsAuthorized } = usePasscode();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (passcode === "010120041985") {
			setIsAuthorized(true);
			navigate("/admin");
		} else {
			alert("Invalid passcode");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h2 className="text-xl mb-4">Enter Admin Passcode</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="password"
					placeholder="Enter passcode"
					value={passcode}
					onChange={(e) => setPasscode(e.target.value)}
					className="border px-4 py-2 rounded"
				/>
				<button
					type="submit"
					className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default PasscodePage;
