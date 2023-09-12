const router = require('express').Router();

const { create, update, find, findOne } = require('../controllers/user.controller');

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */

/**
 * @swagger
 * path:
 *   /user:
 *     post:
 *       summary: Create a new user
 *       tags: [User]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Define your properties here
 *       responses:
 *         '200':
 *           description: User created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: User created successfully
 */

router.post("/user", create);

/**
 * @swagger
 * path:
 *   /user:
 *     get:
 *       summary: Get a list of all users
 *       tags: [User]
 *       responses:
 *         '200':
 *           description: Successful request
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 */

router.get("/user", find);

/**
 * @swagger
 * path:
 *   /user/{id}:
 *     get:
 *       summary: Get a user by ID
 *       tags: [User]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the user to retrieve
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful request
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 */

router.get("/user/:id", findOne);

/**
 * @swagger
 * path:
 *   /user/{id}:
 *     put:
 *       summary: Update a user by ID
 *       tags: [User]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the user to update
 *           schema:
 *             type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Define your properties here
 *       responses:
 *         '200':
 *           description: User updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: User updated successfully
 */

router.put("/user/:id", update);

module.exports = router;
