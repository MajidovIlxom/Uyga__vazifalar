const router = require('express').Router();

const { create, find, findOne, update } = require('../controllers/examCreat.controller');
const fileUpload = require('../middleware/fileuplode.middleware');

/**
 * @swagger
 * tags:
 *   name: ExamCreate
 *   description: Exam Create management
 */

/**
 * @swagger
 * path:
 *   /examcreat:
 *     post:
 *       summary: Create a new exam create record
 *       tags: [ExamCreate]
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 group_id:
 *                   type: string
 *                   description: ID of the group for the exam create record
 *                 deadline:
 *                   type: string
 *                   description: Deadline for the exam create record
 *                 exam_file:
 *                   type: string
 *                   format: binary
 *                   description: Exam file to upload
 *       responses:
 *         '200':
 *           description: Exam create record created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Exam create record created successfully
 */

router.post("/examcreat", fileUpload, create);

/**
 * @swagger
 * path:
 *   /examcreat:
 *     get:
 *       summary: Get a list of all exam create records
 *       tags: [ExamCreate]
 *       responses:
 *         '200':
 *           description: Successful request
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/ExamCreate'
 */

router.get("/examcreat", find);

/**
 * @swagger
 * path:
 *   /examcreat/{id}:
 *     get:
 *       summary: Get an exam create record by ID
 *       tags: [ExamCreate]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the exam create record to retrieve
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful request
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ExamCreate'
 */

router.get("/examcreat/:id", findOne);

/**
 * @swagger
 * path:
 *   /examcreat/{id}:
 *     put:
 *       summary: Update an exam create record by ID
 *       tags: [ExamCreate]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the exam create record to update
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
 *                   description: Updated deadline for the exam create record
 *       responses:
 *         '200':
 *           description: Exam create record updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Exam create record updated successfully
 */

router.put("/examcreat/:id", update);

module.exports = router;
