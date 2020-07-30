import express, { response } from 'express';
import LinksController from '../controllers/linksController'

const router = express.Router();

router.get('/links', LinksController.getAllLinks)
module.exports = router