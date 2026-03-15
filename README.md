# tp-mearn

A hands-on practice project built with the **MERN** stack (MongoDB · Express.js · Next.js · Node.js).
Designed to explore full-stack JavaScript development with a REST API backend and a server-side rendered frontend.

---

## 🗂️ Project Structure

```
tp-mearn/
├── backend/          → REST API (Node.js + Express.js)
└── frontend/         → Web app  (Next.js)
```

---

## 🛠️ Tech Stack

| Layer      | Technology            | Role                              |
|------------|-----------------------|-----------------------------------|
| Frontend   | Next.js (React)       | UI, routing, SSR / SSG            |
| Backend    | Express.js (Node.js)  | REST API, business logic          |
| Database   | MongoDB               | NoSQL document storage            |
| Language   | JavaScript (100%)     | Shared across frontend & backend  |

---

## 📦 Installation

### Prerequisites

- Node.js >= 18
- MongoDB running locally or a MongoDB Atlas URI

### 1 — Clone the repo

```bash
git clone https://github.com/rouamansour/tp-mearn.git
cd tp-mearn
```

### 2 — Setup the backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/tp-mearn
```

Start the server:

```bash
npm run dev
```

API running at → `http://localhost:5000`

### 3 — Setup the frontend

```bash
cd ../frontend
npm install
npm run dev
```

App running at → `http://localhost:3000`

---

## 🔌 API Endpoints

| Method | Endpoint         | Description        |
|--------|------------------|--------------------|
| GET    | `/api/items`   | Fetch all items    |
| GET    | `/api/items/:id` | Fetch item by ID |
| POST   | `/api/items`   | Create a new item  |
| PUT    | `/api/items/:id` | Update an item   |
| DELETE | `/api/items/:id` | Delete an item   |

---

## 📁 Backend Structure

```
backend/
├── models/        → Mongoose schemas
├── routes/        → Express route handlers
├── controllers/   → Business logic
├── middleware/    → Auth, error handling
└── server.js      → Entry point
```

---

## 📁 Frontend Structure

```
frontend/
├── app/           → Next.js App Router pages
├── components/    → Reusable UI components
├── lib/           → API calls, utilities
└── public/        → Static assets
```

---

## 🧰 Scripts

### Backend

```bash
npm run dev    # Start with nodemon (auto-reload)
npm start      # Start in production mode
```

### Frontend

```bash
npm run dev    # Dev server on localhost:3000
npm run build  # Production build
npm start      # Start production server
```

---

## 📚 Resources

- [Express.js Docs](https://expressjs.com/)
- [Next.js Docs](https://nextjs.org/docs)
- [MongoDB Docs](https://www.mongodb.com/docs/)
- [Mongoose Docs](https://mongoosejs.com/docs/)

---

## 👩‍💻 Author

**Roua Mansour** — [@rouamansour](https://github.com/rouamansour)
