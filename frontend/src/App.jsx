import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./components/MainLayout";
import CreateProblem from "./components/CreateProblem";
import { PasscodeProvider } from "./context/Passcodecontest.jsx";
import PasscodePage from "./components/Passcode";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
function App() {
	return (
		<BrowserRouter>
			<PasscodeProvider>
				<Routes>
					<Route path="/verify-passcode" element={<PasscodePage />} />
					<Route path="/" element={<MainLayout />} />

					<Route
						path="/create-problem"
						element={
							<ProtectedRoute>
								<CreateProblem />
							</ProtectedRoute>
						}
					/>

					<Route path="/view-problems" element={<div>Problems</div>} />
					<Route path="*" element={<div>Notfound</div>} />
				</Routes>
			</PasscodeProvider>
		</BrowserRouter>
	);
}

export default App;
