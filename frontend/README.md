# GSS Virtual Onboarding System

This project is a fully functional Virtual Onboarding Platform developed for Global Synergy Solutions (GSS), a multinational organization operating in over 20 countries. The system is designed to onboard a diverse group of 50+ new employees across virtual teams with a strong focus on intercultural sensitivity, productivity, and alignment with company goals.

This system was developed as part of the M503 Behavioral Competencies in Virtual Teams assessment.

---

## Features

### Employee Portal (React Frontend)

- Secure registration with timezone and language input
- JWT-based login and authentication
- Personalized onboarding schedule for each employee:
  - Week 1: Welcome & Orientation
  - Week 2: Technical Tools Setup
  - Week 3: Cultural Sensitivity
  - Week 4: Team Integration
- Submit feedback with rating (1 to 5)
- Track weekly progress with "Mark as Completed" feature

### Admin Portal

Admin users can:

- View all registered users with their timezone and language
- View all feedback submitted by employees
- View onboarding progress by employee and by week

**Admin Login Credentials:**
Username: admin112
Password: 12345


---

## Tech Stack

- Frontend: React.js, React Router, Bootstrap, Axios
- Backend: Node.js, Express.js, MongoDB, JWT Authentication
- Database: MongoDB Atlas
- Optional Deployment: Vercel (frontend), Render or Railway (backend)

---

## Folder Structure

project-root/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── .env.example
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── api.js
│ │ ├── App.js
│ │ └── index.js
│ └── public/

---

## How to Run Locally

### Backend

1. Navigate to the backend folder:

```bash
cd backend
npm install
cp .env.example .env
```
2. Set the following in your .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Start the backend server:
npm start

Frontend
1. Navigate to the frontend folder:
cd frontend
npm install

2. Start the frontend app:
   npm start

