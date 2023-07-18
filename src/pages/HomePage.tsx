import { Link } from "react-router-dom";
import DataTable from "../component/DataTable";

const HomePage = () => {
  return (
    <div>
      <DataTable />
      <div>
        <Link to="/add">See another page!</Link>
      </div>
    </div>
  );
};

export default HomePage;
