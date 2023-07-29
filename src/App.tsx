import "./App.css";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TableComponent from "./component/TableComponent";
import Search from "./component/Search";
import NavLayout from "./pages/NavLayout";
import LoanLayout from "./pages/LoanLayout";
import Loan from "./pages/Loan";
import { fetchRows, ResponseData, Row } from "./component/fetch";

function App() {
  const location = useLocation();
  const currentUrl = location.pathname;
  console.log("currentUrl:", currentUrl);
  const [products, setProducts] = useState<Row[]>([]);

  useEffect(() => {
    console.log("Fetching data for:", currentUrl);
    switch (currentUrl) {
      case "/marriage":
        fetchRows("marriage");
        break;
      case "/products":
        fetchRows("/sample-data/products").then((data) =>
          setProducts(data.products || [])
        );
        break;
      case "/car":
        fetchRows("car");
        break;
      default:
        break;
    }
  }, [currentUrl]);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavLayout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={
            <TableComponent
              rows={products}
              emptyRows={[]}
              handleSort={() => {}}
              columns={[
                { key: "name", label: "Name" },
                { key: "category", label: "Category" },
                { key: "price", label: "Price" },
              ]}
            />
          }
        />
        <Route path=":loan" element={<LoanLayout />}>
          <Route index element={<Loan />} />
          <Route
            path=":marriage"
            element={
              <TableComponent
                rows={[]}
                emptyRows={[]}
                handleSort={() => {}}
                columns={[
                  { key: "name", label: "Name" },
                  { key: "category", label: "Category" },
                  { key: "price", label: "Price" },
                ]}
              />
            }
          />
          <Route
            path=":car"
            element={<Search searchQuery={""} handleSearch={() => {}} />}
          />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
