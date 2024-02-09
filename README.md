# Blog App

Welcome to the Blog App! This web application provides a platform for users to share their thoughts through blogs. Users can create accounts, sign in, and enjoy the benefits of a personalized blogging experience. The app utilizes JWT for authentication, MongoDB for data storage, Mongoose for seamless CRUD operations, and EJS for server-side rendering.

## Features

### User Authentication
- **Sign Up:** Users can create accounts by providing a username and password.
- **Sign In:** Existing users can sign in using their credentials.
- **Sign Out:** Users can securely sign out when they are done using the app.

### Blog Management
- **Create:** Authenticated users can create new blogs with a title and content.
- **Read:** Anyone can read blogs without the need for signing in.
- **Update:** Authors can update the content of their own blogs. (Yet to Implement)
- **Delete:** Authors have the ability to delete their blogs.

### Commenting
- **Comment:** Authenticated users can comment on blogs.
- **Read Comments:** Anyone can read comments on blogs.

### Security
- **Password Hashing:** User passwords are securely hashed before being stored in the database.
- **JWT Authentication:** JSON Web Tokens are used for secure user authentication.

### Server-Side Rendering
- **EJS Templating:** The app uses EJS (Embedded JavaScript) for server-side rendering, providing a dynamic and interactive user interface.

## Tech Stack

- **Node.js:** Backend runtime environment.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing user data and blogs.
- **Mongoose:** MongoDB object modeling for Node.js.
- **JWT:** JSON Web Tokens for secure user authentication.
- **EJS:** Embedded JavaScript for server-side rendering.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kushagra-Varshney/BlogIT.git

2. Install Dependencies
   ```bash
   npm install

3. Run the application
   ```bash
   npm start