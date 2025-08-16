import { TableBody, TableCell, TableRow, Chip, Tooltip } from "@mui/material";
import { ActionIcons } from "./ActionIcons";
import { Status, columns } from "../../../common/constants";
import type { BlogData } from "../../../common/type";

type BlogTableBodyProps = {
  rows: BlogData[];
  page: number;
  rowsPerPage: number;
  viewBlog: (blogId: string) => void;
  handleEditIconClick: (blog: BlogData) => void;
  handleDeleteIconClick: (blog: BlogData) => void;
};

export const BlogTableBody = ({
  rows,
  page,
  rowsPerPage,
  viewBlog,
  handleEditIconClick,
  handleDeleteIconClick,
}: BlogTableBodyProps) => {
  if (rows.length === 0) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={columns.length} align="center">
            No blogs found.
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
          const preview =
            row.content.length > 80
              ? row.content.slice(0, 80).replace(/[\r\n]+/g, " ") + "..."
              : row.content.replace(/[\r\n]+/g, " ");

          return (
            <TableRow
              key={row.id}
              hover
              onClick={() => viewBlog(row.id)}
              sx={{ cursor: "pointer" }}
            >
              <Tooltip
                title={
                  <div style={{ maxWidth: 200, whiteSpace: "pre-line" }}>
                    {preview}
                  </div>
                }
                arrow
                placement="bottom"
              >
                <TableCell>{row.title}</TableCell>
              </Tooltip>

              <TableCell>{row.author}</TableCell>
              <TableCell>{new Date(row.date).toLocaleDateString()}</TableCell>

              <TableCell>
                <Chip
                  label={row.status}
                  color={
                    row.status === Status.Published ? "success" : "warning"
                  }
                  size="small"
                />
              </TableCell>

              <TableCell>
                <ActionIcons
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
        })}
    </TableBody>
  );
};
