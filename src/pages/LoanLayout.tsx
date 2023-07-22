import { Link, Outlet } from "react-router-dom";

const LoanLayout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="marriage">Marriage</Link>
        </li>
        <li>
          <Link to="car">Car</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default LoanLayout;
