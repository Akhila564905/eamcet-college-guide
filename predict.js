function predictColleges() {
    const rank = parseInt(document.getElementById("rank").value);
    const category = document.getElementById("category").value.toLowerCase();
    const gender = document.getElementById("gender").value.toLowerCase();
    const branch = document.getElementById("branch").value.toLowerCase();
    const top = parseInt(document.getElementById("top").value);
    const resultDiv = document.getElementById("results");

    const allColleges = [
        "JNTUH UNIVERSITY COLLEGE OF ENGINEERING HYDERABAD",
        "JNTUH UNIVERSITY COLLEGE OF ENGINEERING - 5 YEAR INTEGRATED MTECH SELF FINANCE",
        "CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY",
        "VNR VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "O U COLLEGE OF ENGINEERING HYDERABAD",
        "O U COLLEGE OF ENGINEERING HYDERABAD - SELF FINANCE",
        "CVR COLLEGE OF ENGINEERING",
        "SR UNIVERSITY (formerly SR ENGINEERING COLLEGE)",
        "VASAVI COLLEGE OF ENGINEERING",
        "GOKARAJU RANGARAJU INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "O U COLLEGE OF TECHNOLOGY HYDERABAD - SELF FINANCE",
        "O U COLLEGE OF TECHNOLOGY HYDERABAD",
        "VARDHAMAN COLLEGE OF ENGINEERING",
        "MAHATMA GANDHI INSTITUTE OF TECHNOLOGY",
        "SREENIDHI INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "B V RAJU INSTITUTE OF TECHNOLOGY",
        "ANURAG UNIVERSITY (formerly ANURAG GROUP OF INSTITUTIONS)",
        "KAKATIYA INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "MVSR ENGINEERING COLLEGE",
        "INSTITUTE OF AERONAUTICAL ENGINEERING",
        "BVRIT COLLEGE OF ENGINEERING FOR WOMEN",
        "G NARAYNAMMA INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "KESHAV MEMORIAL INSTITUTE OF TECHNOLOGY",
        "GEETANJALI COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "MALLA REDDY ENGINEERING COLLEGE",
        "MUFFAKHAM JAH COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "GURU NANAK INSTITUTE OF TECHNOLOGY",
        "VAAGDEVI COLLEGE OF ENGINEERING",
        "VIDYAJYOTHI INSTITUTE OF TECHNOLOGY",
        "NALLA MALLA REDDY ENGINEERING COLLEGE",
        "MLR INSTITUTE OF TECHNOLOGY",
        "KU COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "CMR ENGINEERING COLLEGE",
        "CMR COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ST MARTINS ENGINEERING COLLEGE",
        "MALLA REDDY COLLEGE OF ENGINEERING TECHNOLOGY",
        "CMR INSTITUTE OF TECHNOLOGY",
        "A C E ENGINEERING COLLEGE",
        "MARRI LAXMAN REDDY INSTITUTE OF TECHNOLOGY AND MANAGEMENT",
        "KGREDDY COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "GURU NANAK INSTITUTIONS TECHNICAL CAMPUS",
        "CMR TECHNICAL CAMPUS",
        "MALLA REDDY ENGINEERING COLLEGE FOR WOMEN",
        "KU COLLEGE OF ENGINEERING AND TECHNOLOGY - SELF FINANCE",
        "SRI INDU COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "HYDERABAD INSTITUTE OF TECHNOLOGY AND MANAGEMENT",
        "VIGNAN INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "JNTUH UNIVERSITY COLLEGE OF ENGINEERING JAGTIAL",
        "KOMMURI PRATAP REDDY INSTITUTE OF TECHNOLOGY",
        "STANLEY COLLEGE OF ENGINEERING AND TECHNOLOGY FOR WOMEN",
        "MATRUSRI ENGINEERING COLLEGE",
        "KAMALA INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "NALLA NARASIMHA REDDY EDUCATIONAL SOCIETY GROUP OF INSTITUTIONS",
        "BHOJREDDY ENGINEERING COLLEGE FOR WOMEN",
        "TEEGALA KRISHNA REDDY ENGINEERING COLLEGE",
        "T K R COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ST PETERS ENGINEERING COLLEGE",
        "UNIVERSITY COLLEGE OF ENGINEERING AND TECHNOLOGY FOR WOMEN KU CAMPUS",
        "SREYAS INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "SRI INDU INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "J B INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "JNTUH UNIVERSITY COLLEGE OF ENGINEERING MANTHANI",
        "VIGNAN BHARATI INSTITUTE OF TECHNOLOGY",
        "MALLA REDDY INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "NARSIMHA REDDY ENGINEERING COLLEGE",
        "SRIDEVI WOMENS ENGINEERING COLLEGE",
        "BALAJI INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "MALLA REDDY INSTITUTE OF TECHNOLOGY",
        "SIDDHARTHA INSTITUTE OF TECHNOLOGY AND SCIENCES",
        "MALLAREDDY INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "AVN INSTITUTE OF ENGINEERING TECHNOLOGY",
        "METHODIST COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "BHARAT INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "JNTUH UNIVERSITY COLLEGE OF ENGINEERING SULTANPUR",
        "SRI DATTA COLL OF ENGINEERING AND SCIENCE",
        "MALLA REDDY COLLEGE OF ENGINEERING",
        "JOGINPALLY B R ENGINEERING COLLEGE",
        "SAMSKRUTHI COLLEGE OF ENGINEERINGAND TECHNOLOGY",
        "SUMATHI REDDY INSTITUTE OF TECHNOLOGY FOR WOMEN",
        "AVANTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "MGU COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "HOLY MARY INSTITUTE OF TECHNOLOGY SCIENCE",
        "SPHOORTHY ENGINEERING COLLEGE",
        "MALLA REDDY COLLEGE OF ENGINEERING FOR WOMEN",
        "NEIL GOGTE INSTITUTE OF TECHNOLOGY",
        "SWAMI VIVEKANANDA INSTITUTE OF TECHNOLOGY",
        "ANURAG ENGINEERING COLLGE",
        "K U COLLEGE OF ENGINEERING KOTHAGUDEM",
        "JAYAMUKHI INSTITUTE OF TECHNOLOGY AND SCIENCES",
        "VAAGDEVI ENGINEERING COLLEGE",
        "INDUR INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "AURORAS TECHNOLOGICAL AND RESEARCH INSTITUTE",
        "LORDS INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "MALLA REDDY ENGINEERING COLLEGE AND MANAGEMENT SCIENCES",
        "PALLAVI ENGINEERING COLLEGE",
        "KU COLLEGE OF ENGINEERING KOTHAGUDEM",
        "SREE CHAITANYA COLLEGE OF ENGINEERING",
        "MNR COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "VIGNANS INSTITUTE OF MANAGEMENT AND TECHNOLOGY FOR WOMEN",
        "JYOTHISHMATHI INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "CHRISTU JYOTHI INSTITUTE OF TECHNOLOGY AND SCI",
        "TALLA PADMAVATHI COLL OF ENGINEERING",
        "AAR MAHAVEER ENGINEERING COLLEGE",
        "JNTUH UNIVERSITY COLLEGE OF ENGINEERING RAJANNA SIRICILLA",
        "JNTUH UNIVERSITY COLLEGE OF ENGINEERING WANAPARTHY",
        "SWARNA BHARATHI INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "GATE INSTITUTE OF TECHNOLOGY AND SCIENCES",
        "AURORAS TECHNOLOGICAL, RESEARCH INSTITUTE",
        "MAHAVEER INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "SIDDHARTHA INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "BHASKAR ENGINEERING COLLEGE",
        "KAKATIYA INSTITUTE OF TECHNOLOGY SCIENCE FOR WOMEN",
        "MEGHA INSTITUTE OF ENGINEERING AND TECHNOLOGY FOR WOMEN",
        "DECCAN COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "VAAGESHWARI COLLEGE OF ENGINEERING",
        "ANNAMACHARYA INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "JAYA PRAKASH NARAYAN COLLEGE OF ENGINEERING",
        "VIGNANA BHARATHI ENGINEERING COLLEGE",
        "BOMMA INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "KODADA INSTITUTE OF TECHNOLOGY AND SCIENCE FOR WOMEN",
        "KHAMMAM INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "KASIREDDY NARAYANAREDDY COLL ENGINEERING & RESEARCH",
        "MINA INSTITUTE OF ENGINEERING AND TECHNOLOGY FOR WOMEN",
        "SREE DATTHA GROUP OF INSTITUTIONS",
        "MOTHER TERESA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "SVS GROUP OF INSTITUTIONS - SVS INSTITUTE OF TECHNOLOGY",
        "KLR COLLEGE OF ENGINEERING AND TECHNOLOGY PALONCHA",
        "NAWAB SHAH ALAM KHAN COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "PRIYADARSHINI INSTITUTE OF SCIENCE & TECHNOLOGY FOR WOMEN",
        "GOKARAJU LAILAVATHI WOMENS ENGINEERING COLLEGE",
        "VIJAYA ENGINEERING COLLEGE",
        "PRINCETON INSTITUTE OF ENGINEERING TECHNOLOGY FOR WOMEN",
        "KESHAV MEMORIAL ENGINEERING COLLEGE",
        "VIVEKANANDA INSTITUTE OF TECHNOLOGY AND SCIENCE BOMMAKAL",
        "D R K COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "D R K INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "VISWESWARAYA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ANU BOSE INSTITUTE OF TECHNOLOGY",
        "SREE CHAITANYA INSTITUTE OF TECHNOLOGY SCIENCES",
        "AVANTHIS SCIENTIFIC TECHNOLOGY AND RESEARCH ACADEMY",
        "SRI VISHWESWARAYA INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "ELLENKI COLLGE OF ENGINEERING AND TECHNOLOGY",
        "SAI SPURTI INSTITUTE OF TECHNOLOGY",
        "GLOBAL INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "BRILLIANT GRAMMER SCHOOL EDUCATIONAL SOCIETY GROUP OF INSTITUTIONS",
        "BRILLIANT INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "RISHI MS INSTITUTE OF ENGINEERINGAND TECHNOLOGY FOR WOMEN",
        "VIJAYA RURAL ENGINEERING COLLEGE",
        "SCIENT INSTITUTE OF TECHNOLOGY",
        "KSHATRIYA COLLEGE OF ENGINEERING",
        "ABDULKALAM INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "ISL ENGINEERING COLLEGE",
        "SRI VENKATESWARA ENGINEERING COLLEGE",
        "MADHIRA INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "SRI CHAITANYA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "WARANGAL INSTITUTE OF TECHNOLOGY SCIENCE",
        "SHADHAN COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SANA ENGINEERING COLLEGE",
        "GANAPATHI ENGINEERING COLLEGE",
        "ST MARYS ENGINEERING COLLEGE",
        "MOTHER TERESA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "DR VRK WOMENS COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "TRINITY COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ST MARYS GROUP OF INSTITUTIONS",
        "SHADHAN WOMENS COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "TRINITY COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "AIZZA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "VATHSALYA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "NIGAMA ENGINEERING COLLEGE",
        "ST MARYS INTEGRATED CAMPUS"
    ];

    let filteredColleges = [...allColleges];

    const processCategory = (cat) => {
        if (["cse", "it", "aiml", "ds"].includes(branch)) {
            if (rank >= 1 && rank <= 1000) {
                // show all
            } else if (rank <= 5000) {
                filteredColleges = filteredColleges.slice(5);
            } else if (rank <= 10000) {
                filteredColleges = filteredColleges.slice(10);
            } else if (rank <= 15000) {
                filteredColleges = filteredColleges.slice(18);
            } else if (rank <= 20000) {
                filteredColleges = filteredColleges.slice(25);
            } else if (rank <= 25000) {
                filteredColleges = filteredColleges.slice(35);
            } else if (rank <= 30000) {
                filteredColleges = filteredColleges.slice(45);
            } else if (rank <= 40000) {
                filteredColleges = filteredColleges.slice(60);
            } else if (rank <= 50000) {
                filteredColleges = filteredColleges.slice(80);
            } else if (rank <= 60000) {
                filteredColleges = filteredColleges.slice(95);
            } else if (rank <= 70000) {
                filteredColleges = filteredColleges.slice(110);
            } else if (rank <= 80000) {
                filteredColleges = filteredColleges.slice(125);
            } else if (rank <= 90000) {
                filteredColleges = filteredColleges.slice(140);
            } else if (rank <= 100000) {
                filteredColleges = filteredColleges.slice(155);
            } else {
                filteredColleges = filteredColleges.slice(165);
            }
        } else if (["eee", "civil", "mech"].includes(branch)) {
            if (rank >= 1 && rank <= 1000) {
                // show all
            } else if (rank <= 5000) {
                filteredColleges = filteredColleges.slice(2);
            } else if (rank <= 10000) {
                filteredColleges = filteredColleges.slice(5);
            } else if (rank <= 15000) {
                filteredColleges = filteredColleges.slice(8);
            } else if (rank <= 20000) {
                filteredColleges = filteredColleges.slice(12);
            } else if (rank <= 25000) {
                filteredColleges = filteredColleges.slice(16);
            } else if (rank <= 30000) {
                filteredColleges = filteredColleges.slice(20);
            } else if (rank <= 40000) {
                filteredColleges = filteredColleges.slice(30);
            } else if (rank <= 50000) {
                filteredColleges = filteredColleges.slice(40);
            } else if (rank <= 60000) {
                filteredColleges = filteredColleges.slice(50);
            } else if (rank <= 70000) {
                filteredColleges = filteredColleges.slice(60);
            } else if (rank <= 80000) {
                filteredColleges = filteredColleges.slice(70);
            } else if (rank <= 90000) {
                filteredColleges = filteredColleges.slice(80);
            } else if (rank <= 100000) {
                filteredColleges = filteredColleges.slice(90);
            } else {
                filteredColleges = filteredColleges.slice(100);
            }
        }
        // You can add more branch-specific logic here if needed for other categories
    };

    switch (category) {
        case "oc":
        case "bc-a":
        case "bc-b":
        case "bc-c":
        case "bc-d":
        case "bc-e":
        case "sc":
        case "st":
            processCategory(category);
            break;
        default:
            resultDiv.innerHTML = "<p>Category not recognized.</p>";
            return;
    }

    const displayed = filteredColleges.slice(0, top || 10);
    resultDiv.innerHTML = "<h3>Predicted Colleges:</h3><ul>" +
        displayed.map(clg => "<li>" + clg + "</li>").join("") +
        "</ul>";
}
