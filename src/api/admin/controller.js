import {Router} from 'express'
import AdminService from "./service.js";

const adminRouter = Router()

adminRouter.get('/bom/list', AdminService.getList)
adminRouter.get('/bom/detail/:seq', AdminService.getDetail)

export default adminRouter
