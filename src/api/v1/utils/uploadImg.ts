import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Định nghĩa thư mục lưu trữ ảnh tải lên
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Đặt tên cho file ảnh (có thể sử dụng Date.now() để tránh trùng tên)
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

export default upload;


// example
// import express from 'express';
// import multer from 'multer';
// import fs from 'fs';
// import path from 'path';

// const app = express();
// app.post('/upload', upload.single('image'), (req, res) => {
//   const newImage = req.file as Express.Multer.File;

//   // Xác định đường dẫn đến file cũ (nếu tồn tại)
//   const oldImagePath = path.join('uploads/', req.body.oldImageName);

//   // Kiểm tra xem file cũ có tồn tại hay không
//   if (fs.existsSync(oldImagePath)) {
//     // Xóa file cũ
//     fs.unlinkSync(oldImagePath);
//   }

//   // Xử lý sau khi tải lên thành công
//   const imageUrl = newImage.path;
//   res.send('Tải lên và thay thế thành công! Đường dẫn: ' + imageUrl);
// });