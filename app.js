/* --- MODULE ĐIỀU KHIỂN VÀ RENDER GIAO DIỆN CHÍNH --- */
window.initApp = function() {
    const container = document.getElementById("card-container");
    if (!container) return;

    // Xóa nội dung cũ nếu có
    container.innerHTML = "";

    // Duyệt qua mảng dữ liệu trong config để tự động tạo các khối card so sánh
    SYSTEM_CONFIG.comparisonData.forEach((item, index) => {
        // Tạo Card cho Ảnh Thật
        const cardReal = document.createElement("div");
        cardReal.className = "card";
        cardReal.innerHTML = `
            <h3>${item.titleReal}</h3>
            <img src="${item.imageReal}" alt="Real Image ${index}">
            <p>${item.descReal}</p>
        `;
        container.appendChild(cardReal);

        // Tạo Card cho Ảnh Chế
        const cardMeme = document.createElement("div");
        cardMeme.className = "card";
        cardMeme.innerHTML = `
            <h3>${item.titlememe}</h3>
            <img src="${item.imageMeme}" alt="Meme Image ${index}">
            <p>${item.descMeme}</p>
        `;
        container.appendChild(cardMeme);
    });

    console.log("Hệ thống đã nạp thành công toàn bộ dữ liệu cấu trúc.");
};
