const { Router } = require('express');
const { postHousePhotos, getHousePhotos, getAllHousePhotos } = require('../controllers/housePhotoController');
const { requireAuth } = require('../middelware/jwt');
const { upload, uploadErrorHandler } = require('../middelware/fileUpload');

const router = Router();
/**
 * @openapi
 * /api/house/photos:
 *   get:
 *     tags:
 *       - House Photo
 *     summary: Retrieve all house photos
 *     description: Get details of all house photos stored in the database
 *     responses:
 *       '200':
 *         description: All house photos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/HousePhoto'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       description: Error message indicating the internal server error
 */
router.get('/house/photos', getAllHousePhotos);

/**
 * @openapi
 * /api/house/photos/{photoId}:
 *   get:
 *     tags:
 *       - House Photo
 *     summary: Retrieve a specific house photo by ID
 *     description: Get details of a house photo by providing its ID
 *     parameters:
 *       - in: path
 *         name: photoId
 *         required: true
 *         description: The ID of the house photo to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: The requested house photo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HousePhoto'
 *       '400':
 *         description: Bad request - Invalid ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     invalidId:
 *                       type: string
 *                       description: Error message indicating the ID is invalid
 *       '404':
 *         description: House photo not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     notFound:
 *                       type: string
 *                       description: Error message requested house photo was not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       description: Error message indicating the internal server error
 */
router.get('/house/photos/:photoId', getHousePhotos);

/**
 * @openapi
 * /api/house/photos:
 *   post:
 *     tags:
 *       - House Photo
 *     summary: Upload house photos
 *     description: Upload multiple house photos
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               Image:
 *                 type: array
 *                 items:
 *                   type: string
 *                 maxItems: 5
 *     responses:
 *       201:
 *         description: House photos uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 housePhotos:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: Array of file paths of uploaded photos
 *       400:
 *         description: Bad request - Invalid file upload or missing files
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     empty:
 *                       type: string
 *                       description: Error message indicating no files were uploaded
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     database:
 *                       type: string
 *                       description: Error message indicating failure to save photos to the db
 */
router.post('/house/photos', upload.single('Image'), requireAuth, uploadErrorHandler(1), postHousePhotos);

module.exports = router;
