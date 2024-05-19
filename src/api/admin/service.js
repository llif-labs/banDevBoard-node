import statusResponse from "../../util/statusResponse/index.js";
import dbConn from "../../util/dbConfig/dbConn.js";
import AdminRepository from "./repository.js";
import convertSurvey from "../../util/convertSurvey/index.js";

const AdminService = {
  getList: async (req, res) => {
    const result = await dbConn.query(AdminRepository.getList)
    const bom = []

    result.map(it => {
      bom.push(convertSurvey(it))
    })

    statusResponse(req, res, 200, null ,'성공', {bom})
  },
  getDetail: async (req, res) => {
    const result = await dbConn.query(AdminRepository.getDetail, [req.params.seq])

    statusResponse(req, res, 200, null ,'성공', convertSurvey(result[0]))
  }
}

export default AdminService
