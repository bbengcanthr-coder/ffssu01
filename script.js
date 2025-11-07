const flowerContainer = document.getElementById("flower-container");
const nameInput = document.getElementById("name-input");
const keyboard = document.getElementById("keyboard");

const flowerImages = [
    "https://cdn.glitch.global/8860279e-aa5e-4005-ae53-80fd2789f250/Untitled%20design%20(8)%20(1).png?v=1745476765998", // A
    "https://i.imgur.com/AVOWMpe.png", // B
    "https://i.imgur.com/C3UeVns.png", // C
    "https://i.imgur.com/KFUK6bK.png", // D
    // ... เพิ่มจนถึง Z (ใส่ลิงก์ภาพดอกไม้ให้ครบ 26 ตัวอักษร)
];

// สร้างปุ่ม A-Z
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let i = 0; i < letters.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = letters[i];
    btn.className = "key";
    btn.onclick = () => {
        nameInput.value += letters[i];
        updateFlowers();
    };
    keyboard.appendChild(btn);
}

function updateFlowers() {
    flowerContainer.innerHTML = "";
    const name = nameInput.value.toUpperCase();

    for (let i = 0; i < name.length; i++) {
        const letter = name[i];
        const index = letters.indexOf(letter);
        if (index !== -1) {
            const img = document.createElement("img");
            img.src = flowerImages[index % flowerImages.length];
            img.className = "flower";
            img.style.zIndex = i + 1; // ซ้อนทับตามลำดับตัวอักษร
            flowerContainer.appendChild(img);
        }
    }
}
