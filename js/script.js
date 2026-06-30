// script.js - dùng chung cho toàn site
// Tự động đánh dấu link menu đang active dựa theo tên file hiện tại
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});
