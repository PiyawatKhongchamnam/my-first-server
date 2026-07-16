// 1. เรียกใชงาน Module ที่ชื่อวา 'http' ซึ่งเปนระบบพื้นฐานของ Node.js สําหรับทําเซิรฟเวอร
const http = require('http');

// 2. กําหนดชองทาง (Port) ที่เซิรฟเวอรจะใชสื่อสาร โดยใหใชของที่ Cloud กําหนด
const port = process.env.PORT || 3000;

// 3. สรางเครื่องแมขาย (Server) ที่คอยรับคําขอ (req) และตอบกลับ (res)
const server = http.createServer((req, res) => {

  // 3.1 ตั้งรหัสสถานะ 200 หมายถึง "ทํางานสําเร็จ (OK)"
  res.statusCode = 200;

  // 3.2 บอกเบราวเซอรของผูใชวา สิ่งที่สงกลับไปคือไฟลขอความแบบ HTML แลงดยาง Unicode
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // 3.3 สงขอมูลหนาเว็บกลับไปหาผูใช
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="th">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Web Server - ปิยะวัฒน์ คงชำนาญ</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
        }

        .container {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          padding: 60px 40px;
          max-width: 600px;
          text-align: center;
          animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        h1 {
          color: #333;
          font-size: 2.5em;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .greeting {
          font-size: 1.3em;
          color: #555;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .info-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 25px;
          border-radius: 15px;
          margin-bottom: 30px;
        }

        .info-box p {
          margin: 10px 0;
          font-size: 1.1em;
        }

        .label {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          padding: 5px 15px;
          border-radius: 20px;
          margin: 5px;
          font-size: 0.9em;
        }

        .status {
          display: inline-block;
          background: #4CAF50;
          color: white;
          padding: 10px 25px;
          border-radius: 25px;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .footer {
          color: #999;
          font-size: 0.9em;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }

        .emoji {
          font-size: 1.2em;
          margin: 0 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="status">
          <span class="emoji">✅</span> Server is Running
        </div>
        
        <h1>🎉 สวัสดีครับ!</h1>
        
        <p class="greeting">
          ยินดีต้อนรับเข้าสู่ Web Server 🚀
        </p>

        <div class="info-box">
          <p><strong>ข้อมูลนักศึกษา</strong></p>
          <p>ชื่อ-นามสกุล: นายปิยะวัฒน์ คงชำนาญ</p>
          <p>รหัสนักศึกษา: 69319010258</p>
          <div style="margin-top: 15px;">
            <span class="label">Node.js Server</span>
            <span class="label">Running Successfully</span>
          </div>
        </div>

        <div class="footer">
          <p>💻 Web Server สร้างด้วย Node.js HTTP Module</p>
          <p>Made with ❤️</p>
        </div>
      </div>
    </body>
    </html>
  `;

  res.end(htmlContent);
});

// 4. สั่งใหเซิรฟเวอรเริ่มตนเปดรับฟงการเชื่อมตอตาม Port ที่กําหนดไว
server.listen(port, () => {
  console.log(`Server is running! เครื่องแม่ข่ายเปิดทํางานแล้วที่ช่องทาง: ${port}`);
});
