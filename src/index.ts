import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

// using python
import { PythonShell } from 'python-shell'

// using database test
import { sqlQueryType } from 'msnodesqlv8/types'
import { database } from './config/database'

// using log nhật kí
import morgan from 'morgan'

// using for security
import helmet from 'helmet'

// tối ưu băng thông và nén dữ liệu , cải thiện trải nghiệm người dùng
import compression from 'compression'

// Load environment variables from .env file
dotenv.config()

const app = express()

// init midleware
// Sử dụng Morgan với định dạng "common"
app.use(morgan('dev'))
// Sử dụng Helmet để cải thiện bảo mật
app.use(helmet())
app.use(compression()) // co ther giam dung luong gap 10 lan

// init port
const port: any = process.env.PORT

// Sử dụng body-parser để xử lý phần thân của yêu cầu cho res json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// init router
app.get('/', (req, res) => {
  // test data with compression
  const stringTEst = 'Hello huu'

  return res.status(200).json({
    mesage: 'wellcome to viet nam',
    data: stringTEst.repeat(1000)
  })
  // test with python
  // 1 params  1 là id của item
  // const options = {
  //   scriptPath: 'D:/project/testcode/',
  //   args: ['16']
  // }
  // PythonShell.run('test.py', options).then((messages) => {
  //   // results is an array consisting of messages collected during execution
  //   res.send(messages)
  // })
})

// init data
// const number = 5
// const query: sqlQueryType = `select TOP ${number} * from KHACHHANG where DOANHSO >= '21000.00'  `
// database(query, (err, rows) => {
//   console.log(rows)
// })

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
