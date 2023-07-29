import TableComponent from "../component/TableComponent";


function Loan() {
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
