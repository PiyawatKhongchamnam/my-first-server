// =========================================================================
// 🔮 [THE CORE CORE] เรียกใช้งานระเบียบเวทมนตร์โบราณแห่งระบบเครือข่าย HTTP Module
// =========================================================================
const http = require('http');

// 🪐 [THE NEXUS PORTAL] ช่องทางเปิดมิติรับพลังงานเวทมนตร์ควบคุมโดยระบบ Cloud (Railway)
const port = process.env.PORT || 3000;

// ⚔️ [THE ARCHMAGE COMMAND] บัญชาการสร้างเครื่องแม่ข่ายจำลองวงแหวนเวท
const server = http.createServer((req, res) => {
  
  // ปลดล็อกสถานะการเข้าถึงระดับสูงสุด (200 OK)
  res.statusCode = 200;
  
  // ร่ายมนตร์แปลงกระแสข้อมูลให้กลายเป็นโครงข่ายอักขระภาษาไทย (UTF-8)
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // 🎭 [THE GRIMOIRE DECREE] คัมภีร์เวทแสดงผลหน้าเว็บสไตล์ดาร์กไซเบอร์
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="th">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>🔴 [SYSTEM OVERDRIVE] - ปิยะวัฒน์ คงชำนาญ</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Courier New', Courier, monospace, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #0a0a0c;
          color: #e0e0e6;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
          overflow: hidden;
          position: relative;
        }

        /* เอฟเฟกต์เส้นสแกนแบบล้ำๆ หน้าจอมอนิเตอร์ของปีศาจ */
        body::before {
          content: " ";
          display: block;
          position: absolute;
          top: 0; left: 0; bottom: 0; right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          z-index: 2;
          background-size: 100% 2px, 3px 100%;
          pointer-events: none;
        }

        .matrix-container {
          background: rgba(15, 15, 20, 0.85);
          border: 2px solid #ff0055;
          border-radius: 10px;
          box-shadow: 0 0 30px rgba(255, 0, 85, 0.3), inset 0 0 15px rgba(255, 0, 85, 0.1);
          padding: 50px 40px;
          max-width: 650px;
          width: 100%;
          text-align: center;
          position: relative;
          backdrop-filter: blur(10px);
          animation: glitchActivate 0.6s ease-out;
        }

        @keyframes glitchActivate {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); filter: hue-rotate(90deg); }
          50% { opacity: 0.8; transform: scale(1.02) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: hue-rotate(0deg); }
        }

        .status-badge {
          display: inline-block;
          border: 1px solid #00ffcc;
          color: #00ffcc;
          background: rgba(0, 255, 204, 0.05);
          padding: 8px 20px;
          border-radius: 4px;
          margin-bottom: 25px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.85em;
          box-shadow: 0 0 10px rgba(0, 255, 204, 0.2);
        }

        h1 {
          color: #fff;
          font-size: 2.2em;
          margin-bottom: 15px;
          letter-spacing: 1px;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 2px 2px 0px #ff0055, -2px -2px 0px #00ffcc;
        }

        .tagline {
          font-size: 1.1em;
          color: #888899;
          margin-bottom: 35px;
          font-style: italic;
        }

        .forbidden-lore {
          background: rgba(255, 0, 85, 0.03);
          border-left: 4px solid #ff0055;
          border-right: 4px solid #00ffcc;
          padding: 25px;
          border-radius: 4px;
          margin-bottom: 30px;
          text-align: left;
        }

        .forbidden-lore h3 {
          color: #ff0055;
          font-size: 1.1em;
          margin-bottom: 15px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .lore-row {
          margin: 12px 0;
          font-size: 1.05em;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.05);
          padding-bottom: 5px;
        }

        .lore-label {
          color: #00ffcc;
        }

        .lore-value {
          font-weight: bold;
          color: #ffffff;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
        }

        .sigil-group {
          margin-top: 15px;
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .sigil {
          background: #141419;
          border: 1px solid #444455;
          color: #aaa;
          padding: 4px 12px;
          border-radius: 3px;
          font-size: 0.8em;
        }

        .footer {
          color: #555566;
          font-size: 0.8em;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          line-height: 1.6;
        }
      </style>
    </head>
    <body>
      <div class="matrix-container">
        <div class="status-badge">
          ⚡ MIGHTY PROTOCOL ACTIVE ⚡
        </div>
        
        <h1>หัตถ์ซ้ายแห่งโชคชะตาตื่นขึ้นแล้ว!</h1>
        
        <p class="tagline">
          "ยินดีต้อนรับสู่ขอบเขตแดนศักดิ์สิทธิ์ที่ถูกกักขังไว้ในระบบรถไฟแห่งกาลเวลา (Railway)..."
        </p>

        <div class="forbidden-lore">
          <h3>[ บันทึกผู้ทำพันธสัญญาดาร์กเนส ]</h3>
          
          <div class="lore-row">
            <span class="lore-label">นามแท้จริง:</span>
            <span class="lore-value">นายปิยะวัฒน์ คงชำนาญ</span>
          </div>
          
          <div class="lore-row">
            <span class="lore-label">รหัสตราประทับวิญญาณ:</span>
            <span class="lore-value">69319010258</span>
          </div>

          <div class="sigil-group">
            <span class="sigil">✦ Node.js Lv.99</span>
            <span class="sigil">✦ Abyss Overdrive</span>
          </div>
        </div>

        <div class="footer">
          <p>🔮 เครื่องมนตราขับเคลื่อนด้วยพลังงาน Node.js HTTP Core Module</p>
          <p>ปรุงแต่งด้วยสายเลือด หยาดเหงื่อ และศรัทธาอันแรงกล้า 🩸</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // ส่งผ่านชุดคำสั่งมนตรากลับไปสู่เบราว์เซอร์เป้าหมาย
  res.end(htmlContent);
});

// =========================================================================
// 🔓 ปลดผนึกพลังงาน ปล่อยคลื่นความถี่เชื่อมต่อมิติผ่านพอร์ตที่กำหนด
// =========================================================================
server.listen(port, () => {
  console.log(`[SYS] 🔮 วงแหวนเวทเปิดใช้งานสมบูรณ์! ขยายขอบเขตพลังงานที่ช่องทางมิติ: ${port}`);
});
