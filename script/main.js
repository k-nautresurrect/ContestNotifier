const URL = "https://kontests.net/api/v1/all/";
let data = [];
let searchData = [];
const home = document.getElementById("home");
const hackerrank = document.getElementById("HackerRank");
const codechef = document.getElementById("CodeChef");
const codeforces = document.getElementById("CodeForces");
const atcoder = document.getElementById("AtCoder");
let details = document.getElementById("details");
const search = document.querySelector("[data-search]");

async function fetchall() {
  const response = await fetch(URL);
  data = await response.json();
//   console.log(data);
  searchData = await data.map((value) => {
    return { name: value.name, site: value.site };
  });
//   console.log(searchData);
  for (let i = 0; i < data.length; i++) {
    if ((data[i].in_24_hours = "YES")) {
      const name = data[i].name;
      const url = data[i].url;

      const upComing = document.createElement("tr");
      upComing.className = "upcoming";

      var a = document.createElement("a");
      var link = document.createTextNode("visit");
      a.appendChild(link);
      a.title = "visit";
      a.href = url;
      a.className = "links text-dark";
      a.innerHTML = name;

      upComing.innerHTML = `<td><a href="${url}" title="visit" class="links text-dark">${name}</a></td>`;

      const list1 = document.getElementById("div_id");
      list1.appendChild(upComing);
    }
  }
}



fetchall();

