// โหลดไลบรารี html2pdf จาก CDN อัตโนมัติ
if (typeof html2pdf === 'undefined') {
  const script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js";
  document.head.appendChild(script);
}

// รอให้ DOM โหลดเสร็จ
document.addEventListener("DOMContentLoaded", () => {

  const downloadBtn = document.getElementById("downloadPdf");
  const printBtn = document.getElementById("printBtn");
  const resume = document.getElementById("resume-root");

  // ดาวน์โหลด PDF
  downloadBtn.addEventListener("click", () => {
    const opt = {
      margin: 0.2,
      filename: "Thanaphon_Likhitpanyawat_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };
    html2pdf().set(opt).from(resume).save();
  });

  // สั่งพิมพ์
  printBtn.addEventListener("click", () => window.print());

});
