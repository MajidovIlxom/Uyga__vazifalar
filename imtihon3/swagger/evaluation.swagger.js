const router = require('express').Router();
const { create, find, update, findOne } = require('../controllers/evaluation.controller');
const isAdmin = require('../middleware/is_Admin.middleware');
const isAuth = require('../middleware/is_auth.middleware');

/**
 * @swagger
 * /evaluation/baxo:
 *   post:
 *     summary: Create Evaluation
 *     description: Create a new evaluation record.
 *     tags:
 *       - Evaluation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imtihon_id:
 *                 type: string
 *                 description: ID of the exam
 *               user_id:
 *                 type: string
 *                 description: ID of the user
 *               baxosi:
 *                 type: number
 *                 description: Evaluation score
 *                 example: 70
 *               examsCreate_id:
 *                 type: string
 *                 description: ID of the exam create record
 *     responses:
 *       200:
 *         description: Successful creation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message
 *                   example: Evaluation created successfully
 */

/**
 * @swagger
 * /evaluation/baxo:
 *   get:
 *     summary: Get Evaluations
 *     description: Get a list of all evaluations.
 *     tags:
 *       - Evaluation
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successful request
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Evaluation'
 */

/**
 * @swagger
 * /evaluation/baxo/{id}:
 *   get:
 *     summary: Get Evaluation by ID
 *     description: Get a specific evaluation by its ID.
 *     tags:
 *       - Evaluation
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the evaluation to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Evaluation'
 */

/**
 * @swagger
 * /evaluation/baxo/{id}:
 *   put:
 *     summary: Update Evaluation
 *     description: Update an existing evaluation record.
 *     tags:
 *       - Evaluation
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the evaluation to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               baxosi:
 *                 type: number
 *                 description: Updated evaluation score
 *     responses:
 *       200:
 *         description: Successful update
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message
 *                   example: Evaluation updated successfully
 */

// Router kodlari

module.exports = router;
