import type { BlogData, Sort } from "./utils";


export function sortBlogs(rows: BlogData[], orderBy: string, orderDirection: Sort) {
  return [...rows].sort((a, b) => {
    if (orderBy === "title") return orderDirection === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    if (orderBy === "author") return orderDirection === "asc" ? a.author.localeCompare(b.author) : b.author.localeCompare(a.author);
    if (orderBy === "status") return orderDirection === "asc" ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status);
    if (orderBy === "date") {
      const dA = new Date(a.date).getTime();
      const dB = new Date(b.date).getTime();
      return orderDirection === "asc" ? dA - dB : dB - dA;
    }
    return 0;
  });
}
