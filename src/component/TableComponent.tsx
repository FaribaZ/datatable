import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Row, TableProps } from "./fetch";

const TableComponent: React.FC<TableProps> = ({
  rows,
  handleSort,
  emptyRows,
}) => {
  const columns = [
    { key: "id", label: "ID" },
    { key: "last_name", label: "Last Name" },
    { key: "state", label: "State" },
    { key: "gender", label: "Gender" },
    { key: "job", label: "Job" },
  ];
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.key} align="center">
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {columns.map((column) => (
              <TableCell key={column.key} align="center">
                {row[column.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={5} />
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
