import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages";
import Account from "../pages/account";
import Dashboard from "../pages/account/dashboard";
import Transaction from "../pages/account/transaction";
import Detail from "../pages/account/transaction/detail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductDetail from "../pages/ProductDetail";
import DetailAccount from "../pages/account/detail";
import Address from "../pages/account/address";

const Index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="product" element={<ProductDetail />} />
					<Route path="account" element={<Account />}>
						<Route index element={<Navigate to="dashboard" />} />
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="userid" element={<DetailAccount />} />
						<Route path="transaction" element={<Transaction />} />
						<Route path="transaction/:id" element={<Detail />} />
						<Route path="address" element={<Address />} />
					</Route>
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Index;
