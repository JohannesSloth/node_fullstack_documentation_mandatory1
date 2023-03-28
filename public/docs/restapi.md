# REST API Conventions

REST (Representational State Transfer) is a style of web architecture that defines a set of constraints to be used for creating web services. RESTful APIs use HTTP requests to perform CRUD (Create, Read, Update, Delete) operations.

### HTTP Methods

RESTful APIs use the following HTTP methods for performing CRUD operations:

- `GET`: Retrieve a resource or collection of resources.

```http
GET /users
```

- `POST`: Create a new resource.

```http
POST /users
```

- `PUT`: Update an existing resource.

```http
PUT /users/1
```

- `DELETE`: Delete a resource.

```http
DELETE /users/1
```

### Status Codes

RESTful APIs use the following status codes, and others, to indicate the result of a request:

- `200`: OK - The request was successful.
- `201`: Created - The resource was successfully created.
- `204`: No Content - The request was successful, but there is no content to return.
- `400`: Bad Request - The request was malformed or invalid.
- `401`: Unauthorized - The user is not authenticated.
- `403`: Forbidden - The user is authenticated, but does not have permission to perform the requested operation.
- `404`: Not Found - The requested resource was not found.
- `405`: Method Not Allowed - The requested HTTP method is not allowed for the requested resource.
- `500`: Internal Server Error - An error occurred on the server.

### Resource Naming

RESTful APIs use resource names that are nouns and not verbs. For example, instead of using `/getUsers` or `/createUser`, use `/users`.

### URL Structure

RESTful APIs use URLs that are hierarchical and follow a specific structure. The URL should identify the resource being accessed and any related resources. For example, to get a specific user, use `/users/:id`.