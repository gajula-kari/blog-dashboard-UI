import type { Column } from "./type";

export const Sort = {
  Asc: "asc",
  Desc: "desc",
} as const;

export const Status = {
  Draft: "Draft",
  Published: "Published",
} as const;

export const Action = {
  Add: "Add",
  Edit: "Edit",
  Delete: "Delete",
  View: "View",
} as const;

export const columns: Column[] = [
  { id: "title", label: "Title", sortable: true },
  { id: "author", label: "Author", sortable: true },
  { id: "date", label: "Date", sortable: true },
  { id: "status", label: "Status", sortable: true },
  { id: "actions", label: "", sortable: false },
];