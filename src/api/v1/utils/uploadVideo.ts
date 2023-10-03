import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/videos/');
  },
  filename: (req, file, cb) => {
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

 

// const upload = multer({ storage });
 

// app.post('/upload-video', upload.single('video'), (req, res) => {
//   const newVideo = req.file as Express.Multer.File;

//   // Kiểm tra xem video đã tồn tại hay không
//   const videoPath = newVideo.path;
//   const oldVideoPath = path.join('uploads/videos/', req.body.oldVideoName);

//   if (fs.existsSync(oldVideoPath)) {
//     // Xóa video cũ nếu tồn tại
//     fs.unlinkSync(oldVideoPath);
//   }

//   // Xử lý sau khi tải lên thành công
//   // Lưu trữ thông tin hoặc đường dẫn video mới vào cơ sở dữ liệu nếu cần

//   const videoUrl = videoPath;
//   res.send('Video uploaded and replaced successfully! URL: ' + videoUrl);
// });

 