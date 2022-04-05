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

function fetchviadata(data) {
  for (let i = 0; i < data.length; i++) {
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

async function fetchLink(str) {
  const list = document.getElementById("div_id");
  list.innerHTML = "";
  let op = "";

  details.innerHTML = `<h1 class="text-center">${str}</h1>`;
  if (str === "All Contests") {
    op = "all";
  } else if (str === "Code Forces") {
    op = "codeforces";
  } else {
    op =
      str.split(" ")[0].toLowerCase() + "_" + str.split(" ")[1].toLowerCase();
  }
  const URL = `https://kontests.net/api/v1/${op}/`;
  const response = await fetch(URL);
  data = await response.json();
  if (data) {
    fetchviadata(data);
  }
}

home.addEventListener("click", () => {
  return fetchall();
});
hackerrank.addEventListener("click", () => {
  fetchLink("Hacker Rank");
});
codechef.addEventListener("click", () => {
  fetchLink("Code Chef");
});
codeforces.addEventListener("click", () => {
  fetchLink("Code Forces");
});
atcoder.addEventListener("click", () => {
  fetchLink("At Coder");
});

// search.addEventListener("input", (e) => {
//   const value = e.target.value;
//   searchData.forEach((contest) => {
//     const isShown =
//       contest.name.includes(value) || contest.site.includes(value);

//   });
// });

fetchall();

