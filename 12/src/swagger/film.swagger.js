/**
 * @swagger
 * tags:
 *   name: Film
 *   description: Film management endpoints
 */

/**
 * @swagger
 * /film:
 *   post:
 *     summary: Create a new film
 *     tags: [Film]
 *     security:
 *       - jwt: []
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: title
 *         type: string
 *         required: true
 *       - in: formData
 *         name: description
 *         type: string
 *       - in: formData
 *         name: image
 *         type: file
 *     responses:
 *       201:
 *         description: Film created successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Server error
 *
 *   get:
 *     summary: Get a list of films
 *     tags: [Film]
 *     responses:
 *       200:
 *         description: List of films
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /film/{id}:
 *   get:
 *     summary: Get a film by ID
 *     tags: [Film]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Film details
 *       404:
 *         description: Film not found
 *       500:
 *         description: Server error
 */

