window.initApp = function() {
    const container = document.getElementById("card-container");
    if (!container) return;

    container.innerHTML = "";

    SYSTEM_CONFIG.sections.forEach((sec, index) => {
        const card = document.createElement("div");
        card.className = "card";
        
        let actionButtonHTML = "";

        if (sec.btnAction === "copy") {
            // Nút "Click Here" để tạo mã ngẫu nhiên khi bấm
            actionButtonHTML = `
                <div id="random-result-${index}" class="random-box">Mã ngẫu nhiên: <span>Chưa tạo</span></div>
                <button class="click-btn" onclick="generateRandomCode(${index})">CLICK HERE (Lấy mã ngẫu nhiên)</button>
            `;
        } else {
            // Nút cho danh mục 3 (Vượt link)
            actionButtonHTML = `
                <a href="${sec.buttonLink}" target="_blank" class="click-btn" style="background: var(--primary-color); color: var(--bg-color);">LẤY KEY (2 PHÚT)</a>
            `;
        }

        card.innerHTML = `
            <h3>${sec.title}</h3>
            <p>${sec.description}</p>
            <pre><code>${sec.codeSnippet}</code></pre>
            ${actionButtonHTML}
        `;
        container.appendChild(card);
    });
};

// Hàm tạo dãy số/mã ngẫu nhiên khác nhau mỗi khi bấm nút
window.generateRandomCode = function(index) {
    const resultBox = document.getElementById(`random-result-${index}`);
    if (!resultBox) return;

    // Tạo một chuỗi ngẫu nhiên kết hợp số và ký tự (giống mã key game)
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomString = "LUAU-";
    for (let i = 0; i < 10; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Hiển thị khung kết quả và đổi mã mới liên tục mỗi lần bấm
    resultBox.style.display = "block";
    resultBox.querySelector("span").textContent = randomString;
};
