import { Pagination } from "@mui/material";
import TableComponent from "../component/TableComponent";
import { TableProps } from "../component/fetch";

const SecondPage = ({ rows, handleSort, emptyRows }: TableProps) => {
  return (
    <div>
      <h2>its second page</h2>
      <TableComponent
        rows={rows}
        handleSort={handleSort}
        emptyRows={emptyRows}
      />
      <Pagination />
    </div>
  );
};

export default SecondPage;
