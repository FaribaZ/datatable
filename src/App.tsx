import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TableComponent from "./component/TableComponent";
import { Pagination } from "@mui/material";
import Search from "./component/Search";
import NavLayout from "./pages/NavLayout";
import LoanLayout from "./pages/LoanLayout";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavLayout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loan" element={<LoanLayout />}>
          <Route
            index
            element={
              <div>
                <TableComponent
                  rows={[]}
                  emptyRows={[]}
                  handleSort={() => {}}
                  columns={[
                    { key: "id", label: "ID2" },
                    { key: "job", label: "Job2" },
                  ]}
                />
                <Pagination />
              </div>
            }
          />
          <Route
            path="car"
            element={<Search searchQuery={""} handleSearch={() => {}} />}
          />
          <Route path="marriage" element={<Pagination />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
