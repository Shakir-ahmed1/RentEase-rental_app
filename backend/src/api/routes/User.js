const { Router } = require('express');
const { register, login } = require('../controllers/userController');

const router = Router();

/**
 * @openapi
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registration successful
 *       400:
 *         description: Bad request, either password mismatch or missing
 *                     required filed, or user with the same email exists
 */

router.post('/register', register);

/**
 * @openapi
 * /api/users/login:
 *   post:
 *     summary: Login with user credentials
 *     description: Authenticate and log in a user using email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password for the user account.
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *       '400':
 *         description: Bad request, either username or password is incorrect
 */
router.post('/login', login);

module.exports = router;