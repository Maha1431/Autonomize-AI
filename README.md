
# Autonomize Ai

https://autonomize-ai-m8k6.onrender.com

## Project Documentation

#### Project Overview

**Autonomize Ai** is a comprehensive web application designed to interact with GitHub's API

And provide a streamlined user experience for viewing GitHub repositories, followers, and mutual connections.

It comprises two main components: a backend server that interacts with the GitHub API and a database to store user data, and a frontend application that presents this data to the user in a user-friendly manner.

#### Technical Stack

**MERN Stack**:

This project utilizes the MERN stack, which includes:

- **MongoDB**: A NoSQL database used to store user data fetched from the GitHub API.
- **Express.js**: A web application framework for Node.js, used to build the backend API that serves the frontend application and interacts with the database.
- **React**: A JavaScript library for building the user interface of the frontend application. It uses hooks for state management and functional components.
- **Node.js**: The runtime environment for running the JavaScript code on the server side.


#### Backend API Endpoints

1. **Save GitHub User Data**

   - **Endpoint**: `POST /api/v1/users`
   - **Description**: Accepts a GitHub username, fetches the user's details from the GitHub API, and saves it to the database. If the user's data already exists, it prevents re-fetching from the GitHub API.

2. **Find and Save Mutual Friends**

   - **Endpoint**: `POST /api/v1/users/:username/friends`
   - **Description**: For a given user, identifies mutual followers (friends) and saves this relationship in the database.

3. **Update User Details**

   - **Endpoint**: `PATCH /api/v1/users/:username`
   - **Description**: Updates fields like "location", "blog", "bio", etc., for a given user in the database.

4. **Soft Delete User**

   - **Endpoint**: `DELETE /api/v1/users/:username`
   - **Description**: Soft deletes a user's data from the database based on the provided username.

5. **Search Saved Data**

   - **Endpoint**: `GET /api/v1/users/search`
   - **Description**: Allows searching the database for users based on username, location, and other criteria.

6. **Sort Saved Users**
   - **Endpoint**: `GET /api/v1/users/sorted`
   - **Description**: Returns a list of all sorted users from the database, with the option to sort by various fields like "public_repos", "followers", etc.

## Frontend Documentation

### Technologies

- React.js : building user interfaces,
- React Router : client-side routing,
- Redux Toolkit : efficient state management,
- RTK Query : data-fetching and caching.

### Pages

1. **Home Page**

   - Route: `/`
   - Component: `<HomePage />`
   - Description: The initial page with an input box for entering a GitHub username and a submit/search button.

2. **User Repositories Page**

   - Route: `/user/:username/repos`
   - Component: `<RepositoryListPage />`
   - Description: Displays the list of repositories for the user entered on the home page. Also includes user information and a button/link to view the user's followers.

3. **Repository Details Page**

   - Route: `/user/:username/repos/:repoName`
   - Component: `<RepositoryDetailsPage />`
   - Description: Displays details about a specific repository when clicked from the repository list page.

4. **User Followers Page**
   - Route: `/user/:username/followers`
   - Component: `<FollowersPage />`
   - Description: Displays the list of followers for a specific GitHub user. Clicking on a follower navigates to their repository list page.

### Additional Pages

- Error Page: Displayed when there's an error fetching data from the GitHub API or when the user enters an invalid username.

---

