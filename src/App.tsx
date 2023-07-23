import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TableComponent from "./component/TableComponent";
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
                    { key: "id", label: "ID" },
                    { key: "last_name", label: "Last Name" },
                    { key: "state", label: "State" },
                    { key: "gender", label: "Gender" },
                    { key: "job", label: "Job" },
                  ]}
                />
              </div>
            }
          />
          <Route
            path="marriage"
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
            path="car"
            element={<Search searchQuery={""} handleSearch={() => {}} />}
          />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
