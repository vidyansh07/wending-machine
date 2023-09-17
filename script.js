// JavaScript to populate the dropdown
document.addEventListener("DOMContentLoaded", function () {
  var healthDropdown = document.getElementById("health-issue");
  var healthIssues = ["Headache", "Stomachache", "Fever"];

  healthIssues.forEach(function (issue) {
    var option = document.createElement("option");
    option.text = issue;
    healthDropdown.add(option);
    healthDropdown.classList.add("visible");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var healthDropdown = document.getElementById("other-problem");
  var healthIssues = ["Headache", "Stomachache", "Fever"];

  healthIssues.forEach(function (issue) {
    var option = document.createElement("option");
    option.text = issue;
    healthDropdown.add(option);
    healthDropdown.classList.add("visible");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var healthDropdown = document.getElementById("third-dropdown");
  var healthIssues = ["Headache", "Stomachache", "Fever"];

  healthIssues.forEach(function (issue) {
    var option = document.createElement("option");
    option.text = issue;
    healthDropdown.add(option);
    healthDropdown.classList.add("visible");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var healthDropdown = document.getElementById("fourth-dropdown");
  var healthIssues = ["Headache", "Stomachache", "Fever"];

  healthIssues.forEach(function (issue) {
    var option = document.createElement("option");
    option.text = issue;
    healthDropdown.add(option);
    healthDropdown.classList.add("visible");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var healthDropdown = document.getElementById("fifth-dropdown");
  var healthIssues = ["Headache", "Stomachache", "Fever"];

  healthIssues.forEach(function (issue) {
    var option = document.createElement("option");
    option.text = issue;
    healthDropdown.add(option);
    healthDropdown.classList.add("visible");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var healthDropdown = document.getElementById("sixth-dropdown");
  var healthIssues = ["Headache", "Stomachache", "Fever"];

  healthIssues.forEach(function (issue) {
    var option = document.createElement("option");
    option.text = issue;
    healthDropdown.add(option);
    healthDropdown.classList.add("visible");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var healthDropdown = document.getElementById("seventh-dropdown");
  var healthIssues = ["Headache", "Stomachache", "Fever"];

  healthIssues.forEach(function (issue) {
    var option = document.createElement("option");
    option.text = issue;
    healthDropdown.add(option);
    healthDropdown.classList.add("visible");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var healthDropdown = document.getElementById("healthDropdown");
  var healthIssues = ["Headache", "Stomachache", "Fever"];

  healthIssues.forEach(function (issue) {
    var option = document.createElement("option");
    option.text = issue;
    healthDropdown.add(option);
    healthDropdown.classList.add("visible");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var healthDropdown = document.getElementById("other-problem");
  var healthIssues = ["Headache", "Stomachache", "Fever"];

  healthIssues.forEach(function (issue) {
    var option = document.createElement("option");
    option.text = issue;
    healthDropdown.add(option);
    healthDropdown.classList.add("visible");
  });
});

// JavaScript to generate QR code
document.getElementById("submit").addEventListener("click", function () {
  var selectedIssue = this.value;
  var qrCodeSection = document.getElementById("qrCodeSection");

  // Generate QR code
  var qrcode = new QRCode(qrCodeSection, {
    text: selectedIssue,
    width: 128,
    height: 128,
  });
});

// JavaScript to trigger fade-in animation
document.addEventListener("DOMContentLoaded", function () {
  var healthDropdown = document.getElementById("submit");
  healthDropdown.classList.add("visible"); // Add the "visible" class to trigger the animation
});
