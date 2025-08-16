import * as React from "react";
import { TableContainer, Table, TablePagination } from "@mui/material";
import { sortBlogs } from "../../../common/sortUtils";

import { TableHeader } from "./TableHeader";
import { BlogTableBody } from "./BlogTableBody";
import { columns, Sort as SortConstants } from "../../../common/constants";

import type { BlogData, Sort } from "../../../common/type";

type BlogTableProps = {
  filteredRows: BlogData[];
  handleEditIconClick: (blog: BlogData) => void;
  handleDeleteIconClick: (blog: BlogData) => void;
  viewBlog: (blogId: string) => void;
};

export const BlogTable = ({
  filteredRows,
  handleEditIconClick,
  handleDeleteIconClick,
  viewBlog,
}: BlogTableProps) => {
  const [orderBy, setOrderBy] = React.useState("title");
  const [orderDirection, setOrderDirection] = React.useState<Sort>(
    SortConstants.Asc
  );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    const maxPage = Math.max(
      Math.ceil(filteredRows.length / rowsPerPage) - 1,
      0
    );
    if (page > maxPage) setPage(0);
  }, [filteredRows.length, page, rowsPerPage]);

  const handleSort = (id: string) => {
    const isAsc = orderBy === id && orderDirection === SortConstants.Asc;
    setOrderDirection(isAsc ? SortConstants.Desc : SortConstants.Asc);
    setOrderBy(id);
  };

  const sortedRows = React.useMemo(
    () => sortBlogs(filteredRows, orderBy, orderDirection),
    [filteredRows, orderBy, orderDirection]
  );

  return (
    <>
      <TableContainer sx={{ height: 500 }}>
        <Table stickyHeader>
          <TableHeader
            columns={columns}
            orderBy={orderBy}
            orderDirection={orderDirection}
            onSort={handleSort}
          />
          <BlogTableBody
            rows={sortedRows}
            page={page}
            rowsPerPage={rowsPerPage}
            viewBlog={viewBlog}
            handleEditIconClick={handleEditIconClick}
            handleDeleteIconClick={handleDeleteIconClick}
          />
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={sortedRows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        rowsPerPageOptions={[10, 20, 30]}
      />
    </>
  );
};
