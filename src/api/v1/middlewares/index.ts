//  midelware of check user have login with email ,
export function ensureAuthenticated(req: { isAuthenticated: () => any; }, res: { redirect: (arg0: string) => void; }, next: () => any) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/login'); // Điều hướng đến trang đăng nhập nếu chưa xác thực
}
// // Sử dụng middleware ensureAuthenticated cho các routes cần xác thực
// app.get('/profile', ensureAuthenticated, function(req, res) {
//   // Hiển thị trang cá nhân của người dùng đã xác thực
// });