import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TablePagination,
  Chip,
  Tooltip,
} from "@mui/material";
import { sortBlogs } from "../../../common/sortUtils";

import { ActionIcons } from "./ActionIcons";
import { TableHeader } from "./TableHeader";
import type { BlogData, Sort } from "../../../common/type";
import { columns, Status } from "../../../common/constants";
import { Sort as SortConstants } from "../../../common/constants";

type CustomTableProps = {
  filteredRows: BlogData[];
  handleEditIconClick: (blog: BlogData) => void;
  handleDeleteIconClick: (blog: BlogData) => void;
  viewBlog: (blogId: string) => void;
};

export const CustomTable = ({
  filteredRows,
  handleEditIconClick,
  handleDeleteIconClick,
  viewBlog,
}: CustomTableProps) => {
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

    if (page > maxPage) {
      setPage(0);
    }
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
          <TableBody>
            {sortedRows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No blogs found.
                </TableCell>
              </TableRow>
            ) : (
              sortedRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const preview =
                    row.content.length > 80
                      ? row.content.slice(0, 80).replace(/[\r\n]+/g, " ") +
                        "..."
                      : row.content.replace(/[\r\n]+/g, " ");

                  return (
                    <TableRow
                      key={row.id}
                      hover
                      onClick={() => viewBlog(row.id)} // row click handler
                      sx={{ cursor: "pointer" }}
                    >
                      <Tooltip
                        title={
                          <div
                            style={{
                              maxWidth: 200,
                              whiteSpace: "pre-line",
                            }}
                          >
                            {preview}
                          </div>
                        }
                        arrow
                        placement="bottom"
                      >
                        <TableCell>{row.title}</TableCell>
                      </Tooltip>

                      <TableCell>{row.author}</TableCell>
                      <TableCell>
                        {new Date(row.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          color={
                            row.status === Status.Published
                              ? "success"
                              : "warning"
                          }
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <ActionIcons
                          // onView={(e) => {
                          //     e.stopPropagation();
                          //     viewBlog(row);
                          //   }}
                          onEdit={(e) => {
                            e.stopPropagation();
                            handleEditIconClick(row);
                          }}
                          onDelete={(e) => {
                            e.stopPropagation();
                            handleDeleteIconClick(row);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })
            )}
          </TableBody>
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
