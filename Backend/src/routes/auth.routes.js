const { Router } = require("express")
const authController = require("../controllers/auth.controller")
const { authUser } = require("../middlewares/auth.middleware")

const authRouter = Router()

/**
 * @route POST /api/auth/register
 */
authRouter.post("/register", authController.registerUserController)

/**
 * @route POST /api/auth/login
 */
authRouter.post("/login", authController.loginUserController)

/**
 * @route GET /api/auth/logout
 * @description clear token from user cookie and add in blacklist
 */
authRouter.get("/logout", authUser, authController.logoutUserController)

/**
 * @route GET /api/auth/get-me
 */
authRouter.get("/get-me", authUser, authController.getMeController)

module.exports = authRouter