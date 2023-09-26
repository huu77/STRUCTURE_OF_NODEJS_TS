import * as sql from 'msnodesqlv8'
import { sqlQueryType } from 'msnodesqlv8/types'

export function database(query: sqlQueryType,callback: (err: any, rows: any) => void) {
  let data
  // Thay đổi chuỗi kết nối để bao gồm tên người dùng và mật khẩu
  const connectionString = `server=DESKTOP-BLQ630N;Database=QLBH;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}`
  sql.query(connectionString, query, (err: any, rows: any) => {
    callback(err, rows)
  })
  return data
}
