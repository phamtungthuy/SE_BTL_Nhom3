# SE_BTL_Nhom3
- Dùng git clone để lấy dự án về máy của bạn.
## Backend
- Chuyển đến thư mục backend.
- Chạy câu lệnh "npm install" để tải các modules cần thiết.
- Sao chép file .env-sample thành file .env và cấu hình cổng, cơ sở dữ liệu trong file đấy
- Cấu hình lại trong file config.json ở trong tệp src/config/config.json, sao cho cấu hình Database phù hợp với máy của bạn.
- Tạo cơ sở dữ liệu go10ngon(hoặc tên khác) trong hệ quản trị cơ sở dữ liệu của bạn.
- Chạy "npm createDB" để tạo các bảng cần thiết trong cơ sở dữ liệu của bạn.
- Chạy "npm insertDB" để tạo dữ liệu mẫu thử nghiệm web trong cơ sở dữ liệu của bạn.
- Chạy "npm start" để chạy backend của bạn.
**Chú ý: Nếu bạn chạy backend ở cổng khác 3000 thì bạn pahri config lại đoạn "res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');" trong file index.js 
## Frontend
- Chuyển đến thư mục frontend.
- Chạy câu lệnh "npm install" để cài đặt các modules cần thiết.
- Sao chép file .env-sample thành file .env và cấu hình lại sao cho phù hợp.
