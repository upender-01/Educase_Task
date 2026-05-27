 # PopX Frontend Application

A mobile-first, responsive React application built to match a pixel-perfect design specification. This project features a multi-step user flow including landing, authentication, and profile screens, all housed within a centralized mobile-device wrapper for optimal desktop viewing.

## 🚀 Features

* **Pixel-Perfect UI:** Built with Tailwind CSS to match precise design mockups, including custom hex colors (`#6C25FF`).
* **Mobile-First Desktop Experience:** Utilizes a custom `MobileWrapper` component that centers the application on desktop screens while maintaining a scrollable `50vh` viewport constraint.
* **Custom Form Controls:** Features "floating label" input fields and custom-styled radio buttons for a polished user experience.
* **Seamless Routing:** Client-side navigation powered by `react-router-dom` for instant page transitions without browser reloads.
* **Modular Architecture:** Clean separation of concerns with reusable UI components and dedicated page components.

## 🛠️ Technology Stack

* **Framework:** [React.js](https://reactjs.org/) (Functional Components & Hooks)
* **Routing:** [React Router v6](https://reactrouter.com/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Deployment:** [Vercel](https://vercel.com/)

## 📂 Project Structure

```text
src/
├── components/
│   ├── FloatingInput.jsx   # Custom input field with overlapping labels
│   └── MobileWrapper.jsx   # Layout constraint for desktop viewing
├── pages/
│   ├── LandingPage.jsx     # Initial entry screen
│   ├── LoginPage.jsx       # User authentication screen
│   ├── RegisterPage.jsx    # Account creation with dynamic Agency selection
│   └── ProfilePage.jsx     # User dashboard/settings view
├── App.jsx                 # Main application router
└── main.jsx                # React entry point
💻 Local Development
Follow these steps to run the project locally on your machine.

1. Clone the repository

Bash
git clone <your-repository-url>
cd popx-frontend
2. Install dependencies
Ensure you have Node.js installed, then run:

Bash
npm install
# Also ensure react-router-dom is installed
npm install react-router-dom
3. Start the development server

Bash
npm run dev
Open your browser and navigate to http://localhost:5173 (or the port specified in your terminal).

☁️ Deployment Notes (Vercel)
This application is configured for deployment on Vercel.

Solving SPA Routing Issues
Because this is a Single Page Application (SPA), a vercel.json file is included in the root directory. This ensures that Vercel routes all direct URL visits (like /profile) back to index.html so React Router can handle the UI appropriately, preventing 404 Not Found errors.

vercel.json Configuration:

JSON
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
📝 Author
Bhukya Upendar
