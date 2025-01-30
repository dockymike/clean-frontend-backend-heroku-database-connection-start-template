# Clean Frontend-Backend Heroku Database Connection Start Template

🚀 **A starter template for a full-stack React (frontend) + Express (backend) app with a PostgreSQL database on Heroku.**  

This project is structured so that **any developer** can clone the repository, set up their environment, and start working immediately.

---

## 🛠️ **Project Structure**
/chartdental │── /backend # Node.js/Express Backend │ │── /config # Configuration files (DB, logging, etc.) │ │── /routes # API routes │ │── server.js # Backend entry point │── /frontend # React Frontend (React 18) │ │── /src # Frontend source code │── /config # (Optional) Global Configuration │── .gitignore # Ignored files │── package.json # Root package.json (Runs frontend & backend) │── README.md # This file


---

## 📥 **Getting Started**

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/dockymike/clean-frontend-backend-heroku-database-connection-start-template.git
cd clean-frontend-backend-heroku-database-connection-start-template

2️⃣ Install Dependencies
sh
npm install
npm run install:all
This installs all dependencies for both the frontend and backend.

🏗️ Setting Up Environment Variables
Before running the project, you need to configure the environment variables.

3️⃣ Create a .env file in /backend

sh
cd backend
touch .env
Add the following:

DATABASE_URL=postgres://your_username:your_password@your_host:5432/your_database
NODE_ENV=development
PORT=5000

Replace DATABASE_URL with your PostgreSQL connection string.
Set PORT if needed.

▶️ Running the Project Locally
4️⃣ Start the Development Server

sh
npm start
This runs both the frontend and backend simultaneously.

Frontend: http://localhost:3000
Backend/API: http://localhost:5000/api


🔄 Making Changes to Your Own Version
If you want to make modifications for your project:

🛠️ Updating the Database Connection
Open /backend/config/db.js
Modify the connectionString:

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

Ensure .env has the correct DATABASE_URL.

🎨 Customizing the Frontend
Navigate to /frontend/src/App.js
Modify the React components as needed.

🚀 Deploying to Heroku
5️⃣ Create a Heroku App

sh

heroku create your-heroku-app-name
6️⃣ Set Environment Variables on Heroku

Set Heroku Config Vars
`NODE_ENV`=production
`DATABASE_URL`=postgres://your_database_url

7️⃣ Push to Heroku



📌 Additional Notes
Uses React 18 and Node.js/Express.
PostgreSQL database is hosted on Heroku.
Automatic deployment via GitHub to Heroku.
📜 License
This project is licensed under the MIT License.

⭐ Star the Repo!
If this template helped you, give it a star ⭐ on GitHub!

Made with ❤️ by dockymike

---

### **Why This README?**
- **Step-by-step guide** for developers to quickly clone & run the project.
- **Clear instructions** on how to configure `.env` and modify settings.
- **Deployment section** for launching to Heroku.