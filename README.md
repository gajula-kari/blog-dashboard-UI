# Responsive Blog Dashboard UI

A responsive Blog Management Dashboard built with React and Material UI v5, supporting basic CRUD operations for blog posts. This project stores all data in-memory using React state, with Local Storage for persistence across page refreshes. It also features React Router for navigating between the dashboard and individual blog pages.

## Features

- **Responsive UI:** Fully adaptable layout for desktop and mobile.
- **CRUD Operations:** Create, Read, Update, Delete blog posts.
- **Local Storage Persistence:** Data remains after page refresh.
- **Individual Blog Pages:** View full blog post details using React Router.
- **Material UI Theming:** Custom light and dark themes.
- **Client-Side Only:** No backend or API required.
- **Clickable Rows:** Click on a blog row – except action icons – to view blog details.
- **Content Preview:** Hover on blog titles to show truncated content previews.
- **Clear Visual Cues:** Clickable caret icons on each row indicate interactivity.

## Tech Stack

- React 18
- TypeScript
- Material UI v5
- React Router v6
- Local Storage API

## Getting Started

1️⃣ Clone the Repository

```bash
  git clone https://github.com/gajula-kari/blog-dashboard-UI.git
  cd blog-dashboard-UI
```

2️⃣ Install Dependencies

```bash
  npm install
```

3️⃣ Start Development Server

```bash
 npm run dev
```

The app will run at [http://localhost:5173](http://localhost:5173)

## Usage Guide

- **Add a New Blog:** Click the Add Blog button and fill out the form in the dialog.
- **Edit a Blog:** Use the Edit icon in the dashboard table.
- **View Blog:** Click on the blog title or row (except action icons) to navigate to the full details page.
- **Delete Blog:** Use the Delete icon; confirm via the dialog.
- **Hover Preview:** Hover over blog titles to see a truncated preview of the content.
- **Sorting & Pagination:** Sort blogs by title, author, date, or status and navigate pages easily.

## Theming

Custom Light and Dark themes implemented using Material UI's `createTheme`.

| Mode  | Primary | Secondary | Background | Text Primary | Text Secondary |
| ----- | ------- | --------- | ---------- | ------------ | -------------- |
| Light | #00897B | #546E7A   | #F5F5F5    | #263238      | #546E7A        |
| Dark  | #4DB6AC | #90A4AE   | #212121    | #EEEEEE      | #B0BEC5        |

## Screenshots

- Dashboard (Light Mode)
  <img width="1229" height="874" alt="image" src="https://github.com/user-attachments/assets/8c831cad-7662-4f9c-a385-d147ed4cf814" />
  
- Dashboard (Dark Mode)
  <img width="1230" height="876" alt="image" src="https://github.com/user-attachments/assets/7e5f1164-a246-4c3c-a979-d70236b35954" />


## License

This project is licensed under the MIT License.

## Contact

If you’d like to connect:

📧 karigajula.work@gmail.com

🔗 [LinkedIn](https://www.linkedin.com/in/karishma-gajula/)

Thank you for exploring the Responsive Blog Management Dashboard UI! Your feedback and contributions help make this project better.
