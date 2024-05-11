import dbConn from "../util/dbConfig/dbConn.js";
import SurveyRepository from "./repository.js";

const SurveyService = {
  get: async (req, res) => {

    const {seq} = req.params

    let question = {
      next: 0,
      prev: 0,
      row: []
    }
    const q1 = (await dbConn.query(SurveyRepository.get, [seq]))[0]

    question.row.push(q1)
    question.next = q1.next_id
    question.prev = q1.previous_id

    if(question.row[0].together) {
      const q2 = (await dbConn.query(SurveyRepository.get, [question.row[0].together]))[0]
      question.row.push(q2)
      question.next = q2.next_id
    }

    res.json(question)
  }
}

export default SurveyService
