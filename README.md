
[<img alt="github" src="https://img.shields.io/badge/github-stuartthompson/table--format-8da0cb?style=for-the-badge&labelColor=555555&logo=github" height="20">](https://github.com/stuartthompson/table-format)
[<img alt="crates.io" src="https://img.shields.io/crates/v/table-format.svg?style=for-the-badge&color=fc8d62&logo=rust" height="20">](https://crates.io/crates/table-format)
[<img alt="last commit" src="https://img.shields.io/github/last-commit/stuartthompson/table-format?logo=GitHub&style=for-the-badge" height="20">](https://github.com/stuartthompson/table-format/commits/master)
[<img alt="ci status" src="https://img.shields.io/github/workflow/status/stuartthompson/table-format/CI?label=Build&logo=GitHub%20Actions&logoColor=%23ffffff&style=for-the-badge" height="20">](https://github.com/stuartthompson/table-format/actions/workflows/ci.yml)


| One    | Two | Three | Four    | Five  | Six
|-|-|-|-|-|-
| Span <td colspan=3>triple  <td colspan=2>double





| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text |<img src="https://github.com/daphne2020/daphne2020/blob/main/assets/tailwind-css.svg" width="100" height="50" /> |
| col 2 is      | <img src="https://github.com/daphne2020/daphne2020/blob/main/assets/mongodb.svg" width="100" height="50" />         |    |
| - |  -  |    <img src="https://github.com/daphne2020/daphne2020/blob/main/assets/nextjs.svg" width="100" height="50" /> |

                                                                                                                                                                  
#
| <img src="https://myoctocat.com/assets/images/base-octocat.svg" data-canonical-src="https://myoctocat.com/assets/images/base-octocat.svg" width="200" height="400" /> | hello! |


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


