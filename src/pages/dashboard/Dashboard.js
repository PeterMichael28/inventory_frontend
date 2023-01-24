import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductSummary from "../../components/product/productSummary/ProductSummary";
import { selectIsLoggedIn } from "../../store/features/auth/authSlice";
import { getProducts } from "../../store/features/product/productSlice";

import ProductList from "../../components/product/productList/ProductList"
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";


const Dashboard = () => {

  useRedirectLoggedOutUser("/login")

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProducts());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div>
      <ProductSummary products={products} />
      <ProductList products={products} isLoading={isLoading} />
    </div>
  );
};

export default Dashboard;
