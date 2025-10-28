Todo API (Express + MongoDB)

A simple REST API for managing todo items using **Node.js**, **Express**, and **MongoDB**.

---

## Setup and Run

### 1. Clone the repository

```bash
[git clone https://github.com/your-username/todo-api.git](https://github.com/iro2002/Azure-App-Service-with-express-cicd.git)
cd project folder_name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the project root

Add your MongoDB connection string:

```
MONGO_URI=your_mongodb_connection_string
```

### 4. Start the server

```bash
node index.js
```

or (if using nodemon)

```bash
npx nodemon index.js
```

Server will start on:

```
http://localhost:5000
```

---

## API Endpoints

| Method | Endpoint     | Description       | Example Request Body                            |
| ------ | ------------ | ----------------- | ----------------------------------------------- |
| GET    | `/`          | Test route        | —                                               |
| GET    | `/todos`     | Get all todos     | —                                               |
| POST   | `/todos`     | Create a new todo | `{ "task": "Learn Express" }`                   |
| PUT    | `/todos/:id` | Update a todo     | `{ "task": "Updated task", "completed": true }` |
| DELETE | `/todos/:id` | Delete a todo     | —                                               |

---

## Example

**POST /todos**

```json
{
  "task": "Learn Express"
}
```

**Response**

```json
{
  "_id": "671f28d7a1b2e3c5d67890ab",
  "task": "Learn Express",
  "completed": false,
  "__v": 0
}
```

---

**MongoDB connection:** Make sure MongoDB is running locally or use a cloud database such as MongoDB Atlas.
