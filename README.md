# Sprint 19

## Topics covered
1. Express & Express Generator
2. Middleware
3. CRUD, MVC, Templating in express
4. Serverless - Deploying your application

## Class 1: Express Fundamentals & Routing
- Introduction to Express
  - Node.js as a web server
  - Basic Express app structure
  - Simple request handling and responses
- Middleware in Express
  - Understanding the concept of middleware functions
  - How middleware intercepts and modifies requests/responses
  - Common use cases (logging, authentication, body parsing)

- Routes and Controllers
  - Concept of routes (static and dynamic)
  - GET and POST requests
  - Separating logic into controllers

In-Class Discussion: Middleware

- "chain" concept: Middleware functions are executed in the order they are applied. Each middleware has access to req, res, and next.
- Common Built-in Middleware:
  - express.json() - Parses incoming JSON request bodies.
  - express.urlencoded() - Parses form data.
  - Custom Middleware Example: Discuss the logging middleware code.
  - Other Use Cases
    - Authentication: Check credentials before allowing access to protected routes.
    - Error Handling: Centralized error handling mechanisms.
    - CORS: Configure cross-origin resource sharing.

- Example Project: Build a Simple Blog
  1. Set up an Express project.
  2. Define routes for:
    - Homepage (display list of blog titles)
    - Individual blog post page
  3. Create basic controllers to fetch mock blog post data

## Class 2: CRUD, MVC, and Templating
- CRUD and MVC
  - Create, Read, Update, Delete operations
  - MVC design pattern (Model-View-Controller)
- View Templates
  - Introduction to templating engines (EJS or Pug)
    - Rendering dynamic content in views

  - Example Project: Expand the Blog
    1. Implement functionality to create new blog posts (form submission).
    2. Add edit and delete capabilities for posts.
    3. Use a templating engine to render blog posts dynamically.

## Class 3: Introduction to Serverless
- Intro to Serverless
  - What is "serverless"
    serverless computing eliminates the need to manage physical servers or long-running virtual machines. Instead, code is packaged into functions that run on demand in response to events.
    Serverless also refers to the "serverless" framework.
  - Pros and cons vs. traditional servers
    Pros: Focus on code, not infrastructure; scalability; pay-per-use pricing.
    Cons: Potential vendor lock-in, debugging complexity, "cold starts" (initial function invocation may be slower).
- Lambda and Gateway
  - AWS Lambda
    - What is it: AWS Lambda is a central serverless compute service, allowing you to run code without managing servers.
    - Key Features: Event-driven (functions react to triggers like HTTP requests, data changes, etc.); supports various programming languages (including Node.js).
  - API Gateway
    - What is it: API Gateway is a service for creating and managing REST APIs. It handles routing, authorization, and connecting to backend services (like Lambda functions).
    - How it works with Lambda: API Gateway can define endpoints that trigger specific Lambda functions, providing a public-facing interface for your serverless application.

Examples:
- Lambda Contact form Creating an API endpoint with API Gateway
  - Create a Lambda function to handle form submissions.
  - Set up an API Gateway endpoint to trigger the Lambda function.
  - Build a simple front-end with a contact form that submits data to the API.