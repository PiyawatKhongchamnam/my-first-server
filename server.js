// 1. อัญเชิญเวทมนตร์คุมขัง (Module http)
const http = require('http');

// 2. กำหนดประตูมิติแห่งพลัง (Port)
const port = process.env.PORT || 3000;

// 3. ปลดปล่อยค่ายกลเวท (สร้าง Server)
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>✦ Forbidden Realm of Darkness ✦</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Cinzel', 'Segoe UI', Tahoma, sans-serif;
        }

        body {
            background: radial-gradient(circle at center, #1a0006, #050508, #000000);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            overflow: hidden;
            color: #e0e0e0;
        }

        /* เอฟเฟกต์หมอกควันแห่งความมืดลอยด้านหลัง */
        body::before {
            content: "";
            position: absolute;
            width: 300%;
            height: 300%;
            background: radial-gradient(circle, rgba(255, 0, 51, 0.05) 10%, transparent 60%);
            animation: pulse 6s infinite alternate ease-in-out;
            pointer-events: none;
        }

        @keyframes pulse {
            0% { transform: scale(1) rotate(0deg); opacity: 0.5; }
            100% { transform: scale(1.2) rotate(10deg); opacity: 0.9; }
        }

        .card {
            background: rgba(15, 10, 15, 0.85);
            width: 520px;
            max-width: 90%;
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            border: 1px solid #ff0033;
            box-shadow: 0 0 30px rgba(255, 0, 51, 0.3), inset 0 0 15px rgba(255, 0, 51, 0.1);
            backdrop-filter: blur(8px);
            position: relative;
            z-index: 10;
        }

        .icon {
            font-size: 75px;
            margin-bottom: 10px;
            text-shadow: 0 0 20px #ff0033;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        h1 {
            color: #ff1a40;
            font-size: 26px;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-shadow: 0 0 10px rgba(255, 26, 64, 0.7);
            margin-bottom: 10px;
        }

        h2 {
            color: #888;
            font-size: 16px;
            font-weight: normal;
            margin-bottom: 20px;
            letter-spacing: 1px;
        }

        p {
            color: #bbb;
            line-height: 1.8;
            font-size: 15px;
        }

        strong {
            color: #ff4d6d;
        }

        .student {
            background: rgba(255, 0, 51, 0.05);
            border: 1px solid rgba(255, 0, 51, 0.4);
            border-left: 5px solid #ff0033;
            padding: 18px;
            border-radius: 8px;
            margin: 25px 0;
            text-align: left;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
        }

        .student p {
            margin-bottom: 5px;
        }

        .footer {
            margin-top: 25px;
            color: #555;
            font-size: 12px;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        .status {
            display: inline-block;
            background: linear-gradient(45deg, #800000, #ff0033);
            color: #ffffff;
            padding: 10px 24px;
            border-radius: 4px;
            margin-top: 15px;
            font-weight: bold;
            letter-spacing: 1px;
            box-shadow: 0 0 15px rgba(255, 0, 51, 0.6);
            border: 1px solid #ff6680;
            text-shadow: 0 0 5px #000;
        }
    </style>
</head>

<body>

<div class="card">

    <div class="icon">👁️‍🗨️</div>

    <h1>✦ ARCH-DEMON SERVER ✦</h1>
    <h2>ยินดีต้อนรับสู่เขตอาคมต้องห้าม... ผู้บุกรุกเอ๋ย</h2>

    <div class="student">
        <p>🩸 <strong>นามแห่งผู้สืบทอดพันธสัญญา:</strong> นาย ปิยะวัฒน์ คงชำนาญ</p>
        <p>📜 <strong>รหัสตราอักขระสาป:</strong> 69319010258</p>
    </div>

    <p>พันธสัญญานี้ถูกถักทอด้วยพลังแห่ง <strong>Node.js Core</strong></p>
    <p>สถิตอยู่ ณ ประตูมิติ <strong>Railway Abyss</strong></p>

    <div class="status">
        ⚡ ผนึกถูกปลดปล่อย: SERVER ONLINE
    </div>

    <div class="footer">
        Computer Science | Dark Web Programming Ritual
    </div>

</div>

</body>
</html>
    `);
});

// 4. เริ่มพิธีกรรมอัญเชิญ
server.listen(port, () => {
    console.log(`
    ========================================================
    🩸 [DARK RITUAL COMPLETE] 🩸
    พิธีกรรมอัญเชิญตื่นขึ้นแล้ว ณ ช่องทางมิติ (Port): ${port}
    จงนอบน้อมต่อพลังแห่งความมืด... ฮ่าๆๆๆ!
    ========================================================
    `);
});
