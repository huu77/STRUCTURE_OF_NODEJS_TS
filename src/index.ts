import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
 
 
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
import {PrismaClient} from '@prisma/client'
// add swager
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './config/Swager/swagger.yaml'

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

 


const prisma = new PrismaClient();

app.get('/', async (_req, res) => {
  try {
    const users = await prisma.kHACHHANG.findMany();
    console.log(users);
    res.json(users); // Gửi dữ liệu JSON về client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' }); // Xử lý lỗi
  } finally {
    await prisma.$disconnect();
  }
});


// connectRedis()
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
