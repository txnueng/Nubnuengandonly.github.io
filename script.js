// ข้อมูลสมาชิก 10 คน (แก้ไขข้อมูลจริงตรงนี้)
const membersData = {
    1: {
        name: "นาย ก. ไก่ (ชื่อเล่น)",
        role: "หัวหน้าพรรค",
        desc: "“ผู้นำที่พร้อมรับฟัง มุ่งมั่นพัฒนา YSP”",
        img: "https://via.placeholder.com/150",
        ig: "https://instagram.com/ชื่อไอจี",
        fb: "https://facebook.com/ชื่อเฟส"
    },
    2: {
        name: "น.ส. ข. ไข่ (ชื่อเล่น)",
        role: "รองหัวหน้าพรรคฝ่ายบริหาร",
        desc: "“บริหารงานด้วยใจ ใส่ใจทุกรายละเอียด”",
        img: "https://via.placeholder.com/150",
        ig: "#",
        fb: "#"
    },
    3: {
        name: "นาย ค. ควาย (ชื่อเล่น)",
        role: "รองหัวหน้าพรรคฝ่ายกิจกรรม",
        desc: "“สร้างสรรค์กิจกรรม เพื่อความสุขของทุกคน”",
        img: "https://via.placeholder.com/150",
        ig: "#",
        fb: "#"
    },
    4: {
        name: "น.ส. ง. งู (ชื่อเล่น)",
        role: "เหรัญญิก",
        desc: "“โปร่งใส ตรวจสอบได้ ใช้จ่ายคุ้มค่า”",
        img: "https://via.placeholder.com/150",
        ig: "#",
        fb: "#"
    },
    5: {
        name: "นาย จ. จาน (ชื่อเล่น)",
        role: "เลขานุการ",
        desc: "“รวดเร็ว แม่นยำ ประสานงานฉับไว”",
        img: "https://via.placeholder.com/150",
        ig: "#",
        fb: "#"
    },
    6: {
        name: "น.ส. ฉ. ฉิ่ง (ชื่อเล่น)",
        role: "ฝ่ายประชาสัมพันธ์",
        desc: "“สื่อสารชัดเจน ทันทุกข่าวสารโรงเรียน”",
        img: "https://via.placeholder.com/150",
        ig: "#",
        fb: "#"
    },
    7: {
        name: "นาย ช. ช้าง (ชื่อเล่น)",
        role: "ฝ่ายวิชาการ",
        desc: "“ส่งเสริมการเรียนรู้ สู่ความเป็นเลิศ”",
        img: "https://via.placeholder.com/150",
        ig: "#",
        fb: "#"
    },
    8: {
        name: "น.ส. ซ. โซ่ (ชื่อเล่น)",
        role: "ฝ่ายสวัสดิการ",
        desc: "“ดูแลห่วงใย แก้ไขปัญหาปัจจัยพื้นฐาน”",
        img: "https://via.placeholder.com/150",
        ig: "#",
        fb: "#"
    },
    9: {
        name: "นาย ฌ. เฌอ (ชื่อเล่น)",
        role: "ฝ่ายเทคโนโลยีและสื่อ",
        desc: "“ทันสมัย ก้าวไกลด้วยนวัตกรรม”",
        img: "https://via.placeholder.com/150",
        ig: "#",
        fb: "#"
    },
    10: {
        name: "น.ส. ญ. หญิง (ชื่อเล่น)",
        role: "ฝ่ายประสานงานองค์กร",
        desc: "“เชื่อมความสัมพันธ์ สานต่องานทุกภาคส่วน”",
        img: "https://via.placeholder.com/150",
        ig: "#",
        fb: "#"
    }
};

// --- ส่วนการทำงานของระบบ (ไม่ต้องแก้ไข) ---

// ฟังก์ชันเปิด Modal สมาชิก
function openMemberModal(id) {
    const modal = document.getElementById("memberModal");
    const data = membersData[id];

    if (data) {
        document.getElementById("modal-name").innerText = data.name;
        document.getElementById("modal-role").innerText = data.role;
        document.getElementById("modal-desc").innerText = data.desc;
        document.getElementById("modal-img").src = data.img;
        
        // ตั้งค่าลิงก์ IG และ FB
        const igBtn = document.getElementById("modal-ig");
        const fbBtn = document.getElementById("modal-fb");
        
        igBtn.href = data.ig;
        fbBtn.href = data.fb;

        // ถ้าไม่มีลิงก์ ให้ซ่อนปุ่ม (Optional)
        igBtn.style.display = data.ig === "#" ? "none" : "inline-block";
        fbBtn.style.display = data.fb === "#" ? "none" : "inline-block";

        modal.style.display = "block";
    }
}

// ฟังก์ชันปิด Modal
function closeModal() {
    document.getElementById("memberModal").style.display = "none";
}

// ปิด Modal เมื่อคลิกพื้นที่ว่างๆ ข้างนอก
window.onclick = function(event) {
    const modal = document.getElementById("memberModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Animation on Scroll
document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));
});
