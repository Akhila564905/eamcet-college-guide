function predictColleges() {
    const rank = parseInt(document.getElementById("rank").value);
    const category = document.getElementById("category").value.toLowerCase();
    const gender = document.getElementById("gender").value.toLowerCase();
    const branch = document.getElementById("branch").value.toLowerCase();
    const topN = parseInt(document.getElementById("top").value);
  
    const collegeData = [
      { name: "Osmania University", closingRank: 40000, category: "bc-d", gender: "female", branch: "cse" },
      { name: "Vardhaman Engineering College", closingRank: 42000, category: "bc-d", gender: "female", branch: "cse" },
      { name: "Gokaraju Rangaraju Institute", closingRank: 45000, category: "bc-d", gender: "female", branch: "cse" },
      { name: "Vasavi Institute of Technology", closingRank: 46000, category: "bc-d", gender: "female", branch: "cse" },
      { name: "Srinidhi Institute of Science & Tech", closingRank: 47000, category: "bc-d", gender: "female", branch: "cse" },
      // Add more if needed
    ];
  
    const matched = collegeData.filter(college =>
      rank <= college.closingRank &&
      category === college.category &&
      gender === college.gender &&
      branch === college.branch
    );
  
    const topColleges = matched.slice(0, topN);
  
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = "";
  
    if (topColleges.length === 0) {
      resultDiv.innerHTML = "<p>No colleges found for the given input.</p>";
    } else {
      const ul = document.createElement("ul");
      topColleges.forEach(college => {
        const li = document.createElement("li");
        li.textContent = college.name;
        ul.appendChild(li);
      });
      resultDiv.appendChild(ul);
    }
  }
  