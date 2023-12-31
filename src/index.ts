import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

//  USING ROUTER
import { routes } from './api/v1/routes'
// connectRedis()
import './config/redis_example'

// using python
// import { PythonShell } from 'python-shell'

// using log nhật kí
import morgan from 'morgan'

// using for security
import helmet from 'helmet'

// tối ưu băng thông và nén dữ liệu , cải thiện trải nghiệm người dùng
import compression from 'compression'
//
// add swager
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './config/Swager/swagger.yaml'

// login with 3th
 import './api/v1/compoments/Login'
//  import './api/v1/middlewares/statusSuccess'
 import './api/v1/middlewares/statusErr'
// 
import passport from 'passport'
import session from 'express-session'
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
const port: any = process.env.PORT || 8686

// Sử dụng body-parser để xử lý phần thân của yêu cầu cho res json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
  session({
    secret: process.env.MYSECRET as string,
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true }
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use('/', routes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
