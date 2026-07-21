document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("card-container");
    if (!container || typeof SYSTEM_CONFIG === "undefined") return;

    container.innerHTML = "";

    SYSTEM_CONFIG.sections.forEach((section, index) => {
        const card = document.createElement("div");
        card.className = "card";

        let actionHtml = "";

        // Kiểm tra nếu là Mục 3 (dạng nhập key)
        if (section.btnAction === "key_wall") {
            actionHtml = `
                <div style="margin-top: 15px; border-top: 1px dashed #1f293d; padding-top: 15px;">
                    <p style="font-size: 13px; color: #ff9f43; margin-bottom: 8px;">🔒 Nhập Key 7 ngày để mở khóa module này:</p>
                    <div style="display: flex; gap: 8px; margin-bottom: 8px;">
                        <input type="text" id="key-input-${index}" placeholder="Dán key luaurb_..." style="flex: 1; padding: 10px; background: #060911; border: 1px solid #1f293d; color: #fff; border-radius: 6px; font-family: monospace;">
                        <button onclick="verifyKey(${index}, '${section.redirectUrl || "https://google.com"}')" style="padding: 10px 15px; background: #00ffcc; color: #0b0f19; border: none; font-weight: bold; border-radius: 6px; cursor: pointer;">XÁC THỰC</button>
                    </div>
                    <a href="${section.buttonLink}" target="_blank" style="display: inline-block; color: #00ffcc; font-size: 13px; text-decoration: underline;">👉 Bấm vào đây để lấy Key Lootlabs</a>
                </div>
            `;
        } else {
            // Các mục bình thường (Mục 1, 2)
            actionHtml = `
                <button onclick="handleNormalAction('${section.btnAction}')" style="margin-top: 15px; width: 100%; padding: 10px; background: #00ffcc; color: #0b0f19; border: none; font-weight: bold; border-radius: 6px; cursor: pointer;">
                    CLICK HERE (Lấy mã xác minh)
                </button>
            `;
        }

        card.innerHTML = `
            <h3>${section.title}</h3>
            <p style="color: #94a3b8; font-size: 14px; margin-bottom: 10px;">${section.description}</p>
            <pre style="background: #060911; padding: 12px; border-radius: 6px; overflow-x: auto; color: #00ffcc; font-family: monospace; font-size: 13px;"><code>${section.codeSnippet}</code></pre>
            ${actionHtml}
        `;

        container.appendChild(card);
    });
});

// Hàm xác thực key cho Mục 3
function verifyKey(index, redirectUrl) {
    const inputField = document.getElementById(`key-input-${index}`);
    const userEnteredKey = inputField.value.trim();

    let savedData = localStorage.getItem("luau_key_data");
    
    if (!savedData) {
        alert("Bạn chưa có Key! Vui lòng bấm vào link lấy key ở bên dưới.");
        return;
    }

    let keyObj = JSON.parse(savedData);
    const now = new Date().getTime();

    if (now > keyObj.expiresAt) {
        alert("Key của bạn đã hết hạn 7 ngày. Vui lòng lấy key mới!");
        return;
    }

    if (userEnteredKey === keyObj.key) {
        alert("Xác thực thành công! Đang chuyển hướng...");
        window.location.href = redirectUrl;
    } else {
        alert("Key không chính xác! Hãy kiểm tra lại.");
    }
}

// Hàm xử lý nút bấm bình thường cho Mục 1, 2
function handleNormalAction(action) {
    if (action === "redirect") {
        alert("Chuyển hướng xác minh mã thành công!");
    }
}
