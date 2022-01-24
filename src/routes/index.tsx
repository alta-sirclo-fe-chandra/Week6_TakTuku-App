import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages";
import Account from "../pages/account";
import Dashboard from "../pages/account/dashboard";
import Transaction from "../pages/account/transaction";
import Detail from "../pages/account/transaction/detail";
import Login from "../pages/login";
import Register from "../pages/register";
import ProductDetail from "../pages/product/detail";
import DetailAccount from "../pages/account/detail";
import Address from "../pages/account/address";
import Product from "../pages/account/my_product";
import ProductUpdate from "../pages/account/my_product/update";
import CreateProduct from "../pages/account/my_product/create";
import Checkout from "../pages/checkout";
import Success from "../pages/checkout/success";

const Index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="product/:id" element={<ProductDetail />} />
					<Route path="cart/checkout/:id" element={<Checkout />} />
					<Route path="account" element={<Account />}>
						<Route index element={<Navigate to="dashboard" />} />
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="userid" element={<DetailAccount />} />
						<Route path="transaction" element={<Transaction />} />
						<Route path="transaction/:id" element={<Detail />} />
						<Route path="address" element={<Address />} />
						<Route path="product" element={<Product />} />
						<Route path="product/create" element={<CreateProduct />} />
						<Route path="product/update" element={<ProductUpdate />} />
					</Route>
				</Route>
				<Route path="success" element={<Success />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Index;
