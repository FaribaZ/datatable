import React, { useEffect, useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import TableComponent from "./TableComponent";
import Pagination from "./Pagination";
import Search from "./Search";
import { fetchRows, ResponseData } from "./fetch";
import { useDebounce } from "usehooks-ts";
const DataTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<string>("asc");
  const debouncedSearcheValue = useDebounce<string>(searchQuery, 200);
  const {
    data: responseData,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery<ResponseData, Error>(
    ["rows", page, rowsPerPage, debouncedSearcheValue],
    () =>
      fetchRows(
        `/sample-data/users?offset=${page}&limit=${rowsPerPage}&search=${debouncedSearcheValue}&sort=${sortDirection}`
      ),
    {
      keepPreviousData: true,
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(Number(event.target.value));
      setPage(0);
    },
    [setRowsPerPage, setPage]
  );

  useEffect(() => {
    setSearchQuery("");
    setPage(0);
  }, [handleChangeRowsPerPage]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleSearch = (searchedVal: string) => {
    setSearchQuery(searchedVal);
    setPage(0);
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection((prevDirection) =>
        prevDirection === "asc" ? "desc" : "asc"
      );
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const displayedRows = responseData?.users || [];
  const totalRows = responseData?.total_users || 0;
  const emptyRows = rowsPerPage - displayedRows.length;

  return (
    <Paper>
      <Search searchQuery={searchQuery} handleSearch={handleSearch} />
      {responseData && isFetching ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : null}
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <CircularProgress disableShrink />
        </div>
      ) : isError ? (
        <div>
          {error instanceof Error ? error.message : "Something went wrong"}
        </div>
      ) : (
        <div style={{ maxHeight: "calc(100vh - 220px)", overflow: "auto" }}>
          <TableComponent
            rows={displayedRows}
            handleSort={handleSort}
            emptyRows={emptyRows}
            columns={[
              { key: "id", label: "ID" },
              { key: "last_name", label: "Last Name" },
              { key: "state", label: "State" },
              { key: "gender", label: "Gender" },
              { key: "job", label: "Job" },
            ]}
          />
        </div>
      )}
      <Pagination
        totalRows={totalRows}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;
