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

{
  "errors": [
    {
      "msg": "Error message",
      "param": "field name",
      "location": "body"
    }
  ]
}

{
  "error": "Error message"
}

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