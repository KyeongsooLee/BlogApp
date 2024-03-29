import express from 'express'
import authCtrl from '../controllers/authCtrl'
import { validRegister } from '../middleware/valid'

const router = express.Router()

router.post('/register', validRegister, authCtrl.register)

router.post('/active', authCtrl.activeAccount)

router.post('/login', authCtrl.login)

router.get('/logout', authCtrl.logout)

router.get('/refresh_token', authCtrl.refreshToken)

router.post('/google_login', authCtrl.googleLogin)

router.post('/facebook_login', authCtrl.facebookLogin)


export default router;