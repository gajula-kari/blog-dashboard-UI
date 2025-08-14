📖 Responsive Blog Management Dashboard

A Responsive Blog Management Dashboard built with React and Material UI v5, supporting basic CRUD operations for blog posts.
This project stores all data in-memory using React state, with Local Storage for persistence across page refreshes.
Also features React Router for navigating between the dashboard and individual blog pages.

✨ Features

🖥 Responsive UI — Fully adaptable layout for desktop and mobile.

📝 CRUD Operations — Create, Read, Update, Delete blog posts.

💾 Local Storage Persistence — Data remains after refresh.

📄 Individual Blog Pages — View full blog post details using React Router.

🎨 Material UI Theming — First-time implementation with custom light/dark themes.

🚀 Client-Side Only — No backend/API required.

🛠 Tech Stack

React 18

TypeScript

Material UI v5

React Router v6

Local Storage API

📂 Project Structure
src
│── App.tsx
│── utils.ts
│
└── components
│── AddEditBlogDialog
│── BlogPage
│── CustomTable
│── Dashboard
│── DeleteBlogDialog

⚡ Getting Started
1️⃣ Clone the Repository
git clone https://github.com/yourusername/blog-dashboard.git
cd blog-dashboard

2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm start

The app will run at http://localhost:3000

🎯 Usage Guide

Add a New Blog — Click the Add Blog button and fill out the form in the dialog.

Edit a Blog — Use the Edit icon in the dashboard table.

View Blog — Click on the blog title to navigate to the details page.

Delete Blog — Use the Delete icon; confirm via the dialog.

🌗 Theming

Custom Light and Dark themes implemented with Material UI’s createTheme.

Mode Primary Secondary Background Text Primary Text Secondary
Light #00897B #546E7A #FAFAFA #263238 #607D8B
Dark #4DB6AC #90A4AE #1E1E1E #ECEFF1 #B0BEC5
📸 Screenshots
Dashboard (Light Mode)

Dashboard (Dark Mode)

🙌 Acknowledgements

Material UI for the amazing component library

React Router for routing
