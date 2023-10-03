"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
// connectRedis()
// using python
// import { PythonShell } from 'python-shell'
// using log nhật kí
const morgan_1 = __importDefault(require("morgan"));
// using for security
const helmet_1 = __importDefault(require("helmet"));
// tối ưu băng thông và nén dữ liệu , cải thiện trải nghiệm người dùng
const compression_1 = __importDefault(require("compression"));
// 
const client_1 = require("@prisma/client");
// add swager
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './config/Swager/swagger.yaml'
// Load environment variables from .env file
dotenv_1.default.config();
const app = (0, express_1.default)();
// init midleware
// Sử dụng Morgan với định dạng "common"
app.use((0, morgan_1.default)('dev'));
// Sử dụng Helmet để cải thiện bảo mật
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)()); // co ther giam dung luong gap 10 lan
// init port
const port = process.env.PORT || 8686;
// Sử dụng body-parser để xử lý phần thân của yêu cầu cho res json
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
const prisma = new client_1.PrismaClient();
app.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.kHACHHANG.findMany();
        console.log(users);
        res.json(users); // Gửi dữ liệu JSON về client
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' }); // Xử lý lỗi
    }
    finally {
        yield prisma.$disconnect();
    }
}));
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
