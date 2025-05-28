// Search bar functionality
document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const colleges = document.querySelectorAll(".college-card");

  colleges.forEach(college => {
    const name = college.getAttribute("data-name").toLowerCase();
    if (name.includes(filter)) {
      college.style.display = "block";
    } else {
      college.style.display = "none";
    }
  });
});

// View button navigation
function openCollegePage(page) {
  window.location.href = page;
}
