const router = require('express').Router();

const { create, find, findOne, update } = require('../controllers/group.controller');
const isAdmin = require('../middleware/is_Admin.middleware');
const isAuth = require('../middleware/is_auth.middleware');

/**
 * @swagger
 * tags:
 *   name: Group
 *   description: Group management
 */

/**
 * @swagger
 * path:
 *   /group:
 *     post:
 *       summary: Create a new group
 *       tags: [Group]
 *       security:
 *         - BearerAuth: []
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
 *           description: Group created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Group created successfully
 */

router.post("/group", isAuth, isAdmin, create);

/**
 * @swagger
 * path:
 *   /group:
 *     get:
 *       summary: Get a list of all groups
 *       tags: [Group]
 *       responses:
 *         '200':
 *           description: Successful request
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Group'
 */

router.get("/group", find);

/**
 * @swagger
 * path:
 *   /group/{id}:
 *     get:
 *       summary: Get a group by ID
 *       tags: [Group]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the group to retrieve
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful request
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Group'
 */

router.get("/group/:id", findOne);

/**
 * @swagger
 * path:
 *   /group/{id}:
 *     put:
 *       summary: Update a group by ID
 *       tags: [Group]
 *       security:
 *         - BearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the group to update
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
 *           description: Group updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Group updated successfully
 */

router.put("/group/:id", isAuth, isAdmin, update);

module.exports = router;
