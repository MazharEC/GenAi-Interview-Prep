const express = require("express")
const authMiddleware = require("./middleware/auth.middleware")
const interviewController = require("../controllers/interview.controller")
const upload = require("../middlewares/file.middleware")


const interviewRouter = express.Router()


/**
 * @route  POST/api/interview/
 */
interviewRouter.post("/", authMiddleware.authUser, upload.single("resume"), interviewController.generateInterviewReportController)


module.exports = interviewRouter