import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, About, Housing, ErrorPage } from "./pages";
import "./styles/Global.scss";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/Kasa/" element={<Home />} />
				<Route path="/Kasa/about" element={<About />} />
				<Route path="/Kasa/housing/:id" element={<Housing />} />
				<Route path="/Kasa/error" element={<ErrorPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</Router>
	</StrictMode>,
);
