const AdminRepository = {
  getList: `SELECT * FROM bom`,
  getDetail: `SELECT * FROM bom WHERE id = ?`
}

export default AdminRepository
