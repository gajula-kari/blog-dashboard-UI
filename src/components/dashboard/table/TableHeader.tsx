import { TableHead, TableRow, TableCell, TableSortLabel } from "@mui/material";
import type { Column, Sort } from "../../../common/type";
import { Sort as SortConstants } from "../../../common/constants";

type TableHeaderProps = {
  columns: Column[];
  orderBy: string;
  orderDirection: Sort;
  onSort: (id: string) => void;
};

export const TableHeader = ({
  columns,
  orderBy,
  orderDirection,
  onSort,
}: TableHeaderProps) => (
  <TableHead>
    <TableRow>
      {columns.map((col: Column) => (
        <TableCell key={col.id}>
          {col.sortable ? (
            <TableSortLabel
              active={orderBy === col.id}
              direction={
                orderBy === col.id ? orderDirection : SortConstants.Asc
              }
              onClick={() => onSort(col.id)}
            >
              {col.label}
            </TableSortLabel>
          ) : (
            col.label
          )}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);
