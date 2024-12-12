# User Registration API

## Endpoint: `/users/register`

### Description
The `/users/register` endpoint allows new users to register by providing their full name, email, and password. Upon successful registration, a JSON Web Token (JWT) is generated and returned, which can be used for authentication in subsequent requests.

### Request Method
`POST`

### Request Headers
- `Content-Type: application/json`

### Request Body
The request body must be a JSON object containing the following fields:

```json
{
  "fullName": {
    "firstName": "string (required, min: 3 characters)",
    "lastName": "string (optional, min: 3 characters)"
  },
  "email": "string (required, must be a valid email format)",
  "password": "string (required, min: 6 characters)"
}
```

### Response 
## Status Code : `201 Created`

```json
{
  "token": "string (JWT token)",
  "user": {
    "fullName": {
      "firstName": "string",
      "lastName": "string"
    },
    "email": "string"
  }
}
```

### Error Responses 
## status Code: `400 Bad Request `

```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field name",
      "location": "body"
    }
  ]
}
```

### Status Code : `500 Internal Server Error`
```json
{
  "error": "Error message"
}
```

### Example Request 

```json
curl -X POST http://yourapi.com/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}'
```

### Example Success Response 

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```


# User Login API

## Endpoint: `/users/login`

### Description
The `/users/login` endpoint allows existing users to log in by providing their email and password. Upon successful login, a JSON Web Token (JWT) is generated and returned, which can be used for authentication in subsequent requests.

### Request Method
`POST`

### Request Headers
- `Content-Type: application/json`

### Request Body
The request body must be a JSON object containing the following fields:

```json
{
  "email": "string (required, must be a valid email format)",
  "password": "string (required, min: 6 characters)"
}
```

### Response 
Status Code : `200 ok`

```json
{
  "token": "string (JWT token)",
  "user": {
    "fullName": {
      "firstName": "string",
      "lastName": "string"
    },
    "email": "string"
  }
}
```

### Error Responses
Status Code : `400 Bad Request `

```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field name",
      "location": "body"
    }
  ]
} 
```

Status Code : `401 Unauthorized `

```json
{
  "message": "Invalid email or password"
}
```

Status Code: `500 Internal Server Error`

```json
{
  "error": "Error message"
}
```

### Example Request

```json
curl -X POST http://yourapi.com/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "securepassword"
}'
```

### Example Success Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

# User Profile API
## Endpoint: `users/profile`
### Description 
 The `/users/profile` endpoint allows authenticated users to retrieve their profile information.

### Request Method
`GET`

### Request Headers
- `Authorization: Bearer <token>`(required)

### Response
Status Code : `200 OK`

```json
{
  "fullName": {
    "firstName": "string",
    "lastName": "string"
  },
  "email": "string"
}
```

### Error Responses
Status Code : `401 Unauthorized`

```json
{
  "message": "Unauthorized"
}
```

Status Code : `500 Internal Server Error `
```json
{
  "error": "Error message"
}
```
### Example Request 
```json
curl -X GET http://yourapi.com/users/profile \
-H "Authorization: Bearer <token>"
```

### Example Success Ressponse 
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com"
}
```

# User Logout API
## EndPoint : `/users/logout`
### Description
The `/users/logout` endpoint allows authenticated users to log out and invalidate their session.


## Request Method
`Get`

### Request Headers
`Authorization: Bearer <token>` (required)

### Response 
Status Code : `200 Ok`
```json
{
  "message": "Logged out successfully"
}
```

### Error Response 
Status Code : `401 Unauthorized`

```json
{
  "message": "Unauthorized"
}
```

Status Code : `500  Internal Server Error`
```json
{
  "error": "Error message"
}
```

### Example Request 
```json
curl -X GET http://yourapi.com/users/logout \
-H "Authorization: Bearer <token>"
```
### Example Success Response
```json
{
  "message": "Logged out successfully"
}
```