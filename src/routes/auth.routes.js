const {Router} = require("express")
const authController = require("../controllers/auth.controller")


const authRouter = Router()

/**
 * @route POST/api/auth/register
 */
authRouter.post("/register", authController.registerUserController)



module.exports = authRouter