export type Column = { id: string; label: string; sortable?: boolean };

export type Sort = "asc" | "desc";

export type Status = "Draft" | "Published";

export type Action = "Add" | "Edit"| "Delete"| "View";

export type BlogData = {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  status: Status;
};
