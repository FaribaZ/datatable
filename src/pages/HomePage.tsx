import { Outlet } from "react-router-dom";
import DataTable from "../component/DataTable";

const HomePage = () => {
  return (
    <div>
      <DataTable />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
