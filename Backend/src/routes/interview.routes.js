const express = require("express")
const authMiddleware = require("./middleware/auth.middleware")


const interviewRouter = express.Router()


/**
 * @route  POST/api/interview/
 */
interviewRouter.post("/", authMiddleware.authUser,)


module.exports = interviewRouter