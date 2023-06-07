var student = [
    {
        name: "Haris",
        rollnumber:"SM-01",
        institute:"BIEK"
    },
    {
        name: "Hasan",
        rollnumber:"SM-02",
        institute:"BIEK"
    },
    {
        name: "Bilal",
        rollnumber:"SM-03",
        institute:"BIEK"
    },
    {
        name: "Adnan",
        rollnumber:"SM-04",
        institute:"BIEK"
    },
    {
        name: "Shehroz",
        rollnumber:"SM-05",
        institute:"BIEK"
    },
    {
        name: "Arsalan",
        rollnumber:"SM-06",
        institute:"BIEK"
    },
    {
        name: "Shahmir",
        rollnumber:"SM-07",
        institute:"BIEK"
    },
    {
        name: "Shahzaib",
        rollnumber:"SM-08",
        institute:"BIEK"
    },
    {
        name: "Wajahat",
        rollnumber:"SM-09",
        institute:"BIEK"
    },
    {
        name: "Khurram",
        rollnumber:"SM-10",
        institute:"BIEK"
    },
]


var tbody = document.getElementById("tbody");

for (var i = 0; i < student.length; i++) {
    tbody.innerHTML += `            <tr>
    <td>${student[i].name}</td>
    <td>${student[i].rollnumber}</td>
    <td>${student[i].institute}</td>
</tr>`;
}


var search = document.getElementById("srch");

function searchBtn() {
  for (let i = 0; i < student.length; i++) {
    if (student[i].rollnumber == search.value) {
      alert(
        `Name: ${student[i].name}\nRoll No: ${student[i].rollnumber}\nInstitute: ${student[i].institute}`
      );
    }
  }
  search.value = "";
}

