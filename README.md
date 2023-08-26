# Transfer Request Management API
## Introduction

Simple API facilitates the interaction between two distinct roles, the Maker and the Approver, focusing on designing a system that efficiently handles transfer requests ensuring security and integrity.

## Content
* Introduction
* Content
* Requirement Tech
* Getting Started
* Deployment
* Directory Structure
* Dependencies

## Requirement Tech

- **Node.js** - JavaScript runtime environment.
- **Express.js** - Web application framework for Node.js.
- **MongoDB** - NoSQL database.
- **JWT** - For authentication and authorization.
- **Bcrypt** - For password hashing.
- **Swagger** - For project api documentation

## Getting Started

### 1. Prerequisites

Firts, make sure you already have:

- Node.js and npm installed.
- MongoDB set up and running.
- A text editor or IDE (e.g., Visual Studio Code).

### 2. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder-name>
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configuration

Modify `.env` file for the environment variables to match your development environment.

### 5. Running the server

To start the server in development mode, make sure you already have intalled nodemon `npm install -g nodemon`, and make custom script on `package.json`:

```bash
npm start
```

### 6. API Documentation

We using **Swagger** for comprehensive API documentation detailing endpoints, validation, and usage instructions. Access the documentation at `/api-docs` on the running server.

Here is the deploy link for API swagger UI : https://drab-puce-dove-toga.cyclic.cloud/api-docs/

## Deployment

Ensure you set environment variables according to the server environment.

Here is the deploy link for API  : https://drab-puce-dove-toga.cyclic.cloud/

## Directory Structure

- `/config` - Configuration related `jwt` token signature.
- `/middleware` - Contains all the database middleware and middlewares for things like authentication and error handling..
- `/routes` - All the route definitions.
- `/controllers` - Contains the logic for handling routes.
- `src/utils` - Utility for error handling helpers.

- `/docs` - Swagger API documentation related files.

## Dependencies

1. **express** - Fast, unopinionated, minimalist web framework for Node.js.
2. **mongodb** - Elegant mongodb object modeling for Node.js.
3. **jsonwebtoken** - An implementation of JSON Web Tokens.
4. **bcrypt** - A library to help you hash passwords.
5. **swagger-ui-express** - For Swagger documentation generation and UI.

The other necessary libraries here :
- `"dotenv": "^16.3.1"`
- `"express-openapi-validator": "^5.0.5"`
- `"express-validator": "^7.0.1"`
- `"yaml": "^2.3.1"`

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/zrfmWHEN)
