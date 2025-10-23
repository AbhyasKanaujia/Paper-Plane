# Deployment Guide

This document outlines the necessary steps and considerations for deploying the fullstack application.

## Backend (Express Server)

- The Express server serves both API endpoints and the built frontend static files.
- The server listens on a port specified by the environment variable `PORT`, defaulting to 5001 if not set.
- Static files are served from the `frontend/dist` directory.
- Client-side routing is supported by returning `index.html` for all non-API routes.

## Frontend (React Vite Tailwind App)

- Build the frontend using the command:
  ```
  npm run build
  ```
  This generates the production-ready static files in the `frontend/dist` directory.
- Ensure the build step is run before starting the backend server in production.

## Environment Setup

- Set the environment variable `PORT` to the desired port number for the backend server.
- Ensure Node.js is installed on the deployment environment.
- **Important:** Before building the frontend or starting the backend server, install all necessary packages by running:
  ```
  npm install
  ```
  in both the `frontend` and `backend` directories.

## Running the Application

- After building the frontend, start the backend server with:
  ```
  node backend/index.js
  ```
- The backend server will serve the frontend and API endpoints on the configured port.

## Notes

- The backend server handles client-side routing fallback, so direct navigation to frontend routes works correctly.
- No specific deployment platform is mentioned here to keep the guide platform-agnostic.
- Adjust environment variables and build/start commands as needed for your deployment environment.
