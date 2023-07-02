// TableComponent.tsx
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface Row {
  last_name: string;
  id: number;
  state: string;
  gender: string;
  job: string;
}

interface TableComponentProps {
  rows: Row[];
  handleSort: (column: string) => void;
}

const TableComponent: React.FC<TableComponentProps> = ({
  rows,
  handleSort,
}) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell onClick={() => handleSort("last_name")}>Name</TableCell>
          <TableCell align="right" onClick={() => handleSort("gender")}>
            Gender
          </TableCell>
          <TableCell align="right" onClick={() => handleSort("state")}>
            State
          </TableCell>
          <TableCell align="right" onClick={() => handleSort("job")}>
            Job
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row: Row) => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.last_name}
            </TableCell>
            <TableCell align="right">{row.gender}</TableCell>
            <TableCell align="right">{row.state}</TableCell>
            <TableCell align="right">{row.job}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
