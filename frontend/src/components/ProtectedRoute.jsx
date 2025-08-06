// src/ProtectedRoute.jsx
import { Navigate } from "react-router";
import { usePasscode } from "../context/Passcodecontest";

const ProtectedRoute = ({ children }) => {
	const { isAuthorized } = usePasscode();

	return isAuthorized ? children : <Navigate to="/verify-passcode" />;
};

export default ProtectedRoute;
