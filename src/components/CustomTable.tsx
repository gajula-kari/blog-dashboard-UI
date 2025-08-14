import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
} from "@mui/material";
import { columns, type Sort, type Column, type BlogData } from "../utils";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useMemo } from "react";

type CustomTableProps = {
  filteredRows: BlogData[];
  handleEditIconClick: (blog: BlogData) => void;
  handleDeleteIconClick: (blog: BlogData) => void;
  handleViewIconClick: (blogId: string) => void;
};

export const CustomTable = ({
  filteredRows,
  handleEditIconClick,
  handleDeleteIconClick,
  handleViewIconClick,
}: CustomTableProps) => {
  const [orderBy, setOrderBy] = React.useState("title");
  const [orderDirection, setOrderDirection] = React.useState<Sort>("asc");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (columnId: string) => {
    const isAsc = orderBy === columnId && orderDirection === "asc";
    setOrderDirection(isAsc ? "desc" : "asc");
    setOrderBy(columnId);
  };

  const sortedRows = useMemo(() => {
    return [...filteredRows].sort((postA, postB) => {
      if (orderBy === "title") {
        return orderDirection === "asc"
          ? postA.title.localeCompare(postB.title)
          : postB.title.localeCompare(postA.title);
      }
      if (orderBy === "author") {
        return orderDirection === "asc"
          ? postA.author.localeCompare(postB.author)
          : postB.author.localeCompare(postA.author);
      }
      if (orderBy === "status") {
        return orderDirection === "asc"
          ? postA.status.localeCompare(postB.status)
          : postB.status.localeCompare(postA.status);
      }
      if (orderBy === "date") {
        const dateA = new Date(postA.date).getTime();
        const dateB = new Date(postB.date).getTime();
        return orderDirection === "asc" ? dateA - dateB : dateB - dateA;
      }
      return 0;
    });
  }, [orderBy, orderDirection, filteredRows]);

  return (
    <>
      <TableContainer sx={{ height: 500 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column: Column) => (
                <TableCell key={column.id}>
                  {column.sortable ? (
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? orderDirection : "asc"}
                      onClick={() => handleSort(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.author}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <VisibilityOutlinedIcon
                      fontSize="small"
                      color="action"
                      sx={{ ml: 1 }}
                      onClick={() => handleViewIconClick(row.id)}
                    />
                    <EditOutlinedIcon
                      fontSize="small"
                      color="action"
                      onClick={() => handleEditIconClick(row)}
                    />
                    <DeleteOutlineIcon
                      fontSize="small"
                      color="action"
                      onClick={() => handleDeleteIconClick(row)}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={sortedRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 20, 30]}
      />
    </>
  );
};
