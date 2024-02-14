# My branch ( rentals)

## Technologies Used

- Node.js 
- Express.js
- MongoDB - database
- ESLint - type checking
- Morgan --- logging system


## ESLint

This project uses ESLint for type checking and code linting.

## MongoDB Database
This project utilizes MongoDB as its database system. [check the config directoy for details].


All main files are located in the `src` folder.

# Starting the Application

To start the application, follow these steps:

1. Navigate to the `backend` folder.
2. Open the `.env` file.
3. Locate the environmental variable `MONGODB_URI`.
4. Change the value to your locally set MongoDB URI.
5. Save the changes to the `.env` file.

After configuring the MongoDB URI, run the following command in the `backend` folder:


1. npm install
2. npm start 
 
 
you can access the Swagger API documentation for this project by visiting the following URL:

[Swagger API Documentation](http://localhost:5000/api-doc)

### User Registration

**POST /api/users/register**

Registers a new user with the provided information. The request body should include the following fields:

- `firstName`: First name of the user.
- `lastName`: Last name of the user.
- `email`: Email address of the user.
- `phoneNumber`: Phone number of the user.
- `password`: Password of the user.
- `confirmPassword`: Confirmation of the password.

If the passwords match, the password is hashed using bcrypt and the user is saved to the database. Otherwise, an error response is returned.

Responses
 201 : registration completed succesfully, responds with json body of {user : {firstName: ..., ...}}
 400 : registration failed, responds with errors about the user information a json body of {error: {firstName: 'Please enter your first name', ...}}

## Usage

1. Send a POST request to `/api/users/register` with the required user information in the request body.
2. If successful, the API will return a success message.
3. If there are any errors (e.g., password mismatch), the API will return an error message with details.


### Accessing API Documentation

You can access the Swagger API documentation for this project by visiting the following URL:

[Swagger API Documentation](http://localhost:5000/api-doc)

This documentation provides detailed information about the available endpoints, request parameters, and responses.

### User Login

**POST /api/users/login**

Logs in a user with the provided credentials. The request body should include the following fields:

- `email`: Email address of the user.
- `password`: Password of the user.

If the provided email exists and the password matches the stored hash in the database, the user is considered logged in. An access token is generated for the user session and stored in an HTTP-only cookie for security purposes. If the credentials are incorrect or the user does not exist, an error response is returned.

### Show all users

**GET /api/users**

Gets all users in the database as a List

## Usage

1. Send a POST request to `/api/users/login` with the user's email and password in the request body.
2. If successful, the API will return a success message along with an access token stored in an HTTP-only cookie.
3. If the credentials are incorrect or the user does not exist, the API will return an error message with details.

### Accessing API Documentation

You can access the Swagger API documentation for this project by visiting the following URL:

[Swagger API Documentation](http://localhost:5000/api-doc)

This documentation provides detailed information about the available endpoints, request parameters, and responses.