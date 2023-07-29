import TableComponent from "../component/TableComponent";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchRows } from "../component/fetch";

function Loan() {
  const { param } = useParams<string>();
  useEffect(() => {
    fetchRows(`param`);
  }, [param]);

  return (
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
  );
}
export default Loan;
