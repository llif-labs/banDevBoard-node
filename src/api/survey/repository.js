const SurveyRepository = {
  get: `SELECT q.*,
               (SELECT id FROM question WHERE id < q.id ORDER BY id DESC LIMIT 1) AS previous_id,
               (SELECT id FROM question WHERE id > q.id ORDER BY id ASC LIMIT 1) AS next_id,
               JSON_ARRAYAGG(
                       JSON_OBJECT(
                               'seq', a.id,
                               'question_id', a.question_id,
                               'title', a.title,
                               'placeholder', a.placeholder,
                               'unit', a.unit
                           )
                   ) as answer
        FROM question q
                 LEFT JOIN answer a ON q.id = a.question_id
        WHERE q.id = ?
        GROUP BY q.id
        ORDER BY q.id;
  `
}

export default SurveyRepository
