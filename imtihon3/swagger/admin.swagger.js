const router = require('express').Router();
const login = require('../controllers/Admin.controller');

/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: Admin login
 *     description: Log in as an admin user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Admin username
 *                 example: admin123
 *               password:
 *                 type: string
 *                 description: Admin password
 *                 example: adminPassword
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message
 *                   example: Login successful
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: An error message
 *                   example: Unauthorized
 */
router.post("/login", login);

module.exports = router;
