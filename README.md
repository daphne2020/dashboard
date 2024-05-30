# A Drag and Drop Dashboard Feature

Next.js 13 + App Router + MongoDB - Tailwind

## The project

User should be able to:

- Register a new user
- Search/Edit/Delete user
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- Drag and drop to reorder items on the list


## Getting Started

### 1. Clone the repository and install dependencies

```
git clone <repository>
npm install
```

### 2. Configure your local environment to connect on data base

1. Replace database connection in .env file
2. MONGODB_URI=<your conexion to mongo db with user and password>

Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).

### 3. Configure Extensions - install the MongoDB for VS Code

1. open the Extensions view by pressing Ctrl+Shift+X and search for 'MongoDB' to filter the results. 
2. Select the MongoDB for VS Code extension

### 4. Start the application

To build your site locally, use:

```
npm run build

To run your site locally, use:

```
npm run dev
```

To run it in production mode, use:

```
npm run build
npm run start
