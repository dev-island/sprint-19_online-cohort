## REST and RESTful APIs

**What is REST?**

REST stands for **Representational State Transfer**.
It's an architectural style (not a strict standard) for building web APIs that promotes scalability and standardization.

**Why Use REST for APIs?**

* **Standardization:** REST provides a well-understood set of conventions for structuring APIs, making them easier to learn and use.
* **Statelessness:** RESTful APIs are stateless, meaning each request contains all the necessary information. This improves scalability and simplifies server-side logic.
* **Scalability**: The separation between client and server makes it easy for a development team to scale a product.
* **Simplicity**: Simplicity: RESTful APIs use simple HTTP methods, such as GET, POST, PUT, and DELETE, to retrieve, create, update, and delete resources. This makes them easier to understand and work with, even for developers with limited experience with web services.

**REST Naming Conventions**

* **Nouns, not verbs:** API endpoints should primarily use nouns to represent resources (`/users`, `/posts`, etc.).
* **Pluralization:** Use plural nouns for collections (`/products`).
* **HTTP verbs for actions (CRUD):** - See the next section

**HTTP Methods/Verbs**

RESTful APIs leverage standard HTTP methods to indicate the desired action:

* **GET:** Retrieve data (`/users/123` - Get user with ID 123)
* **POST:** Create new data (`/users` - Create a new user)
* **PUT:**  Update existing data (`/posts/5` - Update post with ID 5)
* **DELETE:** Delete data (`/posts/5` - Delete post with ID 5)

**Example: A Simple Express RESTful API**

```javascript
const express = require('express');
const app = express();

// ... (Data store setup - could be an array, database, etc.)

app.get('/users', (req, res) => {
  res.json(getAllUsers()); 
});

app.get('/users/:userId', (req, res) => {
  const user = findUserById(req.params.userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.post('/users', (req, res) => {
  const newUser = createUser(req.body);
  res.status(201).json(newUser); 
});

// ... (PUT and DELETE endpoints similarly)

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```