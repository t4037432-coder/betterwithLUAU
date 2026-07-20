const SYSTEM_CONFIG = {
    // Mật khẩu bảo mật mở khóa trang web
    accessKey: "123456",
    
    // 3 Danh mục theo đúng ý tưởng của bạn
    sections: [
        {
            title: "1. New (Dành cho người mới)",
            description: "Các đoạn code Luau cơ bản nhất để làm quen với Roblox Studio.",
            codeSnippet: 'print("Hello Roblox!")\nlocal score = 10\nprint("Score is: " .. score)',
            buttonText: "COPY CODE",
            buttonLink: "#"
        },
        {
            title: "2. Know Luau? Join Now",
            description: "Thử thách tư duy logic và các hàm xử lý trung bình.",
            codeSnippet: 'local player = game.Players.LocalPlayer\nprint("Current user: " .. player.Name)',
            buttonText: "THAM GIA NGAY",
            buttonLink: "#"
        },
        {
            title: "3. Năng Cao (Full Module)",
            description: "Hệ thống code chuyên sâu. Yêu cầu lấy key qua Linkvertise/Lootlabs (2 phút).",
            codeSnippet: '-- [HỆ THỐNG ĐÃ BỊ KHÓA]\nlocal secured_data = "Cần có Key để giải mã module này!";',
            buttonText: "LẤY KEY (2 PHÚT)",
            buttonLink: "https://loot-link.com" // Thay link vượt key của bạn vào đây sau
        }
    ]
};
