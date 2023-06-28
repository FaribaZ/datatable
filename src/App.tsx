import "./App.css";
import DataTable from "./component/DataTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <DataTable />
    </QueryClientProvider>
  );
}

export default App;
