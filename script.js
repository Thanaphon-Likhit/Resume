// script.js
// ตัวอย่าง: เพิ่มฟังก์ชันคลิกเพื่อซ่อน/แสดง section
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section h3");
  sections.forEach((heading) => {
    heading.style.cursor = "pointer";
    heading.addEventListener("click", () => {
      const content = heading.nextElementSibling;
      if(content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
