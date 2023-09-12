const router = require('express').Router();

const { create, find, findOne, update } = require('../controllers/exam.controller');
const isAdmin = require('../middleware/is_Admin.middleware');
const isAuth = require('../middleware/is_auth.middleware');

/**
 * @swagger
 * tags:
 *   name: Exam
 *   description: Exam management
 */

/**
 * @swagger
 * path:
 *   /exam:
 *     post:
 *       summary: Create a new exam
 *       tags: [Exam]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 group_id:
 *                   type: string
 *                   description: ID of the group for the exam
 *                 deadline:
 *                   type: string
 *                   description: Deadline for the exam
 *       responses:
 *         '200':
 *           description: Exam created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Exam created successfully
 */

router.post("/exam", create);

/**
 * @swagger
 * path:
 *   /exam:
 *     get:
 *       summary: Get a list of all exams
 *       tags: [Exam]
 *       responses:
 *         '200':
 *           description: Successful request
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Exam'
 */

router.get("/exam", find);

/**
 * @swagger
 * path:
 *   /exam/{id}:
 *     get:
 *       summary: Get an exam by ID
 *       tags: [Exam]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the exam to retrieve
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful request
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Exam'
 */

router.get("/exam/:id", findOne);

/**
 * @swagger
 * path:
 *   /exam/{id}:
 *     put:
 *       summary: Update an exam by ID
 *       tags: [Exam]
 *       security:
 *         - BearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the exam to update
 *           schema:
 *             type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deadline:
 *                   type: string
 *                   description: Updated deadline for the exam
 *       responses:
 *         '200':
 *           description: Exam updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Exam updated successfully
 */

router.put("/exam/:id", isAuth, isAdmin, update);

module.exports = router;
