

# CORS and Same-Origin Policy


From Odin:
> Organizing your project this way can be beneficial because it allows your project to be more modular instead of combining business logic with view logic. This also allows you to use a single backend source for multiple frontend applications, such as a website, a desktop app, or a mobile app. Other developers enjoy this pattern because they like using frontend frameworks such as React or Vue to create nice frontend-only, single-page applications.

### Same-Origin Policy

* **Definition:** The Same-Origin Policy is a crucial web security mechanism that restricts how scripts on one website can interact with resources on another website. It's designed to prevent malicious cross-site attacks like Cross-Site Request Forgery (CSRF).

* **How it works:** Two URLs are considered to have the same origin if they have the same protocol (HTTP vs. HTTPS), hostname, and port number. If the origins don't match, the browser restricts resource access.


### Cross-Origin Resource Sharing (CORS)

* **Purpose:** CORS provides a mechanism for servers to selectively relax the Same-Origin Policy, allowing controlled access to resources from different origins. This is essential for modern web applications that often fetch data or interact with services from different domains.


### CORS Middleware in Express

* **Global application:**

```javascript
const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors()); // Apply CORS middleware to all routes

// ... your routes and other middleware
```

### Configure a single resource
```javascript 
  app.get('/my-resource', cors(), (req, res) => {
      // ... handle requests to this route
  }); 
```

### Configuring CORS for Specific Origins
```javascript
const corsOptions = {
  origin: ['[https://www.example.com](https://www.example.com)', '[invalid URL removed]'] 
};

app.use(cors(corsOptions)); 