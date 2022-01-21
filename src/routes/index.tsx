/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages";
import Account from "../pages/account";
import Dashboard from "../pages/account/dashboard";
import Transaction from "../pages/account/transaction";
import Detail from "../pages/account/transaction/detail";
import Login from "../pages/login";
import Register from "../pages/register";
import { reduxAction } from "../stores/actions/action";
import { RootState } from "../stores/reducers/reducer";

const Index = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);

  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString || "{}");
    userToken.token
      ? dispatch(reduxAction("isLoggedIn", true))
      : dispatch(reduxAction("isLoggedIn", false));
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="account" element={<Account />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="transaction/:id" element={<Detail />} />
          </Route>
        </Route>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
