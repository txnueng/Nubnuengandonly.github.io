// script.js

// 1. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 2. Scroll Animation (Fade In)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// 3. Member Data (ข้อมูลจำลอง - น้องเต็งหนึ่งสามารถแก้ตรงนี้ได้เลย)
const membersData = {
    1: { name: "นายศิริพงศ์ พลไชย", pos: "ประธานพรรค", desc: "มุ่งมั่นทำงาน สานต่อความสำเร็จ", ig: "t1.nuengx", fb: "Siripong Phonchai" },
    2: { name: "นางสาวสมหญิง จริงใจ", pos: "รองประธาน", desc: "รับฟังทุกปัญหา แก้ไขทันที", ig: "somying_ig", fb: "Somying Jingjai" },
    3: { name: "นายรักเรียน เพียรศึกษา", pos: "ฝ่ายวิชาการ", desc: "ดันเกรดเฉลี่ยให้พุ่งกระฉูด", ig: "rukrian_ig", fb: "Rukrian" },
    // ใส่ข้อมูลเพิ่มได้เรื่อยๆ จนครบ 10 คน
};

// Modal Logic
const modal = document.getElementById('memberModal');

function openMemberDetail(id) {
    // ดึงข้อมูลตาม ID
    const member = membersData[id]; 
    if(!member) return; // ถ้าไม่มีข้อมูลให้หยุด

    // ใส่ข้อมูลลงใน Modal
    document.getElementById('modalName').innerText = member.name;
    document.getElementById('modalPosition').innerText = member.pos;
    document.getElementById('modalDesc').innerText = member.desc;
    
    // ตั้งค่ารูปภาพ (ถ้ามีไฟล์จริงให้เปลี่ยน path ตรงนี้)
    document.getElementById('modalImg').src = `https://via.placeholder.com/150?text=Member+${id}`;
    
    document.getElementById('modalIG').href = `https://instagram.com/${member.ig}`;
    document.getElementById('modalFB').href = `https://facebook.com/${member.fb}`;

    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

// ปิด Modal เมื่อคลิกพื้นที่ว่างข้างนอก
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

