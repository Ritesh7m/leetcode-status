# LeetCode Status Tracker 📊

A React-based web application that allows users to quickly view their LeetCode statistics. Simply enter your LeetCode username, and the application will fetch and display your profile information, including total solved problems, breakdown by difficulty, and join date. This project aims to provide a clean and intuitive interface for tracking your LeetCode progress.

## 🚀 Key Features

- **User-Friendly Interface:** A simple and intuitive form for entering LeetCode usernames.
- **Real-time Statistics:** Fetches and displays user statistics dynamically.
- **Detailed Breakdown:** Shows the number of solved problems for each difficulty level (Easy, Medium, Hard).
- **Profile Information:** Displays the user's avatar and join date.
- **Loading and Error Handling:** Provides visual feedback during data fetching and displays error messages when necessary.
- **Responsive Design:** Built with Tailwind CSS for a consistent and responsive experience across devices.

## 🛠️ Tech Stack

- **Frontend:**
    - React: JavaScript library for building user interfaces.
    - React DOM: Provides DOM-specific methods for React.
    - Tailwind CSS: A utility-first CSS framework for styling the application.
    - React Calendar Heatmap: A React component for rendering calendar heatmaps (though not explicitly used in the provided code, it's a dependency).
    - Axios: Promise-based HTTP client for making API requests.
- **Build Tool:**
    - Vite: A fast build tool for modern web development.
- **Linting:**
    - ESLint: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Other:**
    - `@vitejs/plugin-react`: Vite plugin for React support.
    - `@tailwindcss/vite`: Vite plugin for Tailwind CSS support.

## 📦 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd leetcode_status
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to the address provided by Vite (usually `http://localhost:5173`).

## 💻 Project Structure

```
leetcode_status/
├── .eslintrc.cjs              # ESLint configuration file
├── .gitignore                 # Specifies intentionally untracked files that Git should ignore
├── index.html                 # Main HTML file
├── package.json               # Project metadata and dependencies
├── postcss.config.js          # PostCSS configuration file
├── src/                       # Source code directory
│   ├── App.jsx                # Main application component
│   ├── assets/                # Assets directory (e.g., images, fonts)
│   │   └── react.svg
│   ├── components/            # Reusable React components
│   │   ├── Footer.jsx         # Footer component
│   │   ├── Navbar.jsx         # Navbar component
│   │   ├── UserForm.jsx       # User input form component
│   │   └── UserStatus.jsx     # User statistics display component
│   ├── index.css              # Global CSS styles
│   ├── main.jsx               # Entry point for the React application
│   └── vite-env.d.ts          # TypeScript declaration file for Vite environment variables
├── tailwind.config.js         # Tailwind CSS configuration file
└── vite.config.js             # Vite configuration file
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.



## 📬 Contact

Ritesh - [maurya.ritesh2005@gmail.com]

## 💖 Thanks

Thank you for checking out this project! I hope it helps track your LeetCode progress. Happy coding!


