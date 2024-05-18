import {Router} from 'express'
import surveyRouter from "./survey/controller.js";
import uploadRouter from "./upload/upload.js";

const apiRouter = Router()

apiRouter.use('/survey', surveyRouter)
apiRouter.use('/upload', uploadRouter)

export default apiRouter
