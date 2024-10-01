# SnapURL

A simple and efficient URL shortener application built with Node.js. It allows users to shorten URLs, retrieve the original long URL, and provides user authentication for managing personal short URLs. MongoDB is used as the database to store the URLs.

## Features

- **Shorten URLs**: Users can provide a long URL and get a short version.
- **Retrieve Original URL**: Users can access the original URL by using the generated short link.
- **User Authentication**: Users can create accounts, log in, and log out to manage their shortened URLs.
- **Protected Routes**: Only authenticated users can create and manage their URLs.
- **MongoDB Integration**: MongoDB stores original URLs, short URLs, and user data.
- **JWT Authentication**: JWT tokens securely manage user sessions.

## Technologies Used

- **Node.js**: Backend framework.
- **Express.js**: For handling server-side logic and routing.
- **MongoDB**: NoSQL database for storing URL and user data.
- **Mongoose**: ODM for MongoDB, simplifying database interactions.
- **JWT (JSON Web Tokens)**: For authentication and protecting routes.
- **EJS**: For rendering dynamic HTML.

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**
- **MongoDB**

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Arnab27622/SnapURL.git
   cd SnapURL
2. Install dependencies:
   ```bash
   npm install
3. Create a .env file in the root directory and configure the following environment variables:
   ```
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_secret_key_for_jwt
   PORT=your_custom_port
4. Start the application:
   ```bash
   npm start
5. Project Structure
   ```
   ├── models
   │   ├── user.js             # User schema and model
   │   ├── url.js              # URL schema and model
   ├── routes
   │   ├── url.js              # URL-related routes
   │   ├── staticRoutes.js     # UI-related routes
   │   └── user.js             # User-related routes
   ├── controllers
   │   ├── static.js           # Logic for UI handling
   │   └── url.js              # Logic for url handling
   │   └── user.js             # Logic for user handling
   ├── middleware
   │   └── auth.js             # Logic for Authorization Checking
   ├── public                  # Folder for storing style sheets
   ├── service
   │   ├── auth.js             # Logic for JWT token creation and verification
   ├── views                   # EJS views for rendering HTML
   │   └── partials         
   ├── app.js                  # Main entry point for the application
   ├── connection.js           # Handles MongoDB connection
   └── package.json            # Dependency management

## Future Enhancements
- **Custom Short URLs**: Allow users to create personalized short URLs instead of generating random strings.
- **Expiration Dates**: Introduce the ability for users to set expiration dates for their shortened URLs.
- **Admin Dashboard**: Create an admin interface to manage user accounts and monitor URL usage.
