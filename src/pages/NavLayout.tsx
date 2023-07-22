import { Link } from "react-router-dom";

const NavLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="loan">Loan</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavLayout;
