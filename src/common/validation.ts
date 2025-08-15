import type { BlogData } from "./type";


export type ValidationErrors = { [key: string]: string };

export function validateBlog(formData: BlogData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!formData.title.trim()) {
      errors.title = "Title is required";
    } else if (formData.title.length > 50) {
      errors.title = "Title cannot be more than 50 characters.";
    } else if (!/[A-Za-z]/.test(formData.title)) {
      errors.title = "Title must contain at least one letter.";
    }

    if (!formData.author.trim()) {
      errors.author = "Author is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.author)) {
      errors.author = "Only alphabets allowed";
    }

    if (!formData.date) {
      errors.date = "Date is required";
    } 
    
    if (!formData.content) {
      errors.content = "Content is required.";
    } else if (!/[A-Za-z]/.test(formData.content)) {
      errors.content = "Content must contain at least one letter.";
    }

  return errors;
}
