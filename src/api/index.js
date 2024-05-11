import {Router} from 'express'
import surveyRouter from "./survey/controller.js";

const apiRouter = Router()

apiRouter.use('/survey', surveyRouter)

export default apiRouter
