# SnapURL

A simple and efficient URL shortener application built with Node.js. It allows users to shorten URLs, retrieve the original long URL, and provides user authentication for managing personal short URLs. MongoDB is used as the database to store the URLs.

## Features

- **Shorten URLs**: Users can provide a long URL and get a short version.
- **Retrieve Original URL**: Users can access the original URL by using the generated short link.
- **User Authentication**: Users can create accounts, log in, and log out to manage their shortened URLs.
- **Protected Routes**: Only authenticated users can create and manage their URLs.
- **MongoDB Integration**: MongoDB is used to store the long URLs, short URLs, and user data.
- **JWT Authentication**: JWT tokens are used for securely managing user sessions.

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
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
