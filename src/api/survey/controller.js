import {Router} from 'express'
import SurveyService from "./service.js";

const surveyRouter = Router()

surveyRouter.get('/:seq', SurveyService.get)

export default surveyRouter
