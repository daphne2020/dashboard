

| <img src="https://myoctocat.com/assets/images/base-octocat.svg" data-canonical-src="https://myoctocat.com/assets/images/base-octocat.svg" width="200" height="400" /> | A Drag and Drop Dashboard Feature |


# A Drag and Drop Dashboard Feature

Next.js 13 + App Router + MongoDB - Tailwind

## The project

User should be able to:

- Register a new user
- Use json web token (JWT) to authentication
- Search/Edit/Delete user
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new card to the list
- Mark card as complete
- Delete card from the list
- Filter by all Backlog/InProgress/InReview/Completed cards
- Clear all completed cards
- Drag and drop to reorder items on the list


## Getting Started

### 1. Clone the repository and install dependencies

```
git clone <repository>
```

```
npm install
```

### 2. Configure your local environment to connect on data base

1. Replace database connection in .env file
2. MONGODB_URI = "your conexion string to mongoDb with user and password"


### 3. Configure Extensions - install the MongoDB for VS Code

1. open the Extensions view by pressing Ctrl+Shift+X and search for 'MongoDB' to filter the results. 
2. Select the MongoDB for VS Code extension

### 4. Start the application

-To build your site locally, use:

```
npm run build
```

-To run your site locally, use:

```
npm run dev
```

-To run it in production mode, use:


```
npm run build
npm run start
```


