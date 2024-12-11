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