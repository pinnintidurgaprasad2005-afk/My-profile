const roles = [
  "Python Developer",
  "Frontend Developer",
  "Full Stack Developer"
];

let index = 0;
const roleEl = document.getElementById("role");

setInterval(() => {
  roleEl.textContent = roles[index];
  index = (index + 1) % roles.length;
}, 2000);

function openCert(src) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeCert() {
  document.getElementById("modal").style.display = "none";
}
